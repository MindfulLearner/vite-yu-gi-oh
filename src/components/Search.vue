<script>
    export default {
        data() {
            return {
            }
        }
    }
</script>


<template>
    <div class="select-style">
        <div>
            seleziona archetipo
        </div>
        <label for="">
            <select class="selezioni">
                <option class="opzioni" value="">1</option>
                <option class="opzioni" value="">2</option>
                <option class="opzioni" value="">3</option>
                <option class="opzioni" value="">4</option>
                <option class="opzioni" value="">5</option>
            </select>
        </label>
    </div>
</template>

<style scoped>
    .selezioni {
        width: 100px;
        height: 100%;
        text-align: center;

    }

    .select-style {
        height: 50px;
    }
</style>
