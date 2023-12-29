/**
 * @typedef {import('./SetupTool').default} SetupTool
 */

import ImageOption from './ImageOption.js'

export default class OptionController {
  images = []

  /**
   * @param {SetupTool} setupTool
   */
  constructor(setupTool) {
    this.setupTool = setupTool
  }

  uploadImages(...images) {
    this.images.push(...images)
    this.update()
  }

  update() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.innerHTML = ''

    this.createOptions()
    this.buildOptionsHTML()
  }

  createOptions() {
    this.options = this.images.map(image => new ImageOption(this, image))
    this.selectedOption = this.options[0]
  }

  buildOptionsHTML() {
    const sidebar = document.querySelector('.sidebar')

    this.options.forEach(option => {
      sidebar.appendChild(option.html())
    })
  }

  setSelectedOption(option) {
    this.selectedOption = option
  }
}
