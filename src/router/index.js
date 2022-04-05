import Vue from 'vue'
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue'),
        children: [
            {
                path: '/system',
                name: 'system',
                component: () => import('../views/System.vue'),
                children: [
                    {
                        path: 'user',
                        name: 'user',
                        component: () => import('../views/User.vue'),
                    },
                    {
                        path: 'menu',
                        name: 'menu',
                        component: () => import('../views/Menu.vue'),
                    },
                ]
            },

            {
                path: '/test',
                name: 'test',
                component: () => import('../views/Test.vue'),
            },
        ]
    },
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router
