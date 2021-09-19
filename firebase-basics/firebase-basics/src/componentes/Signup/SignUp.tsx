import { LoginWithSocials } from './LoginWithSocials';
import { SignupWithEmail } from './SignupWithEmail';


export const SignUp = () => {
    return (
        <div className="form-container">
            <SignupWithEmail/>
            <LoginWithSocials/>
        </div>
    );
}