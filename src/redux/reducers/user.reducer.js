import {updateUserBalance, updateUserAddress, updateUserProvider, updateUserChainId, updateUserSigner} from "../types/user.types";

const initialState = {
   address: undefined,
   balance: undefined,
   provider: undefined,
   chainId: undefined,
   txHistory: undefined,
   signer: undefined,
}

export default function userReducer(state = initialState, action){
   switch(action.type) {
      case updateUserAddress:
         return {
            ...state,
            address: action.payload
         }
      case updateUserBalance:
         return {
            ...state,
            balance: action.payload
         }
      case updateUserProvider:
         return {
            ...state,
            provider: action.payload
         }
      case updateUserChainId:
         return {
            ...state,
            chainId: action.payload
         }
      case updateUserSigner:
         return {
            ...state,
            signer: action.payload
         }
      default:
         return state;
   }
}
