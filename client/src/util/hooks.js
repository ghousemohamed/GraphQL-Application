import { useState } from 'react';
import { ValuesOfCorrectType } from 'graphql/validation/rules/ValuesOfCorrectType';

export const useForm = (callback, initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);
    const onChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value})
    };

    const onSubmit = event => {
        event.preventDefault();
        callback();
    }

    return {
        onChange,
        onSubmit,
        values
    }
    
}