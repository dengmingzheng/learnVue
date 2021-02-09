// 配置路由相关信息
import VueRouter from 'vue-router'
import Vue from 'vue'

// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

//路由懒加载
const Home = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const Profile = () => import('../components/Profile')

//1.通过Vue.use(插件)，安装插件
Vue.use(VueRouter)

//2、创建VueRouter对象、神坑、不能随便改routes的名字，要不然router-view组件模板内容不显示出来
const routes = [
     {
       path: '',
       // redirect重定向
       redirect: '/home'
     },
     {
       path: '/home',
       component: Home,
       meta:{
         title:'首页'
       },
       children: [
         {
           path: '',
           redirect: 'news'
         },
         {
           path:'news',
           component:HomeNews
         },
         {
           path:'message',
           component:HomeMessage
         }
       ]
     },
     {
       path: '/about',
       component: About,
       meta:{
         title:'关于'
       },
     },
     {
       path: '/user/:userId',
       component: User,
       meta:{
         title:'用户'
       }
     },
     {
       path: '/profile',
       component: Profile,
       meta:{
         title:'档案'
       }
     }
]

//3、注册路由
const router = new VueRouter({
  //配置路由和组件之间的应用关系
  routes,
  //路由显示模式，不写默认hash
  mode:'history',
  linkActiveClass:'active'
})

//全局前置导航守卫
router.beforeEach((to,from,next) => {
  document.title = to.matched[0].meta.title
  next();//必须调用
})

//全局后置钩子
// router.afterEach((to,from) => {
//   //后置钩子不需要像前置守卫那样调用next
//   console.log(---)
// })

//4、将router对象传入到Vue实例
export default router
