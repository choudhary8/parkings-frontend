<template>
  <nav class="navbar__class">
    <div class="navbar__container">
      <div class="navbar__links">
        <img
          class="logo__img"
          src="../assets/images/parkingIcon.png"
          alt="logo"
        />
        <div class="mobile__nav">
          <div class="logo">
            <img src="../assets/images/parkingIcon.png" alt="logo" />
            <h2>Parkings</h2>
          </div>
          <div class="toggle__icons" v-if="isAuthenticated">
            <div @click="toggler()">
              <i
                :class="{
                  fas: true,
                  'fa-times': showLinks,
                  'fa-bars': !showLinks,
                }"
              ></i>
            </div>
          </div>
        </div>
        <ul
          :class="{ nav__ul: true, dropDown: !showLinks }"
          v-if="isAuthenticated"
        >
          <li class="nav__item">
            <router-link :to="routerLinks[0]">Search Parking</router-link>
          </li>
          <li class="nav__item">
            <router-link :to="routerLinks[1]">My Bookings</router-link>
          </li>
          <li class="nav__item">
            <router-link :to="routerLinks[2]">Upload Parkings</router-link>
          </li>
          <li class="nav__item">
            <router-link :to="routerLinks[3]">Booked Spaces</router-link>
          </li>
        </ul>
      </div>
      <!-- desktop -->
      <a
        :class="{ signout__desktop: true, dropDown: showLinks }"
        @click="logout()"
        v-if="isAuthenticated"
        >Signout</a
      >
      <!-- mobile -->
      <a
        :class="{ signout: true, dropDown: !showLinks }"
        @click="logout()"
        v-if="isAuthenticated"
        >Signout</a
      >
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppNavbar",
  data() {
    return {
      routerLinks: [
        { name: "searchParkings" },
        { name: "myBookings" },
        { name: "uploadParkings" },
        { name: "bookedSpaces" },
      ],
      showLinks: false,
    };
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    toggler() {
      this.showLinks = !this.showLinks;
    },
    logout() {
      this.$store
        .dispatch("logout")
        .then(() => this.$router.push({ name: "login" }));
    },
  },
};
</script>

<style scoped>
.navbar__class {
  background: linear-gradient(45deg, #b9def3, #8fbbee);
}
.navbar__container {
  width: 95%;
  max-width: 1077px;
  margin: auto;
  padding: 0.75% 2.5%;
}
.logo__img {
  width: 4%;
  margin-right: 0.5em;
  display: none;
  height: 90%;
}
.mobile__nav {
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
}
.logo {
  display: flex;
}
.logo img {
  width: 8%;
  margin-right: 0.5em;
  height: 90%;
}
.nav__ul {
  padding-top: 1%;
}
.nav__item {
  padding-top: 0.5%;
  transition: 0.5s;
}
.nav__item:hover {
  background: #56a0d1;
}
.nav__item a {
  font-size: 1.15em;
  color: white;
  padding: 0.25em;
  text-decoration: none;
}
.signout {
  padding-top: 0.5em;
  display: block;
  cursor: pointer;
  font-size: 1.15em;
  padding: 0.25em;
  padding-bottom: 0;
  color: white;
  transition: 0.5s;
}

.signout:hover {
  background: #56a0d1;
  /* padding: 0.25em; */
}
.signout__desktop {
  display: none;
  cursor: pointer;
  text-decoration: none;
  
}
.dropDown {
  display: none;
  transition: 5s;
}

@media (min-width: 1024px) {
  .toggle__icons {
    display: none;
  }
  .signout__desktop {
    display: inline-block;
  }
}

@media (min-width: 767px) {
  .toggle__icons {
    display: none;
  }
  .signout__desktop {
    display: inline-block;
  }
  .logo img {
    width: 8%;
    margin-right: 0.5em;
    height: 90%;
  }
}

@media (min-width: 539px) {
  .toggle__icons {
    display: none;
  }
  .navbar__container {
    display: flex;
    justify-content: space-between;
  }
  .navbar__links {
    display: flex;
  }
  .logo__img {
    display: inline-block;
  }
  .logo img {
    display: none;
  }
  .nav__ul {
    display: flex;
    text-align: center;
    margin-left: 1em;
    padding-top: 0;
  }
  .nav__item {
    padding: 0;
    padding: 0.5em;
    margin: auto;
  }
  .signout {
    display: none;
  }
  .signout__desktop {
    display: inline-block;
    font-size: 1.15em;
    cursor: pointer;
    margin: auto 0;
    color: white;
    padding: 0.25em 0;
    transition: 0.5s;
  }
  .signout__desktop:hover {
    background: #e91e63;
    padding: 0.25em;
  }
}
</style>
