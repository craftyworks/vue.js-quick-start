<template>
    <div>
        <h1>연락처</h1>
        <div class="wrapper">
            <div class="box" v-for="c in contacts" :key="c.no">
                <nuxt-link :to="'/contacts/' + c.no">{{c.name}}</nuxt-link>
            </div>
        </div>
        <nuxt-child></nuxt-child>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: "index.vue",
    transition: 'elastic',
    computed: mapGetters({
        contacts: 'getContacts'
    })
}
</script>

<style scoped>

</style>
