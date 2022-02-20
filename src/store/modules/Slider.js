import { client } from "../../api/client";

const state = {
  sliders: []
};

const getters = {
  GetSlider(state) {
    return state.sliders
  }
};

const mutations = {
  SetSliders(state, sliders) {
    state.sliders = sliders;
  }
};

const actions = {
  getSliderFromServer(context) {
    client.get('/products?limit=4')
    .then(data => {
      context.commit("SetSliders", data)
    })
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}