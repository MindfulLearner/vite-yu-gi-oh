<script>
    import Header from './components/Header.vue';
    import Main from './components/Main.vue';
    export default {
        data() {
            return {
                count: 0,
            }
        },
        components: {
            Header,
            Main
        }
    }
</script>

<template>
    <Header />
    <Main />
</template>

<style scoped>
</style>
