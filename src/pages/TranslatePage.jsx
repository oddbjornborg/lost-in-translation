import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Translation from "../components/Translation";
import TranslationInput from "../components/TranslationInput";
import { useSelector } from "react-redux";
import "../style/PageContainer.css"
import "../style/Translation.css"

function TranslatePage() {
    const user = useSelector(state => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        if(user.username === "") {
            navigate("/");
        }
    }, [ user.username, navigate ])

    return (
        <div className="page-container quarter">
            <div className="translate-div">
                <div className="translate-input-div">
                    <TranslationInput />
                </div>
                <div className="translate-output-div">
                    <Translation />
                </div>
            </div>
        </div>
    );
}

export default TranslatePage;