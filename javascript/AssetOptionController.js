import Asset from './Asset.js'
import OptionController from './OptionController.js'

export default class AssetOptionController extends OptionController {
  constructor(container) {
    super(container)
    const uploadButton = document.querySelector('#upload-button')
    uploadButton.addEventListener('change', this.uploadSpritesheets.bind(this))

    this.canvas = document.createElement('canvas')
    this.context = this.canvas.getContext('2d', { willReadFrequently: true })
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

  saveName(event) {
    const name = event.target.value
    this.selectedOption.setName(name)
    this.update()
  }

  uploadSpritesheets(event) {
    const files = [...event.target.files]
    files.forEach(file => this.loadImage(file))
  }

  setSelectedOption(asset) {
    super.setSelectedOption(asset)
    this.updateForm()
  }

  updateForm() {
    const assetNameInput = document.querySelector('#asset-name-input')
    assetNameInput.value = this.selectedOption.name
  }

  indexForAsset(asset) {
    return this.options.findIndex(option => option === asset)
  }

  loadImage(file) {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.addEventListener('load', () => {
      const image = new Image()
      image.src = reader.result
      this.addImageToSelectedOption(image, file.name)
    })
  }

  async addImageToSelectedOption(image, imageName) {
    await image.decode()

    this.canvas.width = image.width
    this.canvas.height = image.height
    this.context.drawImage(image, 0, 0)

    const imageData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height)

    const imageProperties = {
      name: imageName,
      width: image.width,
      height: image.height,
      colors: this.loadColorsFromImageData(imageData)
    }

    this.selectedOption.addImage(image, imageProperties)
  }

  loadColorsFromImageData(imageData) {
    const view = new DataView(imageData.data.buffer)

    const colors = new Set()
    for (let i = 0; i < imageData.data.length; i += 4) {
      const color = view.getUint32(i)
      if (color !== 0) colors.add(color)
    }

    return [...colors].map(color => {
      const hexString = color.toString(16).padStart(8, '0')
      return `#${hexString}`
    })
  }
}
