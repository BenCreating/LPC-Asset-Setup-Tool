import SpritesheetOptionController from './SpritesheetOptionController.js'

export default class Asset {
  spritesheetOptionController = new SpritesheetOptionController()
  optionController = undefined
  name = undefined

  constructor(optionController, name) {
    this.optionController = optionController
    this.name = name
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
    buttonContainer.className = 'asset-button'

    const radioButton = document.createElement('input')
    radioButton.setAttribute('type', 'radio')
    radioButton.setAttribute('name', 'asset-option')
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

  uploadSpritesheets(event) {
    const images = [...event.target.files]
    images.forEach(image => {
      this.spritesheetOptionController.addOption(image)
    })
  }
}
