import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { logout, clearTranslationHistory } from "../userSlice"
import "../style/PageContainer.css"
import "../style/Profile.css"

function ProfilePage(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user)

    useEffect(() => {
        if(user.username === "") {
            navigate("/");
        }
    }, [ user.username, navigate ])

    function logoutOnClick() {
        sessionStorage.removeItem("username");
        dispatch(logout());
    }

    function clearOnClick() {
        sessionStorage.removeItem(user.username + "-translations");
        dispatch(clearTranslationHistory());
    }
    
    return (
        <div className="page-container half">
            
            <div className="profile-split-div">
            
                <div className="profile-column col-start">
                    
                    <div className="profile-user-div">

                        <img className="login-logo" src="Logo.png" alt="Logo"></img>
                        <div>
                            <h1 className="profile-name">{user.username}</h1>
                            <button className="logout-button" onClick={ logoutOnClick }>LOGOUT</button>
                        </div>

                    </div>

                </div>

                <div className="profile-column col-end">

                    <div className="profile-history-div">

                        <div className="history-box">

                            <h3 className="translation-text">TRANSLATIONS</h3>
                            
                            <div className="history-list">
                                <ul>
                                    {
                                        user.translations.map((translation, index) => {
                                            return <li key={index}>{translation}</li>
                                        })
                                    }
                                </ul>
                            </div>

                            <button className="history-button" type="button" onClick={ clearOnClick }>CLEAR</button>

                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default ProfilePage;