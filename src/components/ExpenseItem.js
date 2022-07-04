import './ExpenseItem.css'

export function ExpenseItem(props) {
  const month = props.date.toLocaleString('pt-br', { month: 'long'});
  const day = props.date.toLocaleString('pt-br', { month: '2-digit'});
  const year = props.date.getFullYear();

  return (
    <div className='expense-item'>
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>

      <div className='expense-item-description'>
        <h2>{props.title}</h2>

        <div className='expense-item-price'>$ {props.amount}</div>
      </div>
    </div>
  )
}
