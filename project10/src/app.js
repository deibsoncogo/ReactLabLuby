import { BasicForm } from './components/basicForm'
import { SimpleInput } from './components/simpleInput'

export function App() {
  return (
    <div className='app'>
      <section>
        <BasicForm />
      </section>

      <section>
        <SimpleInput />
      </section>
    </div>
  )
}
