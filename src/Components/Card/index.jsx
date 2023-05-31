import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const Card = (data) => {
  const context = useContext(ShoppingCartContext);

  const showProduct = (productDetail) => {
    context.openProductDetail()
    context.setProductShow(productDetail)
  }
  const addProductsToCart = (event, productData) => {
    event.stopPropagation();
    context.setCount(context.count++)

// Agrego la propiedad units al producto
    const updatedProduct = { ...productData, units: 1 };
    const updatedCart = [...context.cartProduct, updatedProduct];
    context.setCartProduct(updatedCart)

    context.openCheckoutSideMenu()
    context.closeProductDetail()
    console.log('CART INFO PRODUCT : ', context.cartProduct)

  }
  const renderIcon = (id) => {
  const isInCart = context.cartProduct.filter(product => product.id === id).length > 0

  if(isInCart) {
    return (
      <div
      className= "absolute top-0 right-0 flex justify-center items-center bg-green-500 rounded-full m-0.5 " 
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-white">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      </div>
    )
  }else {
    return (
    <div
    className= "absolute top-0 right-0 flex justify-center items-center bg-white rounded-full m-0.5 " 
    onClick={(event) => addProductsToCart(event, data.data)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>

    </div>
    )
}
  
  }

  return (
    <div
    className="bg-white cursor-pointer w-56 h-60 rounded-lg"
    onClick={() => showProduct(data.data)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {data.data.category.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={data.data.images[0]}
          alt={data.data.title}
        />
        {renderIcon(data.data.id)}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{data.data.title}</span>
        <span className="text-lg font-medium">${data.data.price}</span>
      </p>
    </div>
  );
};
export default Card;
