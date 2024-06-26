
import { Outlet } from 'react-router-dom'
import Sidebar from './components/Sidebar'

function App() {
  return(
    <div className='flex pr-4 space-x-4 bg-slate-50 font-body'>
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default App
