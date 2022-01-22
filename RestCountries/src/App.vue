<template>
  <div id="app">
    <div style="font-family: Calibri; color: black;">
      <h1>List of Countries</h1>
      <p style="font-size: large">Hello visitor, welcome to our website! Here, you can search for countries from all around the world. <br> So, what are you waiting for? Start searching! </p>
      <p>Note: You can search for countries with the parameters as well.</p>
    </div>
      <div style="background: #eff3ef;"><br></div>
    <div style="background: #eff3ef;">
    <div>
      <b-form-input
          placeholder="Search in all parameters"
          id="bigbar"
          v-model="searchText"
      ></b-form-input>
      <div>
        <b-dropdown id="options" text="Filter">
          <b-dropdown-item v-b-toggle:my-button>name</b-dropdown-item>
          <b-dropdown-item v-b-toggle:my-button1>capital</b-dropdown-item>
          <b-dropdown-item v-b-toggle:my-button2>region</b-dropdown-item>
          <b-dropdown-item v-b-toggle:my-button3>flag</b-dropdown-item>
        </b-dropdown>
      </div>
    </div>

    <div style="margin-bottom: 60px;">
      <b-collapse id="my-button">
      <b-form-input  style="width: 47%; float: left; margin-right: 25px;" placeholder="name" v-model="searchText1"></b-form-input>
      </b-collapse>
      <b-collapse id="my-button1">
      <b-form-input style="width: 24%; float: left; margin-right: 25px" placeholder="capital" v-model="searchText2"></b-form-input>
      </b-collapse>
      <b-collapse id="my-button2">
      <b-form-input style="width: 12%; float: left; margin-right: 25px" placeholder="region" v-model="searchText3"></b-form-input>
      </b-collapse>
      <b-collapse id="my-button3">
      <b-form-input style="width: 10%; float: left; margin-right: 25px" placeholder="flag" v-model="searchText4"></b-form-input>
      </b-collapse>

    </div>

      <div style="background: white;"><br></div>
    </div>

    <div class="text-center justify-content-between mx-auto" v-if="isLoading" style="width: 15rem; height: 15rem;">
      <b-spinner
        v-for="variant in variants"
        :variant="variant"
        :key="variant"
      ></b-spinner>
    </div>

    <b-table striped hover :items="filteredData" :fields="fields" v-else id="table" >

      <template #cell(flag)="data">
        <img :src="data.value" style="width: 70px" />
      </template>
    </b-table>

  </div>
</template>

<script>
import { BTable } from "bootstrap-vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    BTable,
  },
  data() {
    return {
      items: [],
      posts: null,
      fields: ["name", "capital", "region", "flag"],
      isLoading: false,
      searchText: "",
      searchText1: "",
      searchText2: "",
      searchText3: "",
      searchText4: "",
      inputbox: false,
      variants: ['primary']
    };
  },
  computed: {
    filteredData() {
      let text = ""
      if (this.searchText !== "") {
        text = this.searchText
        return this.items.filter((x) =>
          x.name.toLowerCase().includes(text.toLowerCase())
      )
      } else if (this.searchText1 !== "") {
        text = this.searchText1
        return this.items.filter((x) =>
          x.name.toLowerCase().includes(text.toLowerCase())
      )
      } else if (this.searchText2 !== "") {
        text = this.searchText2
        return this.items.filter((x) =>
          (x.capital + "").toLowerCase().includes(text.toLowerCase())
      )
      } else if (this.searchText3 !== "") {
        text = this.searchText3
        return this.items.filter((x) =>
          x.region.toLowerCase().includes(text.toLowerCase())
      )
      } else {
        text = this.searchText4
        return this.items.filter((x) =>
          x.flag.toLowerCase().includes(text.toLowerCase())
      )
      }
    }
  },
  methods: {
    // getFlag(variable){
    //   console.log("variable flag",variable)
    //   return variable.flag
    // },
    getCountries() {
      this.isLoading = true;
      axios
          .get("https://restcountries.com/v2/all/")
          .then((res) => {
            this.items = res.data;
            this.isLoading = false;
          })
          .catch((e) => {
            console.log(e);
          });
    },
    toggleInput () {
      this.inputbox = !this.inputbox
    }
  },
  mounted() {
    this.getCountries();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 10px;
}
#table {
  text-align: left;
  background: #e0e6eb;
}
#bigbar {
  margin-bottom: 15px;
  width: 90%;
  float: left;
}
#options {
  margin-bottom: 20px;
  width: 7%;
}
#bigbar #options {
  display: inline-block;
}
.lds-facebook {
  display: inline-block;
  position: relative;
  width: 100%;
  height: 80px;
  background-color: rgb(238, 238, 238);
}
.lds-facebook div {
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 16px;
  background: indigo;
  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.lds-facebook div:nth-child(1) {
  left: 8px;
  animation-delay: -0.24s;
}
.lds-facebook div:nth-child(2) {
  left: 32px;
  animation-delay: -0.12s;
}
.lds-facebook div:nth-child(3) {
  left: 56px;
  animation-delay: 0;
}
@keyframes lds-facebook {
  0% {
    top: 8px;
    height: 64px;
  }
  50%,
  100% {
    top: 24px;
    height: 32px;
  }
}
</style>
