import { createLocalVue, shallowMount } from '@vue/test-utils'
import store from '@/store'
import Vuex from 'vuex'
import Product from '@/views/Cart.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Cart.vue', () => {
  test('Cart component', () => {
    const wrapper = shallowMount(Product, {
      store
    })
    console.log(wrapper.find('#cart-title').text())
    expect(wrapper.find('#cart-title').exists()).toBeTruthy()
  })
  
})
