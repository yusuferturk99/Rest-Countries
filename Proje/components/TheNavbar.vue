<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand
        style="color: rgb(215, 215, 215); font-size: large; margin-left: 25px; margin-right: 30px"
        >Projects of <br />
        Zimbabwe</b-navbar-brand
      >
      <b-img src="https://flagcdn.com/zw.svg" style="width: 100px"></b-img>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-navbar-nav>
        <router-link to="/"
          ><b-nav-item
            style="
              color: rgb(215, 215, 215);
              font-size: large;
              margin-left: 15px;
            "
            right
            href="#"
            ><b-link to="/"
              ><b-button
                style="
                  background-color: rgb(33, 37, 41);
                  border: none;
                  font-size: 18px;
                "
                >Home</b-button
              ></b-link
            ></b-nav-item
          ></router-link
        >
        <router-link to="/"
          ><b-nav-item
            style="
              color: rgb(215, 215, 215);
              font-size: large;
            "
            right
            href="#"
            ><b-link to="/projects"
              ><b-button
                style="
                  background-color: rgb(33, 37, 41);
                  border: none;
                  font-size: 18px;
                "
                >Projects</b-button
              ></b-link
            ></b-nav-item
          ></router-link
        >
      </b-navbar-nav>
      <b-collapse
        id="nav-collapse"
        is-nav
        class="d-flex justify-content-end mr-5"
      >
        <b-navbar-nav>
          <b-nav-item
            style="
              color: rgb(215, 215, 215);
              font-size: large;
            "
            right
            href="#"
            ><b-link to="/login"
              ><b-button
                style="
                  background-color: rgb(33, 37, 41);
                  border: none;
                  font-size: 18px;
                "
                >Login</b-button
              ></b-link
            ></b-nav-item
          >
          <b-nav-item
            style="
              color: rgb(215, 215, 215);
              font-size: large;
            "
            right
            href="#"
            ><b-link to="/signup"
              ><b-button
                style="
                  background-color: rgb(33, 37, 41);
                  border: none;
                  font-size: 18px;
                "
                >Sign up</b-button
              ></b-link
            ></b-nav-item
          >
          <b-nav-item
            style="
              color: rgb(215, 215, 215);
              font-size: large;
              margin-right: 20px;
            "
            right
            href="#"
            ><b-link to="/contacts"
              ><b-button
                style="
                  background-color: rgb(33, 37, 41);
                  border: none;
                  font-size: 18px;
                "
                >Contacts</b-button
              ></b-link
            ></b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
};
</script>

<style scoped>
</style>