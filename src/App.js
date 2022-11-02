import useInput from "./hooks/useInput";
import './App.css';

const App = () => {
    const regex = /^[a-zA-Z0-9.?/-]{8,24}$/;

    const {
        value: userName,
        valid: invalidNameInput,
        inputClass: nameInputClass,
        valueChangeHandler: nameValueChange,
        onBlur: nameOnBlur,
        reset: resetName
    } = useInput(value => value.trim() !== '');

    const {
        value: userPassword,
        valid: invalidPassInput,
        inputClass: passInputClass,
        valueChangeHandler: passValueChange,
        onBlur: passOnBlur,
        reset: resetPass
    } = useInput(value => regex.test(value));


    const onSubmit = (event) => {
        event.preventDefault();
        if(invalidNameInput || invalidPassInput) {
            return;
        }
        console.log(userName, userPassword);
        resetName();
        resetPass();
    }

    // const invalidNameInput = !isValidName && nameTouched;
    // const invalidPassword = !isValidPass && passwordTouched;

    // const onNameBlur = () => {
    //     setNameTouched(true);
    // }

    // const onPassBlur = () => {
    //     setPasswordTouched(true);
    // }

    // const onSubmit = (event) => {
    //     event.preventDefault();
    //     setNameTouched(true);
    //     setPasswordTouched(true);
    //     if(!isValidName || !isValidPass) {
    //         return;
    //     }
    //     console.log(userName, password);
    //     setUserName('');
    //     setPassword('');
    //     setNameTouched(false);
    //     setPasswordTouched(false);
    // }

    // const nameInputClass = invalidNameInput ? 'invalid' : '';
    // const passInputClass = invalidPassword ? 'invalid' : '';

    return(
        <div className="container">
            <form className="ui form" onSubmit={onSubmit}>
                <div className="field">
                    <label>User Name</label>
                    <input
                        className={nameInputClass}
                        type="text"
                        name="first-name"
                        placeholder="User Name"
                        onBlur={nameOnBlur}
                        onChange={nameValueChange}
                        value={userName}
                    />
                    {invalidNameInput && <p className="alert">Name must not be empty</p> }
                </div>
                <div className="field">
                    <label>Password</label>
                    <input
                        className={passInputClass}
                        type="text"
                        name="last-name"
                        placeholder="Password should be more than 8 characters"
                        onBlur={passOnBlur}
                        onChange={passValueChange}
                        value={userPassword}
                    />
                    {invalidPassInput && <p className="alert">Invalid password</p> }
                </div>
                <div className="field">
                    <div className="ui checkbox">
                    <input type="checkbox" tabIndex="0" />
                    <label>I agree to the Terms and Conditions</label>
                    </div>
                </div>
                <button className="ui button" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default App;