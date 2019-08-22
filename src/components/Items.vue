// Create.vue
<template>
    <v-container>
            <ItemsForm />
            <ItemsList />
    </v-container>
</template>
<script>

import ItemsList from './ItemsList'
import ItemsForm from './ItemsForm'

export default {
    name: 'Items',
    components: {
        ItemsList,
        ItemsForm
    }
}
</script>
