import { client } from "../../api/client";

const state = {
};

const getters = {

};

const mutations = {

};

const actions = {
  registerUser(context, registerData) {
    client.post('users', registerData)
      .then(response => {
        if (response.status === 200) {
          console.log(response);
          alert("hello")
        }
      }, data => {
        console.log(data);
      })
  },





};

export default {
  state,
  getters,
  mutations,
  actions
}