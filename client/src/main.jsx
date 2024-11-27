import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './components/App.jsx'

/** redux store*/
import store from './redux/store'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(

    <Provider store={store}>
    <App />
    </Provider>
)
