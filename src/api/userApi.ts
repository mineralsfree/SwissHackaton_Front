import {BASE_URL} from "./urls";

export const UserApi  = {
    getProfile: ()=>{
        return fetch(`${BASE_URL}profile`, {credentials: "include"}).then(res=>res.json());
    },
    getPoznanStats: ()=>{
        return fetch(`${BASE_URL}products/stats`, {credentials: 'include'}).then(res => res.json());
    }
}