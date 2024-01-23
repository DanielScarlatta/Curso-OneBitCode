import { Component } from "./Component.js";

export class Form extends Component {
  constructor(parent, options) {
    super() 
    this.tag = 'form'
    this.parent = parent
    this.options = options
    super.build()
  }

  addChildren(element) {
    this.getElement().append(element.getElement())
  }
}