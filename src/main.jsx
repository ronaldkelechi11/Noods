import ReactDOM from 'react-dom/client'

import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './screens/Landing'
import MenuScreen from './screens/MenuScreen';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>


      <Route path='/' >
        <Route index element={<Landing />} />
        <Route path=':menuitem' element={<MenuScreen />} />
      </Route>


    </Routes>
  </BrowserRouter>
)
