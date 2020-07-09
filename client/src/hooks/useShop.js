import { useContext } from 'react';
import RootContext from '../context/rootContext';
import { checkout } from '../context/actions/shop';

const useShop = () => {
    const {
        state: { shop: shopState },
        dispatch,
    } = useContext(RootContext);


    const actions = {
        checkout: async () => {
            const { redirectUrl } = await checkout(selectors.cart());
            dispatch({
                type:'CHECKOUT'
            });
            window.open(redirectUrl);
        },
        addToCart: data => {
            const oldCart = JSON.parse(localStorage.getItem('cart')) || {};
            const cart = { ...oldCart, ...data };
            localStorage.setItem('cart', JSON.stringify({ ...cart }));
            dispatch({
                type: "ADD_TO_CART",
                payload: {
                    cart
                }
            });
        },
        removeFromCart: data => {
            const cart = JSON.parse(localStorage.getItem('cart')) || {};
            cart[data] && delete cart[data];
            localStorage.setItem('cart', JSON.stringify({ ...cart }));
            dispatch({
                type: "REMOVE_FROM_CART",
                payload: {
                    cart
                }
            });
        },
    };

    const selectors = {
        cart: () => JSON.parse(localStorage.getItem('cart')) || shopState.cart
    };

    return { selectors, actions };
}

export default useShop;