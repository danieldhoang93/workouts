<template>
  <q-layout view="hHh lpR lFr">
    <q-header elevated>
      <q-toolbar class = "glossy">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="767"
      :width="250"
      show-if-above
      bordered
      content-class="bg-primary">

      <q-list dark>
        <q-item-label
          header
          class="text-grey-8"
        >
          Navigation
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-footer elevated>
          <q-tabs>
            <q-route-tab icon="list" label="Workouts" to="/" exact/>
            <q-route-tab icon="settings" label="Settings" to="/settings" exact/>
          </q-tabs>
      </q-footer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Home',
          caption: 'quasar.dev',
          icon: 'list',
          link: '/'
        },
        {
          title: 'Settings',
          caption: '/settings',
          icon: 'settings',
          link: '/settings'
        },
        {
          title: 'Github',
          caption: 'github.com/quasarframework',
          icon: 'code',
          link: 'https://github.com/quasarframework'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.glossy {
  background :rgb(49, 49, 49);
}
q-tabs {
  background:red;
}

.q-drawer {
  .q-router-link--exact-active{
    color:purple!important;
  }
}

@media screen and (min-width: 768px) {
  .q-footer {
    display:none;
  }
}
@media screen and (max-width: 768px) {
  .q-btn {
    display:none;
  }
}
</style>
