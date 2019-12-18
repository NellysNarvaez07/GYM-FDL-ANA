<template>
    <v-row align="center" justify="center">
      <v-col
          v-for="(item, i) in $store.state.options"
          :key="i"
          cols="12"
        >
          <v-card
            :color="item.color"
            dark
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="headline"
                  v-text="item.name"
                ></v-card-title>

                <v-card-subtitle>
                  <v-spacer />
                  <v-icon>{{ item.icon }}</v-icon>
                </v-card-subtitle>

              </div>

              <v-avatar
                class="ma-3"
                size="125"
                tile
              >
                <v-img :src="item.src"></v-img>
              </v-avatar>
            </div>

          </v-card>
      </v-col>

    </v-row>
</template>

<script>

export default {
  name: 'home',
}
</script>
