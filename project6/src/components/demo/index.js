import React from 'react'
import { MyParagraph } from '../myParagraph'

export const DemoOutput = (props) => {
  console.log('DemoOutput RUNNING')
  return <MyParagraph>{props.show ? 'This is new' : ''}</MyParagraph>
}
