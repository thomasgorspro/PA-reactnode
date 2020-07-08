import React from 'react';
import { useForm } from 'react-hook-form';
import Product from './Product';

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
    const { handleSubmit, register, errors } = useForm();

    const onSubmit = () => {

    };

    return (
        <>
            <div>
                <h1> PRODUCTS </h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                { Object.keys(mockedProducts).map(mock => (
                    <>
                        <Product item={mockedProducts[mock]}/>
                        <label htmlFor={mockedProducts[mock].name}></label>
                        <select 
                            name={ mockedProducts[mock].name } 
                            ref={register}
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </>
                )) }
                <br />
                <button type="submit">
                    <svg
                        aria-hidden="true"
                        data-prefix="far"
                        data-icon="credit-card"
                        class="w-8"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        width="25"
                        height="25"
                    >
                        <path
                            fill="currentColor"
                            d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"
                        />
                    </svg>
                    <span>Proceed to checkout</span>
                </button>

            </form>
        </>
    );
};

export default Shop;