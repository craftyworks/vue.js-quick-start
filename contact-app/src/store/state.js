import Config from '../Config'

export default {
  currentView: null,
  mode: 'add',
  contact: {no: 0, name: '', address: '', photo: ''},
  contactlist: {
    pageno: 1, pagesize: Config.PAGESIZE, totalcount: 0, contacts: []
  }
}
