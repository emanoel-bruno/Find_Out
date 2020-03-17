import React, { FC } from "react";
import { State } from '../state'
import { Layout, LayoutNavigationTree, useLayoutNavigation } from "@react-md/layout"
import { BrowserRouter, Link, Route, Switch, useLocation } from 'react-router-dom'
import {
  AppsSVGIcon, BookSVGIcon, HomeSVGIcon,
  KeyboardArrowDownSVGIcon, MenuSVGIcon, AndroidSVGIcon,
} from "@react-md/material-icons"

import Home from  "./home/home";
import Login from  "./login/login";
import Comissoes from  "./comissoes/comissoes";
import Contratos from  "./contratos/contratos";
import Deputados from  "./deputados/deputados";
import Legislaturas from  "./legislaturas/legislaturas";
import Legislacao from  "./legislacao/legislacao";
import Localidades from  "./localidades/localidades";
import Midias from  "./midias/midias";
import Plenario from  "./plenario/plenario";
import Pronunciamentos from  "./pronunciamentos/pronunciamentos";
import Proposicoes from  "./proposicoes/proposicoes";
import Partidos from  "./partidos/partidos";
import Tags from  "./tags/tags";
import Verbas from  "./verbas/verbas";
import "../common.scss"
import "../index.scss"
    
  const navItems:LayoutNavigationTree = {
    "/": {
      itemId: "",
      parentId: null,
      children: "Home",
      leftIcon: <HomeSVGIcon />,
      to: "/",
      contentComponent: Link,
    },
    "/login": {
      itemId: "login",
      parentId: null,
      children: "Login",
      leftIcon: <AndroidSVGIcon />,
      to: "/login",
      contentComponent: Link,
    },
    "/agenda":{
      itemId: "agenda",
      parentId: null,
      children: "Agenda",
      leftIcon: <AppsSVGIcon />,
      to: "/agenda",
      contentComponent: Link,
    },
    "/comissoes": {
      itemId: "comissoes",
      parentId: null,
      children: "Comissoes",
      leftIcon: <BookSVGIcon />,
      to: "/comissoes",
      contentComponent: Link,
    },
    "/contratos": {
      itemId: "contratos",
      parentId: null,
      children: "Contratos",
      leftIcon: <BookSVGIcon />,
      to: "/contratos",
      contentComponent: Link,
    },
    "/deputados": {
      itemId: "deputados",
      parentId: null,
      children: "Deputados",
      leftIcon: <BookSVGIcon />,
      to: "/deputados",
      contentComponent: Link,
    },
    "/legislaturas": {
      itemId: "legislaturas",
      parentId: null,
      children: "Legislaturas",
      leftIcon: <BookSVGIcon />,
      to: "/legislaturas",
      contentComponent: Link,
    },
    "legislacao": {
      itemId: "egislacao",
      parentId: null,
      children: "Legislacao",
      leftIcon: <BookSVGIcon />,
      to: "legislacao",
      contentComponent: Link,
    },
    "/localidades": {
      itemId: "localidades",
      parentId: null,
      children: "Localidades",
      leftIcon: <BookSVGIcon />,
      to: "/localidades",
      contentComponent: Link,
    },
    "/midias": {
      itemId: "midias",
      parentId: null,
      children: "Midias",
      leftIcon: <BookSVGIcon />,
      to: "/midias",
      contentComponent: Link,
    },
    "/plenario": {
      itemId: "plenario",
      parentId: null,
      children: "Plenario",
      leftIcon: <BookSVGIcon />,
      to: "/plenario",
      contentComponent: Link,
    },
    "/pronunciamentos": {
      itemId: "pronunciamentos",
      parentId: null,
      children: "Pronunciamentos",
      leftIcon: <BookSVGIcon />,
      to: "/pronunciamentos",
      contentComponent: Link,
    },
    "/proposicoes": {
      itemId: "proposicoes",
      parentId: null,
      children: "Proposicoes",
      leftIcon: <BookSVGIcon />,
      to: "/proposicoes",
      contentComponent: Link,
    },
    "/partidos": {
      itemId: "partidos",
      parentId: null,
      children: "Partidos",
      leftIcon: <BookSVGIcon />,
      to: "/partidos",
      contentComponent: Link,
    },
    "/tags": {
      itemId: "tags",
      parentId: null,
      children: "Tags",
      leftIcon: <BookSVGIcon/>,
      to: "/tags",
      contentComponent: Link,
    },
    "/verbas": {
      itemId: "verbas",
      parentId: null,
      children: "Verbas",
      leftIcon: <BookSVGIcon />,
      to: "/verbas",
      contentComponent: Link,
    }
  }


const App: FC = () => {
  const { pathname } = useLocation();
  const navigation = useLayoutNavigation(navItems, pathname);

  return (
    <Layout
      {...navigation}
      appBarTitle="Find Out"
      navIcon={<MenuSVGIcon />}
      expanderIcon={<KeyboardArrowDownSVGIcon />}
      navHeaderTitle="Find Out"
    >
      <Switch>
        <Route path="/login" component={Login} />
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
  );
};

export default () => (
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);