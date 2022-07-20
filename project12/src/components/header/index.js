import style from './style.module.css'

export const Header = () => {
  return (
    <header className={style.header}>
      <h1>Redux Auth</h1>

      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>

          <li>
            <a href='/'>My Sales</a>
          </li>

          <li>
            <button>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
