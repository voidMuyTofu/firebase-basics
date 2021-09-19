import { useEffect, useState } from "react";
import { Auth } from "./componentes/firebase";
import { Link } from "react-router-dom";

export const Home = () => {

    const [userState, setUserState] = useState({ isLogged: false, userId: "", email: "", photoURL: "" });

    console.log('Rederizado de HOme');

    useEffect(() => {
        Auth().onAuthStateChanged((user: any) => {
            //si el usuario esta logado
            if (user) {
                setUserState({ isLogged: true, userId: user.uid, email: user.email, photoURL: user.photoURL })
            } else {
                setUserState({ isLogged: false, userId: "", email: "", photoURL: "" })
            }

        });
    }, []);

    const logOut = () => {
        Auth().signOut();
    }

    return (<div>
        <nav>
            {!!userState.isLogged ?
                <button onClick={logOut}><Link to="/">Cerrar sesion</Link></button>
                :
                <>
                    <button><Link to="/signup">Registra tu cuenta</Link></button>
                    <button><Link to="/login">Iniciar sesion</Link></button>
                </>
            }
        </nav>
        <h1>
            Bienvenido a la pagina!
        </h1>
        {!!userState.isLogged &&
            <>
                <h1>Has iniciado sesion como {userState.email}</h1>
                <img src={userState.photoURL} alt="User Image"></img>
            </>
        }
    </div>)
}