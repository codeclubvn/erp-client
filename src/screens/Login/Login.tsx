import { Helmet } from 'react-helmet'
import titles from '../../constants/titles'
export const Login = () => {
    return (
        <>
            <Helmet>
                <title>{titles.login}</title>
            </Helmet>
            <h1>Login Page</h1>
        </>
    )
}
