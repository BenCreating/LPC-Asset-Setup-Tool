export default class ImageOption {
  constructor(optionController, file) {
    this.optionController = optionController
    this.file = file
  }

  get name() { return this.file.name }

  /**
   * The HTML to display this option
   *
   * @returns {HTMLElement}
   */
  html() {
    const name = this.name
    const buttonId = `option-${name}`

    const buttonContainer = document.createElement('div')
    buttonContainer.className = 'image-button'

    const radioButton = document.createElement('input')
    radioButton.setAttribute('type', 'radio')
    radioButton.setAttribute('name', 'image-option')
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
