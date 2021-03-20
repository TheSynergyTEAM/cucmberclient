import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from 'components/Header'
import Container from 'components/common/Container'

const Main = React.lazy(() => import('pages/Main'))
const Search = React.lazy(() => import('pages/Search'))
const Detail = React.lazy(() => import('pages/Detail'))
const Create = React.lazy(() => import('pages/Create'))
const SignUp = React.lazy(() => import('pages/SignUp'))
const Chat = React.lazy(() => import('pages/Chat'))

const ContainerStyle: React.CSSProperties = {
  top: '80px',
  position: 'relative'
}

const RouteWrapper: React.FC = () => {
  return (
    <Router>
      <Header />
      <Container rowProps={{ style: ContainerStyle }}>
        <Switch>
          <Suspense fallback={<div>Loading...</div>}>
            <Route path="/" exact component={Main} />
            <Route path="/search/:word" exact component={Search} />
            <Route path="/article/create" exact component={Create} />
            <Route path="/articles/:id" exact component={Detail} />
            <Route path="/sign-up" exact component={SignUp} />
            <Route path="/chat" exact component={Chat} />
          </Suspense>
        </Switch>
      </Container>
    </Router>
  )
}

export default RouteWrapper
