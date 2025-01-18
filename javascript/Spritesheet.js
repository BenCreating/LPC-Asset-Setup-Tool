export default class Spritesheet {
  constructor(optionController, image, { name, width, height, colors }) {
    this.optionController = optionController
    this.image = image
    this.name = name
    this.width = width
    this.height = height
    this.colors = colors

    console.log(name, width, height, colors)
  }

  /**
   * The HTML to display this option
   *
   * @returns {HTMLElement}
   */
  html() {
    const name = this.name
    const buttonId = `option-${name}`

    const buttonContainer = document.createElement('div')
    buttonContainer.className = 'spritesheet-button'

    const radioButton = document.createElement('input')
    radioButton.setAttribute('type', 'radio')
    radioButton.setAttribute('name', 'spritesheet-option')
    radioButton.setAttribute('value', name)
    radioButton.id = buttonId
    radioButton.addEventListener('click', this.selectOption.bind(this))
    buttonContainer.appendChild(radioButton)

    radioButton.checked = this === this.optionController.selectedOption

    const label = document.createElement('label')
    label.htmlFor = buttonId
    label.className = 'button'
    buttonContainer.appendChild(label)

    const labelText = document.createElement('span')
    labelText.textContent = name
    label.appendChild(labelText)

    return buttonContainer
  }

  selectOption(_event) {
    this.optionController.setSelectedOption(this)
  }
}
