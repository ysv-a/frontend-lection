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
  emits: [
    'update:name',
    'update:description',
    'update:phoneNumber',
    'update:address',
  ],
  methods: {
    update(e, field) {
      this.$emit(`update:${field}`, e.target.value)
    },
  },
}
</script>

<template>
  <div class="shadow-md p-8">
    <h2 class="text-2xl font-semibold mb-4">Business Card Form</h2>
    <form>
      <div :class="$style.formBlock">
        <label :class="$style.formLabel">Name</label>
        <input
          :class="$style.formInput"
          type="text"
          :value="name"
          @input="update($event, 'name')"
        />
      </div>
      <div :class="$style.formBlock">
        <label :class="$style.formLabel">Description</label>
        <input
          :class="$style.formInput"
          type="text"
          :value="description"
          @input="update($event, 'description')"
        />
      </div>
      <div :class="$style.formBlock">
        <label :class="$style.formLabel">Phone number</label>
        <input
          :class="$style.formInput"
          type="text"
          :value="phoneNumber"
          @input="update($event, 'phoneNumber')"
        />
      </div>
      <div :class="$style.formBlock">
        <label :class="$style.formLabel">Address</label>
        <input
          :class="$style.formInput"
          type="text"
          :value="address"
          @input="update($event, 'address')"
        />
      </div>
    </form>
  </div>
</template>

<style module>
.formBlock {
  @apply flex flex-col mb-6;
}

.formLabel {
  @apply mb-3 font-semibold;
}

.formInput {
  @apply border border-gray-100 shadow px-4 py-3;
}
</style>
