<template>
  <div class="cart">
    <h1 id="cart-title">Carts title</h1>
    <div class="product-wrapper">
        <table>
          <tbody>
            <tr class="row">
              <td>
                <img src="https://via.placeholder.com/50">
              </td>
              <td>
                <p>Product title</p>
              </td>
              <td>
                <h5>Rp.100.000</h5>
              </td>
              <td>
                  <div>hapus</div>
              </td>
            </tr>
            <tr class="row">
              <td>
                <img src="https://via.placeholder.com/50">
              </td>
              <td>
                <p>Product title</p>
              </td>
              <td>
                <h5>Rp.100.000</h5>
              </td>
              <td>
                  <div>hapus</div>
              </td>
            </tr>
            <tr class="row">
              <td>
                <img src="https://via.placeholder.com/50">
              </td>
              <td>
                <p>Product title</p>
              </td>
              <td>
                <h5>Rp.100.000</h5>
              </td>
              <td>
                  <div @click="removeItem()">hapus</div>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr >
              <td colspan="4">
                <button @click="checkout()">Checkout</button>
              </td>
            </tr>
          </tfoot>
        </table>

    </div>
  </div>
</template>

<style scoped lang="scss">
$orange: #f37021;
$white: #fff;

// layout
.product-wrapper {
  margin: 0 auto;
  padding: 1em;
  width: 75%;

  table {
    margin: 0 auto;
    width: 70%;

    .row {
      border-bottom: #ccc 1px;
    }

    button {
      padding: 1em;
      background: $orange;
      color: $white;
      border: none;
      font-size: 1em;
      font-weight: bold;
      width: 100px;
      cursor: pointer;
      float: right;
    }
  }

  
}
</style>

<script>
export default {
  name: 'Cart',
  methods: {
    checkout() {
      return this.$router.push('/checkout')
    },
    removeItem() {
      // Todo: Action remove state
      console.log('hapuss')
    }
  }
}
</script>