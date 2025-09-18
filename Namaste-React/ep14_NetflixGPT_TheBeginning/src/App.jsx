// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Body from './components/Body'
import {Provider} from "react-redux";
import appStore from './utils/appStore';

const App = () => {
  return (
    <div>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <App />
  // {/* </StrictMode>, */}
)
