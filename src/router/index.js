import Vue from 'vue'
import Router from 'vue-router'


import HelloWorld from '@/pages/HelloWorld'
import Projects from '@/pages/Projects'
import BlogPostList from '@/pages/BlogPostList'

Vue.use(Router)

const router = new Router({
    routes: [{
            path: '/',
            name: 'hello',
            component: HelloWorld
        },
        {
            path: '/projects',
            name: 'projects',
            component: Projects
        },
        {
            path: '/blogs',
            name: 'blogs',
            component: BlogPostList
        }
    ],
    mode: 'history'
})


// router.beforeEach((to, from, next) => {
//   store.dispatch('auth/getAuthUser')
//     .then(() => {
//       const isAuthenticated = store.getters['auth/isAuthenticated']

//       if (to.meta.onlyAuthUser) {
//         if (isAuthenticated) {
//           next()
//         } else {
//           next({name: 'PageNotAuthenticated'})
//         }
//       } else if (to.meta.onlyGuestUser) {
//         if (isAuthenticated) {
//           next({name: 'PageHome'})
//         } else {
//           next()
//         }
//       } else {
//         next()
//       }
//     })
// })







export default router