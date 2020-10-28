
import Vue from 'vue'

export default {
    namespaced: true,
    state: {
        items: [],
        yPosition: 0
    },
    actions: {
        getYScrollState({ state, commit }) {
            return state.yPosition

        },
        updateYScrollState({ commit, state }, yPosition) {
            commit('setYPosition', yPosition)
            return state.yPosition
        }
    },
    mutations: {
        setYPosition(state, position) {
            Vue.set(state, 'yPosition', position)
        }
    }
}