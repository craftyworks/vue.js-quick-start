import axios from 'axios'
import constant from '../constant'

export default {
  searchContext: name => axios.get(constant.BASE_URL + name)
}
