import PropTypes from "prop-types";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

export const OrderCard = ({
  title,
  imageUrl,
  price,
  sumOrRestItem,
  id,
  handleDelete,
  units,
}) => {
  OrderCard.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.array.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    sumOrRestItem: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    units: PropTypes.number.isRequired,
  };

  const context = useContext(ShoppingCartContext);
  console.log('precio en el contexto ',context.setTotalPriceItem)

  context.setTotalPriceItem = units * price



  let renderDelete
  let renderSumOrRest

  if(handleDelete){
        {/* delete button */}
  renderDelete = <div onClick={() => handleDelete(id)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
      </svg>
   </div>
  renderSumOrRest = <div className="grid border bg-gray-100">
        {/* add button  */}
        <button  onClick={() => sumOrRestItem(id, "plus")}>+</button>
        <div className="bg-gre w-4 flex justify-center font-extrabold text-xl">
          {units}
        </div>
        {/* rest button  */}
        <button onClick={() => sumOrRestItem(id, "minus")}>-</button>
      </div>
  
  }
  return (
    <div className="flex justify-between items-center mb-5">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={imageUrl}
            alt={title}
          />
        </figure>
        <p className="text-sm font-light w-10">{title}</p>
      </div>

      <div className="flex items-center gap-2">
        <p className="text-lg font-medium ">${context.setTotalPriceItem}</p>

       { renderDelete }
       { renderSumOrRest }


      </div>

    </div>
  );
};
export default OrderCard;
