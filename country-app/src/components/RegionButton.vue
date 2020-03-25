<template>
  <div>
    <button class="region" v-for="region in regions" :key="region.no"
            :class="isSelected(region)"
            @click="changeRegion({region})">
      {{region}}
    </button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import _ from 'lodash'
import Constant from '../Constant'

export default {
  name: 'RegionButton.vue',
  computed: mapGetters(['regions', 'currentRegion']),
  methods: _.extend(
    {
      isSelected(region) {
        return { selected: region === this.currentRegion }
      },
    },
    mapMutations([
      Constant.CHANGE_REGION,
    ]),
  ),
}
</script>

<style scoped>

</style>
