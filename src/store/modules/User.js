import { client } from "../../api/client";

const state = {
};

const getters = {

};

const mutations = {

};

const actions = {
  registerUser(context, registerData) {
    client.post('Account/signup', registerData)
      .then(response => {
         return response;
      }, data => {
        console.log(data);
      })
  },
  loginUser(context, loginData) {
    client.post("Account/login", loginData).then(response => {
      if (response.body.result == "NotFound") {
        alert("Not Ok")
      }
      if (response.body.result == "Done") {
        alert("Ok")
        
      }
    })
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}