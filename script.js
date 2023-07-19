$(document).ready(function() {
  let expenses = []
  $('#addExpense').on('click', function() {
    let expenseName = $('#expenseName').val()
    let expenseAmount = parseFloat($('#expenseAmount').val())
    if (expenseName === '' || isNaN(expenseAmount) || expenseAmount <= 0) {
      alert('Please enter a valid expense name and amount.')
      return
    }

    expenses.push({
      name: expenseName,
      amount: expenseAmount,
      created_at: new Date().toISOString().slice(0, 19)
    })
    console.log(expenses)
    $('#expenseName').val('')
    $('#expenseAmount').val('')
    updateExpenseTable()
  })
  function updateExpenseTable() {
    let tableBody = $('#expenseTable tbody')
    tableBody.empty()

    for (let i = 0; i < expenses.length; i++) {
      let expense = expenses[i]
      let row = '<tr>' +
        '<td>' + expense.name + '</td>' +
        '<td>$' + expense.amount.toFixed(2) + '</td>' +
        '<td><button class="deleteExpense" data-index="' + i + '">Delete</button></td>' +
        '</tr>'
      tableBody.append(row)
    }
  }














})