import React, { FC } from 'react'
import { Configuration, Layout, useLayoutNavigation } from '@react-md/layout'
import { KeyboardArrowDownSVGIcon, MenuSVGIcon } from '@react-md/material-icons'
import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom'
import Comissoes from './comissoes/comissoes'
import Contratos from './contratos/contratos'
import Deputados from './deputados/deputados'
import Home from './home/home'
import Legislacao from './legislacao/legislacao'
import Legislaturas from './legislaturas/legislaturas'
import Localidades from './localidades/localidades'
import Login from './login/login'
import Midias from './midias/midias'
import navItems from './layout/NavItems'
import Partidos from './partidos/partidos'
import Plenario from './plenario/plenario'
import Pronunciamentos from './pronunciamentos/pronunciamentos'
import Proposicoes from './proposicoes/proposicoes'
import SignUp from './signup/signup'
import Tags from './tags/tags'
import Verbas from './verbas/verbas'

import '../common.scss'
import '../index.scss'

const App: FC = () => {
  const { pathname } = useLocation()
  const navigation = useLayoutNavigation(navItems, pathname)

  return (
    <Configuration>
      <Layout
        {...navigation}
        navIcon={<MenuSVGIcon />}
        expanderIcon={<KeyboardArrowDownSVGIcon />}
        navHeaderTitle="Find Out"
      >
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/comissoes" component={Comissoes} />
          <Route path="/contratos" component={Contratos} />
          <Route path="/deputados" component={Deputados} />
          <Route path="/legislaturas" component={Legislaturas} />
          <Route path="/legislacao" component={Legislacao} />
          <Route path="/localidades" component={Localidades} />
          <Route path="/midias" component={Midias} />
          <Route path="/plenario" component={Plenario} />
          <Route path="/pronunciamentos" component={Pronunciamentos} />
          <Route path="/proposicoes" component={Proposicoes} />
          <Route path="/partidos" component={Partidos} />
          <Route path="/tags" component={Tags} />
          <Route path="/verbas" component={Verbas} />
          <Route path="/" component={Home} />
        </Switch>
      </Layout>
    </Configuration>
  )
}

// eslint-disable-next-line react/display-name
export default () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
