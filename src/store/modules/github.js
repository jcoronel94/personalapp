
import axios from 'axios'

export default {
    namespaced: true,
    state: {
        items: []
    },
    actions: {
        fetchProjects({ state, commit }) {
            return axios.get('https://api.github.com/users/jcoronel94/repos')
                .then(res => {
                    const projects = res.data
                    commit('setItems', { resource: 'projects', items: projects }, { root: true })
                    return state.items
                })
        }
    }
}