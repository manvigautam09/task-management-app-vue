<template>
  <div>
    <LoginSignUp formName="SignUp" link="I am already member" />
  </div>
</template>
<script>
import LoginSignUp from "../../components/LoginSignUpForm/index.vue";
export default {
  name: "SignUp",
  components: { LoginSignUp }
};
</script>
