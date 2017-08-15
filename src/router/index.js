import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
//首页
const index=resolve => require(['../components/common/index.vue'], resolve)
//关于
const about=resolve => require(['../components/common/about.vue'], resolve)
//关于
const login=resolve => require(['../components/common/login.vue'], resolve)
//关于
const form=resolve => require(['../components/page/form.vue'], resolve)
//关于
const table=resolve => require(['../components/page/table.vue'], resolve)
//关于
const markdownViewer=resolve => require(['../components/page/markdown-viewer.vue'], resolve)
//关于
const markdownEditor1=resolve => require(['../components/page/markdown-editor-1.vue'], resolve)
//关于
const markdownEditor2=resolve => require(['../components/page/markdown-editor-2.vue'], resolve)
//关于
const rtf=resolve => require(['../components/page/rtf.vue'], resolve)
//关于
const echarts=resolve => require(['../components/page/echarts.vue'], resolve)
//关于
const upload=resolve => require(['../components/page/upload.vue'], resolve)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/login'
        },
        {
            path: '/about',
            component: index,
            children: [{
                    path: '',
                    component: about
                },
                {
                    path: '/form',
                    component: form
                },
                {
                    path: '/table',
                    component: table
                },
                {
                    path: '/markdown-viewer',
                    component: markdownViewer
                },
                {
                    path: '/markdown-editor-1',
                    component: markdownEditor1
                },
                {
                    path: '/markdown-editor-2',
                    component: markdownEditor2
                },
                {
                    path: '/rtf',
                    component: rtf
                },{
                    path: '/upload',
                    component: upload
                },{
                    path: '/echarts',
                    component: echarts
                }
            ]
        },
        {
            path: '/login',
            component: login
        },
    ]
})
