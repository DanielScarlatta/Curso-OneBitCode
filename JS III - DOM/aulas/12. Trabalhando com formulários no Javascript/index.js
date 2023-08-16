const form = document.getElementById("orderForm")

form.addEventListener("submit", function (event){
    event.preventDefault() // retira o comportamento padrao 
    const name = document.querySelector("input[name = 'name']").value
    const address = document.querySelector("input[name = 'addrees']").value

    const breadType = document.querySelector("select[name = 'breadType']").value

    const main = document.querySelector("input[name='main']").value

    const observation = document.querySelector("textarea[name='observations']").value

    let salad = ""

    document.querySelectorAll("input[name='salad']:checked").forEach(function (item) {
        salad += " - " + item.value
    }) 

    console.log({
        name,
        address,
        breadType,
        main,
        observation,
        salad
})
})