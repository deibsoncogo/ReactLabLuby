import React, { useState } from 'react'
import { DemoOutput } from './components/demo'
import { Button } from './components/ui/button'
import './app.css'

export function App() {
  const [showParagraph, setShowParagraph] = useState(false)

  console.log('APP RUNNING')

  const toggleParagraphHandler = () => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph)
  }

  return (
    <div className='app'>
      <h1>Hi there</h1>

      <DemoOutput show={false} />

      <Button onClick={toggleParagraphHandler}>Toggle paragraph</Button>
    </div>
  )
}
