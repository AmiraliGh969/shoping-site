// import {email, required, minLength, alpha, numeric} from "vuelidate/lib/validators";
import {registerData} from "../constant/variables";
export const inputScript = {
  data() {
    return {
      form: JSON.parse(registerData)
    };
  },
  methods: {
    registerUser() {
      const register = this.form
      this.$store.dispatch("registerUser", register)
      .then(() => {
        alert('success register');
        this.form = JSON.parse(registerData);
      });
    },
  },
  // validations: {
  //   form: {
  //     email: {required, email},
  //     username: {required, alpha},
  //     password: {required, minLength: minLength(6)},
  //     name: {
  //       firstname: {required, alpha},
  //       lastname: {required, alpha}
  //     },
  //     address:{
  //       city:{required},
  //       street:{required},
  //       number:{required, numeric},
  //       zipcode:{required},
  //       geolocation:{
  //         lat:{required},
  //         long:{required}
  //       }
  //     },
  //   }
  // },
}