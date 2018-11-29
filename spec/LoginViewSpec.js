describe('LoginView', () => {
  describe('form submit', () => {
    it('calls passed in function logged in player name and numberOfBots', () => {
      let calledWith
      const onLogin = (name, numberOfBots) => {
        calledWith = { name: name, numberOfBots: numberOfBots }
      }
      const view = new LoginView(onLogin)
      const container = document.createElement('div')
      document.body.appendChild(container)
      view.draw(container)
      view.nameInput().value = 'Caleb'
      view.botInput().value = '2'
      view.submitButton().click()

      expect(calledWith).toEqual({ name: 'Caleb', numberOfBots: 2 })
      container.remove()
    })
  })
})
