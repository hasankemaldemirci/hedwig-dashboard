<template>
  <div class="signin">
    <div class="container">
      <div class="signin__content">
        <img src="@/assets/images/hedwig-icon.png" alt="Hedwig" class="logo" />
        <SigninForm />
        <div class="copyright">Hedwig &copy; 2020</div>
      </div>
    </div>
  </div>
</template>

<script>
// Components
import SigninForm from "../components/SigninForm";

export default {
  name: "Signin",
  components: {
    SigninForm
  }
};
</script>

<style lang="scss">
.signin {
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: calc(100vh - 5px);
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;

    .logo {
      max-width: 75%;
      margin-bottom: 60px;

      @media (max-width: 767px) {
        max-width: 50%;
        margin-bottom: 20px;
      }
    }

    .copyright {
      margin-top: 90px;

      @media (max-width: 767px) {
        margin-top: 20px;
      }
    }
  }
}
</style>
