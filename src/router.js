import { createRouter, createWebHashHistory } from 'vue-router'
import Project from './views/Project.vue'

import About from './views/About.vue'
import Contact from './views/Contact.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      name: 'About',
      component: About,
      path: '/about'
    },
    {
      name: 'Project',
      component: Project,
      path: '/projects/:id',
      props: true
    },
    {
      name: 'Contact',
      component: Contact,
      path: '/contact'
    }
  ]
})
