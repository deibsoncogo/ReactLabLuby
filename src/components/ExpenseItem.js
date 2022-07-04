import './ExpenseItem.css'

export function ExpenseItem() {
  const expenseDate = new Date()
  const expenseTitle = 'Car Insurance'
  const expenseAmount = 294.67

  return (
    <div className='expense-item'>
      <div>{expenseDate.toISOString()}</div>

      <div className='expense-item-description'>
        <h2>{expenseTitle}</h2>

        <div className='expense-item-price'>$ {expenseAmount}</div>
      </div>
    </div>
  )
}
