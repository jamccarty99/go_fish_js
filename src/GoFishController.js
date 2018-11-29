class GoFishController {
  container() {
    return document.getElementById('main')
  }

  login() {
    const view = new LoginView(this.startGame.bind(this))
    view.draw(this.container())
  }

  startGame(name, numberOfBots) {
    const game = new Game(name, numberOfBots)
    game.start()
    const view = new GameView(game)
    view.draw(this.container())
  }

  
}

window.controller = new GoFishController();
window.onload = controller.login.bind(window.controller)
