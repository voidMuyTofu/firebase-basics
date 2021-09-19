import { LoginWithSocials } from './LoginWithSocials';
import { LoginWithEmail } from './LoginWithEmail';

export const LogIn = () => {

    return (
        <div className="form-container">
            <LoginWithEmail/>
            <LoginWithSocials/>
        </div>
    );
}