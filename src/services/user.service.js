const user = {
    name: "Alex Smith",
    balance: 100,
    transactions: [],
    age: 32,
    address: '1084 Branch Road, FL',
    phone: '904-379-5482',
    email: 'smithalex10@gmail.com',
}

function getUser() {
    return user
}

export const userService = {
    getUser,
}