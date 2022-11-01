import { useState } from 'react';

const useInput = (isValid) => {
    const [input, setInput] = useState('');
    const [touched, setTouched] = useState(false);

    const invalidInput = !isValid && touched;
    const inputClass = invalidInput ? 'invalid' : '';

    const valueChangeHandler = (event) => {
        setInput(event.target.value);
    }

    const onBlur = () => {
        setTouched(true);
    }

    const reset = () => {
        setInput('');
        setTouched(false);
    }

    return {value: input, valid: invalidInput, inputClass, valueChangeHandler, onBlur, reset};
};

export default useInput;