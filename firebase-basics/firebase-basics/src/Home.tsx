import React, { useEffect, useState } from "react";
import firebase, {isUserLoggedIn} from "./firebase";
import { Link } from "react-router-dom";

export const Home = () => {
    const [userLogged, setUserLoged] = useState(false);
    const userLoggedIn : boolean = isUserLoggedIn();
    console.log('Rederizado de HOme');

    useEffect(() => {

        firebase.auth().onAuthStateChanged((user) => {
        
            //si el usuario esta logado
            if (user) {
                setUserLoged(true)
            } else {
                setUserLoged(false)
            }

          });

    }, []);

    
    

    const logOut = () =>{
        firebase.auth().signOut();
    }

    return(<div>
        {userLogged ?
            <button onClick={logOut}><Link to="/">Sign Out</Link></button>
            :
            <button><Link to="/signUp">Sign In</Link></button>
        }
        
    </div>) 
}