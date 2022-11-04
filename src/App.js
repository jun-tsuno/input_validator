import useInput from "./hooks/useInput";
import './App.css';
import React, { useState } from "react";
import Description from "./components/Description";

const App = () => {
    const [submitted, setSubmitted] = useState(false);
    const regex = /^[a-zA-Z0-9.?/-]{8,24}$/;

    const {
        value: userName,
        valid: invalidNameInput,
        inputClass: nameInputClass,
        isTouched: nameTouched,
        empty: nameEmpty,
        emptyClass: nameEmptyClass,
        setEmpty: setNameEmpty,
        valueChangeHandler: nameValueChange,
        onBlur: nameOnBlur,
        reset: resetName,
    } = useInput(value => value.trim() !== '');

    const {
        value: userPassword,
        valid: invalidPassInput,
        inputClass: passInputClass,
        isTouched: passTouched,
        empty: passEmpty,
        emptyClass: passEmptyClass,
        setEmpty: setPassEmpty,
        valueChangeHandler: passValueChange,
        onBlur: passOnBlur,
        reset: resetPass,
    } = useInput(value => regex.test(value));


    const onSubmit = (event) => {
        event.preventDefault();
        if(invalidNameInput || invalidPassInput || !nameTouched || !passTouched) {
        if(!nameTouched){
            setNameEmpty(true);
        }
        if(!passTouched){
            setPassEmpty(true);
        }
        return;
        }

        console.log(userName, userPassword);
        setSubmitted(true);
        resetName();
        resetPass();
    }

    return(
        <React.Fragment>
            <Description />
            <div className="container">
                <form className="ui form" onSubmit={onSubmit}>
                    <div className="field">
                        <label>User Name</label>
                        <input
                            className={`${nameEmptyClass} ${nameInputClass}`}
                            type="text"
                            name="first-name"
                            placeholder="User Name"
                            onBlur={nameOnBlur}
                            onChange={nameValueChange}
                            value={userName}
                        />
                        {invalidNameInput && <p className="alert">Name must not be empty</p> }
                        { nameEmpty && <p className="alert">Name must not be empty</p> }
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input
                            className={`${passEmptyClass} ${passInputClass}`}
                            type="text"
                            name="last-name"
                            placeholder="Password should be more than 8 characters"
                            onBlur={passOnBlur}
                            onChange={passValueChange}
                            value={userPassword}
                        />
                        {invalidPassInput && <p className="alert">Invalid password</p> }
                        { passEmpty && <p className="alert">Invalid password</p> }
                    </div>
                    <div className="field">
                        <div className="ui checkbox">
                        <input type="checkbox" tabIndex="0" />
                        <label>I agree to the Terms and Conditions</label>
                        </div>
                    </div>
                    <button className="ui button" type="submit">Submit</button>
                    {submitted && <h2 className="submitted">Submitted successfully</h2>}
                </form>
            </div>
        </React.Fragment>
    );
};

export default App;