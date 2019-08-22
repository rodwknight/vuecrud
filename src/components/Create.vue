// Create.vue
<template>
     <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    v-on:submit.prevent="addItem"
  >
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Item Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="price"
      label="Item Price"
    ></v-text-field>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="submit"
    >
      Add Item
    </v-btn>
    <v-btn
      color="error"
      class="mr-4"
      @click="reset">
      Reset Form
    </v-btn>

  </v-form>
</template>
<script>
export default {
    component: {
        name: 'addItem'
    },
    data: () => ({
        valid: true,
        name : '',
        price : '',
        nameRules: [
            v => !!v || 'Name is required',
            v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ],
        email: '',
    }),
    methods: {
        reset () {
            this.name = ''
            this.price = ''
        }
    }
}
</script>
