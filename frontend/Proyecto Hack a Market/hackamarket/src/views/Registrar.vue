<template>
  <div id="form">
    <vue-headful title=" Registrandote " />

    <h1>Formulario para registrarte:</h1>

    <p v-show="errorMsg">*Tienes campos vacíos</p>
    <input type="text" v-model="nombre" placeholder="Nombre del cliente" />
    <input type="text" v-model="usuario" placeholder="Usuario del cliente" />
    <input type="text" v-model="email" placeholder="Email del cliente" />
    <input type="text" v-model="password" placeholder="Contraseña del cliente" />
    <input type="text" v-model="foto" placeholder="Fotografía (en url) del cliente" />

    <br />
    <button @click="validatingData()">Crear Cliente</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Registrar",
  data() {
    return {
      nombre: "",
      usuario: "",
      email: "",
      password: "",
      foto: "",
      createClient: false,
      errorMsg: false,
    };
  },
  methods: {
    validatingData() {
      if (
        this.nombre === "" ||
        this.usuario === "" ||
        this.email === "" ||
        this.password === "" ||
        this.foto === ""
      ) {
        this.errorMsg = true;
        this.createClient = false;
      } else {
        this.errorMsg = false;
        this.createClient = true;
        this.addNewClient();
      }
    },
    addNewClient() {
      if (this.createClient === true) {
        var self = this;
        axios
          .post("http://localhost:3050/add", {
            nombre: self.nombre,
            usuario: self.usuario,
            email: self.email,
            password: self.password,
            foto: self.foto,
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        this.createClient = false;
        this.nombre = "";
        this.usuario = "";
        this.email = "";
        this.password = "";
        this.foto = "";
      } else {
        console.log("Yo no debería estar aquí");
      }
    },
  },
};
</script>

<style scoped>
#form {
  padding: 2rem;
  background-color: grey;
  margin: 2rem;
  max-width: 100%;
  display: flex;
  flex-direction: column;
}

#form h1 {
  color: black;
  text-shadow: 3px 3px 0 var(--clear);
  font-size: 2rem;
  margin-bottom: 1rem;
}

#form input {
  width: auto;
  border: 1px solid black;
  padding: 1rem;
  margin: 0.5rem;
}

#form button {
  background: yellow;
  margin-top: 3rem;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  color: black;
}

button {
  margin: 1rem 6rem;
  font-weight: bold;
}
</style>