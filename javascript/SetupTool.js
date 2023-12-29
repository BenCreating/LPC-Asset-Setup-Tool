import OptionController from './OptionController.js'

export default class SetupTool {
  optionController = new OptionController(this)

  /**
   * Load the resources and setup the page
   */
  async setup() {
    const uploadButton = document.querySelector('#upload-button')
    uploadButton.addEventListener('change', this.upload.bind(this))
  }

  upload(event) {
    this.optionController.uploadImages(...event.target.files)
  }
}
