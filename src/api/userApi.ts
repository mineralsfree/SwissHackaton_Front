import {BASE_URL} from "./urls";

export const UserApi  = {
    getProfile: ()=>{
        return fetch(`${BASE_URL}profile/`).then(res=>res.json());
    }
}