<template>

   <main class="home-principal">
            
    <section class="home-text">
      <div class="home-text-h1">
        <h1>Aprende</h1>
          <h1>divertite</h1>
      <h1>puli tu surfing</h1>
      <a href="" class="btn-reserva">Reserva</a>
      
      </div>
      
    </section>
    <section class="home-fade">
     <div class="home-grid">
        <div class="fade-item">
        <img src="~@/assets/group.png" alt="">
      </div>
     
     </div>
    </section>
  </main>



</template>

<script>


export default {
  name: 'Home',
  

}

</script>

<style scoped lang="scss">



.home-principal {
    display: flex;
    height: 100vh;
    background: #f4f4f4;
     background: linear-gradient( to right, $blanco 50%, $primary 0);
     .home-text {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width:100%;
    flex-basis: 50%;
    height: 85%;

  .home-text-h1 {

    border-radius: 1px;
    padding: 1em 2em ;
  
    border-bottom: 5px solid black;
    
  }
    h1 {
      text-align: left;
      color: #131313;
      line-height: 90%;
    }
    
}
     .home-fade {
       display: flex;
       align-items: center;
       justify-content: center;
       flex-basis: 50%;
        height:100vh;
      
       .home-grid {
         display: grid;

         padding:0 12%;
         gap: 2em 2em;
          place-content: center;
         justify-content: space-around;
         width: 100%;
         .fade-item {

           
          max-width: 450px;
          max-height: 70vh;
          padding: 5% 0;
         
            img {
                display: block;
                height: 100%;
                width: 100%;
                max-width: 650px;
                max-height: 900px;
                aspect-ratio: 1 / 2;
                object-fit: cover;
                @include shadow;  
            } 
          
           }
           

         }
       }

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
    content: '\2192';
    margin-left: 5%;
}

</style>