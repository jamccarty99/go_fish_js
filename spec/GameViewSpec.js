describe('GameView', () => {
  describe('render gameMarkup', () => {
    it('renders a list of the players names', () => {
      const game = new Game('Player 1', 2)
      game.start()
      const view = new GameView(game)
      const container = document.createElement('div')
      view.draw(container)
      expect(container.innerText).toMatch(/Player 1/)
      container.remove()
    })
  })
})
