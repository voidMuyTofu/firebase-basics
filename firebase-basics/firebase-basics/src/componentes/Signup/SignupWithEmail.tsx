import { Auth, DB } from '../firebase'
import { useHistory } from 'react-router';
import { useInput } from '../Hooks/useInput';
import { doc, setDoc } from 'firebase/firestore'

export const SignupWithEmail = () => {

    const name = useInput("");
    const email = useInput("");
    const password = useInput("");
    let history = useHistory();

    const signUp = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const user = await Auth().createUserWithEmailAndPassword(email.value, password.value);
            await setDoc(doc(DB, 'users', user.user!.uid), {
                name: name.value,
                email: email.value
            })
            history.push("/");
        } catch (err: any) {
            if (!!err.code) {
                if (err.code === 'auth/email-already-in-use') {
                    console.log('El usuario ya existe');
                }
            }
        }
    }

    return (
        <>
            <h2>Registra tu cuenta</h2>
            <form onSubmit={signUp}>
                <input type="text" className="spacing" placeholder="Name" {...name} />
                <input className="spacing" placeholder="Email" {...email} />
                <input className="spacing" placeholder="Password" type="password" {...password} />
                <button type="submit">Crear cuenta</button>
            </form>
        </>
    );
}