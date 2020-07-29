<template>
  <div>
    <h1>Listado de clientes</h1>
    <!-- Aplicamos v-model para el filtrado de datos -->

    <input type="search" v-model="search" placeholder="Encuentra tu cliente" />

    <ul>
      <!-- ESCOGEMOS VALORES DEL ARRAY DEL COMPONENTE -->

      <li v-for="(cliente, index) in filtered" :key="cliente.id">
        <img :src="cliente.foto" />
        <p>
          <b>Nombre:</b>
          {{cliente.nombre}}
        </p>
        <p>
          <b>Usuario:</b>
          {{cliente.usuario}}
        </p>
        <p>
          <b>Email:</b>
          {{cliente.email}}
        </p>
        <p>
          <b>Password:</b>
          {{cliente.password}}
        </p>
        <button id="Editar" @click="enviarDatosCliente(index)">Editar</button>
        <button id="Borrar" @click="enviarIndiceCliente(index)">Borrar</button>
      </li>
    </ul>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  //Exportamos el componente e indicamos el tipo de dato

  name: "Clientes",
  props: {
    clientes: Array,
  },
  data() {
    //Devolvemos los datos filtrados si hemos hecho busqueda

    return {
      search: "",
    };
  },
  computed: {
    //Aplicamos filtro mediante la función

    filtered() {
      if (!this.search) {
        return this.clientes;
      }
      return this.clientes.filter((item) =>
        item.nombre.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
  methods: {
    enviarDatosCliente(index) {
      let datosCliente = this.clientes[index];
      this.$emit("datos", datosCliente);
    },
    enviarIndiceCliente(index) {
      Swal.fire("Eliminado!", "El usuario ha sido borrado", "success");
      let indiceCliente = this.clientes[index].id;
      this.$emit("borrar", indiceCliente);
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

#Editar {
  background-color: yellow;
}

#Borrar {
  background-color: red;
}
</style>