import axios from 'axios'
var parseString = require('xml2js').parseString;


export default {
    namespaced: true,
    state: {
        items: []
    },
    actions: {
        fetchReadBooks({ state, commit }) {
           
            return axios.get(`http://cors-anywhere.herokuapp.com/https://www.goodreads.com/review/list/119983295.xml?key=${process.env.VUE_APP_GRKEY}&v=2&shelf=read&per_page=200`)
                .then(res => {
                    return parseString(res.data, {explicitArray :false}, function (err, result) {
                        const books = result.GoodreadsResponse.reviews.review
                        commit('setItems', { resource: 'books', items: books }, { root: true })
                        return state.items
                    });
                  
                 
                })
        }
    }
}
