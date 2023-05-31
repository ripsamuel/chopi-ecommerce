import {useEffect } from "react"
import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {

  // Shopping Cart - Increment counter product
   const [count, setCount] = useState(0)

   // Product detail - Open/Close
   const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
   const openProductDetail = () => setIsProductDetailOpen(true)
   const closeProductDetail = () => setIsProductDetailOpen(false)


   // Checkout Side Menu - Open/Close
   const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
   const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
   const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

   // Product detail - Show Product
   const [productShow, setProductShow] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    images: [],
   })

   // Shoping Cart - Add Product to Cart
   const [cartProduct, setCartProduct] = useState([])


   // Shoping Cart - Order
   const [order, setOrder] = useState([])

   //Get products
   const [items, setItems] = useState(null);
   const [filteredItems, setFilteredItems] = useState(null);


    // Searched items/ Get products by title
  const [search, setSearch] = useState(null)
 // Searched items/ Get products
 const filteredItemsByTitle = (items, search) => {
  return items?.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
}

   //Get products by category
  const [searchByCategory, setSearchByCategory] = useState(null)
 // Searched items by category / Get products
 const filteredItemsByCategory = (items, searchByCategory) => {
  return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
}

const filterBy = (searchType, items, search) => {
  if (searchType === 'BY_TITLE'){
    return filteredItemsByTitle(items, search)
  }
  if (searchType === 'BY_CATEGORY'){
    return filteredItemsByCategory(items, searchByCategory)
  }
  if (searchType === 'BY_TITLE_AND_CATEGORY'){
    return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
  }
  if (!searchType){
    return items
  }
}
  useEffect(() => {
    if(search && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, search, searchByCategory))
    if(search && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, search, searchByCategory))
    if(!search && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY',items, searchByCategory))
    if(!search && !searchByCategory) setFilteredItems(filterBy(null ,items, searchByCategory))
 }, [items, search, searchByCategory])

 console.log('searchBycATEGORY', searchByCategory)


 console.log('FILTEREDITEMS', filteredItems)


   //Fetch API
   useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
    .then((response) => response.json())
    .then((data) => {
       setItems(data)
    });
 }, [])

 // TEST SUM TOTAL PRICE
 const [totalPriceItem, setTotalPriceItem] = useState(0);



  return (
    <ShoppingCartContext.Provider value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productShow,
        setProductShow,
        cartProduct,
        setCartProduct,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        order,
        setOrder,
        items,
        setItems,
        search,
        setSearch,
        filteredItems,
        setFilteredItems,
        totalPriceItem, setTotalPriceItem,
        searchByCategory, setSearchByCategory

    }}>
        {children}
    </ShoppingCartContext.Provider>
  );
};


ShoppingCartProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validación de la propiedad 'children'
};
