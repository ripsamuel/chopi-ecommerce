import "./styles.css";
import { Link } from "react-router-dom"
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { OrderCard } from "../../Components/OrderCard"
import { totalPrice } from "../../utils"

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);

  
  const handleDelete = (id) => {
    const filteredProducts = context.cartProduct.filter(product => product.id != id )
    context.setCartProduct(filteredProducts)
  }
  const handleCheckout = () => {
    const orderToAdd = {
      date: '01.02.23',
      products : context.cartProduct,
      totalProducts: context.cartProduct.length,
      totalPrice: totalPrice(context.cartProduct)
    }
    context.setOrder([...context.order, orderToAdd])
    context.setCartProduct([])
    context.setSearch(null)
    context.closeCheckoutSideMenu()
    

  }

    

    const sumOrRestItem =(id, action)=>{

    const newProducts = [...context.cartProduct]
    const itemIndex = newProducts.findIndex(product => product.id === id)

      if(action==='plus'){
        newProducts[itemIndex].units++
        context.setCartProduct(newProducts)

      }
      else if(action==='minus'){
        newProducts[itemIndex].units--
        context.setCartProduct(newProducts)

      }
      if(newProducts[itemIndex].units == 0){
        handleDelete(id)
      }
  };

  return (
    <aside
    className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu mr-10  flex-col fixed bg-white right-0 border border-black rounded-lg`}>
      <div className="flex justify-between items-center p-6">
        <h2 id="idh2" className="text-xl font-medium p-6">My Order</h2>

        {/* cancel */}
        <div className="mr-6 cursor-pointer"
        onClick={() => context.closeCheckoutSideMenu() }>
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
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

      </div>
      {/* wrapper cards / body cards */}
      <div className="px-6 overflow-y-scroll flex-1">
        {
        context.cartProduct.map(product => (
          <OrderCard
          key={product.id}
          id={product.id}
          title={product.title}
          imageUrl={product.images}
          price={product.price}

          units={product.units}
          sumOrRestItem={sumOrRestItem}
          handleDelete={handleDelete}
          />
        ))
        }
      </div>
      <div className="px-6 mb-6">
        <p className="flex justify-around items-center">
          <span className="font-bold">Total: </span>
          <span className="font-light">${totalPrice(context.cartProduct)} </span>
        </p>
        <Link to="/my-orders/last">
          <button 
          className="bg-black py-3 w-full text-white rounded-md mt-3"
          onClick={()=> handleCheckout()}> Checkout </button>
        </Link>
      </div>

    </aside>
  );
};
export default CheckoutSideMenu;
