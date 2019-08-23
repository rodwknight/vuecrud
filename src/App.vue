<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app >
        <v-list dense>
            <v-list-item :to="{name : 'Items'}" >
                <v-list-item-action>
                    <v-icon>home</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>
                        Items
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>VueCRUD</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col class="text-center">
              <router-view></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>
<script>
export default {
  name: 'App',
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  }),
};
</script>
