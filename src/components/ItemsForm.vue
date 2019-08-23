<template>
    <v-card>
        <v-card-title>
            <span class="headline">{{ formTitle }}</span>
        </v-card-title>
        <v-card-text>
            <v-container>
                <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation
                    v-on:submit.prevent="addItem">
                    <v-text-field
                        :counter="10"
                        :rules="nameRules"
                        label="Item Name"
                        required
                        :value="item.name"
                        @change="changeName"
                    >
                    </v-text-field>
                    <v-text-field
                        label="Item Price"
                        :value="item.price"
                        @change="changePrice"
                    >
                    </v-text-field>
                    <v-select
                        :items="coloresItems"
                        filled
                        label="Cores Item"
                        :value="item.color"
                        @change="changeColor"
                    ></v-select>
                </v-form>
            </v-container>
        </v-card-text>
        <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn color="blue darken-1" text @click="reset">Cancel</v-btn>
            <v-btn :disabled="!valid" color="blue darken-1" text @click="addItem">Save</v-btn>
        </v-card-actions>
    </v-card>
</template>
<script>
import {mapActions, mapState} from 'vuex'

export default {
    name: 'ItemsForm',
    props: {
        currId: {
            type: Number,
            default: -1
        }
    },
    data: () => ({
        valid: true,
        nameRules: [
            v => !!v || 'Name is required',
            v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ],
        dialog : false,
        coloresItems: ['Vermelho', 'Verde', 'Azul', 'Preto'],
    }),
    methods: {
        ...mapActions(['changeID', 'changeName', 'changePrice', 'changeColor']),
        reset () {
            this.dialog = false
        },
        addItem() {
            if (this.$store.getters.item._id === -1) {
                this.$store.dispatch('addItemAction')
            } else {
                this.$store.dispatch('editItemAction')
            }
        }
    },
    computed: {
        ...mapState(['item']),
        formTitle () {
            return this.currId === -1 ? 'Novo Item' : 'Editar Item'
        }
    }
}
</script>
