<template>
  <div class="navbar">
    <div class="container">
      <router-link to="/" class="navbar__logo">
        <img src="@/assets/images/hedwig-logo.png" alt="Hedwig" />
      </router-link>
      <details class="navbar__user">
        <summary class="navbar__user__btn">
          <font-awesome-icon icon="user" size="lg" />
          <font-awesome-icon icon="caret-down" />
        </summary>
        <div class="navbar__user__dropdown">
          <router-link to="/user/profile">Profile</router-link>
          <a @click.prevent="signout" title="Log out">Log out</a>
        </div>
      </details>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    signout() {
      this.$store.dispatch("signout");
    }
  }
};
</script>

<style lang="scss">
.navbar {
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
  }

  &__logo {
    max-width: 245px;

    @media (max-width: 575px) {
      max-width: 190px;
    }
  }

  &__user {
    position: relative;

    &__btn {
      display: flex;
      align-items: center;
      cursor: pointer;
      outline: none;

      &::-webkit-details-marker {
        display: none;
      }

      .fa-user {
        margin-right: 5px;
      }
    }

    &__dropdown {
      position: absolute;
      top: calc(100% + 15px);
      left: auto;
      right: 0;
      width: 200px;
      background-color: #fff;
      border-radius: 5px;

      &:before {
        content: "";
        position: absolute;
        right: 14px;
        top: -8px;
        width: 0;
        height: 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-bottom: 8px solid #fff;
      }

      a {
        display: block;
        cursor: pointer;
        padding: 10px 15px;
      }
    }
  }
}
</style>
