<template>
  <div>
    <button
      class="
        bg-pink-500
        text-white
        active:bg-pink-600
        font-bold
        uppercase
        text-sm
        px-6
        py-3
        rounded
        shadow
        hover:shadow-lg
        outline-none
        focus:outline-none
        mr-1
        mb-1
        ease-linear
        transition-all
        duration-150
      "
      type="button"
      v-on:click="toggleModal()"
    >
      Open regular modal
    </button>
    <div
      v-if="showModal"
      class="
        overflow-x-hidden overflow-y-auto
        fixed
        inset-0
        z-50
        outline-none
        focus:outline-none
        justify-center
        items-center
        flex
      "
    >
      <div class="relative w-auto my-6 mx-auto max-w-3xl">
        <!--content-->
        <div
          class="
            border-0
            rounded-lg
            shadow-lg
            relative
            flex flex-col
            w-full
            bg-white
            outline-none
            focus:outline-none
          "
        >
          <!--header-->
          <div
            class="
              flex
              items-start
              justify-between
              p-5
              border-b border-solid border-blueGray-200
              rounded-t
            "
          >
            <h3 class="text-3xl font-semibold">Modal Title</h3>
            <button
              class="
                p-1
                ml-auto
                bg-transparent
                border-0
                text-black
                opacity-5
                float-right
                text-3xl
                leading-none
                font-semibold
                outline-none
                focus:outline-none
              "
              v-on:click="toggleModal()"
            >
              <span
                class="
                  bg-transparent
                  text-black
                  opacity-5
                  h-6
                  w-6
                  text-2xl
                  block
                  outline-none
                  focus:outline-none
                "
              >
                ×
              </span>
            </button>
          </div>
          <!--body-->
          <div class="relative p-6 flex-auto">
            <DeveloperFormComponent
              :first_name="formData.first_name"
              :last_name="formData.last_name"
              :email="formData.email"
              :gender="formData.gender"
              :skills="formData.skills"
              :submit_disabled="form.submit_disabled"
              :errors="form.errors"
              :formSubmit="developerFormSubmit"
              :handleFileObject="handleFileObject"
            ></DeveloperFormComponent>
          </div>
          <!--footer-->
          <div
            class="
              flex
              items-center
              justify-end
              p-6
              border-t border-solid border-blueGray-200
              rounded-b
            "
          >
            <button
              class="
                text-red-500
                bg-transparent
                border border-solid border-red-500
                hover:bg-red-500 hover:text-white
                active:bg-red-600
                font-bold
                uppercase
                text-sm
                px-6
                py-3
                rounded
                outline-none
                focus:outline-none
                mr-1
                mb-1
                ease-linear
                transition-all
                duration-150
              "
              type="button"
              v-on:click="toggleModal()"
            >
              Close
            </button>
            <button
              class="
                text-red-500
                background-transparent
                font-bold
                uppercase
                px-6
                py-2
                text-sm
                outline-none
                focus:outline-none
                mr-1
                mb-1
                ease-linear
                transition-all
                duration-150
              "
              type="button"
              v-on:click="toggleModal()"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </div>
</template>

<script>
// import DeveloperForm from "../components/DeveloperForm.vue";
import DeveloperFormComponent from "../components/DeveloperForm.vue";
let DEFAULT_FORMDATA = {
  first_name: "",
  last_name: "",
  email: "",
  gender: "",
  avatar: "",
  skills: [],
};
export default {
  name: "regular-modal",
  components: {
    DeveloperFormComponent,
  },
  data() {
    return {
      showModal: false,
      formData: { ...DEFAULT_FORMDATA },
      form: {
        submit_disabled: false,
        errors: [],
      },
    };
  },
  methods: {
    handleFileObject(e) {
      //   this.formData.avatar = e.target.files[0];
      this.formData.avatar = this.$refs.file.files[0];
    },
    developerFormSubmit(e) {
      this.form.submit_disabled = true;
      console.log(this.formData);
      let formData = new FormData();
      formData.append("first_name", this.formData.first_name);
      formData.append("last_name", this.formData.last_name);
      formData.append("email", this.formData.email);
      formData.append("gender", this.formData.gender);
      formData.append("skills", this.formData.skills.join(","));
      formData.append("image", this.formData.avatar);
    },
    toggleModal: function () {
      this.showModal = !this.showModal;
    },
  },
};
</script>
