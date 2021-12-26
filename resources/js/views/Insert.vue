<template>
  <div>
    <h1 class="text-3xl font-bold my-10 text-center">
      Add New Developer Information
    </h1>
    <form
      @submit="developerFormSubmit"
      action="javascript:void(0)"
      class="w-full max-w-xl mt-10 mx-auto"
    >
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="
              block
              uppercase
              tracking-wide
              text-gray-700 text-xs
              font-bold
              mb-2
            "
            for="grid-first-name"
          >
            First Name
          </label>
          <input
            class="
              appearance-none
              block
              w-full
              text-gray-700
              border border-red-500
              rounded
              py-3
              px-4
              leading-tight
              focus:outline-none focus:bg-white
            "
            v-model="formData.first_name"
            name="first_name"
            id="grid-first-name"
            type="text"
            :disabled="form.submit_disabled"
            placeholder="Jon"
          />
          <p v-if="form.errors.first_name" class="text-red-500 text-xs italic">
            {{ form.errors.first_name[0] }}
          </p>
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="
              block
              uppercase
              tracking-wide
              text-gray-700 text-xs
              font-bold
              mb-2
            "
            for="grid-last-name"
          >
            Last Name
          </label>
          <input
            class="
              appearance-none
              block
              w-full
              text-gray-700
              border border-gray-200
              rounded
              py-3
              px-4
              leading-tight
              focus:outline-none focus:bg-white focus:border-gray-500
            "
            v-model="formData.last_name"
            name="last_name"
            id="grid-last-name"
            type="text"
            :disabled="form.submit_disabled"
            placeholder="Doe"
          />
          <p v-if="form.errors.last_name" class="text-red-500 text-xs italic">
            {{ form.errors.last_name[0] }}
          </p>
        </div>
      </div>

      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="
              block
              uppercase
              tracking-wide
              text-gray-700 text-xs
              font-bold
              mb-2
            "
            for="grid-password"
          >
            Email
          </label>
          <input
            class="
              appearance-none
              block
              w-full
              text-gray-700
              border border-gray-200
              rounded
              py-3
              px-4
              mb-3
              leading-tight
              focus:outline-none focus:bg-white focus:border-gray-500
            "
            v-model="formData.email"
            name="email"
            id="grid-password"
            type="email"
            :disabled="form.submit_disabled"
            placeholder="example@mail.com"
          />
          <p v-if="form.errors.email" class="text-red-500 text-xs italic">
            {{ form.errors.email[0] }}
          </p>
        </div>
      </div>
      <div class="">
        <label class="block text-sm font-medium text-gray-700"> Photo </label>
        <div
          class="
            mt-1
            flex
            justify-center
            px-6
            pt-5
            pb-6
            border-2 border-gray-300 border-dashed
            rounded-md
          "
        >
          <div class="space-y-1 text-center">
            <svg
              class="mx-auto h-12 w-12 text-gray-400"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div class="flex text-sm text-gray-600">
              <label
                for="file-upload"
                class="
                  relative
                  cursor-pointer
                  bg-white
                  rounded-md
                  font-medium
                  text-indigo-600
                  hover:text-indigo-500
                  focus-within:outline-none
                  focus-within:ring-2
                  focus-within:ring-offset-2
                  focus-within:ring-indigo-500
                "
              >
                <span>Upload a file</span>
                <input
                  ref="file"
                  id="file-upload"
                  @change="handleFileObject()"
                  name="image"
                  accept=".jpg,.png,.jpeg"
                  type="file"
                  class="sr-only"
                  :disabled="form.submit_disabled"
                />
              </label>
              <p class="pl-1">or drag and drop</p>
            </div>
            <p v-if="form.errors.image" class="text-red-500 text-xs italic">
              {{ form.errors.image[0] }}
            </p>
          </div>
        </div>
      </div>

      <div class="my-5">
        <legend class="text-base font-medium text-gray-900">Gender</legend>
        <p class="text-sm text-gray-500">Please select your gender</p>
      </div>

      <div class="mt-4 space-y-4">
        <p v-if="form.errors.gender" class="text-red-500 text-xs italic">
          {{ form.errors.gender[0] }}
        </p>
        <div class="flex items-center">
          <input
            id="push-everything"
            name="gender"
            value="male"
            v-model="formData.gender"
            type="radio"
            class="
              focus:ring-indigo-500
              h-4
              w-4
              text-indigo-600
              border-gray-300
            "
          />
          <label
            for="push-everything"
            class="ml-3 block text-sm font-medium text-gray-700"
          >
            Male
          </label>
        </div>
        <div class="flex items-center">
          <input
            id="push-email"
            name="gender"
            type="radio"
            v-model="formData.gender"
            value="female"
            class="
              focus:ring-indigo-500
              h-4
              w-4
              text-indigo-600
              border-gray-300
            "
          />
          <label
            for="push-email"
            class="ml-3 block text-sm font-medium text-gray-700"
          >
            Female
          </label>
        </div>
        <div class="flex items-center">
          <input
            id="push-nothing"
            name="gender"
            v-model="formData.gender"
            type="radio"
            value="other"
            class="
              focus:ring-indigo-500
              h-4
              w-4
              text-indigo-600
              border-gray-300
            "
          />
          <label
            for="push-nothing"
            class="ml-3 block text-sm font-medium text-gray-700"
          >
            Other
          </label>
        </div>
      </div>

      <div class="my-5">
        <legend class="text-base font-medium text-gray-900">Skills</legend>
        <p class="text-sm text-gray-500">Please select your skills</p>
      </div>

      <div class="flex flex-wrap -mx-3 mb-6">
        <p v-if="form.errors.skills" class="text-red-500 text-xs italic">
          {{ form.errors.skills[0] }}
        </p>
        <div
          v-for="(skill, index) in allSkills"
          v-bind:key="index"
          class="w-full md:w-1/2 px-3 mb-6 md:mb-0"
        >
          <div class="flex items-start my-2">
            <div class="flex items-center h-5">
              <input
                v-bind:id="[skill.value]"
                v-bind:value="[skill.name]"
                v-model="formData.skills"
                name="skills"
                type="checkbox"
                class="
                  focus:ring-indigo-500
                  h-4
                  w-4
                  text-indigo-600
                  border-gray-300
                  rounded
                "
              />
            </div>
            <div class="ml-3 text-sm">
              <label
                v-bind:for="[skill.value]"
                class="font-medium text-gray-700"
                >{{ skill.value }}</label
              >
              <p class="text-gray-500">{{ skill.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="shadow overflow-hidden sm:rounded-md">
        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            type="submit"
            class="
              inline-flex
              justify-center
              py-2
              px-4
              border border-transparent
              shadow-sm
              text-sm
              font-medium
              rounded-md
              text-white
              bg-indigo-600
              hover:bg-indigo-700
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-indigo-500
            "
            v-if="!form.submit_disabled"
            :disabled="form.submit_disabled"
          >
            Save
          </button>
        </div>
      </div>
    </form>

    <!-- <DeveloperFormComponent
      :first_name="formData.first_name"
      :last_name="formData.last_name"
      :email="formData.email"
      :gender="formData.gender"
      :skills="formData.skills"
      :submit_disabled="form.submit_disabled"
      :errors="form.errors"
      :formSubmit="developerFormSubmit"
      :handleFileObject="handleFileObject"
    ></DeveloperFormComponent> -->
  </div>
</template>


<script>
import axios from "axios";
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
  components: { DeveloperFormComponent },
  data() {
    return {
      allSkills: [
        { name: "laravel", value: "Laravel", description: "Good at laravel" },
        {
          name: "codeigniter",
          value: "Codeigniter",
          description: "Good at Codeigniter",
        },
        { name: "ajax", value: "AJAX", description: "Good at AJAX" },
        { name: "vue_js", value: "Vue JS", description: "Good at VUE " },
        {
          name: "mysql",
          value: "MySQL",
          description: "Good at MySQL Database",
        },
        { name: "api", value: "API", description: "Good at API Design" },
      ],
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

      //   console.log(this.formData);
      axios
        .post("/api/developer", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          this.form.submit_disabled = false;
          this.form.errors = [];
          //   console.log(response);
          alert("New Developer added successfully");
          this.formData = { ...DEFAULT_FORMDATA };
        })
        .catch((err) => {
          this.form.submit_disabled = false;
          //   console.log(err);
          //   console.log(err.response);
          this.form.errors = err.response.data.errors;
          console.log(err.response);
          alert(err.response.data.message);
        });
    },
  },
  mounted() {},
};
</script>
