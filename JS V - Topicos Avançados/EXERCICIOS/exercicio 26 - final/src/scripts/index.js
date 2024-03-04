import { RenderTransactions } from "./RenderTransactions.js";
import { createForm } from "./createForm.js";

function renderElementsToScreen(response) {
  const render = new RenderTransactions();
  const content = document.getElementById("content");
  content.innerText = "";
  response.forEach((element) => {
    content.appendChild(render.renderElements(element));
  });

  const balance = response.reduce((accum, { value }) => {
    accum += parseInt(value);
    return accum;
  }, 0);

  document.getElementById("balanceSpan").textContent = balance;
}

async function getTransactions() {
  const response = await fetch("http://localhost:3000/transactions").then(
    (result) => result.json()
  );

  renderElementsToScreen(response);
}

document.addEventListener("DOMContentLoaded", () => {
  getTransactions();
});

const buttonForm = document.querySelectorAll(".btn-nav");
buttonForm.forEach((button) => {
  button.addEventListener("click", () => {
    const data = button.getAttribute("data-transactions");
    const createform = new createForm();
    const div = createform.createInputs(data);
    const form = document.getElementById("formInput");
    form.innerText = "";
    form.append(div);
  });
});

document.getElementById("formInput").addEventListener("submit", (ev) => {
  ev.preventDefault();
  const data = ev.currentTarget.querySelector("button").id;
  console.log(data);

  switch (data) {
    case "createTransactionsBtn":
      async function newTransaction() {
        const inputsValueForm = {
          name: ev.currentTarget.querySelector("#inputFormName").value,
          value: ev.currentTarget.querySelector("#inputFormValue").value,
        };
        await fetch("http://localhost:3000/transactions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inputsValueForm),
        }).then((result) => result.json());
        getTransactions();
      }
      newTransaction();
      break;

    case "editTransactionsBtn":
      async function editTransaction() {
        const inputsValueForm = {
          name: ev.currentTarget.querySelector("#inputFormName").value,
          value: ev.currentTarget.querySelector("#inputFormValue").value,
        };
        const transactionId = ev.currentTarget.querySelector("#inputFormID").value;

        await fetch(`http://localhost:3000/transactions/${transactionId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inputsValueForm),
        }).then((result) => result.json());
        getTransactions();
      }
      editTransaction();
      break;

    case "deleteTransactionsBtn":
      async function deleteTransaction() {
        const transactionId = ev.currentTarget.querySelector("#inputFormID").value;
        console.log(transactionId)
        await fetch(`http://localhost:3000/transactions/${transactionId}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          }
        }).then((result) => result.json());
        getTransactions();
      }
      deleteTransaction();

      break;
  }
});
