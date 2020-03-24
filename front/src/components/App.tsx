/* eslint-disable react/display-name */
import React, { FC } from 'react';
import { Configuration, Layout, useLayoutNavigation } from '@react-md/layout';
import {
  KeyboardArrowDownSVGIcon,
  MenuSVGIcon
} from '@react-md/material-icons';
import { BrowserRouter, Route, Switch, useLocation, withRouter } from 'react-router-dom';
import Comissoes from './comissoes/comissoes';
import Contratos from './contratos/contratos';
import Deputados from './deputados/deputados';
import Home from './home/home';
import Legislacao from './legislacao/legislacao';
import Legislaturas from './legislaturas/legislaturas';
import Localidades from './localidades/localidades';
import Login from './login/login';
import Midias from './midias/midias';
import NavegationItems from './layout/navItems';
import Partidos from './partidos/partidos';
import Plenario from './plenario/plenario';
import Pronunciamentos from './pronunciamentos/pronunciamentos';
import Proposicoes from './proposicoes/proposicoes';
import SignUp from './signup/signup';
import Tags from './tags/tags';
import Verbas from './verbas/verbas';
import '../common.scss';
import '../index.scss';
import Flex from './layout/flex';
import axios, { AxiosResponse } from 'axios';
import { notify } from 'react-notify-toast';
import Notifications from 'react-notify-toast';
import { TabState, AppState, ApiState, apiInitial } from '../state';
import { connect } from 'react-redux';

interface PropsFromState {
  tab: TabState;
  api: ApiState;
}

type AllProps = PropsFromState

const App: FC<AllProps> = (props: AllProps ) => {
  axios.defaults.baseURL = props.api.base;
  axios.defaults.headers = {
    'Content-Type': 'application/json'
    // "Authorization": token ? `Token ${token}` : undefined
  };
  axios.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      if (error.response)
        switch (error.response.status) {
          case 404:
            notify.show(
              'Problemas na conexão, tente novamente mais tarde!',
              'error',
              4000
            );
            break;
          default:
            notify.show(
              'Algo deu errado, tente novamente mais tarde!',
              'error',
              4000
            );
            break;
        }
      else
        notify.show(
          'Algo deu errado, tente novamente mais tarde!',
          'error',
          4000
        );
      return Promise.reject(error);
    }
  );

  const { pathname } = useLocation();
  const navigation = useLayoutNavigation(NavegationItems, pathname);
  return (
    <Layout
        {...navigation}
        navIcon={<MenuSVGIcon />}
        expanderIcon={<KeyboardArrowDownSVGIcon />}
        navHeaderTitle="Find Out"
      >
        <Login visible={props.tab.tab=="LOGIN_DIALOG"}/>
        <SignUp visible={props.tab.tab=="SIGN_DIALOG"}/>
        <Flex
          className="main-content"
          horizontal="center"
          vertical="up"
          direction="row"
          fullHeight={true}
          fullWidth={true}
        >
          <Switch>
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
        </Flex>
      </Layout>

  );
};

const mapStateToProps = ({ api, tab }: AppState) => ({
  api: api,
  tab: tab
});

export default withRouter(connect(mapStateToProps)(App));
