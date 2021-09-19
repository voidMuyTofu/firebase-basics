import firebase from '../firebase'
import { useHistory } from 'react-router';

export const LoginWithSocials = () => {
    const history = useHistory();

    const singUpWithGoogle = async() => {

        try {
            const provider = new firebase.auth.GoogleAuthProvider();
            await firebase.auth().signInWithPopup(provider);
            history.push("/");
        } catch (err: any) {
            if (!!err.code) {
                if (err.code === 'auth/popup-closed-by-user') {
                    console.log('Pop Up cerrado');
                }
            }
        }
    }
    
    return (
        <>
            <h3>O inicie sesion con :</h3>
            <button onClick={singUpWithGoogle}>Google</button>
            <p></p>
        </>
    );
}