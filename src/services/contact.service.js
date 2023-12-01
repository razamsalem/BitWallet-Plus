export const contactService = {
    getContacts,
    getContactById,
    deleteContact,
    saveContact,
    getEmptyContact
}

const contacts = [
    {
        "_id": "5a56640269f443a5d64b32ca",
        "name": "Loren Asira",
        "email": "loreny@renovize.com",
        "address": "2842 Burton Avenue,TN",
        "age": 23,
        "phone": "+1 (968) 593-3824"
    },
    {
        "_id": "5a5664025f6ae9aa24a99fde",
        "name": "Hallie Mclean",
        "email": "halliemclean@renovize.com",
        "address": "385 Amethyst Drive, MI",
        "age": 28,
        "phone": "+1 (948) 464-2888"
    },
    {
        "_id": "5a56640269f443a5d64b32cb",
        "name": "John Doe",
        "email": "johndoe@example.com",
        "address": "123 Main Street, CA",
        "age": 30,
        "phone": "+1 (123) 456-7890"
    },
    {
        "_id": "5a56640269f443a5d64b32cc",
        "name": "Alice Smith",
        "email": "alicesmith@example.com",
        "address": "456 Oak Avenue, NY",
        "age": 25,
        "phone": "+1 (987) 654-3210"
    },
    {
        "_id": "5a56640269f443a5d64b32cd",
        "name": "Bob Johnson",
        "email": "bobjohnson@example.com",
        "address": "789 Pine Street, TX",
        "age": 35,
        "phone": "+1 (555) 123-4567"
    },
    {
        "_id": "5a56640269f443a5d64b32ce",
        "name": "Emily Williams",
        "email": "emilywilliams@example.com",
        "address": "987 Cedar Avenue, FL",
        "age": 28,
        "phone": "+1 (111) 222-3333"
    },
    {
        "_id": "5a56640269f443a5d64b32cf",
        "name": "Michael Brown",
        "email": "michaelbrown@example.com",
        "address": "654 Birch Street, WA",
        "age": 40,
        "phone": "+1 (777) 888-9999"
    },

    {
        "_id": "5a56640252d6acddd183d319",
        "name": "Parsons Norris",
        "email": "parsonsnorris@renovize.com",
        "address": "4168 Raintree Boulevard, MN",
        "age": 31,
        "phone": "+1 (958) 502-3495"
    },
    {
        "_id": "5a566402ed1cf349f0b47b4d",
        "name": "Rachel Lowe",
        "address": "2080 Harper Street, KY",
        "age": 38,
        "phone": "+1 (911) 475-2312"
    },
    {
        "_id": "5a566402abce24c6bfe4699d",
        "name": "Dominique Soto",
        "email": "dominiquesoto@renovize.com",
        "address": "429 Emma Street, TX",
        "age": 42,
        "phone": "+1 (807) 551-3258"
    },
    {
        "_id": "5a566402a6499c1d4da9220a",
        "name": "Shana Pope",
        "email": "shanapope@renovize.com",
        "address": "2372 Newton Street, MN",
        "age": 52,
        "phone": "+1 (970) 527-3082"
    },
    {
        "_id": "5a566402f90ae30e97f990db",
        "name": "Faulkner Flores",
        "email": "faulknerflores@renovize.com",
        "address": "4249 Stonepot Road, NJ",
        "age": 36,
        "phone": "+1 (952) 501-2678"
    },
    {
        "_id": "5a5664027bae84ef280ffbdf",
        "name": "Holder Bean",
        "email": "holderbean@renovize.com",
        "address": "4249 Stoneroll Road, FL",
        "age": 45,
        "phone": "+1 (989) 503-2663"
    },
    {
        "_id": "5a566402e3b846c5f6aec652",
        "name": "Rosanne Shelton",
        "email": "rosanneshelton@renovize.com",
        "address": "4249 Rainbow Road, CA",
        "age": 25,
        "phone": "+1 (968) 454-3851"
    },
    {
        "_id": "5a56640272c7dcdf59c3d411",
        "name": "Pamela Nolan",
        "email": "pamelanolan@renovize.com",
        "address": "4249  Saint Road, CA",
        "age": 35,
        "phone": "+1 (986) 545-2166"
    },
    {
        "_id": "5a5664029a8dd82a6178b15f",
        "name": "Roy Cantu",
        "email": "roycantu@renovize.com",
        "address": "4349  Saint Road, TX",
        "age": 19,
        "phone": "+1 (929) 571-2295"
    },
    {
        "_id": "5a5664028c096d08eeb13a8a",
        "name": "Ollie Christian",
        "email": "olliechristian@renovize.com",
        "address": "4349  Saint Road, FL",
        "age": 29,
        "phone": "+1 (977) 419-3550"
    },
    {
        "_id": "5a5664026c53582bb9ebe9d1",
        "name": "Nguyen Walls",
        "email": "nguyenwalls@renovize.com",
        "address": "4349  Saint Road, FL",
        "age": 34,
        "phone": "+1 (963) 471-3181"
    }
]

function sort(arr) {
    return arr.sort((a, b) => {
        if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
            return -1
        }
        if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
            return 1
        }
        return 0
    })
}

function getContacts(filterBy = null) {
    return new Promise((resolve, reject) => {
        var contactsToReturn = contacts
        if (filterBy && filterBy.term) {
            contactsToReturn = filter(filterBy.term)
        }
        resolve(sort(contactsToReturn))
    })
}

function getContactById(id) {
    return new Promise((resolve, reject) => {
        const contact = contacts.find(contact => contact._id === id)
        contact ? resolve(contact) : reject(`Contact id ${id} not found!`)
    })
}

function deleteContact(id) {
    return new Promise((resolve, reject) => {
        const index = contacts.findIndex(contact => contact._id === id)
        console.log('index', index)
        console.log('id', id)
        if (index !== -1) {
            contacts.splice(index, 1)
        }
        resolve(contacts)
    })
}

function _updateContact(contact) {
    return new Promise((resolve, reject) => {
        const index = contacts.findIndex(c => contact._id === c._id)
        if (index !== -1) {
            contacts[index] = contact
        }
        resolve(contact)
    })
}

function _addContact(contact) {
    return new Promise((resolve, reject) => {
        contact._id = _makeId()
        contacts.push(contact)
        resolve(contact)
    })
}

function saveContact(contact) {
    return contact._id ? _updateContact(contact) : _addContact(contact)
}

function getEmptyContact() {
    return {
        name: '',
        email: '',
        phone: ''
    }
}

function filter(term) {
    term = term.toLocaleLowerCase()
    return contacts.filter(contact => {
        return contact.name.toLocaleLowerCase().includes(term) ||
            contact.phone.toLocaleLowerCase().includes(term) ||
            contact.email.toLocaleLowerCase().includes(term)
    })
}

function _makeId(length = 10) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}