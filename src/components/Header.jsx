import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "../style//Header.css"

function Header() {
    const user = useSelector(state => state.user);
    const navigate = useNavigate();

    function logoOnClick() {
        if(user.username !== "") {
            navigate("translate");
        }
    }

    function profileOnClick() {
        if(user.username !== "") {
            navigate("profile");
        }
    }

    return (
        <div className="header">
            <div onClick={logoOnClick} className="title">
                <img className="header-image" src="Logo.png" alt="Logo"></img>
                <h3 className="title-text">Lost in Translation</h3>
            </div>
            <h2 onClick={profileOnClick} className="name">{ user.username }</h2>
        </div>
    );
}

export default Header;