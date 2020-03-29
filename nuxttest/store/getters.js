export default {
    getContactOne(state) {
        const no = state.no
        const arr = state.contacts.filter((item, index) => {
            return item.no === no
        })
        if(arr.length === 1) {
            return arr[0]
        } else {
            return {}
        }
    },
    getContacts(state) {
        return state.contacts
    }
}
