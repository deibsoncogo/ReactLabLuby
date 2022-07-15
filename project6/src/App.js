import React, { useCallback, useState } from 'react'
import { DemoList } from './components/demoList'
import { Button } from './components/ui/button'
import './app.css'

export function App() {
  const [listTitle, setListTitle] = useState('My List')

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title')
  }, [])

  return (
    <div className='app'>
      <DemoList title={listTitle} items={[5, 3, 1, 10, 9]} />
      <Button onClick={changeTitleHandler}>Change list title</Button>
    </div>
  )
}
