import { shallowMount } from '@vue/test-utils'
import store from '@/store'
import ProductList from '@/components/ProductList.vue'

describe('ProductList.vue', () => {
  test('renders props.msg when passed', () => {
    const msg = 'adsdasdasdasd'
    const wrapper = shallowMount(ProductList, {
      props: { msg },
      global: {
        stubs: ['router-link'],
        plugins: [store]
      }
    })
    expect(wrapper.text()).toMatch(msg)
  })

})
