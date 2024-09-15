<script>
    import Header from './components/Header.vue';
    import Search from './components/Search.vue';
    import Main from './components/Main.vue';
    export default {
        data() {
            return {
            }
        },
        components: {
            Header,
            Search,
            Main
        }
    }
</script>

<template>
    <Header />
    <Search />
    <Main />
</template>

<style scoped>
</style>
