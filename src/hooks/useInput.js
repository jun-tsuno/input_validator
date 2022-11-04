import { useState } from 'react';

const useInput = (isValid) => {

    const [input, setInput] = useState('');
    const [touched, setTouched] = useState(false);
    const [empty, setEmpty] = useState(false);

    const invalidInput = !isValid(input) && touched;
    const inputClass = invalidInput ? 'invalid' : '';

    const valueChangeHandler = (event) => {
        setInput(event.target.value);
    }

    const onBlur = () => {
        setTouched(true);
        setEmpty(false);
    }

    const reset = () => {
        setInput('');
        setTouched(false);
    }

    const emptyClass = empty && !touched ? 'invalid' : '';

    return {
        value: input,
        valid: invalidInput,
        inputClass,
        isTouched: touched,
        empty,
        emptyClass,
        valueChangeHandler,
        setEmpty,
        onBlur,
        reset,
    };
};

export default useInput;