<template>
  <main class="home-principal">
    <section class="home-text">
      <div class="home-text-h1">
        <a
          class="ubicacion"
          href="https://www.google.com/maps/dir//las+brusquitas+green+%26+tech/@-36.341898,-60.4187524,7z/data=!4m8!4m7!1m0!1m5!1m1!1s0x95851bace9eb4c69:0xed1cf55309ba64c8!2m2!1d-57.7784753!2d-38.2448211"
        >
          <span class="ubicacion"
            ><i class="fas fa-map-marker-alt"></i> Las Brusquitas , ruta 11 km
            557, Miramar</span
          ></a
        >

        <h1>Aprende</h1>
        <h1>divertite</h1>
        <h1>pulí tu surfing</h1>

        <router-link to="/Clases" class="btn-reserva" tag="button">
          Reserva
        </router-link>
      </div>
    </section>
    <section class="home-fade">
      <div ref="mapDiv" style="width: 100%; height: 80vh;" />

      <transition-group tag="div" class="home-grid" name="fade">
        <div
          class="fade-item"
          v-for="(icon, index) in icons"
          :key="icon.name"
          :data-index="index"
        >
          <h3>{{ icon.name }}</h3>
          <img src="~@/assets/group.png" alt="" />
        </div>
        <div class="fade-item">
          <h3>Intermedio</h3>
          <img src="~@/assets/german.png" alt="" />
        </div>
        <div class="fade-item">
          <h3>Avanzado</h3>
          <img src="~@/assets/dany.jpg" alt="" />
        </div>
        <div class="fade-item">
          <h3>Personalizado</h3>
          <img src="~@/assets/pexels.jpg" alt="" />
        </div>
      </transition-group>
    </section>
  </main>
</template>

<script>
/* eslint-disable */
/* eslint-disable-no-undef */
import gsap from "gsap";
import { computed, onMounted, ref } from "vue";
import { useGeolocation } from "./useGeolocation";
import { Loader } from "@googlemaps/js-api-loader";
const GOOGLE_MAPS_API_KEY = "AIzaSyCttSm1lQkfPXTYBxLUi3oJqWaljEW_yzc";

export default {
  name: "Home",
  setup() {
    const icons = ref([{ name: "principiante", src: "~@/assets/group.png" }]);

    const beforeEnter = (el) => {
      el.style.opacity = 0;
      el.style.transform = "translateY(100px)";
    };
    const enter = (el, done) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        onComplete: done,
        delay: el.dataset.index * 0.2,
      });
    };
    const { coords } = useGeolocation();
    const currPos = computed(() => ({
      lat: coords.value.latitude,
      lng: coords.value.longitude,
    }));

    const loader = new Loader({ apiKey: GOOGLE_MAPS_API_KEY });
    const mapDiv = ref(null);
    onMounted(async () => {
      await loader.load();
      const map = new google.maps.Map(mapDiv.value, {
        center: currPos.value,
        zoom: 13,
        disableDefaultUI: true,
        zoomControl: true,

        mapId: "91c8060ebe57e67d",
      });
      const marker = new google.maps.Marker({
        position: currPos.value,
        map: map,
        label: {
          fontSize: "13pt",
          fontWeight: "bold",
          color: "black",
          text: " Escuela de Surf & Arte",
        },
      });
    });
    return { icons, beforeEnter, enter, currPos, mapDiv };
  },
};
</script>

<style scoped lang="scss">
.home-principal {
  display: flex;
  height: 100vh;
  background: #f4f4f4;
  @include gradient($blanco, $primary);

  .home-text {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    flex-basis: 50%;
    height: 85%;

    .home-text-h1 {
      border-radius: 1px;
      padding: 1em 2em;
    }
    h1 {
      text-align: left;
      color: #131313;
      line-height: 90%;
    }
  }
  .home-fade {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    justify-content: center;

    flex-basis: 50.1%;

    .home-grid {
      display: grid;

      gap: 2em 2em;
      place-content: center;
      padding: 3% 2%;
      grid-template-columns: repeat(4, 1fr);
      width: 100%;

      .fade-item {
        position: relative;
        &:after {
          content: "";
          display: block;
          width: 100%;
          height: 100%;
          background: #00000050;
          inset: 0;
          position: absolute;
        }

        h3 {
          position: absolute;
          padding: 1em;
          bottom: 0;
          color: white;
          z-index: 3;
          width: 100%;
        }
        img {
          height: 100%;
          width: 100%;
          max-width: 650px;
          max-height: 250px;
          aspect-ratio: 1 / 2;
          object-fit: cover;
        }
      }
    }
  }
}
.ubicacion {
  line-height: 40px;
  text-align: left;
  margin-right: auto;
  margin-left: 0;
  &:hover {
    color: $secondary;
  }
}
.fa-map-marker-alt {
  color: $secondary;
  font-size: 1.3rem;
}
.btn-reserva {
  @include button($green);

  &:hover {
    background: #f4f4f4;

    color: #131313;
    box-shadow: 0;
  }
}

.btn-reserva::after {
  content: "\2192";
  margin-left: 5%;
}
</style>
