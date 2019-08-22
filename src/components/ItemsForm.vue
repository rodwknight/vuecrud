<template>
    <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        v-on:submit.prevent="addItem">
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
        @click="addItem"
        >
        enviar
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
    name: 'ItemsForm',
    data: () => ({
        valid: true,
        name : '',
        price : '',
        nameRules: [
            v => !!v || 'Name is required',
            v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ],
    }),
    methods: {
        reset () {
            this.name = ''
            this.price = ''
        },
        addItem() {
            let uri = 'http://localhost:8080/items/add';
            this.axios.post(uri, {name : this.name, price: this.price}).then((response) => {
                this.$store.dispatch('attItemAction', response.data)
            });
        }
    }
}
</script>
