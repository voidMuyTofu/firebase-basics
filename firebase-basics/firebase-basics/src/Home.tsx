import React, { useEffect, useState } from "react";
import firebase from "./componentes/firebase";
import { Link } from "react-router-dom";

export const Home = () => {
    const [userLogged, setUserLoged] = useState(false);

    console.log('Rederizado de HOme');

    firebase.auth().onAuthStateChanged((user) => {
        debugger;
        //si el usuario esta logado
        if (user) {
            setUserLoged(true)
        } else {
            setUserLoged(false)
        }

    });


    const logOut = () => {
        firebase.auth().signOut();
    }

    return (<div>
        <nav>
            {userLogged ?
                <button onClick={logOut}><Link to="/">Cerrar sesion</Link></button>
                :
                <>
                    <button><Link to="/signUp">Registra tu cuenta</Link></button>
                    <button>Iniciar sesion</button>
                </>
            }
        </nav>
        <h1>
            Bienvenido a la pagina!
        </h1>
    </div>)
}