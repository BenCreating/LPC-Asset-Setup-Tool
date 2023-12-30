export default class OptionController {
  options = []
  container = undefined
  selectedOption = undefined

  /**
   * @param {HTMLElement} container
   */
  constructor(container) {
    this.container = container
  }

  update() {
    this.container.innerHTML = ''
    this.options.forEach(option => {
      this.container.appendChild(option.html())
    })
  }

  setSelectedOption(option) {
    this.selectedOption = option
  }

  addOption() {}
}
