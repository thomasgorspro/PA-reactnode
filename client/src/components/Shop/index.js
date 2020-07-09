import React from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';
import { useForm } from 'react-hook-form';
import useShop from '../../hooks/useShop';

const mockedProducts = [
    {
        id: 1,
        name: "Earphone",
        img: "https://limg.app/i/Calm-Cormorant-Catholic-Pinball-Blaster-yM4oub.jpeg",
        price: 10,
        currency: {
            name: 'EUR',
            logo: "€"
        }
    },
    {
        id: 2,
        name: "Tesla",
        img: "https://limg.app/i/Cute-Constrictor-Super-Sexy-Military-Enforcer-W7mvBp.png",
        price: 100000,
        currency: {
            name: 'USD',
            logo: "$"
        }
    },
    {
        id: 3,
        name: "Bic",
        price: 1.35,
        img: "https://limg.app/i/Successful-Spider-Biblical-Mutant---Total-War-lKoE7D.jpeg",
        currency: {
            name: 'EUR',
            logo: "€"
        }
    }
];

const Shop = () => {

    const { handleSubmit, register } = useForm();
    const { actions, selectors } = useShop();

    const onSubmit = (quantity, item) => {
        actions.addToCart({ [item.id]: { ...item, quantity: parseInt(quantity[item.name]) } });
    };

    const removeFromCart = (event, itemId) => {
        event.preventDefault();
        actions.removeFromCart(itemId);
    };

    const renderProducts = products => (
        Object.keys(products).map(key => {
            const { id, name } = products[key];
            return (
                <>
                    <form onSubmit={handleSubmit((quantity) => onSubmit(quantity, products[key])) }>
                        <Product item={products[key]}/>
                        <label htmlFor={name}></label>
                        <select 
                            name={ name } 
                            ref={register}
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        <input type="submit" />
                    </form>
                    <button onClick={(event) => removeFromCart(event, id)}> Remove From Cart </button>
                </>
            );
        })

    );

    return (
        <>
           { console.log(selectors.cart()) }
            <div>
                <h1> Products </h1>
            </div>
            <Link to="/cart">
                <h1> Cart </h1>
            </Link>
                { renderProducts(mockedProducts) }
        </>
    );
};

export default Shop;