<script>
    export default {
        props: {
            name: {
                type: String,
            },
            archetype: {
                type: String,
            },
            image: {
                type: String,
            }
        }
    }
</script>


<template>
    <div class="card-container">
        <div class="img-container">
            <img :src="image" alt="Card Image">
        </div>
        <div class="title-card">
            <h3>{{ name }}</h3>
        </div>
        <div class="archetype">
            <p>{{ archetype }}</p>
        </div>
    </div>
</template>


<style scoped>
    .card-container {
        display: flex;
        gap: 10px;
        flex-direction: column;
        width: calc((100% / 5) - 20px);
        min-height: 300px;
        justify-items: center;
        text-align: center;
    }

    .img-container {
        width: 100%;
        height: auto;
    }

    img {
        width: 100%;
        height: 100%;
    }

    .title-card {}

    .archetype {}
</style>
