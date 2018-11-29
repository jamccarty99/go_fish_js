describe("PlayingCard", function() {
  var card;

  beforeEach(function() {
    rank = 'A';
    suit = 'S';
    card = new PlayingCard(rank, suit);
  });

  describe("rank", function() {
    it("should have a rank", function() {
      expect(card.rank()).toEqual(rank);
    });
  });

  describe("suit", function() {
    it("should have a suit", function() {
      expect(card.suit()).toEqual(suit);
    });
  });
  // it("should have a value", function() {
  //   expect(card.value).toEqual(13);
  // });
});
