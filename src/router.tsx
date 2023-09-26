import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainLayout } from './screens/layouts'
import { Login } from './screens'
import { SignUp } from './screens'
import routerList from './constants/routes'
import { PageNotFound } from './screens/PageNotFound'
import { Fragment } from 'react'
function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    {routerList.map((item, index) => {
                        const Page = item.component
                        const itemChildren = item.children
                        return (
                            <Fragment key={index}>
                                <Route path={item.href} element={<Page />} />
                                {itemChildren
                                    ? itemChildren.map((item, index) => {
                                          const ItemChildren =
                                              item.childComponent
                                          return (
                                              <Route
                                                  key={index}
                                                  path={item.url}
                                                  element={<ItemChildren />}
                                              />
                                          )
                                      })
                                    : ''}
                            </Fragment>
                        )
                    })}
                </Route>

                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
