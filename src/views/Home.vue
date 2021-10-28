<template>

   <main class="home-principal">
            
    <section class="home-text">
      <div class="home-text-h1">
        <h1>Aprende a surfear</h1>
      <h1>puli tu surfing</h1>
      <h1>divertite</h1>

      <a href="" class="btn-reserva">Reserva</a>
      
      </div>
      
    </section>
    <section class="home-fade">
      <div class="fade-item">
        <img src="/img/all.png" alt="">
      </div>
      <div class="fade-item">
        <img src="/img/all.png" alt="">
      </div>
      <div class="fade-item">
        <img src="/img/all.png" alt="">
      </div>
    </section>
  </main>

    <!-- <homeSlide /> -->

</template>

<script>
// @ is an alias to /src

// import homeSlide from '@/components/homeSlide.vue'

export default {
  name: 'Home',
  // components: {
  //   homeSlide
  // }

}

</script>

<style scoped lang="scss">



.home-principal {
    display: flex;
    height: 100vh;
    background: #f4f4f4;
     background: linear-gradient( to right, $blanco 50%, $primary 0);
}
.home-text {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width:55%;
   

    height: 85%;
   
  .home-text-h1 {
    background: #f4f4f4;
    border-radius: 1px;
    padding: 1em 2em ;
    -webkit-box-shadow: -2px 13px 42px -17px rgba(0, 0, 0, 0.8);
    -moz-box-shadow: -2px 13px 42px -17px rgba(0, 0, 0, 0.8);
    box-shadow: -2px 13px 42px -17px rgba(0, 0, 0, 0.8);

 

  }
    h1 {
      text-align: left;

      color: #131313;
      line-height: 90%;
    }
    
}


.btn-reserva {
    @include button($secondary);

    
}

.btn-reserva:hover {
    background: #f4f4f4;
    color: #131313;
    box-shadow: 0;
    border-color: #e72de7;
}

.btn-reserva::after {
    content: '\2192';
    margin-left: 5%;
}

</style>