import Vue from 'vue'
import Router from 'vue-router'


import HelloWorld from '@/pages/HelloWorld'
import Projects from '@/pages/Projects'
import BlogPostList from '@/pages/BlogPostList'
import BlogPost from '@/components/BlogPost'
import NotFound from '@/pages/NotFound'
Vue.use(Router)

const router = new Router({
    routes: [{
            path: '/',
            name: '/',
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
        },
        {
            path: '/blogs/:slug',
            name: 'blog-post',
            component: BlogPost
        },
        { path: "*", component: NotFound }
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