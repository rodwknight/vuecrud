// Create.vue
<template v-slot:activator="{ on }">
    <v-container>
            <ItemsList />
    </v-container>
</template>
<script>

import ItemsList from './ItemsList'

export default {
    name: 'Items',
    dialog: false,
    components: {
        ItemsList
    }
}
</script>
