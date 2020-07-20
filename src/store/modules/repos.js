const state = () => ({
  items: []
})

const getters = {
  productRepos: (state) => {
    return state.items;
  }
}

const actions = {
  addItemsToRepos({commit}, items) {
    commit('setRepoItems', items);
  }
}

const mutations = {
  pushItemToRepos(state, repo) {
    state.items.push({
      repo
    })
  },

  setRepoItems(state, { items }) {
    state.items = items
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}