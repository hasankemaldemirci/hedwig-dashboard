<template>
  <div class="profile">
    <NavBar />
    <div class="container">
      <h1>Profile</h1>
      <div class="profile__content">
        <div class="profile__content__email">
          <strong>E-Mail:</strong>
          <a :href="`mailto:${userProfile.email}`" target="_blank">
            {{ userProfile.email }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

// Components
import NavBar from "../components/NavBar";

export default {
  name: "Profile",
  components: {
    NavBar
  },
  computed: {
    ...mapGetters(["userProfile"])
  }
};
</script>

<style lang="scss">
.profile {
  padding-bottom: 30px;

  h1 {
    color: #fff;
    font-weight: 600;
  }

  &__content {
    margin-top: 15px;

    &__email {
      font-size: 16px;

      a {
        text-decoration: underline;
      }
    }
  }
}
</style>
