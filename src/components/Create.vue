// Create.vue
<template>
    <v-container>
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
        <v-card class="my-4 mx-auto" max-width="475">
            <v-list flat>
                <v-subheader>ITEMS</v-subheader>
                <v-list-item-group color="primary">
                    <v-list-item v-for="(item, i) in items" :key="i" >
                    <v-list-item-content>
                        <v-list-item-title v-text="item.name"></v-list-item-title>
                        <v-list-item-subtitle v-text="item.price"></v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-icon>
                        <v-icon @click="editItem">Edit</v-icon>
                    </v-list-item-icon>
                    <v-list-item-icon>
                        <v-icon @click="delItem(item._id)">Del</v-icon>
                    </v-list-item-icon>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-card>

    </v-container>
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
        items: []
    }),
    created: function(){
        this.fetchItems();
    },
    methods: {
        reset () {
            this.name = ''
            this.price = ''
        },
        addItem() {
            let uri = 'http://localhost:8080/items/add';
            this.axios.post(uri, {name : this.name, price: this.price}).then((response) => {
                this.items = response.data;
            });
        },
        fetchItems(){
            let uri = 'http://localhost:8080/items';
            this.axios.get(uri).then((response) => {
                this.items = response.data;
            })
        },
        delItem(id){
            let uri = "http://localhost:8080/items/del";
            this.axios.post(uri, {_id : id}).then((response) => {
                this.items = response.data;
            });
        },
        editItem(){
            let uri = "http://localhost:8080/items/edit";
            this.axios.post(uri, {_id : id}).then((response) => {
                this.items = response.data;
            });
        }

    }
}
</script>
