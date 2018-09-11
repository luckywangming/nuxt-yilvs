
import * as types from './mutation-types'

const matations = {
  [types.TOKEN]: (state, data) => {
    localStorage.TOKEN = data;
    state.TOKEN = data;
  }
}

export default matations
