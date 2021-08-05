<template>
  <div class="about">
    <div class="info-holder">
      <img class="pic" alt="shop image" src="https://previews.dropbox.com/p/thumb/ABOjXvVCm6nFZMUlDczcrAlW-_ZRXK9ytB02uCrO405S9qufOBqALPYgjObjBn7m8ge7htT11jgqnz-Xz-keoI_IoRmzlMAUAQGKEdN53P29hzNt9fHmuxNsRmuMjkdtZvC4bnrN19NX1DRnSyJW2Ke3sY5p5rCTciCt_4tEKTsLSDm8fNs89XOLhcAhPjTfLeaZ3eRZC8V-hOCzG7jDMMk8WXoSP6_gSP-9OmKCZoTjfVhJUOljCbX0_YBp4aqc3jJIa3eHR9n0V2mwSZlqpallniXcZrL14TmFKREA2TUZBMqNlyPZJ9dVPKgw_rbi2QQP8mk4Gy84hUM1djyDEgDD8tETMGP225mtVSTJs6gLJg/p.jpeg?fv_content=true&size_mode=5">
    </div>
    <div class="info-holder">
      <div>Адрес:</div>
      <div class="info">улица „Кольо Ганчев“ 45, Стара Загора, 6000 </div>
    </div>
    <div class="info-holder">
      <div>Телефони:</div>
      <a class="phones" href="tel:+359876505078">+359 876 505 078</a>
      <a class="phones" href="tel:+359885542229">+359 885 542 229</a>
    </div>
    <div class="info-holder">
      <div>
        <a
          class="info"
          target="_blanck"
          href="https://goo.gl/maps/STuviJfv7eoFuGth7"
          >Google Maps</a
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
};
</script>

<style scoped lang="scss">
@import "@/assets/sassVars.scss";

.about {
  width: 100%;
  height: fit-content;
  min-height: $about-content-height;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .info-holder {
    margin: 20px 0;
    .pic {
      width: auto;
      height: 300px;
    }
    .info {
      font-weight: bold;
    }
    .phones {
      display: block;
    }
  }
}

@media only screen and (orientation: landscape) {
  .pic {
    height: 150px !important;
  }
}
</style>
