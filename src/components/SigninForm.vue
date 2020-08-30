<template>
  <form class="signin-form" @submit.prevent>
    <h1 class="signin-form__hero">Please sign in</h1>
    <div class="signin-form__inputs">
      <input
        v-model="signinForm.email"
        @keydown.space="event => event.preventDefault()"
        type="email"
        placeholder="E-mail address"
      />
      <input
        v-model="signinForm.password"
        @keydown.space="event => event.preventDefault()"
        type="password"
        placeholder="Password"
      />
    </div>
    <button v-if="!signinLoading" @click="signin" class="signin-form__btn">
      Sign in
    </button>
    <button v-else class="signin-form__btn signin-form__btn--disabled" disabled>
      <Loader />
    </button>
  </form>
</template>

<script>
import { mapGetters } from "vuex";

// Components
import Loader from "./Loader";

export default {
  name: "SigninForm",
  components: {
    Loader
  },
  data() {
    return {
      signinForm: {
        email: "",
        password: ""
      }
    };
  },
  computed: {
    ...mapGetters(["signinLoading"])
  },
  methods: {
    signin() {
      if (this.signinForm.email && this.signinForm.password) {
        this.$store.dispatch("signin", {
          email: this.signinForm.email,
          password: this.signinForm.password
        });
      }
    }
  }
};
</script>

<style lang="scss">
.signin-form {
  width: 100%;

  &__hero {
    margin-bottom: 30px;
    font-weight: 500;
    color: #2d2e4d;
    line-height: 1em;
  }

  &__inputs {
    display: flex;
    flex-direction: column;

    input {
      width: 100%;
      height: 80px;
      border: 1px solid #2d3651;
      background: none;
      padding: 25px;
      font-size: 20px;
      text-align: center;

      @media (max-width: 767px) {
        height: 50px;
        font-size: 18px;
      }

      &:first-child {
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
      }

      &:last-child {
        margin-top: -1px;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
      }
    }
  }

  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80px;
    margin-top: 20px;
    border-radius: 15px;
    background: rgb(198, 92, 209);
    background: linear-gradient(
      180deg,
      rgba(198, 92, 209, 1) 0%,
      rgba(183, 93, 225, 1) 100%
    );
    font-size: 20px;
    font-weight: 500;
    color: #fff;

    @media (max-width: 767px) {
      height: 50px;
      font-size: 18px;
    }

    .loader {
      position: static;
      transform: none;
    }

    &--disabled {
      pointer-events: none;
      background: #2d3651;
    }
  }
}
</style>
