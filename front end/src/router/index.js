import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '../views/LoginView'
import RegisterView from '../views/RegisterView'
import ProfileView from '../views/ProfileView'
import ForumView from '../views/ForumView'
import PostDetailView from '../views/PostDetailView'
import AddPostView from '../views/AddPostView'
import AddCommentView from '../views/AddCommentView'
import authService from '../services/auth'
import ModerateurConnexionView from '../views/ModerateurConnexionView'

const routes = [{
  path: '/register',
  component: RegisterView
},
{
  path: '/profile',
  component: ProfileView,
  meta: { requiresAuth: true }
},
{
  path: '/',
  component: LoginView
},
{
  path: '/forum',
  component: ForumView,
  meta: { requiresAuth: true }
},
{
  path: '/post/:id',
  component: PostDetailView,
  props: true,
  meta: { requiresAuth: true }
},
{
  path: '/addpost',
  component: AddPostView,
  meta: { requiresAuth: true }
},
{
  path: '/post/:id/addcomment',
  component: AddCommentView,
  props: true,
  meta: { requiresAuth: true }
},
{
  path: '/moderateurconnexion',
  component: ModerateurConnexionView
}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (authService.isAuthenticated()) {
      next()
      return
    }
    next('/')
  } else next()
})

export default router
