<template>
  <div>
    <v-container>
      <v-layout align-center justify-center>
        <div class="pa-md-4 mx-lg-auto" width="400px">
          <div class="my-7">
            <v-icon large centered right> Se Connecter </v-icon>
          </div>

          <v-form ref="form" @submit.prevent="submitLoginForm">
            <v-text-field
              v-model="form.username"
              label="Nom d'utilisateur"
              required
            ></v-text-field>

            <v-text-field
              v-model="form.password"
              label="Mot de passe"
              type="password"
              required
            >
            </v-text-field>

            <div class="w-100">
              <v-btn type="submit" color="primary" class="mr-2">
                Connexion
              </v-btn>

              <v-btn color="secondary" to="/register"> Inscription </v-btn>
            </div>
          </v-form>
        </div>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
// import Token from "../utils/Token";
// import AppStorage from "../utils/AppStorage";

export default {
  name: "LoginComponent",
  data() {
    return {
      form: {
        username: null,
        password: null,
      },
    };
  },
  methods: {
    submitLoginForm() {
      console.log(this.form);

      let username = this.form.username;
      this.form.username = this.form.username?.toLowerCase();

      const LoginUser = async () => {
        await this.axios
          .post("api/login_check", this.form)
          .then((res) => {
            if (res.status == 200) {
              const access_token = res.data.token;

              // if (this.Token.isValid(access_token, username)) {
                //Store data on localStorage
                this.AppStorage.storeData(username, access_token);
                // EventBus.$emit("login");
                // let axios = require("axios");
                const JWTToken = `Bearer ${localStorage.getItem("token")}`;
                this.axios.defaults.headers.common["Authorization"] = JWTToken;

                this.$swal("Bien éffectué", "Vous êtes connecté", "success");
                this.$router.push("/dash");

              // } else {
              //   this.$swal("Bien éffectué", "Vous êtes connecté", "success");
              //   this.$router.push("/dash");

              // }
            } else {
              this.$swal.info("Une erreur est survenue", "success");
            }
          })
          .catch((error) => {
            // console.log(">>>>>>> Error Login");
            // console.log(error);

            if (error?.response?.status == 401) {
              console.log("401");
              this.$swal(
                "Accès invalides",
                "E-mail ou mot de passe incorrect",
                "error"
              );

              // this.$toast.error("Email ou mot de passe invalide");
            } else if (error.response.status == 400) {
              console.log("400");
              // this.$toast.info("Veuillez renseigner tout les champs svp 😉");
            }
          })
          .finally(() => {
            // this.$loading(false);
          });
      };

      LoginUser();
    },
  },
};
</script>

<style scoped></style>
