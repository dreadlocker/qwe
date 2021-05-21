<template>
  <div class="about">
    <div class="info-holder">
      <div>Телефон:</div>
      <div class="info">088 123 123</div>
    </div>
    <div class="info-holder">
      <div>Адрес на магазин:</div>
      <div class="info">гр. Стара Загора, ул. ...</div>
    </div>
    <div class="info-holder">
      <div>
        Google Maps
        <a
          class="info"
          target="_blanck"
          href="https://goo.gl/maps/MwdNvUHRWDGuzMxs6"
          >Линк</a
        >
      </div>

      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {};
  },
  beforeMount() {
    // this.$store.commit("saveFilteredProducts");
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/sassVars.scss";

.about {
  width: 100%;
  height: $content-height;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .info-holder {
    margin: 20px 0;
    .info {
      font-weight: bold;
    }
  }
}
</style>
