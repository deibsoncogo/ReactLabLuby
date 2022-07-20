import style from './style.module.css'

export const Auth = () => {
  return (
    <main className={style.auth}>
      <section>
        <form>
          <div className={style.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>

          <div className={style.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>

          <button>Login</button>
        </form>
      </section>
    </main>
  )
}
