<template >
    <v-card>
    <v-card-title>
      Meu Items
      <div class="flex-grow-1"></div>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
        :headers="headers"
        :items="items"
        :search="search"
        :sort-by="['name', 'price']"
        :sort-desc="[false, true]"
        class="elevation-1">
        <template v-slot:top>
            <v-toolbar flat color="white">
                <div class="flex-grow-1"></div>
                <v-dialog v-model="dialog" max-width="500px">
                    <template v-slot:activator="{ on }">
                        <v-btn color="primary" dark class="mb-2" v-on="on" @click="dataAdd">Novo Item</v-btn>
                    </template>
                    <ItemsForm />
                </v-dialog>
            </v-toolbar>
        </template>
        <template v-slot:item.action="{ item }" >
            <v-icon
                small
                class="mr-2"
                @click="dataEdit(item._id)">
                    edit
            </v-icon>
            <v-icon
                small
                @click="delItem(item._id)">
                    delete
            </v-icon>
        </template>
    </v-data-table>
    </v-card>
</template>
<script>

import ItemsForm from './ItemsForm'
import {createNamespacedHelpers} from 'vuex'
const {mapActions, mapGetters} = createNamespacedHelpers('items')

export default {
    name : "ItemsList",
    components : {
        ItemsForm
    },
    data: () => ({
        search: '',
        valid: true,
        dialog: false,
        nameRules: [
            v => !!v || 'Name is required',
            v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ],
        curr_id: -1,
        headers: [
        {
          text: 'Nome Item',
          align: 'left',
          sortable: false,
          value: 'name',
        },
        { text: 'Preço', value: 'price' },
        { text: 'Cor', value: 'color' },
        { text: 'Actions', value: 'action', sortable: false },
      ],
    }),
    created: function(){
        this.$store.dispatch('items/fetchItems');
    },
    methods: {
        ...mapActions(['changeID', 'changeName', 'changePrice', 'changeColor']),
        delItem(id){
            this.$store.dispatch('items/delItemAction', {_id : id})
        },
        dataEdit (item) {
            this.changeID(item)
            this.dialog = true
        },
        dataAdd () {
            this.changeID(-1)
        }
    },
    computed: {
        ...mapGetters({items: 'items'})
    }
}
</script>
