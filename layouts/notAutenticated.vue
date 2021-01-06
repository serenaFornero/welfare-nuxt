<template>
  <v-app>
    <v-app-bar
      color="#F7F9FC"
      dark
      dense
      flat
    >
      <v-toolbar-title
        class="font-weight-medium mt-6 mb-3 text-center"
        style="color: #2573d5"
      >
        WeCare
      </v-toolbar-title>
    </v-app-bar>
    <v-main>
      <transition name="slide" mode="out-in">
        <nuxt/>
      </transition>
    </v-main>
    <my-footer></my-footer>
  </v-app>
</template>

<script>
import MyFooter from "~/components/MyFooter";


export default {
  components: {MyFooter},
  data: () => ({
  }),

}
</script>

<style>

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-20%);
}
</style>
