import { Link } from "react-router-dom";
import "../style//Header.css"

function Header(props) {

    const { user } = props;

    return (
        <div className="header">
                <Link to="translate">Home</Link>
                <h4>{ user }</h4>
                <Link to="profile">Profile</Link>
        </div>
    );
}

export default Header;