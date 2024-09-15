// store

import { reactive } from 'vue';
import axios from 'axios'; 

export const store = reactive({
    cards: [],
    cardsLength: 0,

    searchCard: '',
    selectedCard: '',


    updateCardsLength(newTotalCards) {
        this.cards = newTotalCards;
        this.cardsLength = newTotalCards.length;
    },
    async cerca() {
        console.log(this.searchCard);
        console.log(this.selectedCard);
        try {
            const url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';
            const params = {};

            if (this.searchCard.trim() != "") {
                params.name = this.searchCard; 
            }
            if (this.selectedCard.trim() != "") {
                params.archetype = this.selectedCard; 
            }
                const response = await axios.get(url, { params });
                console.log(response);
                if (response.data && response.data.data) {
                    this.cards = response.data.data.map(card => ({
                        name: card.name,
                        archetype: card.archetype,
                        image: card.card_images[0].image_url 
                    }));
                    console.table(this.cards);
                    this.updateCardsLength(this.cards);
                    console.log(this.cardsLength);
                } else {
                    console.warn('niente carte di questo tipo');
                }
        } catch (error) {
            console.error('non caricati', error);
        }
    }

});













