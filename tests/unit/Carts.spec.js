import { shallowMount } from '@vue/test-utils'
import store from '@/store'
import Cart from '@/views/Cart.vue'

describe('Cart.vue', () => {
  test('Cart component', () => {
    const wrapper = shallowMount(Cart, {
      global: {
        plugins: [store]
      }
    })
    console.log(wrapper.find('#cart-title').text())
    expect(wrapper.find('#cart-title').exists()).toBeTruthy()
  })

})
