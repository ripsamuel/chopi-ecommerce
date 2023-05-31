import Layout from "../../Components/Layout"
import { Link } from "react-router-dom"

import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { OrderCard } from "../../Components/OrderCard"


function MyOrder() {
  const context = useContext(ShoppingCartContext)
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  if (index === 'last') index = context.order?.length - 1

    return (
     <Layout className='bg-red-200'>
       <div className="flex justify-center w-60 items-center relative mb-8">
            {/* arrow left */}
            <Link to="/my-orders" className="absolute left-0">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
               </svg>
            </Link>
            <h1>MyOrder</h1>
      </div>

      <div className="flex flex-col w-80">
        {
        context.order?.[index]?.products.map(product => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}

            units={product.units}

          />
        ))
        }
      </div>
     </Layout>
    )
  }

  export default MyOrder