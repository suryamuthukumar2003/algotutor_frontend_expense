import React from 'react'

function ExpenseForm() {
  return (
    <div className='flex justify-center items-center w-4/5'>
    <div className='border border-gray-900 relative'>
        <div className='absolute right-1'>
        <button>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
        </button>
        </div>
      <div className="heading">
        <h3>Expense Log</h3>
      </div>
      <hr />
      <form action="">
        <div>
            <label htmlFor="title">Title</label>
            <input type="text" id='title' name='title' />
        </div>
        <div>
            <label htmlFor="description">Description</label>
            <textarea name='description' rows='4' id='description'></textarea>
        </div>
        <div>
            <label htmlFor="amount">Amount</label>
            <input type="number" name='amount' id='amount'/>
        </div>
        <div>
            <label htmlFor="date">Date</label>
            <input type="date" name='date' id='date'/>
        </div>
        <div>
            <label htmlFor="type">Type</label>
            <select name="type" id="type">
                <option value="0">Credit</option>
                <option value="1">Debit</option>
            </select>
        </div>
        <div>
            <button>Add</button>
        </div>
      </form>
    </div>
    <div></div>
    </div>
  )
}

export default ExpenseForm
