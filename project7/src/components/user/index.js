import { Component } from 'react'
import style from './style.module.css'

export class User extends Component {
  componentWillUnmount() { console.log('User will unmount') }
  render() { return (<li className={style.user}>{this.props.name}</li>) }
}

// export const User = (props) => {
//   return (<li className={style.user}>{props.name}</li>)
// }
