import axios from 'axios'

  
  const REST_URL="https://full-stack-1-0-0-100820.herokuapp.com/api/employees"

class RestCall{

     getUser(){
        return axios.get(REST_URL)
    }
    addUser(employee){
        return axios.post(REST_URL,employee)
    }

    getUserById(id){
        return axios.get(REST_URL+'/'+id)
    }
    updateUserById(employee){
        return axios.put(REST_URL,employee);
    }
    deleteUserById(id){
        return axios.delete(REST_URL+'/'+id)
    }
}
export default new RestCall();