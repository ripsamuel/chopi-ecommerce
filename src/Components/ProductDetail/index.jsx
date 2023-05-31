import "./styles.css";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);
  return (
    <aside
    className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail mr-10  flex-col fixed bg-white right-0 border border-black rounded-lg`}>
      <div className="flex justify-between items-center p-6">
        <h2 className="text-xl font-medium p-6">Detail</h2>

        {/* cancel */}
        <div className="mr-6 cursor-pointer"
        onClick={() => context.closeProductDetail() }>
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
      <figure className="px-6">
        <img
        className="w-full h-full rounded-lg"
        src={context.productShow.images[0]}
        alt={context.productShow.title}/>
      </figure>
      <div className="flex flex-col p-6">
          <span className="font-medium text-2xl">{context.productShow.title}</span>
          <span className="font-medium text-md"><p className="font-bold">Descripcion :</p> {context.productShow.description}</span>
          <span className="font-bold text-md flex justify-center">${context.productShow.price}</span>
          <span className="font-medium text-md flex justify-center">{context.productShow.category.name}</span>

      </div>
    </aside>
  );
};
export default ProductDetail;
