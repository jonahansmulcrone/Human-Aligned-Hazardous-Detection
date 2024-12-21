import { RegistrationFormData } from "../utils/types";
import axios from "axios";

class UserServiceAPI {
    private static instance: UserServiceAPI;

    private constructor() { }

    public static getInstance(): UserServiceAPI {

        if (!UserServiceAPI.instance) {
            UserServiceAPI.instance = new UserServiceAPI();
        }

        return UserServiceAPI.instance;
    }

    public static registerUser(registrationFormData: RegistrationFormData) {
        axios.post('http://localhost:3001/auth/register', (registrationFormData))
            .then(() => {
                console.log('User has successfully registered!')
            })
            .catch((err) => {
                console.log(`An error has occured while registering the user, ${err}`)
            })
    }
}

export default UserServiceAPI;