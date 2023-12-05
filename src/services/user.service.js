const USER_STORAGE_KEY = 'user'

function getUser() {
    let user = JSON.parse(localStorage.getItem(USER_STORAGE_KEY))

    if (!user) {
        user = {
            name: "Alex Smith",
            balance: 100,
            transactions: [],
            age: 32,
            address: '1084 Branch Road, FL',
            phone: '904-379-5482',
            email: 'smithalex10@gmail.com',
        }
        _saveUserToLocalStorage(user)
    }

    return user
}

function _saveUserToLocalStorage(user) {
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user))
}

function addTransaction(type, amount, contact) {
    const user = getUser()

    const transaction = {
        type,
        amount,
        contact,
        date: new Date().toLocaleString()
    }

    user.transactions.push(transaction)

    if (type === 'sent') {
        user.balance -= amount
    } else if (type === 'received') {
        user.balance += amount
    }

    _saveUserToLocalStorage(user)

    return transaction
}

function getTransactions() {
    const user = getUser()
    return user.transactions
}

export const userService = {
    getUser,
    addTransaction,
    getTransactions,
}
