class OpponentCardView {
  constructor(card) {
    this._card = card
  }

  card() {
    return this._card;
  }

  draw(container) {
    const cardMarkup =`
      <div class="hand-card">
        Playing Card
      </div>
    `
    const element = document.createElement('div')
    element.innerHTML = cardMarkup
    container.appendChild(element)

  }
}
