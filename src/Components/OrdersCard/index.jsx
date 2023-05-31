import PropTypes from "prop-types";

 const OrdersCard = ({
  totalPrice, totalProducts
}) => {
  OrdersCard.propTypes = {
    totalPrice: PropTypes.number.isRequired,
    totalProducts: PropTypes.number.isRequired,
  };

  return (
    <div className="flex justify-between items-center border rounded-lg border-black w-80 p-5 mt-5 mb-4">
        <div className="flex justify-between w-full">
            <div className="flex flex-col ">
              <span className="font-ligth">01.02.23</span>
              <span className="font-ligth">{totalProducts} articles</span>
            </div>
        
            <div className="flex items-center gap-2">
              <span className="font-medium text-2xl">${totalPrice}</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
              </svg>
            </div>
        </div>
    </div>

  );
};
export default OrdersCard;