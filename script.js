let expenses = [];

const euro = 0.0087;

function addExpense() {
    const expenseName = document.getElementById("expenseName").value;
    const expenseAmount = parseFloat(document.getElementById("expenseAmount").value);

    if (isNaN(expenseAmount) || expenseAmount <= 0) {
        alert("ERROR");
        return;
    }

    const expense = {
        name: expenseName,
        amount: expenseAmount
    };

    expenses.push(expense);

    displayExpenses();
    updateTotal();
    document.getElementById("expenseForm").reset();
}

function displayExpenses() {
    const tableBody = document.getElementById("expenseTableBody");
    tableBody.innerHTML = '';

    for (let i = 0; i < expenses.length; i++) {
        const expense = expenses[i];
        const amountInEuro = convertToEuro(expense.amount);
        const row = `
            <tr>
                <td>${expense.name}</td>
                <td>${expense.amount} KSH</td>
                <td>${amountInEuro} EUR</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    }
}

function updateTotal() {
    let totalKsh = 0;
    for (let i = 0; i < expenses.length; i++) {
        totalKsh += expenses[i].amount;
    }

    const totalEuro = convertToEuro(totalKsh);
    document.getElementById("totalExpense").textContent = `${totalKsh} KSH / ${totalEuro} EUR`;
}

function convertToEuro(amountInKsh) {
    return amountInKsh * euro;
}

