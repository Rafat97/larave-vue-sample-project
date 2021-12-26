<template>
  <div class="block w-full overflow-x-auto">
    <h1 class="text-3xl font-bold my-10 text-center">
      View All Developer Information
    </h1>
    <section v-if="error">
      <p>
        We're sorry, we're not able to retrieve this information at the moment,
        please try back later
      </p>
    </section>
    <section v-else>
      <div v-if="loading" class="text-center">Loading...</div>
      <!-- Projects table -->
      <div v-else>
        <table class="items-center w-full bg-transparent border-collapse">
          <thead>
            <tr>
              <th
                v-for="(column, index) in table_column"
                v-bind:key="index"
                class="
                  px-6
                  bg-blueGray-50
                  text-blueGray-500
                  align-middle
                  border border-solid border-blueGray-100
                  py-3
                  text-xs
                  uppercase
                  border-l-0 border-r-0
                  whitespace-nowrap
                  font-semibold
                  text-left
                "
              >
                {{ column.name }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(developer, index) in developer_data" v-bind:key="index">
              <th
                class="
                  border-t-0
                  px-6
                  align-middle
                  border-l-0 border-r-0
                  text-xs
                  whitespace-nowrap
                  p-4
                  text-left
                "
              >
                {{ developer.first_name }}
              </th>
              <td
                class="
                  border-t-0
                  px-6
                  align-middle
                  border-l-0 border-r-0
                  text-xs
                  whitespace-nowrap
                  p-4
                "
              >
                {{ developer.last_name }}
              </td>
              <td
                class="
                  border-t-0
                  px-6
                  align-middle
                  border-l-0 border-r-0
                  text-xs
                  whitespace-nowrap
                  p-4
                "
              >
                {{ developer.email }}
              </td>
              <td
                class="
                  border-t-0
                  px-6
                  align-middle
                  border-l-0 border-r-0
                  text-xs
                  whitespace-nowrap
                  p-4
                "
              >
                <i class="fas fa-arrow-up text-emerald-500 mr-4"></i>
                <img v-bind:src="[developer.image_url]" />
              </td>

              <td
                class="
                  border-t-0
                  px-6
                  align-middle
                  border-l-0 border-r-0
                  text-xs
                  whitespace-nowrap
                  p-4
                "
              >
                {{ developer.gender }}
              </td>

              <td
                class="
                  border-t-0
                  px-6
                  align-middle
                  border-l-0 border-r-0
                  text-xs
                  whitespace-nowrap
                  p-4
                "
              >
                {{ developer.skills }}
              </td>

              <td
                class="
                  border-t-0
                  px-6
                  align-middle
                  border-l-0 border-r-0
                  text-xs
                  whitespace-nowrap
                  p-4
                "
              >
                <!-- <button
                  class="
                    text-purple-500
                    bg-transparent
                    border border-solid border-purple-500
                    hover:bg-purple-500 hover:text-white
                    active:bg-purple-600
                    font-bold
                    uppercase
                    text-xs
                    px-4
                    py-2
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
                >
                  Edit
                </button> -->
                <button>
                  <router-link
                    class="
                      text-purple-500
                      bg-transparent
                      border border-solid border-purple-500
                      hover:bg-purple-500 hover:text-white
                      active:bg-purple-600
                      font-bold
                      uppercase
                      text-xs
                      px-4
                      py-2
                      rounded
                      outline-none
                      focus:outline-none
                      mr-1
                      mb-1
                      ease-linear
                      transition-all
                      duration-150
                    "
                    :to="{ name: 'edit', params: { id: developer.id } }"
                  >
                    Edit
                  </router-link>

                  <!-- <DeveloperEdit /> -->
                </button>

                <button
                  class="
                    text-purple-500
                    bg-transparent
                    border border-solid border-purple-500
                    hover:bg-purple-500 hover:text-white
                    active:bg-purple-600
                    font-bold
                    uppercase
                    text-xs
                    px-4
                    py-2
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
                  @click="deleteData(developer.id)"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>


<script>
import axios from "axios";
import DeveloperEdit from "../components/DeveloperEdit.vue";

export default {
  components: { DeveloperEdit },
  data() {
    return {
      table_column: [
        { name: "First name" },
        { name: "Last name" },
        { name: "Email" },
        { name: "image" },
        { name: "Gender" },
        { name: "Skills" },
        { name: "Action" },
      ],
      developer_data: [],
      loading: true,
      error: false,
    };
  },
  methods: {
    deleteData(id) {
      let isDelete = confirm("Are you sure?");
      if (!isDelete) {
        return;
      }
      axios
        .delete("/api/developer/" + id)
        .then((response) => {
          this.getDeveloper();
        })
        .catch((error) => {
          alert(error.response.message);
        });
    },
    getDeveloper() {
      this.loading = true;
      axios
        .get("/api/developer")
        .then((response) => {
          this.developer_data = response.data.data;
          this.loading = false;
        })
        .catch((error) => {
          this.error = true;
        });
    },
  },

  mounted() {
    this.getDeveloper();
  },
};
</script>

