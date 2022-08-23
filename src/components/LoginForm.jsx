import { useForm } from "react-hook-form";
import { login, importTranslationHistory } from "../userSlice"
import { useDispatch } from "react-redux"
import "../style/Login.css"

const usernameConfig = {
    required: true,
    minLength: 3
};

function LoginForm(props) {
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        if(data.username !== "") {
            console.log("Welcome, " + data.username + "!");
        }
        else {
            console.log("Logged out of " + data.username + "'s account.");
        }

        sessionStorage.setItem("username", data.username);
        dispatch(login(data.username));
        
        dispatch(importTranslationHistory(data.username));
    }

    const errorMessage = (() => {
        if(!errors.username) {
            return null;
        }

        if(errors.username.type === "required"){
            return <span>Username is required!</span>;
        }

        if(errors.username.type === "minLength"){
            return <span>Username is too short!</span>;
        }
    })()

    return (
        <>
            <form className="login-form" onSubmit={ handleSubmit(onSubmit) }>
                <fieldset className="login-field">
                    <label htmlFor="username"></label>
                    <input 
                        type="text" 
                        className="login-input"
                        placeholder="What's your name?"  
                        {...register("username", usernameConfig)} />
                    { errorMessage }
                </fieldset>

                <button className="login-button" type="submit">GO!</button>
            </form>
        </>
    );
}

export default LoginForm;