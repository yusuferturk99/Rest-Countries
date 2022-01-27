<template>
  <section>
    <div>
      <h4 id="app">Welcome to the Page of Zimbabwe Projects</h4>
      <div style="display: inline-block;" >
        <b-card
          title="New Energy, Green Energy!"
          img-src="https://media.nationalgeographic.org/assets/photos/818/719/3d97f911-594f-4257-880c-d9aa1c6da22d.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="m-5"
        >
          <b-card-text>
            The wind turbines will boost the economy of Zimbabwe.
          </b-card-text>

          <b-button href="#" variant="success">Send your bid !</b-button>
        </b-card>
      </div>
      <div style="display: inline-block;">
        <b-card
          title="Go Parks & Take The Lovely Air!"
          img-src="https://media.nationalgeographic.org/assets/photos/818/719/3d97f911-594f-4257-880c-d9aa1c6da22d.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mr-5"
        >
          <b-card-text>
            Socialisation is everything for Zimbabweans!
          </b-card-text>

          <b-button href="#" variant="primary">Send your bid !</b-button>
        </b-card>
      </div>
      <div style="display: inline-block;">
        <b-card
          title="No More 8+ Hours of Travel: Railways!"
          img-src="https://media.nationalgeographic.org/assets/photos/818/719/3d97f911-594f-4257-880c-d9aa1c6da22d.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="m-5"
        >
          <b-card-text>
            Zimbabwe State Railways will do best to take you anywhere asap!
          </b-card-text>

          <b-button href="#" variant="success">Send your bid !</b-button>
        </b-card>
      </div>
      <div style="display: inline-block;">
        <b-card
          title="New Energy, Green Energy!"
          img-src="https://media.nationalgeographic.org/assets/photos/818/719/3d97f911-594f-4257-880c-d9aa1c6da22d.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mr-5"
        >
          <b-card-text>
            The wind turbines will boost the economy of Zimbabwe.
          </b-card-text>

          <b-button href="#" variant="primary">Send your bid !</b-button>
        </b-card>
      </div>
      <div>
        <b-card :fields="fields" style="max-width: 20rem" class="m-5">
          <!-- <template>
            <img :src="data.value" alt="width: 150px">
          </template> -->
        </b-card>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
  fields: {}
    }
  },
  methods: {
    getCardData () {
      axios
          .post("Project/ProjectList")
          .then((res) => {
            this.items = res.data
            console.log(res)
          })
          .catch(error => {
            console.log(error)
            })
    }
  },
  mounted () {
    this.getCardData();
  }
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>