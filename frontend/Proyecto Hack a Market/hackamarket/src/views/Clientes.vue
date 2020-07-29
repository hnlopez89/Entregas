<template>
  <div class="clientes">
    <vue-headful title=" Listado clientes " />
    <!-- APLICAMOS COMPONENTE REGISTRADO -->
    <clientes v-on:datos="mostrarInfoCliente" v-on:borrar="borrandoCliente" :clientes="clientes" />
    <!-- APLICAMOS V-SHOW PARA MOSTRAR DATOS A MODIFICAR -->
    <div v-show="seeModal" class="modal">
      <div class="modalBox">
        <h3>Actualiza los datos de tu cliente:</h3>
        <p>ID del cliente: {{idCliente}}</p>
        <input type="text" v-model="nombreActualizado" placeholder="Nombre del cliente" />
        <br />
        <input type="text" v-model="usuarioActualizado" placeholder="Usuario del cliente" />
        <br />
        <input type="text" v-model="emailActualizado" placeholder="Email del cliente" />
        <br />
        <input type="text" v-model="passwordActualizado" placeholder="Password del cliente" />
        <br />
        <input type="text" v-model="fotoActualizada" placeholder="Foto del cliente" />
        <br />
        <button @click="seeModal =! seeModal">Cancelar</button>
        <button @click=" actualizarCliente() ">Actualizar Cliente</button>
      </div>
    </div>
  </div>
</template>

<script>
//IMPORTO COMPONENTE DE TITULO DE LAS PAGINAS
import axios from "axios";
import clientes from "@/components/ClientesComp.vue";

export default {
  // REGISTRO COMPONENTE
  name: "Clientes",
  components: {
    clientes,
  },
  data() {
    return {
      //VARIABLE DE TITULO DE ESTA VISTA
      clientes: [],
      idCliente: "",
      nombreActualizado: "",
      usuarioActualizado: "",
      emailActualizado: "",
      passwordActualizado: "",
      fotoActualizada: "",
      seeModal: false,
    };
  },
  methods: {
    actualizarCliente() {
      var self = this;
      axios
        .put("http://localhost:3050/update/" + self.idCliente, {
          nombre: self.nombreActualizado,
          usuario: self.usuarioActualizado,
          email: self.emailActualizado,
          password: self.passwordActualizado,
          foto: self.fotoActualizada,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      location.reload();
    },
    mostrarInfoCliente(datosCliente) {
      this.nombreActualizado = datosCliente.nombre;
      this.usuarioActualizado = datosCliente.usuario;
      this.emailActualizado = datosCliente.email;
      this.passwordActualizado = datosCliente.password;
      this.fotoActualizada = datosCliente.foto;
      this.idCliente = datosCliente.id;

      this.seeModal = true;
    },
    borrandoCliente(indiceCliente) {
      var self = this;
      axios
        .delete("http://localhost:3050/delete/" + indiceCliente)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      location.reload();
    },
    //FUNCIÓN PARA CONSEGUIR MIS CLIENTES
    getClientes() {
      var self = this;
      //LLAMADA DE AXIOS A LA API
      axios
        .get("http://localhost:3050/clientes")
        .then(function (response) {
          self.clientes = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  //APLICAMOS FUNCIÓN EN EL HOOK CREATED
  created() {
    this.getClientes();
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
}
.modalBox {
  background-color: grey;
  box-shadow: 0px 2px 16px 2px rgba(0, 0, 0, 0.5);
  margin: 0 auto;
  text-align: center;
  border-radius: 10px;
  width: 500px;

  overflow: hidden;
}
</style>