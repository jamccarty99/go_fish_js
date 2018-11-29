class CardDeck {
  constructor(cards) {
    this._cards = cards || this.fullDeck();
  }

  cards() {
    return this._cards
  }

  shuffle() {
    for (let i = this.cardCount() - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards()[i], this.cards()[j]] = [this.cards()[j], this.cards()[i]];
    }
  }

  deal() {
    return this.cards().pop();
  }

  cardCount() {
    return this.cards().length
  }

  isEmpty() {
    return Boolean(this.cards() == 0);
  }

  fullDeck() {
    return CardDeck.RANK.flatMap(rank => {
      return CardDeck.SUIT.map( suit => new PlayingCard(rank, suit))
    })
  }
}

CardDeck.RANK = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
CardDeck.SUIT = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];

  // def as_json
  //   { 'deck' => deck.map(&:as_json) }
  // end
  //
  // def self.from_json(deck_json)
  //   CardDeck.new(PlayingCard.collection_from_data(deck_json['deck']))
  // end
