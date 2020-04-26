<template>
  <div class="form-container">
    <div class="form-section">
      <div class="image-container">
        <img v-if="formName==='SignUp'" :src="signUpImageUrl" alt="signUpImage" class="form-image" />
        <img v-else :src="loginImageUrl" alt="loginImage" class="form-image" />
        <a v-if="formName==='SignUp'" href="/#/login" class="alternate-link">{{link}}</a>
        <a v-else href="/#/signUp" class="alternate-link">{{link}}</a>
      </div>
      <div class="from-wrapper"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LoginSignUp",
  props: ["formName", "link"],
  data() {
    return {
      signUpImageUrl: require("../../assets/images/signup-image.jpg"),
      loginImageUrl: require("../../assets/images/signin-image.jpg")
    };
  }
};
</script>
<style lang="scss" scoped>
@import "./style.scss";
</style>