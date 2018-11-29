describe("CardDeck", function() {
  describe("cards", function() {
    it("should have cards", function() {
      card = [new PlayingCard('Ace', 'Spades')];
      deck = new CardDeck(card);
      expect(deck.cards()).toEqual(card);
    });
  });

  describe("shuffle", function() {
    it("should shuffle the cards", function() {
      cards = [new PlayingCard('Ace', 'Spades'), new PlayingCard('King', 'Clubs'), new PlayingCard('Queen', 'Hearts')];
      deck = new CardDeck(cards);
      expect(deck.shuffle()).not.toEqual(cards);
    });
  });

  describe("deal", function() {
    it("should deal one card from the deck", function() {
      cards = [new PlayingCard('Ace', 'Spades'), new PlayingCard('King', 'Clubs'), new PlayingCard('Queen', 'Hearts')];
      deck = new CardDeck(cards);
      expect(deck.cardCount()).toEqual(3);
      deck.deal();
      expect(deck.cardCount()).toEqual(2);
    });
  });

  describe("isEmpty", function() {
    it("should return true if deck is empty", function() {
      card = [new PlayingCard('Ace', 'Spades')];
      deck = new CardDeck(card);
      expect(deck.isEmpty()).toEqual(false);
      deck.deal();
      expect(deck.isEmpty()).toEqual(true);
    });
  });
});
