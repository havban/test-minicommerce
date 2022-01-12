import MockAdapter from "axios-mock-adapter";
import axios from "axios";

const routes = [
    {
      method: 'GET',
      url: '/api/products',
      status: 200,
      response: [
        {
          id: 'product-1',
          image: 'https://via.placeholder.com/200',
          desc: 'Lorem ipsum dolor sit amet',
          title: 'Product 1',
          price: 'Rp.100.000'
        },
        {
          id: 'product-2',
          image: 'https://via.placeholder.com/200',
          desc: 'Lorem ipsum dolor sit amet',
          title: 'Product 2',
          price: 'Rp.100.000'
        },
        {
          id: 'product-3',
          image: 'https://via.placeholder.com/200',
          desc: 'Lorem ipsum dolor sit amet',
          title: 'Product 3',
          price: 'Rp.100.000'
        },
        {
          id: 'product-4',
          image: 'https://via.placeholder.com/200',
          desc: 'Lorem ipsum dolor sit amet',
          title: 'Product 4',
          price: 'Rp.100.000'
        },
        {
          id: 'product-5',
          image: 'https://via.placeholder.com/200',
          desc: 'Lorem ipsum dolor sit amet',
          title: 'Product 5',
          price: 'Rp.100.000'
        }
      ]
    },
    {
        method: 'GET',
        url: '/api/products/product-1',
        status: 200,
        response: [
          {
            id: 'product-1',
            image: 'https://via.placeholder.com/200',
            desc: 'Lorem ipsum dolor sit amet, Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet',
            title: 'Product 1',
            price: 'Rp.100.000'
          }
        ]
    },
    {
      method: 'GET',
      url: '/api/products/product-2',
      status: 200,
      response: [
        {
          id: 'product-2',
          image: 'https://via.placeholder.com/200',
          desc: 'Lorem ipsum dolor sit amet, Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet',
          title: 'Product 2',
          price: 'Rp.100.000'
        }
      ]
  },
  {
    method: 'GET',
    url: '/api/carts',
    status: 200,
    response: [
      {
        id: 'product-1',
        image: 'https://via.placeholder.com/200',
        desc: 'Lorem ipsum dolor sit amet',
        title: 'Product 1',
        price: 'Rp.100.000'
      },
      {
        id: 'product-1',
        image: 'https://via.placeholder.com/200',
        desc: 'Lorem ipsum dolor sit amet',
        title: 'Product 1',
        price: 'Rp.100.000'
      }
    ]
  }
]

// axios mock method
const mock = new MockAdapter(axios)

const methods = {
  GET: 'onGet',
  POST: 'onPost'
}

routes.forEach(({method, url, status, response}) => {
  const fn = methods[method]
  mock[fn](url).reply(() => {
    console.log(url)
    return [
      status || 200,
      response
    ]
  })
})


export default routes
