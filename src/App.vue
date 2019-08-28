<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      clipped>
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
        fixed
        height='72'
        color="#000"
        dark
        prominent
        floating
        class="app-bar_home">

        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>VueCRUD</v-toolbar-title>
        <div class="flex-grow-1"></div>
        <v-btn icon>
            <v-icon>search</v-icon>
        </v-btn>
        <v-btn icon>
            <v-icon>favorite</v-icon>
        </v-btn>
        <v-btn icon>
            <v-icon>more_vert</v-icon>
        </v-btn>
    </v-app-bar>
    <v-content
        style="padding-top:75px;" >
        <v-container >
            <v-row
                align="center"
                justify="center"
                style="height:1000px;">
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

import './App.css'

export default {
  name: 'App',
  props: {
    source: String
  },
  data: () => ({
    drawer: false,
  }),
}
</script>
