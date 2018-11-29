class CardView {
  constructor(onLogin) {
    this.onLogin = onLogin
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

  draw(container) {
    const cardMarkup = `
      <form class="user-form">
        <label for="name">Name</label>
        <input type="text" id="name" />
        <label for="numberOfBots">Number of Bots</label>
        <input type="number" id="numberOfBots" value="1"/>

        <input id="submit" type="submit" value="Login">
      </form>
    `

    const element = document.createElement('div')
    element.innerHTML = formMarkup
    element.onsubmit = this.onSubmit.bind(this)
    container.appendChild(element)
    return element
  }
}
