import { Component } from "./Component.js";

export class ComponentInput extends Component {
  constructor(parent, type) {
    super('input', parent)
    this.type = type
    this.build()
  }
  
}
