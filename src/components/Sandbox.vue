// Create.vue
<template v-slot:activator="{ on }">
    <v-container>
        <v-card>
            <v-card-title>
                <span class="headline">Sandbox</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-form
                        ref="form"
                        v-model="valid"
                        lazy-validation
                        v-on:submit.prevent="addAuth">
                        <v-text-field
                            :counter="255"
                            label="Email"
                            required
                        >
                        </v-text-field>
                        <v-text-field label="Token">
                        </v-text-field>
                    </v-form>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-btn :disabled="!valid" color="blue darken-1" text @click="submitAuth">Salvar</v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>
<script>

import {createNamespacedHelpers} from 'vuex'
const {mapActions, mapState} = createNamespacedHelpers('sandbox')

export default {
    name: 'Sandbox',
    data: () => ({
        valid: true,
        nameRules: [
            v => !!v || 'Email é obrigatório',
            v => (v && v.length <= 255) || 'Tamanho maximo 255',
        ],
        dialog : false,
    }),
    methods: {
        ...mapActions(['changeEmail', 'changeToken', 'sessionStart']),
        submitAuth() {
            this.sessionStart()
        }
    },
    computed: {
        ...mapState(['sandbox']),
    }
}
</script>
