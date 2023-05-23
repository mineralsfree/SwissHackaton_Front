import {BASE_URL} from "./urls";

export const trashApi = {

    checkEAN: async (ean: string) => {
        return fetch(`${BASE_URL}products/check/${ean}`, {credentials: 'include'}).then(res => res.json())
    },
    throwTrash: async (ean: string) => {
        return fetch(`${BASE_URL}products/throw/${ean}`, {credentials: "include"}).then(res => res.json())
    }
}