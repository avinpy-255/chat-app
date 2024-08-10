import Chat from './components/chat/Chat'
import Detail from './components/detail/Detail'
import List from './components/list/List'
import './index.css'
const App = () => {
  return (
    <div className='container'>
      <List/>
      <Chat/>
      <Detail/>
    </div>
  )
}

export default App