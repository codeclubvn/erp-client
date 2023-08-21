import { Helmet } from 'react-helmet'
import titles from '../../constants/titles'
export const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>{titles.home}</title>
            </Helmet>
            <h1>Home Page</h1>
        </>
    )
}
