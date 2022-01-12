<template>
  <div class="about">
    <div class="product-wrapper">
        <div class="product-image">
          <img src="/images/300.png">
        </div>
        <div class="product-info">
          <h1 id="product-title">Product titles ok</h1>
          <h5>Rp.100.000</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id volutpat lacus laoreet non curabitur. Neque sodales ut etiam sit amet nisl. Porttitor lacus luctus accumsan tortor.</p>
          <button @click="beli()">Beli</button>
        </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
// layout
.product-wrapper {
  display: flex;
  border: 1px;
  margin: 0 auto;
  padding: 1em;
  width: 50%;

  .product-image {
    margin: 1em;
  }
  .product-info {
    padding: 1em;
    text-align: left;

    button {
      padding: 1em;
      background: #f37021;
      color: #fff;
      border: none;
      font-size: 1em;
      font-weight: bold;
      width: 100px;
      cursor: pointer;
    }
  }
}
</style>

<script src="./js/product.js"></script>
