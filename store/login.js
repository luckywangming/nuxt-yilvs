export const state = () => {
  return {
    token: '111',
    name: '222',
    avatar: ''
  }
}
export const mutations = {
  setToken(state, data) {
    state.token = data
  },
  setName(state, data) {
    state.name = data
  },
  setAvatar(state, data) {
    state.avatar = data
  }
}
