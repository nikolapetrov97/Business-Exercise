// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable prettier/prettier */
import './App.scss'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home'
import AppWrapper from './AppWrapper'
import ErrorPage from './pages/ErrorPage'
import Routes from './utils/routes'
import BusinessDetails from './pages/BusinessDetails'
import Layout from './components/Layout'

function App() {
  return (
    <Router>
      <AppWrapper>
        <div className="App">
          <Layout>
            <Switch>
              <Route path={Routes.HOME} exact component={Home} />
              <Route
                path={`${Routes.BUSINESS_DETAILS}/:id`}
                exact
                component={BusinessDetails}
              />
              <Route path={Routes.ERRORPAGE} exact component={ErrorPage} />
            </Switch>
          </Layout>
        </div>
      </AppWrapper>
    </Router>
  )
}

export default App
