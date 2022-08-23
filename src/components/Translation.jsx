import { useEffect } from "react";
import { useSelector } from "react-redux";
import "../style/Translation.css"

function Translation() {
    const translation = useSelector(state => state.translation);

    return (
        <div className="sign-container">
            <div className="sign-row">
                {
                    translation.input.split("").map((char, index) => {

                        // If character is a letter
                        if(/[a-z]/i.test(char)) {
                            return <img src={ "signs/" + char + ".png" } alt={char} key={ index } className="sign" />;
                        }

                        // If character is whitespace
                        if(/\s/.test(char)) {
                            return <img src={ "signs/a.png" } alt="space" key={ index } className="sign blank"/>;
                        }

                        return false;
                    })
                }
            </div>
        </div>
    );
}

export default Translation;