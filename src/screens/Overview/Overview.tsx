import { Helmet } from 'react-helmet'
import titles from '../../constants/titles'
export const Overview = () => {
    return (
        <>
            <Helmet>
                <title>{titles.overview}</title>
            </Helmet>
            <h1>Overview Page</h1>
        </>
    )
}
