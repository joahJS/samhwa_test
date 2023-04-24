import { createWebHistory, createRouter } from 'vue-router'
import Main from '@/views/Main.vue'

const routes = [
    { path: '/temp/', name: 'tempMain', component: Main },
    { path: '/', name: 'Main', component: Main },
    {
        path: '/about',
        name: 'About',
        component: () => import( /* webpackChunkName: 'About' */ '@/views/Abouts.vue')
    },
    {
        path: '/certificate',
        name: 'Certificate',
        component: () => import( /* webpackChunkName: 'Certificate' */ '@/views/Certificates.vue')
    },
    {
        path: '/history',
        name: 'History',
        component: () => import( /* webpackChunkName: 'History' */ '@/views/Historys.vue')
    },
    {
        path: '/history',
        name: 'History',
        component: () => import( /* webpackChunkName: 'History' */ '@/views/Historys.vue')
    },
    {
        path: '/path',
        name: 'Path',
        component: () => import( /* webpackChunkName: 'Path' */ '@/views/Paths.vue')
    },
    {
        path: '/outline',
        name: 'Outline',
        component: () => import( /* webpackChunkName: 'Outline' */ '@/views/Outlines.vue')
    },
    {
        path: '/organ',
        name: 'Organ',
        component: () => import( /* webpackChunkName: 'Organ' */ '@/views/Organs.vue')
    },

    // cate

    {
        path: '/cates',
        name: 'Cates',
        component: () => import( /* webpackChunkName: 'Cates' */ '@/views/Cates.vue')
    },
    {
        path: '/cates/:id',
        name: 'Cates_in',
        component: () => import( /* webpackChunkName: 'Cates_in' */ '@/views/Cates_in.vue')
    },

    // customers

    {
        path: '/notice',
        name: 'Notice',
        component: () => import( /* webpackChunkName: 'notice' */ '@/views/Notice.vue')
    },
    {
        path: '/notice/:id',
        name: 'notice_in',
        component: () => import( /* webpackChunkName: 'notice_in' */ '@/views/notice_in.vue')
    },
    {
        path: '/notice_wr',
        name: 'notice_wr',
        component: () => import( /* webpackChunkName: 'notice_wr' */ '@/views/notice_wr.vue')
    },
    {
        path: '/news',
        name: 'News',
        component: () => import( /* webpackChunkName: 'News' */ '@/views/News.vue')
    },
    {
        path: '/news_wr',
        name: 'news_wr',
        component: () => import( /* webpackChunkName: 'News_wr' */ '@/views/news_wr.vue')
    },
    {
        path: '/news/:id',
        name: 'news_in',
        component: () => import( /* webpackChunkName: 'news_in' */ '@/views/news_in.vue')
    },
    {
        path: '/datas',
        name: 'Datas',
        component: () => import( /* webpackChunkName: 'Data' */ '@/views/Datas.vue')
    },
    {
        path: '/data/:id',
        name: 'data_in',
        component: () => import( /* webpackChunkName: 'data_in' */ '@/views/data_in.vue')
    },
    {
        path: '/datas_wr',
        name: 'Datas_wr',
        component: () => import( /* webpackChunkName: 'Datas_wr' */ '@/views/datas_wr.vue')
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import( /* webpackChunkName: 'Contact' */ '@/views/Contacts.vue')
    },
    {
        path: '/domains',
        name: 'Domains',
        component: () => import( /* webpackChunkName: 'Domains' */ '@/views/Domains.vue')
    },
    {
        path: '/examples',
        name: 'Examples',
        component: () => import( /* webpackChunkName: 'Examples' */ '@/views/Examples.vue')
    },
    //search
    {
        path: '/search',
        name: 'Search',
        component: () => import( /* webpackChunkName: 'Searchs' */ '@/views/Searchs.vue')
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 }
    },
    
})


export default router