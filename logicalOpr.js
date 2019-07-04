// && - AND
// || - OR
// ! - NOT

let isVerified = true
let isLoggedIn = true
let hasPaymentToken = true
let isGuest = true

if (isVerified && isLoggedIn && hasPaymentToken){
    console.log("Grant access to the user")
} else if (isVerified || isGuest) {
    console.log("U CAN ONLY ALLOWED TO SEE THE COUSRESE")
} else {
    console.log("GOOD BYE")
}
