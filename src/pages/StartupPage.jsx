import LoginForm from "../components/LoginForm";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux"
import "../style/Login.css"
import "../style/PageContainer.css"

function StartupPage() {
    const navigate = useNavigate();
    const user = useSelector(state => state.user);

    useEffect(() => {
        if(user.username !== "") {
            navigate("/translate");
        }
    }, [user.username, navigate])

    return (
        <div className="page-container half">
            <div className="login-div">
                <img className="login-logo" src="Logo.png" alt="Logo"></img>
                <div>
                    <h1 className="login-text">Lost in Translation</h1>
                    <h3 className="login-text">Get Started</h3>
                </div>
            </div>

            <LoginForm />
        </div>
    );
}

export default StartupPage;