<template>
  <div class="modal_container">
    <div class="modal-backdrop">
      <div class="modal">
        <div class="modal-header">
          <slot name="header">
            <h2 class="text-uppercase">Connexion</h2>
          </slot>

          <button type="button" class="btn-close" @click="close">x</button>
        </div>

        <!-- 
          <section class="modal-body">
          <input
            type="text"
            class="form-control form-control-rounded mb-2"
            placeholder="Email ou Username"
            :value="item"
            readonly
          />

          <input
            type="text"
            class="form-control form-control-rounded mb-2"
            placeholder="Password"
            :value="item"
            readonly
          />
          <slot name="body"> </slot>
          </section> 
        -->

        <!-- 
          <footer class="modal-footer">
          <slot name="footer"> </slot>
          <button type="button" class="btn-red" @click="close">Fermer</button>
          </footer>
        -->
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VueModal",
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.modal_container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-backdrop {
  /*position: fixed;*/
  top: 0;
  bottom: 0;
  left: 20;
  right: 20;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  position: relative !important;
  background: #ffffff;
  box-shadow: 0px 0px 9px 1px rgb(0 0 0 / 8%) !important;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  width: 20% !important;
  height: 20% !important;
  border-radius: 20px;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
  justify-content: space-around;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #261b64;
  background: transparent;
}

.btn-red {
  color: white;
  background: #d21d3a;
  border: 1px solid #d21d3a;
  border-radius: 2px;
  padding: 1%;
}

h2,
.h2 {
  font-family: "PNCnBlack", serif;
  font-size: 14px;
  margin-bottom: 0 !important;
}
</style>
