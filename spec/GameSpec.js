describe("Game", function() {
  beforeEach(function() {
    player = "Player 1"
    game = new Game(player);
  });

  describe("_addPlayer", function() {
    it("should add a player to the game", function() {
      expect(game._addPlayer().name()).toEqual(player);
    });
  });

  describe("_addBots", function() {
    it("should add at least one bot to the game", function() {
      expect(game._botCount()).toEqual(1);
    });
  });

  describe("_createPlayers", function() {
    it("should create and return an array of new players", function() {
      expect(game.players()[0]).toMatch("");
      expect(game._createPlayers()).toEqual(jasmine.any(Array));
      expect(game.players()[0].name()).toMatch("Player 1");
    });
  });

  describe("players", function() {
    it("should return a list of the player and bots", function() {
      game.start();
      expect(game.players()[0].name()).toMatch("Player 1");
      expect(game.players()[1].name()).toMatch("Bot 1");
    });
  });

  describe("deck", function() {
    it("should return a new CardDeck", function() {
      expect(game.deck().cards()[0].rank()).toMatch('2');
      expect(game.deck().cards()[0].suit()).toMatch('Clubs');
      deck = game.deck()
      expect(deck.cardCount()).toEqual(52);
    });
  });

  describe("_botCount", function() {
    it("should return the number of bots selected by the player or default to 1", function() {
      expect(game._botCount()).toEqual(1);
    });
  });

  describe("distributeCards", function() {
    it("should deal out 7 cards to each person in a 2 player game", function() {
      game.start();
      expect(game.players()[0].handCount()).toEqual(7);
      expect(game.players()[1].handCount()).toEqual(7);
    });

    it("should deal out 5 cards to each person in a 4+ player game", function() {
      largeGame = new Game(player, 3)
      largeGame.start();
      expect(largeGame.players()[0].handCount()).toEqual(5);
      expect(largeGame.players()[1].handCount()).toEqual(5);
    });
  });

  describe("currentPlayer", function() {
    it("should return the current player", function() {
      game.start();
      expect(game.currentPlayer().name()).toMatch('Player 1');
    });
  });

  describe("nextPlayer", function() {
    it("should increase the round by 1", function() {
      game.start();
      expect(game.turn()).toEqual(0);
      game.nextPlayer();
      expect(game.turn()).toEqual(1);
    });

    it("tells next player to go fish if their hand is empty", function() {
      card = new PlayingCard('Ace', 'Spades')
      game._createPlayers();
      game.players()[0].addCards([card, card])
      expect(game.turn()).toEqual(0);
      game.nextPlayer();
      expect(game.turn()).toEqual(2);
    });
  });

  describe("goFishing", function() {
    beforeEach(function() {
      game.start();
      game.goFishing();
    });

    xit('takes a card from the deck', function() {
      expect(game.players()[0].handCount()).toEqual(8);
      // expect{ game.goFishing()) }.to change { player2.hand_count }.by 1
    });

    // it('goes to the next round after fishing', function() {
    //   expect(go_fish.current_player.name).to eq('player2')
    // });
    //
    // it('skips to next player without adding cards if deck is empty', function() {
    //   go_fish.send(:deck).send(:deck=, [])
    //   go_fish.send(:go_fishing)
    //   expect(player2.hand_count).to be(7)
    // });
  });

  describe("playRound", function() {
    it('current_user (not player) can play a round with successful fish', function() {
      card = new PlayingCard('Ace', 'Spades')
      game._createPlayers();
      game.players()[0].addCards([card, card])
      game.playRound(game.players()[1], '2')
      expect(game.currentPlayer().handCount()).not.toEqual(2);
    });
    //it('current_user (not player) can play a round with successful fish') do
  //       go_fish.play_round(player2.name, player2.send(:hand)[0].rank)
  //       expect(go_fish.current_player.hand_count).to_not be(7)
  //     end
  //
  //     it 'changes the number of cards the current player has' do
  //       expect{ go_fish.play_round('player2', 'Ace') }.to change(player1, :hand_count)
  //     end
  });
});
//   describe '#card_transfer' do
//     it("transfers card(s) from requested to current_player") do
//       go_fish.start
//       go_fish.send(:card_transfer, player2, player2.send(:hand)[0].rank)
//       expect(go_fish.current_player.hand_count).to_not be(7)
//     end
//   end
//

//
//   describe('#find_player') do
//     it('correctly finds the player') do
//       result = go_fish.find_player('player1')
//       expect(result.name).to eq('player1')
//     end
//   end
//
//   describe('#play_round') do
//     before do
//       go_fish.start
//     end
//
//     it('current_user (not player) can play a round with successful fish') do
//       go_fish.play_round(player2.name, player2.send(:hand)[0].rank)
//       expect(go_fish.current_player.hand_count).to_not be(7)
//     end
//
//     it 'changes the number of cards the current player has' do
//       expect{ go_fish.play_round('player2', 'Ace') }.to change(player1, :hand_count)
//     end
//   end
//
//   describe 'highest_set_count' do
//     it('finds the highest set count in the game') do
//       player1.add_cards([card,card,card,card])
//       player1.check_for_sets
//       expect(go_fish.send(:highest_set_count)).to be(1)
//     end
//   end
//
//   describe 'highest_set_count_players' do
//     it('finds the players with the highest set count in the game') do
//       player1.add_cards([card,card,card,card])
//       player2.add_cards([card,card,card,card])
//       go_fish.players.map(&:check_for_sets)
//       result = go_fish.send(:highest_set_count_players)
//       expect(result.count).to be(2)
//       expect(result.all?(Player)).to be(true)
//       expect(result.all?{|player| player.sets_count == 1}).to be(true)
//     end
//   end
//
//   describe('#draw?') do
//     it('return true if draw')do
//       player1.add_cards([card,card,card,card])
//       player2.add_cards([card,card,card,card])
//       go_fish.players.map(&:check_for_sets)
//       expect(go_fish.send(:draw?)).to be(true)
//     end
//
//     it('return false if only one player wins')do
//       player1.add_cards([card,card,card,card])
//       player1.check_for_sets
//       expect(go_fish.send(:draw?)).to be(false)
//     end
//   end
//
//   describe('#highest_set_value') do
//     before do
//       player1.send(:make_a_set, '8')
//       player2.send(:make_a_set, '9')
//     end
//
//     it('find the set value of the highest set count')do
//       expect(go_fish.send(:highest_set_value)).to be(8)
//     end
//   end
//
//   describe('#double_draw?') do
//     before do
//       player1.send(:make_a_set, '9')
//       player2.send(:make_a_set, '9')
//     end
//
//     it('returns true if double draw (same set count,same set value)')do
//       expect(go_fish.send(:double_draw?)).to be(true)
//     end
//   end
//
//   describe('#tie_breaker_winner') do
//     let(:go_fish) { create_game(3) }
//     let(:player1) { go_fish.players[0]}
//     let(:player2) { go_fish.players[1]}
//     let(:player3) { go_fish.players[2]}
//
//     before do
//       player1.send(:make_a_set, 'Queen')
//       player1.send(:make_a_set, '4')
//       player2.send(:make_a_set, 'King')
//       player2.send(:make_a_set, '3')
//       player3.send(:make_a_set, 'Ace')
//       player3.send(:make_a_set, '2')
//     end
//
//     it('compare players and see who has the highest value points')do
//       expect(go_fish.send(:tie_breaker_winner)).to be(player3)
//     end
//
//     it 'returns the player with the highest sets value' do
//       player1.send(:make_a_set, '5')
//       player2.send(:make_a_set, '6')
//       expect(go_fish.send(:tie_breaker_winner)).to be(player2)
//     end
//   end
//
//   describe '#game_over?' do
//     it 'returns false if there are sets left to be made' do
//       player1.send(:make_a_set, 'Ace')
//       expect(go_fish.send(:game_over?)).to be(false)
//     end
//
//     it 'returns true if all sets have been made' do
//       13.times { player1.send(:make_a_set, 'Ace') }
//       expect(go_fish.send(:game_over?)).to be(true)
//     end
//   end
//
//   describe '#winner' do
//     let(:go_fish) { create_game(3) }
//     let(:player3) { go_fish.players[2]}
//
//     before do
//       go_fish.start
//     end
//
//     it 'returns the winner of the game' do
//       13.times { player1.send(:make_a_set, 'Ace') }
//       expect(go_fish.winner).to be(player1)
//     end
//
//     it 'returns the winner, who has the most of 13 sets' do
//       expect(go_fish.winner).to be_nil
//       6.times { player1.send(:make_a_set, 'King') }
//       6.times { player2.send(:make_a_set, 'Ace') }
//       1.times { player3.send(:make_a_set, 'Jack') }
//       expect(go_fish.winner).to be player2
//     end
//   end
//
//   describe '#as_json' do
//     it('converts data into hash') do
//       expect(go_fish_json['players'].is_a?(Array)).to be true
//       # expect(go_fish_json['deck']).to eq()
//       expect(go_fish_json['round']).to eq(go_fish.round)
//     end
//
//     it("json's players array have player data") do
//       player1.add_cards(card)
//       expect(go_fish_json['players'][0]['hand'][0]['rank']).to eq(card.rank)
//     end
//   end
//
//   describe '#from_json' do
//     let(:inflated_go_fish) { GoFish.from_json(go_fish_json) }
//
//     it('inflated go_fish has the correct attribute and methods') do
//       expect(inflated_go_fish.players[0]).to be_an_instance_of(Player)
//       expect(inflated_go_fish.send(:deck)).to be_an_instance_of(CardDeck)
//       expect(inflated_go_fish.round).to eq(go_fish.round)
//     end
//
//     it('inflated go_fish players can have cards with playing card class') do
//       player1.add_cards(card)
//       expect(inflated_go_fish.players.empty?).to be false
//       expect(inflated_go_fish.players[0].send(:hand)[0].rank).to eq('Ace')
//       expect(inflated_go_fish.players[0].send(:hand)[0]).to be_an_instance_of(PlayingCard)
//     end
//   end
// end
