describe("Player", function() {
  let card = new PlayingCard('Ace', 'Spades');

  beforeEach(function() {
    name = 'Player 1';
    player = new Player(name);
    playerHand = player.hand()
  });

  describe("name", function() {
    it("should return the players name", function() {
      expect(player.name()).toEqual(name);
    });
  });

  describe("hand", function() {
    it("should return the players hand", function() {
      playerHand.push(card)
      expect(player.hand().length).toEqual(1);
    });
  });

  describe("sets", function() {
    it("should returns the players sets", function() {
      expect(player.sets().length).toEqual(0);
    });
  });

  describe("handCount", function() {
    it("should return the number of cards in hand", function() {
      expect(player.handCount()).toEqual(0);
      playerHand.push(card);
      expect(player.handCount()).toEqual(1);
    });
  });

  describe("setsCount", function() {
    it("should return the number of sets in hand", function() {
      expect(player.setsCount()).toEqual(0);
      player.sets().push(card);
      expect(player.setsCount()).toEqual(1);
    });
  });

  describe("addCards", function() {
    it("should add cards to players hand", function() {
      expect(player.handCount()).toEqual(0);
      player.addCards(card);
      expect(player.handCount()).toEqual(1);
    });
  });

  describe("isEmpty", function() {
    it("should return true if hand is empty", function() {
      expect(player.isEmpty()).toEqual(true);
      player.addCards(card);
      expect(player.isEmpty()).toEqual(false);
    });
  });

  describe("hasAny", function() {
    it("checks if player has the rank requested", function() {
      playerHand.push(card)
      expect(player.hasAny()).toEqual(true);
      player.addCards(card);
      expect(player.hasAny()).toEqual(false);
    });
        joey.add_cards(card)
        expect(joey.has_any?(card.rank)).to be(true)
        expect(joey.has_any?('2')).to be (false)
  });
});
