import {updateUserAddress, updateUserBalance, updateUserProvider} from "../types/user.types";

export function updateAddress(payload){
    return { type: updateUserAddress, payload}
}

export function updateBalance(payload){
    return { type: updateUserBalance, payload}
}

export function updateProvider(payload){
    return { type: updateUserProvider, payload}
}
