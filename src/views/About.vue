<template>
  <div class="about">
    <div class="about-flex">
     <div class="about-text">
        <h2>Acerca de nosotros 🤙</h2>
        <p>
          Director:  Dany Gil Jr <a href="https://www.instagram.com/surfistapensador/">@surfistapensador</a> Campeón Arg   9 veces! <br> Hijo del Pionero del Surf Nacional Daniel Gil. 
        </p>
      <p>
        Arranca el verano en Miramar somos 
        <a href="https://www.instagram.com/escueladesurfyarte/">@escueladesurfyarte</a> contamos con
        amplia experiencia que nos avala hace más de 20 años. Las Clases de
        surf tienen una duración de 2 horas, incluye el equipo, trajes y tablas soft especiales para principiantes. También
        incluye el instructor dentro y fuera del agua! teórica y práctica súper
        completa, para todos los niveles con ejercicios con simuladores en seco
        de <a href="https://www.instagram.com/ikanpariboards/">@ikanpariboards</a> 
      </p>
     </div>

    </div>
    <div class="about-grid">
      
    </div>
    
  </div>
</template>
<script>


export default {
  name: 'About',

}

</script>
<style lang="scss" scoped>
.about {
  @include section($secondary);
  background: linear-gradient(to right, $blanco 50%, transparent 0),url(~@/assets/bg-home.jpg);
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.about-flex {
  display: flex;
  align-items: center;
  justify-content: space-evenly ;
  flex-direction: column;
  min-height: 50vh;
  flex-basis: 47%;


  .about-text{
    text-align: left;
    background: $blanco;
    padding: $separacion;
    border-radius: 3px;
    box-shadow: $shadow;

    h2 {
      text-align: center;
      padding: .5em 1em;
      font-weight: 300;
    }
    p {
      max-width: 59ch;
      background: rgb(255, 255, 255);
      padding: 1em;
      margin: .5em 0;
      border-radius: 3px;

      color: #161616;
      line-height: 130%;
      a {
        font-size: 1.2rem;
        color: $primary;
      }
      &:first-of-type {
        color: $negro;
        margin: 0 auto;
      }
      &:last-of-type::first-letter {
        font-size: 2.4rem;
        padding: 0 .0.9em 0 0;
      }
    }
    
  }
  .about-svg {
    max-width: 20vw;

    svg {
      width: 100%;
      height: 17rem;
      min-width: 333px;
    }
  }
}
</style>
