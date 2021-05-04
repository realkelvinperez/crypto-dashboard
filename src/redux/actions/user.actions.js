import {
    updateUserAddress,
    updateUserBalance,
    updateUserProvider,
    updateUserChainId,
    updateUserSigner,
    updateUserTheme
} from "../types/user.types";

export function updateAddress(payload){
    return { type: updateUserAddress, payload}
}

export function updateBalance(payload){
    return { type: updateUserBalance, payload}
}

export function updateProvider(payload){
    return { type: updateUserProvider, payload}
}

export function updateChainId(payload){
    return { type: updateUserChainId, payload}
}

export function updateSigner(payload){
    return { type: updateUserSigner, payload}
}

export function updateTheme(payload){
    return { type: updateUserTheme, payload}
}
