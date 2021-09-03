import React, { Fragment } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

// configs
import { PATH_NAME } from 'Constants/Config'

// layouts
import MainLayout from '../Layout/MainLayout'

// containers
import AuthGuard from '../Guards/AuthGuards'
import GuestGuard from '../Guards/GuestGuards'

//Page
import Login from '../Pages/Login'
import Animal_List from '../Pages/Home'
import Detail from '../Pages/Detail'
import Category from '../Pages/Category'
import ErrorPage from '../Pages/ErrorPage'

// route
const routesConfig = [
  {
    exact: true,
    path: '/',
    component: () => <Redirect to={PATH_NAME.ANIMAL_LIST} />,
  },
  {
    exact: true,
    guard: GuestGuard,
    path: PATH_NAME.LOGIN,
    component: Login,
  },
  /*   { 
    exact: true,
    path: PATH_NAME.ERROR_404,
    component: ErrorPage,
  }, */

  {
    exact: false,
    path: '/',
    guard: AuthGuard,
    layout: MainLayout,
    routes: [
      {
        exact: true,
        path: PATH_NAME.ANIMAL_LIST,
        component: Animal_List,
      },
      {
        exact: true,
        path: PATH_NAME.CATEGORY,
        component: Category,
      },
  
      {
        exact: true,
        path: PATH_NAME.DETAIL,
        component: Detail,
      },
    
 /*      {
        component: () => <Redirect to={PATH_NAME.ERROR_PAGE} />,
      }, */
    ],
  },
/*   {
    path: '*',
    routes: [
      {
        component: () => <Redirect to={PATH_NAME.ERROR_404} />,
      },
    ],
  }, */
]

const renderRoutes = (routes) => {

  return (
    <>
      {routes ? (
        <Switch>
          {routes.map((route, idx) => {
            const Guard = route.guard || Fragment
            const Layout = route.layout || Fragment
            const Component = route.component
            return (
              <Route
                key={`routes-${idx}`}
                path={route.path}
                exact={route.exact}
                render={(props) => (
                  <Guard>
                    <Layout>
                      {route.routes ? (
                        renderRoutes(route.routes)
                      ) : (
                        <Component {...props} />
                      )}
                    </Layout>
                  </Guard>
                )}
              />
            )
          })}
        </Switch>
      ) : null}
    </>
  )
}

function Routes() {
  return renderRoutes(routesConfig)
}

export default Routes
