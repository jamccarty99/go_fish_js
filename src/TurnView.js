class TurnView {
  constructor(turn, callBack) {
    this._turn = turn
    this._callBack = callBack
  }

  turn() {
    return this._turn;
  }

  draw(container) {
    if (this.turn() == 0) {
      const turnMarkup =`
        <button class="btn btn-request">Request Cards</button>
      `
      const element = document.createElement('div')
      element.innerHTML = turnMarkup
      element.onclick = this._callBack.bind(this)
      container.appendChild(element)
    } else {
      const turnMarkup =`
        <h2>Opponents taking their turn...</div>
      `
      const element = document.createElement('div')
      element.innerHTML = turnMarkup
      container.appendChild(element)
    }

  }
}
