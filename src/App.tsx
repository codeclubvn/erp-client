import { routes } from './routes'
const titles = {
    home: 'Home',
    about: 'About',
    contact: 'Contact',
    login: 'Login',
    register: 'Register',
    pageNotFound: 'OOPS! Page Not Found',
}
function App() {
    return <>{routes}</>
}

export default App
