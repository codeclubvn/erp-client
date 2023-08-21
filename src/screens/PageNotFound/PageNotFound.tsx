import { Helmet } from 'react-helmet'
import titles from '../../constants/titles'
export const PageNotFound = () => {
    return (
        <>
            <Helmet>
                <title>{titles.pageNotFound}</title>
            </Helmet>
            <h1>Page Not Found</h1>
        </>
    )
}
