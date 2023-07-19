$(document).ready(function() {
  let expenses = []
  let savedExpenses = []
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
    updateTotalExpenses()
  })

  $(document).on('click', '.deleteExpense', function() {
    let index = $(this).data('index')
    expenses.splice(index, 1)
    updateExpenseTable()
    updateTotalExpenses()
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
 function updateTotalExpenses() {
    let total = expenses.reduce(function(sum, expense) {
      return sum + expense.amount
    }, 0)

    $('#totalExpenses').text('$' + total.toFixed(2))
  }

  $('#saveExpenses').on('click', function() {
    saveExpenses()
  })

  function saveExpenses() {
    savedExpenses.push(...expenses)
    if (expenses.length === 0) {
      alert('There are no expenses to save.')
      return
    }
    expenses = []
  
    $('#expenseTable tbody').empty()
  
    updateTotalExpenses(0)
  
    let spentOn = savedExpenses
    for (let i = 0; i < spentOn.length; i++) {
      let savedExpense = spentOn[i]
      let listItem = '<li>' + savedExpense.name + ': $' + savedExpense.amount.toFixed(2) + ' (Created at: ' + savedExpense.created_at + ')</li>'
      $('#savedExpenseList').append(listItem)
    }
    spentOn = []
    console.log(savedExpenses)
    alert('Expenses saved successfully!')
  }

  $('#showSavedLists').on('click', function() {
    displaySavedLists()
  })

  $('.close').on('click', function() {
    $('#modal').css('display', 'none')
  })

  function displaySavedLists() {
   
  
    if (savedExpenses.length === 0) {
      alert('There are no saved lists to display.')
      return
    }
    $('#modal').css('display', 'block')
  }













})