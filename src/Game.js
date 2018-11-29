class Game {
  constructor(player, numberOfBots) {
    this._player = player;
    this._numberOfBots = numberOfBots;
    this._players = [];
    this._deck = new CardDeck();
    this._turn = 0;
  }

  start() {
    this._createPlayers();
    this.deck().shuffle();
    this.distributeCards();
  }

  players() {
    return this._players;
  }

  _addPlayer() {
    return new Player(this._player)
  }

  _addBots() {
    return [...Array(this._botCount()).keys()].map(i => new Player(`Bot ${i + 1}`))
  }

  _createPlayers() {
    const playerList = [this._addPlayer()].concat(this._addBots());
    this._players = playerList;
    return this._players;
  }

  deck() {
    return this._deck;
  }

  _botCount() {
    if (!this._numberOfBots) this._numberOfBots = 1;
    return this._numberOfBots;
  }

  distributeCards() {
    const starting_hand = (this._botCount() + 1) > 3 ? 5 : 7;
    let i = 0;
    const deck = this.deck();
    while (i < starting_hand) {
      this.players().forEach(function(player) {
        player.addCards(deck.deal())
      });
      i++;
    }
  }

  turn() {
    return this._turn;
  }

  currentPlayer() {
    return this.players()[this.turn() % this.players().length]
  }

  nextPlayer() {
    this._turn = this.turn() + 1;
    this.currentPlayer().isEmpty() ? this.goFishing() : '';
  }

  goFishing() {
    if (this.winner()) return;

    if (this.deck().isEmpty()) {
      this.nextPlayer();
    } else {
      this.currentPlayer().addCards(this.deck().deal())
      this.nextPlayer();
    }
  }
}
//    def go_fishing
//     return if winner
//
//     current_player.add_cards(deck.deal) unless deck.empty?
//     next_player
//   end
//
//   def find_player(player_name)
//     players.find{ |player| player.name == player_name }
//   end
//
//   def play_round(player_name, rank)
//     return if winner
//
//     player = find_player(player_name)
//     player.has_any?(rank) ? card_transfer(player, rank) : go_fishing
//     go_fishing if current_player.empty?
//   end
//
//   def as_json
//     {
//       'players' => players.map(&:as_json),
//       'deck' => deck.as_json,
//       'round' => round
//     }
//   end
//
//   def self.from_json(go_fish_json)
//     GoFish.new(
//       Player.collection_from_data(go_fish_json['players']),
//       CardDeck.from_json(go_fish_json['deck']),
//       go_fish_json['round']
//     )
//   end
//
//   def winner
//     return unless game_over?
//
//     draw? ? tie_breaker_winner : players.max_by(&:sets_count)
//   end
//
//   def game_over?
//     total_sets = players.map(&:sets_count).reduce(:+)
//     total_sets == 13
//   end
//   def card_transfer(player, rank)
//     current_player.add_cards(player.give_cards(rank))
//   end
//
//
//
//   def highest_set_count
//     players.max_by(&:sets_count).sets_count
//   end
//
//   def highest_set_count_players
//     players.select{ |player| player.sets_count == highest_set_count }
//   end
//
//   def draw?
//     highest_set_count_players.count > 1
//   end
//
//   def highest_set_value
//     highest_set_count_players.max_by(&:sets_value).sets_value
//   end
//
//   def double_draw?
//     values = players.map(&:sets_value)
//     values.count{ |value| value == highest_set_value } > 1
//   end
//
//   def tie_breaker_winner
//     if double_draw?
//       highest_set_count_players.max_by(&:highest_value)
//     else
//       highest_set_count_players.max_by(&:sets_value)
//     end
//   end
// end
