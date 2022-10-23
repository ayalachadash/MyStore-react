import axios from "axios";
import { User } from "../classes/User";


export const getAllUser = () => {
    axios.get('http://localhost:3000/api/users')
        .then(res => {
            const data = res.data;
            console.log(data);
        })
}

export const signUp = (obj: User) => {    
    axios.post('http://localhost:3000/api/users/signUp', { params: obj })
        .then(res => {
            const data = res.data;
            console.log(data);
            sessionStorage.setItem("token", data);
            return data;
        })
}

export const signIn = (obj: User) => {
    axios.get('http://localhost:3000/api/users/signIn', { params: obj })
        .then(res => {
            const data = res.data;
            console.log(data);
            sessionStorage.setItem("token", data);
            return data;
        })
}
export const signInWithGoogle = () => {
    console.log("hello goole")

    axios.get('http://localhost:3000/auth/google')
        .then(res => {            
            const data = res.data;
            console.log(data);
            //sessionStorage.setItem("token", data);
            return data;
        })
}
