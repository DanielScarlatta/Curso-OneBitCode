export class createForm {
  createInputs(currentBtn) {
    const div = document.createElement('div')
    const h2 = document.createElement('h2')
    const br = document.createElement('br')

    const labelId = document.createElement('label')
    labelId.textContent = 'ID: '
    labelId.setAttribute('for', 'inputFormID')
    const inputID = document.createElement('input')
    inputID.id = 'inputFormID'
    inputID.name = 'inputFormID'

    const br2 = document.createElement('br')

    const labelName = document.createElement('label')
    labelName.textContent = 'Nome: '
    labelId.setAttribute('for', 'inputFormName')
    const inputName = document.createElement('input')
    inputName.id = 'inputFormName'
    inputName.name = 'inputFormName'

    const br3 = document.createElement('br')

    const labelValue = document.createElement('label')
    labelValue.textContent = 'Value: '
    labelId.setAttribute('for', 'inputFormValue')
    const inputValue = document.createElement('input')
    inputValue.id = 'inputFormValue'
    inputValue.name = 'inputFormValue'

    const br4 = document.createElement('br')

    const btn = document.createElement('button')
    btn.innerText = 'enviar'

    if(currentBtn === 'new') {
      h2.textContent = 'Criar transação'
      btn.innerText = 'Enviar Transação'
      btn.id = 'createTransactionsBtn'
      div.append(h2, br2, labelName, inputName, br3, labelValue, inputValue, br4, btn)
      return div
    }
    if(currentBtn === 'edit') {
      h2.textContent = 'Editar transação'
      btn.innerText = 'Editar Transação'
      btn.id = 'editTransactionsBtn'
      div.append(h2, br, labelId, inputID, br2, labelName, inputName, br3, labelValue, inputValue, br4, btn)
      return div
    }
    if(currentBtn === 'delete') {
      h2.textContent = 'Deletar transação'
      btn.innerText = 'Deletar Transação'
      btn.id = 'deleteTransactionsBtn'
      div.append(h2, br, labelId, inputID, br4, btn)
      return div
    }
  }
}