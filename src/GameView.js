class GameView {
  constructor(game) {
    this._game = game;
  }

  player() {
    return document.getElementByClass('player-name')
  }
  game() {
    return this._game;
  }

  setRank(event) {
    event.target.setAttribute('style', 'background=blue')
  }

  selfPlayer() {
    return document.querySelectorAll('.player-name')[0];
  }


  currentPlayer() {
    return document.querySelectorAll('.player-name')[this.turn() % this.players().length].setAttribute('style', 'font-weight: bold');
    // this.game().currentPlayer()
  }

  opponentHandMarkup(cards) {
    return `
      <ul>
        ${
          cards.map(card =>
            `<li class="hand-card" style="background: white; border: 2px solid black; max-width: 65px; text-align: center; margin: 5px;">
              Playing Card
            </li>`
          ).join('')
        }
      </ul>
    `
  }

  selfHandMarkup(cards) {
    return `
      <ul>
        ${
          cards.map(card =>
            `<li class="hand-card" style="background: white; border: 2px solid black; max-width: 65px; text-align: center; margin: 5px;">
              ${card.rank()} of ${card.suit()}
            </li>`
          ).join('')
        }
      </ul>
    `
  }

  playerMarkup(players) {
    return `
      <ul>
        ${
          players.map(player =>
            `<li class="player-name">
              ${player.name()}
            </li>
            ${this.selfHandMarkup(player.hand())}`
          ).join('')
        }
      </ul>
    `
  }

  draw(container) {
    const gameMarkup = `
      <h1>Welcome to Go Fish!</h1>

      <h2>Players</h2>
        ${this.playerMarkup(this.game().players())}
    `

    const element = document.createElement('div')
    container.innerHTML = ''
    element.innerHTML = gameMarkup
    container.appendChild(element)
    return element
  }
}
