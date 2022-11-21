<template>
  <div class="p-8 container mx-auto grid grid-cols-2 gap-8">
    <BusinessCardForm
      v-model:name="name"
      v-model:phone-number="phoneNumber"
      v-model:description="description"
      v-model:address="address"
    />
    <BusinessCardPreview
      :name="name"
      :phone-number="phoneNumber"
      :description="description"
      :address="address"
    />
  </div>
</template>

<script>
import BusinessCardForm from './BusinessCardForm.vue'
import BusinessCardPreview from './BusinessCardPreview.vue'
export default {
  components: {
    BusinessCardForm,
    BusinessCardPreview,
  },
  data() {
    return {
      name: '',
      phoneNumber: '',
      description: '',
      address: '',
      avatarPreview: '',
    }
  },
}
</script>

<style module></style>
