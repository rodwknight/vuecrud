<template>
    <v-container>
        <v-card class="my-4 mx-auto" max-width="475">
            <v-list flat>
                <v-subheader>ITEMS</v-subheader>
                <v-list-item-group color="primary">
                    <v-list-item v-for="(item, i) in items" :key="i" >
                    <v-list-item-content>
                        <v-list-item-title v-text="item.name"></v-list-item-title>
                        <v-list-item-subtitle v-text="item.price"></v-list-item-subtitle>
                    </v-list-item-content>
                    <v-dialog v-model="dialog" persistent max-width="600px">
                        <template v-slot:activator="{ on }">
                            <v-btn color="primary" dark v-on="on" @click="dataEdit(item)">edit</v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                                <span class="headline">Editar Item</span>
                            </v-card-title>
                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" sm="12" md="12">
                                            <v-text-field
                                                v-model="itemEdit.name"
                                                :counter="10"
                                                :rules="nameRules"
                                                label="Item Name"
                                                required
                                                >
                                            </v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="12" md="12">
                                            <v-text-field
                                                v-model="itemEdit.price"
                                                label="Item Price"
                                                >
                                            </v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-text>
                            <v-card-actions>
                                <div class="flex-grow-1"></div>
                                <v-btn color="blue darken-1" text @click="dialog = false">Fechar</v-btn>
                                <v-btn color="blue darken-1" text @click="editItem">Salvar</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <v-btn color="primary" @click="delItem(item._id)" class="ml-2">Del</v-btn>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-card>
    </v-container>
</template>
<script>

export default {
    name : "ItemsList",
        data: () => ({
        valid: true,
        nameRules: [
            v => !!v || 'Name is required',
            v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ],
        dialog: false,
        itemEdit: {}
    }),
    created: function(){
        this.fetchItems();
    },
    methods: {
        fetchItems(){
            let uri = 'http://localhost:8080/items';
            this.axios.get(uri).then((response) => {
                this.$store.dispatch('attItemAction', response.data)
            })
        },
        delItem(id){
            let uri = "http://localhost:8080/items/del";
            this.axios.post(uri, {_id : id}).then((response) => {
                this.$store.dispatch('attItemAction', response.data)
            });
        },
        editItem(){
            let uri = "http://localhost:8080/items/edit";
            this.axios.post(uri, this.itemEdit).then((response) => {
                this.$store.dispatch('attItemAction', response.data)
            });
        },
        dataEdit(item){
            this.itemEdit = item;
        }
    },
    computed: {
        items () {
            return this.$store.getters.items
        }
    }
}
</script>
