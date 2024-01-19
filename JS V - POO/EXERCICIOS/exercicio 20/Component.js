export class Component {
  #element
  constructor(tag, parent, options) {
    this.tag = tag
    this.parent = parent
    this.options = options
    this.build()
  }

  getAttribute() {
    return this.#element
  }

  build() {
    this.#element = document.createElement(this.tag)
    Object.assign(this.#element, this.options)
    return this
  }

  render() {
    this.parent.appendChild(this.#element)
  }
}


