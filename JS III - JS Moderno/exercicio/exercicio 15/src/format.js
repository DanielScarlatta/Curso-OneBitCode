import { clear, main, root, resultInput} from "./index.js"

export { format }

function format() {
  clear.addEventListener("click", function() {
    input.value = ''
    input.focus()
  })

  document.getElementById("themeSwitcher").addEventListener("click", function() {
    if(main.dataset.theme === "dark") {
      root.style.setProperty("--bg-color", "#f1f5f9")
      root.style.setProperty("--border-color"," #aaa")
      root.style.setProperty("--font-color", "#212529")
      root.style.setProperty("--primary-color", "#26834a")
      main.dataset.theme = "light"
    }else {
      root.style.setProperty("--bg-color", "#212529")
      root.style.setProperty("--border-color"," #666")
      root.style.setProperty("--font-color", "#f1f5f9")
      root.style.setProperty("--primary-color", "#4dff91")
      main.dataset.theme = "dark"
    }
  })

  document.getElementById("copyToClipboard").addEventListener("click", function(ev) {
    const button = ev.currentTarget
    if(button.innerText === "Copy") {
      button.innerText = "Copied!"
      button.classList.add('success')
      window.navigator.clipboard.writeText(resultInput.value)
    }else {
      button.innerText = "Copy"
      button.classList.remove("success")
    }
  })
}