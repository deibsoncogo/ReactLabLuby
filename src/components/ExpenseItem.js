import './ExpenseItem.css'

export function ExpenseItem() {
  return (
    <div className='expense-item'>
      <div>March 28th 2021</div>

      <div className='expense-item-description'>
        <h2>Car Insurance</h2>

        <div className='expense-item-price'>$ 294.67</div>
      </div>
    </div>
  )
}
