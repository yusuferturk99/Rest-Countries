import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://192.168.1.103:4003'
})

instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance