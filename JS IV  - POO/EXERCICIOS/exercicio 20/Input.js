import { Component } from "./Component.js";

export class Input extends Component {
  constructor(parent, options) {
    super()
    this.tag = 'input'
    this.parent = parent
    this.options = options
    super.build()
  }
  
}
