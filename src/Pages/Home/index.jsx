import Card from "../../Components/Card"
import { useContext } from "react";
import Layout from "../../Components/Layout"
import { ShoppingCartContext } from "../../Context";
import ProductDetail from "../../Components/ProductDetail";

function Home() {
  const context = useContext(ShoppingCartContext);
  const renderView = () => {
     if(context.filteredItems?.length > 0) {
      return(
          context.filteredItems?.map((item) => (
            <Card key={item.id} data={item}/>
        ))
      )
      } else {
        return(
          <h2> no hay coincidencias :c</h2>
        )
      }

  }
    return (
     <Layout>
      <div>
        <p className="mb-10 mt-3">Inico</p>
        <h1 className="mb-10 mt-3">Productos Exclusivos</h1>
      </div>
      <input
         type="text"
         placeholder="Busca tu producto"
         className="rounded-lg border border-black w-80 p-4 mb-10 focus:outline-none"
         onChange={(event) => context.setSearch(event.target.value)}
      />
        <div className="grid gap-10 grid-cols-2 w-full lg:max-w-screen-lg lg:w-full lg:gap-3 lg:grid-cols-3 lg:grid ">
        {
        renderView()
        }
        </div>
        <ProductDetail/>

     </Layout>
    )
  }

  export default Home
