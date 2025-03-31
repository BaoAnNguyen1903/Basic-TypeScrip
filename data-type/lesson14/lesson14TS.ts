enum API_STATUS {
    PENDDING,
    FULFILLED = "FULFILLED",
    REJECTED = "REJECTED"
}

let a = API_STATUS.FULFILLED
let a1 = API_STATUS.PENDDING;

console.log(">>>check a = ", a, ">>Check a1: ", a1);