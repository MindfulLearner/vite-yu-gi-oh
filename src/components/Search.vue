<script>
    import {store} from '../store.js';
    export default {
        data() {
            return {
                store
            }
        }
    }
</script>


<template>
    <div class="container">
        <div class="select-style">
            <div>
                seleziona archetipo
            </div>
            <label for="">
                <select v-model="store.selectedCard" class="selezioni">
                    <option class="opzioni" value="Alien">Alien</option>
                    <option class="opzioni" value="Infernoble Arms">Infernoble Arms</option>
                    <option class="opzioni" value="Noble Knight">Noble Knight</option>
                    <option class="opzioni" value="Melodious">Melodious</option>
                    <option class="opzioni" value="Archfiend">Archfiend</option>
                </select>
            </label>
            <div>
                Hai trovato: {{ store.cardsLength }}
            </div>
            <div>
                <input v-model="store.searchCard" type="text" name="" value="">
            </div>
            <div>
                <button @click="store.cerca()" type="button">CERCA</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .selezioni {
        width: 100px;
        text-align: center;
    }

    .select-style {
        height: 100%;
        gap: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .container {
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
