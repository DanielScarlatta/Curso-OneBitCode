import { Component } from "./Component.js";

export class Label extends Component {
  #element = null
  constructor(content, parent, options) {
    super()
    this.tag = 'label'
    this.parent = parent
    this.options = Object.assign({innerText:content}, options)
    this.build()
  }

}