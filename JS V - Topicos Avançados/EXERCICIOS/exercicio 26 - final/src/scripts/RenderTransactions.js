export class RenderTransactions {
  renderElements(dataTransaction) {
    const div = document.createElement('div')
    div.classList.add('card-transaction')

    const renderContentID = document.createElement('div')
    renderContentID.textContent = `ID: ${dataTransaction.id}`

    const renderContentName = document.createElement('div')
    renderContentName.textContent = `Nome: ${dataTransaction.name}`

    const renderContentValue = document.createElement('div')
    renderContentValue.textContent = `Nome: ${dataTransaction.value}`

    div.append(renderContentID, renderContentName, renderContentValue)
    return div
  }
}