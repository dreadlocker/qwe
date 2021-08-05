<template>
  <div>
    <label for="products">Филтър за протукти: </label>
    <select
      @change="onChange($event)"
      :value="dropdownValue"
      name="products"
      id="products"
    >
      <option value="Всички">{{ filterAll }}</option>
      <option
        v-for="productInfo in this.$store.state.productsInfo"
        :key="productInfo.label"
        :value="productInfo.label"
      >
        {{ productInfo.label }}
      </option>
    </select>

    <div
      v-for="productInfo in this.$store.state.filteredProducts"
      :key="productInfo.label"
    >
      <hr />
      <h1>{{ productInfo.label }}</h1>
      <hr />
      <div class="cards-holder">
        <div
          v-for="product in productInfo.products"
          :key="product.id"
          class="card"
        >
          <div
            :style="{ backgroundImage: `url(${product.image})` }"
            class="img-holder"
          ></div>
          <div>
            <div>
              <span class="info-1"
                >Марка: <span class="info-2">{{ product.brand }}</span></span
              >
            </div>
            <div>
              <span class="info-1"
                >Цена: <span class="info-2">{{ product.price }}</span> лв.</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import { filterAll } from "@/assets/constants.js";

export default {
  name: "Home",
  data() {
    return {
      filterAll: filterAll,
    };
  },
  computed: {
    dropdownValue() {
      const dropdownValue = this.$store.state.dropdownValue;
      return dropdownValue ? dropdownValue : filterAll;
    },
  },
  methods: {
    onChange(e) {
      const value = e.target.value;
      this.$store.commit("saveFilteredProducts", value);
      this.$store.commit("saveDropdownSelect", value);
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/sassVars.scss";

.cards-holder {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  .card {
    min-width: 250px;
    width: 30%;
    height: 350px;
    box-shadow: 0px 0px 15px grey;
    border-radius: 5px;
    margin-bottom: 10px;
    .img-holder {
      width: 100%;
      height: 80%;
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
    }
    .info-1 {
      margin: 0 10px;
      .info-2 {
        font-size: 20px;
        font-weight: bold;
      }
    }
  }
}
.footer {
  width: 100%;
  height: $footer-height;
}

@media (max-width: 587px) {
  .cards-holder {
    justify-content: center;
    .card {
      width: 60%;
    }
  }
}
</style>
