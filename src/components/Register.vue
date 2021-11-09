<template>
  <div class="body__class">
 
    <div>
      <div class="form__container" @submit.prevent="signUp()">
        <h2>Register</h2>
        

        <form>
         

          <div class="input__box">
            <input
              type="text"
              id="email"
              required="required"
              v-model="form.email"
              @blur="$v.form.email.$touch()"
            />
            <span>Email Address</span>
            <div class="errors" v-if="$v.form.email.$error">
              <div v-if="!$v.form.email.required">
                <small>Please enter Email ID</small>
              </div>
              <div v-else-if="!$v.form.email.email">
                <small>Enter Valid Email ID</small>
              </div>
            </div>
          </div>

          <div class="input__box">
            <input
              type="password"
              id="password"
              required
              v-model="form.password"
              @blur="$v.form.password.$touch()"
            />
            <span>Password</span>
            <div class="errors" v-if="$v.form.password.$error">
              <div v-if="!$v.form.password.required">
                <small>Password field is required</small>
              </div>

              <div v-else-if="!$v.form.password.containsUppercase">
                <small>Password must have 1 uppercase character</small>
              </div>
              <div v-else-if="!$v.form.password.containsLowercase">
                <small>Password must have 1 lowercase character</small>
              </div>
              <div v-else-if="!$v.form.password.containsNumber">
                <small>Password must have 1 number</small>
              </div>
              <div v-else-if="!$v.form.password.containsSpecial">
                <small>Password must have a special character</small>
              </div>
              <div v-else-if="!$v.form.password.minLength">
                <small>Password MUST have atleast 8 characters</small>
              </div>
            </div>
          </div>
          <div>
            Already have an account ?
            <router-link :to="{ name: 'login' }">Login here</router-link>
          </div>

          <div class="input__box">
            <input type="submit" value="submit" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";
import { registerUser } from "../Services/User/Register.js";

import Vue from "vue";

export default {
  name: "Register",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  validations: {
    form: {
      email: {
        email,
        required,
      },
      password: {
        required,
        minLength: minLength(8),

        containsUppercase: function(value) {
          return /[A-Z]/.test(value);
        },
        containsLowercase: function(value) {
          return /[a-z]/.test(value);
        },
        containsNumber: function(value) {
          return /[0-9]/.test(value);
        },
        containsSpecial: function(value) {
          return /[!@#$%^&*?]/.test(value);
        },
      },
    },
  },
  methods: {
    signUp() {
      console.log(this.form);

      this.$v.form.$touch();
      if (!this.$v.form.$invalid) {
          registerUser(this.form)
            .then(() => {
              Vue.$toast.open({
                message: "You are Registered Successfully",
                duration: 3000,
                type: "success",
              });
              this.$router.push({ name: "login" });
            })
            .catch((error) => {
              Vue.$toast.open({
                message: error.message,
                duration: 3000,
                type: "error",
              });
            });
      }
    },
  },
};
</script>

<style scoped>
a {
  color: #1e0f9c;
}
a:hover {
  color: white;
}
.errors {
  color: #ce0101;
  position: relative;
  top: 2.5em;
}
.errors__usertype {
  color: #ce0101;
  position: relative;
  top: 0.25em;
}
* {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
}
.body__class {
  display: flex;
  padding: 1em;
  background: linear-gradient(#fff, #dee5f3);
  align-items: center;
  height: 100vh;
}


.form__container {
  position: relative;
  padding: 2em;
  background-color: #fff;
  border-radius: 1.25em;
  background: linear-gradient(45deg, #b9def3, #8fbbee);
  box-shadow: 0 0.25em 1.6em rgba(0, 0, 0, 0.2);
}

.form__container h2 {
  color: #111;
  margin-bottom: 2em;
  font-size: 1.75em;
  line-height: 1.5em;
  font-weight: 500;
  padding-left: 0.7em;
  border-left: 0.3em solid #e91e63;
}
.user__type {
  margin-bottom: 2em;
  color: black;
  font-size: 1.25em;
}
.user__type input {
  margin: 0;
  padding: 0;
  margin-right: 1.5em;
}
.input__box {
  caret-color: auto !important;
  color: black;
  position: relative;
  width: 28em;
  height: 3em;
  margin-bottom: 2.5em;
}

.input__box:last-child {
  margin-bottom: 0;
}

.input__box input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border: 1px solid #111;
  /* background: transparent; */
  padding: 0.6em;
  border-radius: 0.25em;
  box-sizing: border-box;
  outline: none;
  font-size: 1em;
  color: #111;
  font-weight: 300;
}

.input__box span {
  position: absolute;
  top: 1px;
  left: 1px;
  display: inline-block;
  padding: 0.6em;
  font-size: 1em;
  color: #111;
  font-weight: 300;
  transition: 0.5s;
  pointer-events: none;
}

.input__box input:focus ~ span,
.input__box input:valid ~ span {
  transform: translateX(-0.6em) translateY(-2em);
  font-size: 0.9em;
}

.input__box input[type="submit"] {
  margin-top: 1em;
  background: #2196f3;
  color: #fff;
  border: none;
  max-width: 8em;
  cursor: pointer;
  font-weight: 500;
}

.input__box input[type="submit"]:hover {
  background: #e91e63;
}
@media only screen and (min-width: 280px) {
  * {
    font-size: 14px;
  }
  .body__class {
    display: flex;
    justify-content: center;
    padding: 0;
    background: #fff;
    align-items: center;
    height: 100vh;
  }

  
  .input__box {
    width: 15em;
  }
}

@media only screen and (min-width: 350px) {
  * {
    font-size: 14px;
  }
  .body__class {
    display: flex;
    justify-content: center;
    padding: 0;
    background: #fff;
    height: 100vh;
  }
 
  .input__box {
    width: 21em;
  }
}

@media only screen and (min-width: 539px) {
  * {
    font-size: 14px;
  }
  .body__class {
    display: flex;
    justify-content: center;
    padding: 0;
    background: #fff;
    align-items: center;
    height: 100vh;
  }
  .input__box {
    width: 28em;
  }
}
@media (min-width: 767px) {
  * {
    font-size: 15px;
  }
 
  .input__box {
    width: 35em;
  }
}

@media (min-width: 1024px) {
  * {
    font-size: 16px;
  }
  .body__class {
    display: flex;
    padding: 1em;
    background: linear-gradient(#fff, #dee5f3);
    align-items: center;
    height: 100vh;
  }
 
  .input__box {
    width: 28em;
  }
}
</style>
