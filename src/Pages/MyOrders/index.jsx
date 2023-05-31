import Layout from "../../Components/Layout"
import { Link } from "react-router-dom"
import  OrderCards from "../../Components/OrdersCard"
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

function MyOrders() {

   const context = useContext(ShoppingCartContext)

   return (
     <Layout className='bg-red-200'>
        <div className="flex justify-center w-80 items-center relative mb-4">

            <h1 className="font-medium text-xl">My Orders </h1>

         </div>
        {
        context.order.map((order, index) => (
            <Link key={index} to={`/my-orders/${index}`}>
              <OrderCards
               totalPrice={order.totalPrice}
               totalProducts={order.totalProducts}
              />
            </Link>
           ))

        }
     </Layout>
    )
  }

  export default MyOrders
