import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addTranslationHistory } from "../userSlice";
import "../style/Login.css"
import "../style/Translation.css"

const translationConfig = {
  required: false,
  maxLength: 40,
};

function TranslationInput(props) {
  const { setInput } = props;
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const {
    register,
    handleSubmit,
    formState
  } = useForm();

  const onSubmit = (data) => {
    const input = data.translationInput.trim();
    if(input !== "") {
      setInput(input);
      dispatch(addTranslationHistory(input));
    }
  };

  useEffect(() => {
    sessionStorage.setItem(user.username + "-translations", user.translations);
  }, [ user.translations, user.username ]);

  const errorMessage = (() => {
    if (!formState.translationInput) {
      return null;
    }

    if (formState.translationInput.type === "maxLength") {
      return <span>You've exceeded the max translation length!</span>;
    }
  })();

  return (
    <form className="translate-form" onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="login-field">

        <label htmlFor="translationInput"></label>

        <input
          type="text"
          placeholder="Translate"
          className="login-input"
          {...register("translationInput", translationConfig)}
        />

        {errorMessage}

      </fieldset>

      <button className="login-button" type="submit">GO!</button>
    </form>
  );
}

export default TranslationInput;