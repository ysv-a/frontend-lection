import { createRouter, createWebHistory } from 'vue-router'

import AccardionExample from '../components/accardion/AccardionExample.vue'
import CompositionApiExample from '../components/composition/CompositionApiExample.vue'
import CssLeakExample from '../components/css/CssLeakExample.vue'
import BusinessCardEditor from '../components/model/BusinessCardEditor.vue'
import OptionsApiExample from '../components/options/OptionsApiExample.vue'
import SetupApiExample from '../components/setup/SetupApiExample.vue'
import SlotExample from '../components/slots/SlotExample.vue'
import TableExample from '../components/slots/TableExample.vue'
import MainLayout from '../layouts/MainLayout.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: MainLayout,
    children: [
      {
        name: 'OptionsApiExample',
        path: '/OptionsApiExample',
        component: OptionsApiExample,
      },
      {
        name: 'CompositionApiExample',
        path: '/CompositionApiExample',
        component: CompositionApiExample,
      },
      {
        name: 'SetupApiExample',
        path: '/SetupApiExample',
        component: SetupApiExample,
      },

      {
        name: 'SlotExample',
        path: '/SlotExample',
        component: SlotExample,
      },
      {
        name: 'TableExample',
        path: '/TableExample',
        component: TableExample,
      },
      {
        name: 'CssLeakExample',
        path: '/CssLeakExample',
        component: CssLeakExample,
      },
      {
        name: 'BusinessCardEditor',
        path: '/BusinessCardEditor',
        component: BusinessCardEditor,
      },
      {
        name: 'AccardionExample',
        path: '/AccardionExample',
        component: AccardionExample,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
})

export default router
