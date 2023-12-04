import { contactService } from '../../services/contact.service'
export default {
    state() {
        return {
            contacts: null,
        }
    },
    mutations: {
        setContacts(state, { contacts }) {
            state.contacts = contacts
        },
        removeContact(state, { contactId }) {
            const idx = state.contacts.findIndex(contact => contact._id === contactId)
            state.contacts.splice(idx, 1)
        },
        updateContact(state, { savedContact }) {
            const idx = state.contacts.findIndex(contact => contact._id === savedContact._id)
            state.contacts.splice(idx, 1, savedContact)
        },
        saveContact(state, { savedContact }) {
            state.contacts.push(savedContact)
        },
    },
    actions: {
        async loadContacts(context) {
            const contacts = await contactService.getContacts()
            context.commit({ type: 'setContacts', contacts })
        },
        async removeContact(context, { contactId }) {
            await contactService.removeContact(contactId)
            context.commit({ type: 'removeContact', contactId })
        },
        async saveContact(context, { contact }) {
            const isUpdate = !!contact._id
            const savedContact = await contactService.save(contact)

            if (isUpdate) {
                context.commit({ type: 'updateContact', savedContact })
            } else {
                context.commit({ type: 'saveContact', savedContact })
            }
        }
    },
    getters: {
        contacts(state) { return state.contacts }
    },
}