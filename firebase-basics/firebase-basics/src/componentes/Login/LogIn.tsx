import { LoginWithSocials } from "../Signup/LoginWithSocials";
import { LogInWithEmail } from "./LoginWithEmail";

export const LogIn = () => {
    return(
        <div className="form-container">
            <LogInWithEmail/>
            <LoginWithSocials/>
        </div>
    );
}