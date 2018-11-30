class GameView {
  constructor(game) {
    this._game = game
  }

  opponents() {
    this.game().players().shift()
    return this.game().players()
  }

  game() {
    return this._game;
  }

  currentPlayer() {
    return (this.game().turn() % this.game().players().length)
    // return document.querySelectorAll('.player-name')[this.turn() % this.players().length].classList.add('current-player');
    // this.game().currentPlayer()
  }

  onPlayerClick(e) {
    if (e.target.classList.contains('selectable')) {
      document.querySelectorAll('.player-name').forEach((player) => {
        player.classList.contains('selected-card') ? player.classList.remove('selected-card'): ''
      })
      e.target.classList.add('selected-card')
    }
    this._selectedPlayer = e.target.dataset.player
  }

  onButtonClick(e) {
    if (e.target.classList.contains('btn-request')) {
      document.querySelectorAll('.player-name').forEach((player) => {
        player.classList.contains('selected-card') ? player.classList.remove('selected-card'): ''
      })
      document.querySelectorAll('.hand-card').forEach((card) => {
        card.classList.contains('selected-card') ? card.classList.remove('selected-card'): ''
      })
    }

  }

  draw(container) {
    const gameMarkup =
    `
      <div>
        <h1>Welcome to Go Fish!</h1>
        <h2>Players</h2>
        <div id="player"></div>
        <div id="opponents"></div>
        <div id="turn"></div>
      </div>
    `
    const element = document.createElement('div')
    container.innerHTML = ""
    element.innerHTML = gameMarkup
    container.appendChild(element)
    this._drawPlayer()
    this._drawOpponents()
    this._drawTurn()

  }
  _drawPlayer() {
    const view = new PlayerView(this.game().players()[0])
    view.draw(player)
  }
  _drawOpponents() {
    this.opponents().forEach((player) => {
      const view = new OpponentPlayerView(player, this.onPlayerClick.bind(this))
      view.draw(opponents)
    })
  }
  _drawTurn() {
    const view = new TurnView(this.currentPlayer(), this.onButtonClick.bind(this))
    view.draw(turn)
  }
}
