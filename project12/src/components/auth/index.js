import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth';
import style from './style.module.css';

const Auth = () => {
  const dispatch = useDispatch();

  const loginHandler = (event) => {
    event.preventDefault();

    dispatch(authActions.login());
  };

  return (
    <main className={style.auth}>
      <section>
        <form onSubmit={loginHandler}>
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
  );
};

export default Auth;
