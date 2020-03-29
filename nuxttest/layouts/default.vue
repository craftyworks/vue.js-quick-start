<template>
    <div>
        <div class="header">
            <h1 class="headerText">(주) 콘솔탄틴</h1>
            <nav>
                <ul>
                    <li>
                        <nuxt-link to="/">Home</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/about">About</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/contacts">Contacts</nuxt-link>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="container">
            <nuxt></nuxt>
        </div>
    </div>
</template>

<script>
export default {
    name: "default.vue"
}
</script>

<style scoped>

</style>
