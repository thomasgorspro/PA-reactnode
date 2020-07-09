import React from 'react';
import useShop from '../../hooks/useShop';

const Cart = () => {
    const { actions, selectors } = useShop();

    const removeFromCart = (event, id) => {
       event.preventDefault(); 
       actions.removeFromCart(id);
    };

    const renderCart = cart => (
        Object.keys(cart).map(key => {
            const { id, img, name, quantity, price, currency } = cart[key];
            return(
                <tr>
                    <td>
                        <img 
                            src={img} 
                            alt="Thumbnail"
                            width="250"
                            height="250"
                         />
                    </td>
                    <td>
                        <p> {name} </p>
                    </td>
                    <td>
                        <p>{quantity}</p>
                    </td>
                    <td>
                        <p> {price} { currency.logo } </p>
                    </td>
                    <td>
                        <p> {price * quantity} { currency.logo } </p>
                    </td> 
                    <td>
                        <button onClick={(event) => removeFromCart(event, id)}> Remove From Cart </button>
                    </td> 
                </tr>
            );
        })
    );

    const onClick = async () => {
        await actions.checkout();
    };

    return (
        <>
            <div>
                <h1> CART </h1>
            </div>
            <div>
                <table className="w-full text-sm lg:text-base">
                <thead>
                    <tr>
                        <th className="hidden md:table-cell"></th>
                        <th className="text-left">Product</th>
                        <th className="lg:text-right text-left pl-5 lg:pl-0">
                            <span className="lg:hidden" title="Quantity">Qtd</span>
                            <span className="hidden lg:inline">Quantity</span>
                        </th>
                        <th className="hidden text-right md:table-cell">Unit price</th>
                        <th className="text-right">Total price</th>
                    </tr>
                </thead>
                <tbody>
                    { renderCart(selectors.cart()) }
                </tbody>
                </table>

                <button
                    id="checkout"
                    class="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none"
                    onClick={onClick}
                >
                <svg
                  aria-hidden="true"
                  data-prefix="far"
                  data-icon="credit-card"
                  class="w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  height="50"
                  width="50"
                >
                  <path
                    fill="currentColor"
                    d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"
                  />
                </svg>
                <span class="ml-2 mt-5px">Proceed to checkout</span>
              </button>
            </div>
        </>
    );
};

export default Cart;