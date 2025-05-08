<script>
import axios from "axios";
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      email: "",
      password: "",
      isRemember: true,
      processing: false,
      errorMsg: "",
      submitted: false
    };
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required
    }
  },
  methods: {
    async onLogin() {
      this.submitted = true;
      this.v$.$touch();
      if (this.v$.$invalid) {
        return;
      } else {
        this.errorMsg = "";
        try {
          this.processing = true;

          // Simple Request api
          const { data } = await axios.post(
            "http://127.0.0.1:8003/api/v1/auth/login",
            {
              email: this.email,
              user_pass: this.password
            }
          );
          const status = data.status;
          const response = data.data;

          if (status) {
            localStorage.setItem("user", JSON.stringify(response));
            localStorage.setItem("token", response.token);
            localStorage.setItem("name", response.name);
            this.$router.push({
              path: "/"
            });
          } else {
            this.errorMsg = response;
          }
        } catch (error) {
          console.error("failed at onLogin", { error });
          localStorage.removeItem("user");
        } finally {
          this.processing = false;
        }
      }
    }
  }
};
</script>

<template>
  <BRow class="align-items-center justify-content-center">
    <BCol md="8" lg="6" cols="xl-5">
      <BCard no-body>
        <BCardBody class="p-4">
          <div class="text-center mt-2">
            <h5 class="text-primary">Welcome</h5>
            <p class="text-muted">Sign in to continue to Project Auth.</p>
          </div>
          <div class="p-2 mt-4">
            <BForm>
              <div class="mb-3">
                <label for="email">Email</label>
                <input v-model="email" type="text" class="form-control" id="email" placeholder="Enter email" :class="{
                  'is-invalid': submitted && v$.email.$error
                }" />

                <div v-if="submitted && v$.email.$error" class="invalid-feedback">
                  <span v-if="v$.email.email.$invalid">Email is not valid
                  </span>
                  <span v-if="v$.email.required.$invalid">Please Enter Your Email
                  </span>
                </div>
              </div>

              <div class="mb-3">
                <label for="userpassword">Password</label>
                <input v-model="password" type="password" class="form-control" id="userpassword" placeholder="Enter password" :class="{
                  'is-invalid': submitted && v$.password.$error
                }" />
                <div v-if="submitted && v$.password.$error" class="invalid-feedback">
                  <span v-if="v$.password.required.$invalid">Password is required
                  </span>
                </div>
              </div>

              <div class="form-check">
                <input v-model="isRemember" type="checkbox" class="form-check-input" id="auth-remember-check" />
                <label class="form-check-label" for="auth-remember-check">Remember me</label>
              </div>
              <div class="mt-3 text-danger">{{ errorMsg }}</div>
              <div class="mt-3 text-end">
                <BButton variant="primary" class="w-sm waves-effect waves-light" :disabled="processing" @click="onLogin">
                  {{ processing ? "Please wait..." : "Log In" }}
                </BButton>
              </div>

            </BForm>
          </div>
        </BCardBody>
      </BCard>

      <div class="mt-5 text-center">
        <p>
          © {{ new Date().getFullYear() }} by Fazril Ramadhan
        </p>
      </div>
    </BCol>
  </BRow>
</template>
