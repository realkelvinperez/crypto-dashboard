import { updateUserBalance, updateUserAddress, updateUserProvider } from "../types/user.types";

const initialState = {
   address: undefined,
   balance: undefined,
   provider: undefined
}

export default function user(state = initialState, action){
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
         debugger;
         return {
            ...state,
            provider: action.payload
         }
      default:
         return state;
   }
}
