import Spritesheet from './Spritesheet.js'
import OptionController from './OptionController.js'

export default class SpritesheetOptionController extends OptionController {
  constructor() {
    const container = document.querySelector('#spritesheet-options')
    super(container)
  }

  addOption(image) {
    const spritesheet = new Spritesheet(this, image)
    this.options.push(spritesheet)
    this.setSelectedOption(spritesheet)
    this.update()
  }
}
