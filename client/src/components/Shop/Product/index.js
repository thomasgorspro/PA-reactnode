import React from 'react';

const Product = ({ item }) => {

    return (
        <div style={{margin: "50px"}}>
            <span> =================</span>
            <span> { item.name } </span>
            <span> { item.price }{ item.currency.logo } </span>
            <img 
                src={item.img}
                alt="Thumbnail"
                width="250"
                height="250"
            />
            <span> =================</span><br />
        </div>
    )
};

export default Product;