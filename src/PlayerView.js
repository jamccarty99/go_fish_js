class PlayerView {
  constructor(players) {
    this._players = players
  }

  players() {
    return this._players
  }

  setRank(event) {
    event.target.setAttribute('style', 'background=blue')
  }

  draw(container) {
    const playerMarkup = `
      <ul>
        ${
          this.players().map(player =>
            `<li class="player-name">
              ${player.name()}
            </li>
            ${this.selfHandMarkup(player.hand())}`
          ).join('')
        }
      </ul>
    `

    const element = document.createElement('div')
    element.innerHTML = playerMarkup
    container.appendChild(element)
    const view = new CardView(this.game().players())
    view.draw(this.player())
    return element
  }
}
