<template>
  <div>
    <div id="app">
      <div class="main-wrapper main-wrapper-1 py-3">
        <!-- <Sidebar></Sidebar> -->
        <!-- <Navbar></Navbar> -->
        <!-- Main Content -->
        <div class="main-content">
          <section class="section container card card-fullheight py-3">
            <div class="section-header">
              <h1>Fusion</h1>
            </div>

            <div class="section-body section_body">
              <div
                class="d-flex justify-content-start"
                v-if="!excludeValues.includes(field_label)"
              >
                <input
                  type="text"
                  placeholder="Rechercher avec  profilID"
                  class="form-control form-control-rounded mb-2"
                  v-model="profilid"
                  @keypress.enter="searchMerge()"
                />
              </div>

              <div class="btn_action">
                <div class="item">
                  <button
                    class="btn btn-primary btn-rounded my-3"
                    @click="selectAllOld()"
                  >
                    Garder les nouvelles données
                  </button>
                  <button
                    class="btn btn-primary btn-rounded ml-5 my-3"
                    @click="selectAllNew()"
                  >
                    Garder les anciennes données
                  </button>
                  <button
                    class="btn btn-primary btn-rounded ml-5 my-3"
                    @click="AricheData()"
                  >
                    Archiver
                  </button>
                </div>
              </div>

              <div class="row">
                <div class="col-md-8">
                  <div class="row">
                    <!-- Old -->
                    <div class="col-md-6">
                      <div class="d-flex justify-content-start">
                        <h4>Ancien (APAYM)</h4>
                      </div>

                      <div
                        v-for="(item, field_label, index) in oldData"
                        :key="index"
                      >
                        <label v-if="!excludeValues.includes(field_label)">
                          {{ field_label }}
                        </label>

                        <div
                          class="d-flex justify-content-start"
                          v-if="!excludeValues.includes(field_label)"
                        >

                          <div v-if="isImage.includes(field_label)">
                              <img :src="item" :alt="item">
                          </div>

                          <input
                            :id="field_label"
                            type="text"
                            :placeholder="field_label"
                            class="form-control form-control-rounded mb-2"
                            :value="item"
                            readonly
                            :key="index"
                            :ref="field_label"
                          />

                          <input
                            :value="item"
                            type="radio"
                            :name="field_label"
                            @change="checkOtherValue(field_label, item)"
                          />
                        </div>
                      </div>
                    </div>
                    <!-- Old End -->

                    <!-- New -->
                    <div class="col-md-6">
                      <div class="d-flex justify-content-start">
                        <h4>Nouveau (UNITEC)</h4>
                      </div>

                      <div
                        v-for="(item, field_label, index) in mergeData"
                        :key="index"
                      >
                        <label v-if="!excludeValues.includes(field_label)">
                          {{ field_label }}
                        </label>

                        <div
                          class="d-flex justify-content-start"
                          v-if="!excludeValues.includes(field_label)"
                        >

                          

                          <input
                            :id="field_label"
                            type="text"
                            :placeholder="field_label"
                            class="form-control form-control-rounded mb-2"
                            :value="item"
                            readonly
                            :ref="field_label"
                          />

                          <input
                            :value="item"
                            type="radio"
                            :name="field_label"
                            @change="checkOtherValue(field_label, item)"
                          />
                        </div>
                      </div>
                    </div>
                    <!-- End New -->
                  </div>
                </div>

                <!-- Final -->
                <div class="col-md-4">
                  <h4>Final</h4>

                  <div
                    v-for="(item, field_label, index) in finalList"
                    :key="index"
                  >
                    <label v-if="!excludeValues.includes(field_label)">
                      {{ field_label }}
                    </label>

                    <div
                      class="d-flex justify-content-start"
                      v-if="!excludeValues.includes(field_label)"
                    >
                      <input
                        type="text"
                        :placeholder="field_label"
                        class="form-control form-control-rounded mb-2"
                        :value="item"
                        readonly
                      />
                    </div>
                  </div>
                </div>
                <!-- Final End -->
              </div>
            </div>

            <button
              class="btn btn-primary btn-rounded w-100 py-3 mt-lg-5"
              @click="submitFinalData"
            >
              Mettre à jour
            </button>
          </section>
        </div>

        <VueModal v-show="isModalVisible" @close="closeModal">
          <template #header>
            <h2 class="titre text-uppercase" style="padding-left: 3.5%">
              Connexion
            </h2>
          </template>

          <template #body> </template>

          <template #footer> </template>
        </VueModal>

        <!-- <Footer></Footer> -->
      </div>
    </div>
  </div>
</template>

<script>
// import Navbar from "../layouts/Navbar.vue";
// import Sidebar from "../layouts/Sidebar.vue";
// import Footer from "../layouts/Footer.vue";

// import ListContent from "../views/contents/ListContent.vue";
import VueModal from "../tools/VueModal.vue";

export default {
  data() {
    return {
      oldData: null,
      mergeData: null,
      profilid: 211508,
      finalList: {
        profil_id: null,
        id_MerchantProfil: null,
        subMerchantId: null,
        outlet: null,
        tpeidentifiant: null,
        MerchantCategoryCode: null,
        nom_complet: null,
        MerchantBusinessName: null,
        MerchantCity: null,
        MerchantCountryCode: null,
        suffixVpan: null,
        vpan: null,
        MerchantEmail: null,
        MerchantPhone: null,
        MerchantRegistre: null,
        marchantRegistreCommercePhoto: null,
        MerchantAdresse: null,
        MerchantLogo: null,
        datecreate: null,
        formejuridique: null,
        status: null,
        mvv: null,
        status_compensation: null,
        taux_compensation: null,
        agent: null,
        partenaire: null,
        type_permis: null,
        immatriculation: null,
        licence: null,
        carte_grise: null,
        assurance: null,
        printed: null,
        slug: null,
        taux_orange: null,
        taux_mtn: null,
        taux_moov: null,
        taux_wave: null,
        taux_bicici: null,
        taux_tpe: null,
        description: null,
        paye_vite: null,
        verified: null,
        pay_fees: null,
        pay_tip: null,
        bicici_boutique: null,
        link_facebook: null,
        link_instagram: null,
        link_whatsapp: null,
        limit_min: null,
        limit_max: null,
        link_site: null,
        link_youtube: null,
        link_twitter: null,
        send_sms: null,
        show_collect: null,
        loyalty_card: null,
        nbre_points: null,
        blacklister: null,
        cadeauoffert: null,
        memo: null,
        montantrequis: null,
        codeconnexion: null,
        merchantTerminal: null,
        mode_paiement: null,
        succursale: null,
        liencallback: null,
        lienredirection: null,
        activer_duree_lien: null,
        montantfixe: null,
        page_custom: null,
        mrch_number_fnce: null,
        mrch_town: null,
        mrch_neighborhood: null,
        mrch_gps: null,
        mrch_dfe: null,
        mrch_ci_pme: null,
        mrch_employee_number: null,
        mrch_interior_photo: null,
        mrch_exterior_photo: null,
        mrch_bank: null,
        mrch_has_public_personality: null,
        mrch_business_abbr: null,
        mrch_indice_surcursale_etranger: null,
        mrch_business_chiffre_aff_ecoule: null,
        mrch_business_size: null,
        mrch_number_sales_points: null,
        mrch_nb_transcation_average_by_month: null,
        mrch_chiffre_aff: null,
        mrch_civility: null,
        mrch_local_type: null,
        mrch_schedule_start: null,
        mrch_schedule_day_start: null,
        mrch_transcation_volume_by_month: null,
        mrch_chiff_aff_by_month: null,
        mrch_number_client_by_day: null,
        merge_is_completed: null,
        createdAt: null,
        merge_at: null,
      },
      excludeValues: [
        "id_MerchantProfil",
        "merge_is_completed",
        "createdAt",
        "merge_at",
        "save_raison",
        "profilid",
        "profil_id",
      ],
      isImage : [
        'marchantRegistreCommercePhoto',
        'MerchantLogo',
        'mrch_interior_photo',
        'mrch_exterior_photo'
      ],
      displayNew: null,
      displayOld: null,
      isModalVisible: false,
    };
  },
  components: {
    VueModal,
    // Navbar,
    // Sidebar,
    // Footer,
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    getMergeData() {
      const getData = async () =>
        await this.axios
          .get("/v1/merge-manage", { params: { profil_id: this.profilid } })
          .then((res) => {
            this.mergeData = res.data.merge;
            // this.mergeData.profil_id = this.mergeData.profilid;

            this.oldData = res.data.old;
            // this.oldData.profil_id = this.oldData.profilid;

            this.finalList.profil_id = this.oldData.profilid;

            // alert(this.finalList.profil_id );

            // console.log(this.$refs);
          })
          .catch((e) => {
            console.log(e);
            if (e?.response?.data?.code == 401) {
              this.$router.push("connexion");
            }
            console.log(e?.response);
          });
      getData();
    },
    checkOtherValue(field_label, item) {
      if (field_label in this.finalList) {
        if (this.finalList[field_label] != null) {
          // console.log("ref checker");
          const $el = this.$refs[field_label];
          console.log($el);
          // console.log($el);
          // $el.focus()
        }

        this.finalList[field_label] = item;
      }
    },
    submitFinalData() {
      this.finalList.profil_id = this.finalList.profilid;

      this.showModal();

      if (this.finalList.profil_id == null) {
        return {
          status: 400,
          message: "Profil id vide",
        };
      }

      this.axios
        .post("api/v1/upate-apaym-pro", this.finalList, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          if (res.status == 200 && res.data.responseCode == 1) {
            this.$swal(res.data.responseMessage);
          }
        })
        .catch((e) => {
          if (e?.response?.status == 401) {
            this.$swal("Une erreur est survenue");
          }
        });
    },
    selectAllOld() {
      // Object.keys(this.$refs).forEach(el => {
      //   let rad = this.$refs[el][0]
      //   console.log(rad.value)
      // })

      this.displayOld = !this.displayOld;
      this.finalList = this.oldData;
      //TODO  => Hide New
    },
    selectAllNew() {
      // console.log(this.$refs)
      this.finalList = this.mergeData;
      this.displayOld = !this.displayNew;
      //TODO  => Hide New
    },
    searchMerge() {
      this.getMergeData();
      this.checkIsSimilar();
    },
    closeModal() {
      this.isModalVisible = false;
    },
    checkIsSimilar() {

      let o1 = this.oldData;
      let o2 = this.mergeData;

      let diff = Object.keys(o2).reduce((diff, key) => {
        if (o1[key] === o2[key]) return diff;
        return {
          ...diff,
          [key]: o2[key],
        };
      }, {});

      Object.entries(diff).forEach(el =>  {
        let $el = this.$refs[el[0]]

        if(typeof $el != 'undefined'){
          $el[0].style.backgroundColor = '#66bb6a'
          $el[1].style.backgroundColor = '#66bb6a'
        }
      }
      );

    }
  },
  mounted() {
    this.getMergeData();
  },
};
</script>

<style lang="css">
input[type="checkbox"],
input[type="radio"] {
  /* box-sizing: border-box; */
  padding: 0;
  border: 0px;
  width: 9%;
  height: 2.48888em;
  border: 1px solid #ced4da !important;
  border-color: #ced4da;
}

.main-content {
  padding-left: 280px;
  padding-right: 30px;
  padding-top: 0px;
  width: 100%;
  position: relative;
}

.btn_action {
  display: flex;
  justify-content: start;
}

.item {
  display: flex;
  justify-content: space-between;
}
</style>

