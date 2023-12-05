const USER_STORAGE_KEY = 'user'
import { eventBus } from './eventBus.service'

function getUser() {
    let user = JSON.parse(localStorage.getItem(USER_STORAGE_KEY))

    if (!user) {
        user = {
            name: "Alex Smith",
            balance: 100,
            transactions: [{
                contactId: '5a56640269f443a5d64b32cd',
                contact: 'Bob Johnson',
                date: new Date().toLocaleString(),
                amount: 21
            }],
            age: 36,
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

function transferFunds(transaction) {
    const user = getUser()
    if (user.balance >= transaction.amount) {
        user.balance -= transaction.amount
        user.transactions.push(transaction)
        _saveUserToLocalStorage(user)
        eventBus.emit('user-msg', `Funds moved successfully!`)
    } else {
        eventBus.emit('user-msg', `Insufficient funds`)
        console.error('Insufficient funds')
    }
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
    transferFunds
}
