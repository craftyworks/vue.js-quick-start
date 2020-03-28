import Config from '../Config'

export default {
  contact: {no: 0, name: '', address: '', photo: ''},
  isLoading: false,
  contactlist: {
    pageno: 1, pagesize: Config.PAGESIZE, totalcount: 0, contacts: []
  }
}
