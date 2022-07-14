import React from 'react'

export const MyParagraph = (props) => {
  console.log('MyParagraph RUNNING')
  return <p>{props.children}</p>
}
