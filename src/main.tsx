import ReactDOM from 'react-dom/client'
import { Home } from './pages'

const element = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(element)

root.render(<Home />)
