import AssetOptionController from './AssetOptionController.js'

export default class SetupTool {
  assetOptionController = undefined

  /**
   * Load the resources and setup the page
   */
  async setup() {
    const sidebar = document.querySelector('.sidebar')
    const assetOptionController = new AssetOptionController(sidebar)
    assetOptionController.addOption()
    this.assetOptionController = assetOptionController

    const addButton = document.querySelector('#add-button')
    addButton.addEventListener('click', assetOptionController.addOption.bind(assetOptionController))

    const assetNameInput = document.querySelector('#asset-name-input')
    assetNameInput.addEventListener('blur', assetOptionController.saveName.bind(assetOptionController))
  }
}
