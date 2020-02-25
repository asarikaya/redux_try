import * as actionTypes from "./actionTypes"

// increaseCounter bir fonksiyon ve döndüreceği şey de bir fonksiyon olduğu için normal parantez içine süslü parantez açıyoruz
export const increaseCounter=()=>({
    type:actionTypes.INCREASE_COUNTER,
    payload:1
})

export const decreaseCounter=()=>({
    type:actionTypes.DECREASE_COUNTER,
    payload:1
})