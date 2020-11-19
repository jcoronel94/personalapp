<template>
  <form class="contact-form" @submit.prevent="validateMessage">
    <div class="center md-display-1">Drop me a line</div>

    <div class="md-layout md-gutter">
      <div class="md-layout-item md-size-50 md-small-size-100">
        <md-field :class="getValidationClass('userName')">
          <label for="user_name">First Name</label>
          <md-input
            name="user_name"
            id="user_name"
            v-model="form.userName"
            :disabled="sending"
          />
          <span class="md-error" v-if="!$v.form.userName.required"
            >A name is required</span
          >
          <!-- <span class="md-error" v-else-if="!$v.form.userName.minlength">Invalid first name</span> -->
        </md-field>
      </div>

      <div class="md-layout-item md-size-50 md-small-size-100">
        <md-field :class="getValidationClass('email')">
          <label for="user_email">Email</label>
          <md-input
            type="email"
            name="user_email"
            id="user_email"
            autocomplete="user_email"
            v-model="form.email"
            :disabled="sending"
          />
          <span class="md-error" v-if="!$v.form.email.required"
            >An email is required</span
          >
          <span class="md-error" v-else-if="!$v.form.email.email"
            >Invalid email</span
          >
        </md-field>
      </div>
    </div>

    <md-field :class="getValidationClass('message')">
      <label for="message">Message</label>
      <md-textarea
        :disabled="sending"
        id="message"
        name="message"
        v-model="form.message"
        md-autogrow
      />
      <span class="md-error" v-if="!$v.form.message.required"
        >A message is required</span
      >
    </md-field>
    <md-progress-bar md-mode="indeterminate" v-if="sending" />

    <md-card-actions>
      <md-button type="submit" class="md-primary" :disabled="sending"
        >Send</md-button
      >
    </md-card-actions>

    <md-snackbar :md-active.sync="messageSent">
      <span v-if="messageSaved">Message sent, speak with you soon!</span>
      <span v-else>Your message could not be sent at this time :(</span>
    </md-snackbar>
  </form>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
  required,
  email,
  minLength,
  maxLength,
} from "vuelidate/lib/validators";
import emailjs from "emailjs-com";

export default {
  mixins: [validationMixin],
  data() {
    return {
      form: {
        userName: null,
        email: null,
        message: null,
      },
      sending: false,
      messageSent: false,
      messageSaved: false,
    };
  },
  methods: {
    sendEmail(e) {
      emailjs
        .sendForm(
          "service_0bt5s0a",
          "template_kmf820o",
          e.target,
          "user_kDmSynuXVxta6CPpQOrAr"
        )
        .then(
          (result) => {
            this.clearForm();
            this.sending = false;
            this.messageSent = true;
            this.messageSaved = true;
            console.log("SUCCESS!", result.status, result.text);
          },
          (error) => {
            this.sending = false;
            this.messageSent = true;
            this.messageSaved = false;
            console.log("FAILED...", error);
          }
        );
    },
    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName];
      if (field) {
        return {
          "md-invalid": field.$invalid && field.$dirty,
        };
      }
    },
    clearForm() {
      this.$v.$reset();
      this.form.userName = null;
      this.form.email = null;
      this.form.message = null;
    },
    validateMessage(e) {
      this.sending = true;
      this.$v.$touch();
      console.log(this.$v);

      if (!this.$v.$invalid) {
        this.sendEmail(e);
      } else {
        this.sending = false;
      }
    },
  },
  validations: {
    form: {
      userName: {
        required,
      },
      message: {
        required,
      },
      email: {
        required,
        email,
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  padding: 10px;
}
</style>
