import { Fragment, useState } from 'react'
import { Cart } from './components/cart/cart'
import { Header } from './components/layout/header'
import { Meals } from './components/meals/meals'

export function App() {
  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = () => {
    setCartIsShown(true)
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />

      <main>
        <Meals />
      </main>
    </Fragment>
  )
}
