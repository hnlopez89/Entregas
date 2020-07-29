<template>
  <div class="productos">
    <vue-headful title=" Listado productos " />
    <!-- APLICAMOS COMPONENTE REGISTRADO -->
    <productos v-on:seeAlert="nombreProducto" :productos="productos" />
  </div>
</template>

<script>
//IMPORTO COMPONENTE DE TITULO DE LAS PAGINAS
import axios from "axios";
import productos from "@/components/ProductosComp.vue";

export default {
  name: "Productos",
  // REGISTRO COMPONENTE

  components: {
    productos,
  },
  data() {
    return {
      productos: [],
    };
  },
  methods: {
    //FUNCIÓN PARA CONSEGUIR MIS PRODUCTOS
    getProductos() {
      var self = this;
      //LLAMADA DE AXIOS A LA API
      axios
        .get("http://localhost:3050/productos")
        .then(function (response) {
          self.productos = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    nombreProducto(index) {
      let productName = this.nombre;
      alert("Producto: " + productName);
    },
  },
  created() {
    this.getProductos();
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
  background-color: #fefefe;
  margin: 2% auto;
  padding: 3rem;
  width: 80%;
  border: 1px solid #888;
}
</style>