import Vuex from 'vuex'
import merge from 'lodash/merge'

export function createStore (storyOptions = {}) {
  const store = {
    modules: {
      module_name: {
        namespaced: true,
        state: {
        },
        getters: {
        },
        mutations: {
        },
        actions: {
        }
      }
    }
  }

  const options = merge(store, storyOptions)

  return new Vuex.Store(options)
}
