<template>
<section>
    <div>
<h2 id="app">Welcome to the Contacts Page!</h2>
    </div>
    <div>
    <b-table id="table" striped hover :items="items" v-model="isContacts"></b-table>
  </div>
</section>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          { first_name: 'Dickerson', last_name: 'Macdonald', phone_number: '+26351238412841', _rowVariant: 'primary' },
          { first_name: 'Larsen', last_name: 'Shaw', phone_number: '+26352317124712', _rowVariant: 'success'  },
          { first_name: 'Geneva', last_name: 'Wilson', phone_number: '+26352341273342', _rowVariant: 'primary'  },
          { first_name: 'Jami', last_name: 'Carney', phone_number: '+26352134371231', _rowVariant: 'success'  },
          { first_name: 'Henry', last_name: 'Milton', phone_number: '+26354123427843', _rowVariant: 'primary'  },
        ],
        isContacts: false,
      }
    },
    computed: {
      ContactsTable () {
        if (this.formData == true) {
          return !this.toggleContacsTable
        } else {
          return this.toggleContacsTable
        }
      }
    },
    methods: {
      toggleContacsTable () {
        this.isContacts = !this.isContacts
      }
    }
}
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
#table {
  -webkit-font-smoothing: antialiased;
  text-align: center;
  color: black;
  max-width: 60%;
  margin: auto;
  margin-top: 15px;
}
</style>