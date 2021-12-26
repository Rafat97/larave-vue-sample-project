<template>
  <div>
    <section class="text-gray-600 body-font">
      <h1 class="text-3xl font-bold text-center">Basic Idea of Project</h1>
      <div class="container px-5 py-10 mx-auto flex flex-wrap">
        <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <img
            alt="feature"
            class="object-cover object-center h-full w-full"
            src="img/PracticalQuestion.jpeg"
          />
        </div>
        <div
          class="
            flex flex-col flex-wrap
            lg:py-6
            -mb-10
            lg:w-1/2 lg:pl-12 lg:text-left
            text-center
          "
        >
          <div class="flex flex-col mb-10 lg:items-start items-center">
            <div
              class="
                w-12
                h-12
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-indigo-100
                text-indigo-500
                mb-5
              "
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                Created CRUD Operation
              </h2>
              <p class="leading-relaxed text-base">
                Using Laravel resource API. And Database as MySQL. Image upload
                using store.
              </p>
            </div>
          </div>
          <div class="flex flex-col mb-10 lg:items-start items-center">
            <div
              class="
                w-12
                h-12
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-indigo-100
                text-indigo-500
                mb-5
              "
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path
                  d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"
                ></path>
              </svg>
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                Using VueJS
              </h2>
              <p class="leading-relaxed text-base">
                This project Use VueJs As a UI library.
              </p>
              
            </div>
          </div>

           <div class="flex flex-col mb-10 lg:items-start items-center">
            <div
              class="
                w-12
                h-12
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-indigo-100
                text-indigo-500
                mb-5
              "
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path
                  d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"
                ></path>
              </svg>
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                Setup with docker
              </h2>
              <p class="leading-relaxed text-base">
                This project you can setup using docker-compose. 
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
