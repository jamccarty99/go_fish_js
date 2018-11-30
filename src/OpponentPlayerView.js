class OpponentPlayerView {
  constructor(player, callBack) {
    this._player = player
    this._callBack = callBack
  }

  player() {
    return this._player
  }

  card() {
    return document.getElementById(`${this.player().name()}-hand`)
  }

  draw(container) {
    const playerMarkup =
    `
      <div class="player">
        <div class="player-name selectable">
          ${this.player().name()}
        </div>
        <div class="player-sets">
          Sets: ${this.player().setsCount()}
        </div>
        <div id="${this.player().name()}-hand" class="player-hand"></div>
      </div>
    `
    const element = document.createElement('div')
    element.innerHTML = playerMarkup
    element.onclick = this._callBack.bind(this)
    container.appendChild(element)
    this._drawCard()
  }

  _drawCard() {
    this.player().hand().forEach((card) => {
      const view = new OpponentCardView(card)
      view.draw(this.card())
    })
  }
}
