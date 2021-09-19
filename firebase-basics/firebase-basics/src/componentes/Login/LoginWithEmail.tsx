import firebase from '../firebase'
import { useHistory } from 'react-router';
import { useInput } from '../Hooks/useInput';

export const LoginWithEmail = () => {
    const email = useInput("");
    const password = useInput("");
    let history = useHistory();

    const signUp = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const user = await firebase.auth().createUserWithEmailAndPassword(email.value, password.value);
            console.log('User: ', user);
            history.push("/");
        }catch (err: any) {
            if (!!err.code) {
                if (err.code === 'auth/email-already-in-use') {
                    console.log('El usuario ya existe');
                }
            }
        }
    }
    return (
        <>
            <h2>Inicia sesion</h2>
            <form onSubmit={signUp}>
                <input className="spacing" placeholder="Email" {...email} />
                <input className="spacing" placeholder="Password" type="password" {...password} />
                <button type="submit">Sign up</button>
            </form>
        </>
    );
}