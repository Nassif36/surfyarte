<template>
  <div class="clases">
    <div class="form-clases">
      <form action="#">
        <div class="campo">
          <label for="nivel">Dia</label>
          <input type="date" placeholder="Elegí tu día!">
        </div>
        <div class="campo">
          <label for="horario">Horario</label>
          <input type="time" placeholder="Elegí un horario">
        </div>
        <div class="campo">
          <label for="select">Nivel</label>
          <select name="select" id="">
            <option value="principiante">Principiante</option>
            <option value="intermedio">Intermedio</option>
            <option value="avanzado">Avanzado</option>
            <option value="personalizado">Personalizado</option>
          </select>
        </div>
        <div class="campo">
          <div class="btn-form">
            Reservar
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>


export default {
  name: 'Clases',

}

</script>
<style lang="scss" scoped>

  .form-clases {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 50vh;
    form {
      display: flex;
      align-items: center;
      gap: 1em;
      

      .campo {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        input, select {
         
          @include button($blanco);
           color: black;
          
        }
        .btn-form {
            @include button($primary);
            margin-top: 33%;
            cursor: pointer;
            &:hover {
              background: $blanco;
              transform: rotate(5deg);
              color: $negro;
            }
        }
       
      }
    }
  }

  .clases {
    padding-left: 90px;
    height: 100vh;
    background: #e72de7;
  }
</style>