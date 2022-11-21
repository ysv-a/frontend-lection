<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
    phoneNumber: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    address: {
      type: String,
      default: '',
    },
  },
}
</script>

<template>
  <div>
    <div class="shadow-md p-8">
      <h2 class="text-2xl font-semibold mb-8">Business Card Preview</h2>
      <div class="flex">
        <div class="flex flex-col flex-grow">
          <p class="font-semibold text-2xl mb-3">
            <span v-show="name" class="font-bold">Name: </span> {{ name }}
          </p>
          <p class="text-gray-700 mb-4">
            <span v-show="description" class="font-bold">Description: </span>
            {{ description }}
          </p>
          <div class="flex justify-between mt-auto">
            <p class="text-gray-500">
              <span v-show="address" class="font-bold">Address: </span>
              {{ address }}
            </p>
            <p class="text-gray-500">
              <span v-show="phoneNumber" class="font-bold">Phone: </span>
              {{ phoneNumber }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style module></style>
