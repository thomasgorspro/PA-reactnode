import React, { useState, useEffect } from 'react';

const Form = ({ validator, onSubmit, onError = {}, children }) => {

    const [ errors, setErrors ] = useState();

    const handleSubmit = data => {
        if(!validator(data)){
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            {children}
        </form>
    )
};
export default Form;