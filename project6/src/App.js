import React, { useCallback, useState } from 'react'
import { DemoOutput } from './components/demo'
import { Button } from './components/ui/button'
import './app.css'

export function App() {
  const [showParagraph, setShowParagraph] = useState(false)
  const [allowToggle, setAllowToggle] = useState(false)

  console.log('APP RUNNING')

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) { setShowParagraph((prevShowParagraph) => !prevShowParagraph) }
  }, [allowToggle])

  const allowToggleHandler = () => { setAllowToggle(true) }

  return (
    <div className='app'>
      <h1>Hi there</h1>

      <DemoOutput show={showParagraph} />

      <Button onClick={allowToggleHandler}>Allow toggling</Button>
      <Button onClick={toggleParagraphHandler}>Toggle paragraph</Button>
    </div>
  )
}
