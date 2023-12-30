import Asset from './Asset.js'
import OptionController from './OptionController.js'

export default class AssetOptionController extends OptionController {
  constructor(container) {
    super(container)
    const uploadButton = document.querySelector('#upload-button')
    uploadButton.addEventListener('change', this.uploadSpritesheets.bind(this))
  }

  addOption() {
    const assetCount = this.options.length
    const assetName = assetCount === 0 ? 'Untitled' : `Untitled ${assetCount}`

    const asset = new Asset(this, assetName)
    this.options.push(asset)
    this.setSelectedOption(asset)

    if (assetCount === 0) {
      const form = document.querySelector('#asset-form')
      form.classList.remove('hidden')
    }

    this.update()
  }

  uploadSpritesheets(event) {
    this.selectedOption.uploadSpritesheets(event)
  }

  setSelectedOption(asset) {
    super.setSelectedOption(asset)
    this.updateForm()
  }

  updateForm() {
    const assetNameInput = document.querySelector('#asset-name-input')
    assetNameInput.value = this.selectedOption.name
  }
}
