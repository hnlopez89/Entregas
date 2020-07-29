<template>
  <div>
    <h1>Visita nuestros hoteles</h1>
    <!-- Aplicamos v-model para el filtrado de datos -->

    <input type="search" v-model="search" placeholder="Encuentra tu Hotel" />
    <ul>
      <!-- ESCOGEMOS VALORES DEL ARRAY DEL COMPONENTE -->

      <li v-for="producto in filtered" :key="producto.id">
        <img :src="producto.imagen" />
        <p>
          <b>Nombre:</b>
          {{producto.nombre}}
        </p>
        <p>
          <b>Stock:</b>
          {{producto.stock}}
        </p>
        <p
          :class="{green: producto.disponibilidad===disponibilidad,
        red: producto.disponibilidad!==disponibilidad}"
        >
          <b>Disponible:</b>
          {{producto.disponibilidad}}
        </p>
        <br />
        <button v-if="producto.stock >0" @click="reservar()">Reservar</button>
        <button v-if="producto.stock >0" @click="comprar()">Comprar</button>
        <p id="full" v-if="producto.stock === 0">*No quedan habitaciones libres*</p>
      </li>
    </ul>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  //Exportamos el componente e indicamos el tipo de dato

  name: "ProductosComp",
  props: {
    productos: Array,
  },
  data() {
    return {
      //Devolvemos los datos filtrados si hemos hecho busqueda

      search: "",
      ver: true,
      disponibilidad: "Disponible",
    };
  },

  computed: {
    //Aplicamos filtro mediante la función
    filtered() {
      if (!this.search) {
        return this.productos;
      }
      return this.productos.filter((item) =>
        item.nombre.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },

  methods: {
    reservar(index) {
      Swal.fire("Enhorabuena!", "La reserva se ha confirmado!", "success");
    },
    comprar(index) {
      Swal.fire("Enhorabuena!", "Gracias por tu compra!", "success");
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  font-size: 2.5rem;
}

input {
  margin-left: 42.5%;
  text-align: center;
  padding: 0.5rem;
}

ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 100%;
}
li {
  display: flex;
  flex-direction: column;
  padding: 3rem;
  border: solid 0.1rem beige;
  border-radius: 10%;
  margin: 1rem;
}

button {
  padding: 0.5rem;
  margin: 0.5rem 3rem;
  font-size: 1rem;
  font-weight: bold;
}
.red {
  color: brown;
}
.green {
  color: green;
}
#full {
  color: red;
  font-weight: bold;
  font-size: 1.2rem;
}
</style>