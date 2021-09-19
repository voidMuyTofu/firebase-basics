import { useHistory } from "react-router";
import { Auth } from "../firebase";
import { useInput } from "../Hooks/useInput"

export const LogInWithEmail = () => {

    const email = useInput("");
    const password = useInput("");
    const history = useHistory();

    const onSubmit = () => {
        Auth().signInWithEmailAndPassword(email.value, password.value).then((userCredential) => {
            history.push("/");
        });
    }

    return (
        <>
            <h1>Inicia sesion con tu email</h1>
            <form onSubmit={onSubmit}>
                <input className="spacing" placeholder="Email" {...email}></input>
                <input className="spacing" placeholder="Password" type="password" {...password}></input>
                <button type="submit">Iniciar sesion</button>
            </form>

        </>
    )
}