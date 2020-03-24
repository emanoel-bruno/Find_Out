/* eslint-disable react/jsx-key */
/* eslint-disable react/no-children-prop */
import React, { ReactNode } from 'react';
import { LayoutNavigationItem, LayoutNavigationTree } from '@react-md/layout';
import NavItem, { NavItemMenu } from './navItem';
import { FontIcon } from '@react-md/icon';

import '../../common.scss';
import '../../index.scss';

type ItemInput = {
  children?: ReactNode | NavItemMenu | string | any;
  to: string;
  leftIcon?: ReactNode;
  itemId: string;
};

const createNavItem = (item: ItemInput): LayoutNavigationItem => {
  return {
    children: item.children,
    itemId: item.itemId,
    leftIcon: item.leftIcon,
    parentId: null,
    to: item.to
  };
};

const NavegationItems: LayoutNavigationTree = {
  '/user': createNavItem({
    children: <NavItem tab="none" type="User" to="/" />,
    itemId: 'userRoute',
    to: '/'
  }),
  '/': createNavItem({
    leftIcon: <FontIcon className="nav-icon t-primary">home</FontIcon>,
    children: <NavItem tab="none" type="Button" to="/" children="Home" />,
    itemId: 'homeId',
    to: '/'
  }),
  '/agenda': createNavItem({
    leftIcon: (
      <FontIcon className="nav-icon t-primary">calendar_today</FontIcon>
    ),
    children: (
      <NavItem
        tab="none"
        type="Menu"
        to="/agenda"
        children={{
          name: 'Agenda',
          nodes: [
            <NavItem type="Button" tab="TAB1" to="/agenda" children="Home" />,
            <NavItem type="Button" tab="TAB2" to="/agenda" children="Home" />
          ]
        }}
      />
    ),
    itemId: 'agendaRoute',
    to: '/agenda'
  }),
  '/comissoes': createNavItem({
    leftIcon: <FontIcon className="nav-icon t-primary">attach_money</FontIcon>,
    children: (
      <NavItem
        tab="none"
        type="Menu"
        to="/comissoes"
        children={{
          name: 'comissoes',
          nodes: [
            <NavItem
              type="Button"
              tab="TAB1"
              to="/comissoes"
              children="Home"
            />,
            <NavItem type="Button" tab="TAB2" to="/comissoes" children="Home" />
          ]
        }}
      />
    ),
    itemId: 'comissoesRoute',
    to: '/comissoes'
  }),
  '/contratos': createNavItem({
    leftIcon: <FontIcon className="nav-icon t-primary">device_hub</FontIcon>,
    children: (
      <NavItem
        tab="none"
        type="Menu"
        to="/contratos"
        children={{
          name: 'contratos',
          nodes: [
            <NavItem
              type="Button"
              tab="TAB1"
              to="/contratos"
              children="Home"
            />,
            <NavItem type="Button" tab="TAB2" to="/contratos" children="Home" />
          ]
        }}
      />
    ),
    itemId: 'contratosRoute',
    to: '/contratos'
  }),
  '/deputados': createNavItem({
    leftIcon: (
      <FontIcon className="nav-icon t-primary">sports_kabaddi</FontIcon>
    ),
    children: (
      <NavItem
        tab="none"
        type="Menu"
        to="/deputados"
        children={{
          name: 'deputados',
          nodes: [
            <NavItem
              type="Button"
              tab="TAB1"
              to="/deputados"
              children="Home"
            />,
            <NavItem type="Button" tab="TAB2" to="/deputados" children="Home" />
          ]
        }}
      />
    ),
    itemId: 'deputadosRoute',
    to: '/deputados'
  }),
  '/legislaturas': createNavItem({
    leftIcon: <FontIcon className="nav-icon t-primary">menu_book</FontIcon>,
    children: (
      <NavItem
        tab="none"
        type="Menu"
        to="/legislaturas"
        children={{
          name: 'legislaturas',
          nodes: [
            <NavItem
              type="Button"
              tab="TAB1"
              to="/legislaturas"
              children="Home"
            />,
            <NavItem
              type="Button"
              tab="TAB2"
              to="/legislaturas"
              children="Home"
            />
          ]
        }}
      />
    ),
    itemId: 'legislaturasRoute',
    to: '/legislaturas'
  }),
  '/legislacao': createNavItem({
    leftIcon: <FontIcon className="nav-icon t-primary">menu_book</FontIcon>,
    children: (
      <NavItem
        tab="none"
        type="Menu"
        to="/legislacao"
        children={{
          name: 'legislacao',
          nodes: [
            <NavItem
              type="Button"
              tab="TAB1"
              to="/legislacao"
              children="Home"
            />,
            <NavItem
              type="Button"
              tab="TAB2"
              to="/legislacao"
              children="Home"
            />
          ]
        }}
      />
    ),
    itemId: 'legislacaoRoute',
    to: '/legislacao'
  }),
  '/localidades': createNavItem({
    leftIcon: <FontIcon className="nav-icon t-primary">gps_fixed</FontIcon>,
    children: (
      <NavItem
        tab="none"
        type="Menu"
        to="/localidades"
        children={{
          name: 'localidades',
          nodes: [
            <NavItem
              type="Button"
              tab="TAB1"
              to="/localidades"
              children="Home"
            />,
            <NavItem
              type="Button"
              tab="TAB2"
              to="/localidades"
              children="Home"
            />
          ]
        }}
      />
    ),
    itemId: 'localidadesRoute',
    to: '/localidades'
  }),
  '/midias': createNavItem({
    leftIcon: <FontIcon className="nav-icon t-primary">tv</FontIcon>,
    children: (
      <NavItem
        tab="none"
        type="Menu"
        to="/midias"
        children={{
          name: 'midias',
          nodes: [
            <NavItem type="Button" tab="TAB1" to="/midias" children="Home" />,
            <NavItem type="Button" tab="TAB2" to="/midias" children="Home" />
          ]
        }}
      />
    ),
    itemId: 'midiasRoute',
    to: '/midias'
  }),
  '/plenario': createNavItem({
    leftIcon: (
      <FontIcon className="nav-icon t-primary">voice_over_off</FontIcon>
    ),
    children: (
      <NavItem
        tab="none"
        type="Menu"
        to="/plenario"
        children={{
          name: 'plenario',
          nodes: [
            <NavItem type="Button" tab="TAB1" to="/plenario" children="Home" />,
            <NavItem type="Button" tab="TAB2" to="/plenario" children="Home" />
          ]
        }}
      />
    ),
    itemId: 'plenarioRoute',
    to: '/plenario'
  }),
  '/pronunciamentos': createNavItem({
    leftIcon: <FontIcon className="nav-icon t-primary">mic</FontIcon>,
    children: (
      <NavItem
        tab="none"
        type="Menu"
        to="/pronunciamentos"
        children={{
          name: 'pronunciamentos',
          nodes: [
            <NavItem
              type="Button"
              tab="TAB1"
              to="/pronunciamentos"
              children="Home"
            />,
            <NavItem
              type="Button"
              tab="TAB2"
              to="/pronunciamentos"
              children="Home"
            />
          ]
        }}
      />
    ),
    itemId: 'pronunciamentosRoute',
    to: '/pronunciamentos'
  }),
  '/proposicoes': createNavItem({
    leftIcon: <FontIcon className="nav-icon t-primary">menu_book</FontIcon>,
    children: (
      <NavItem
        tab="none"
        type="Menu"
        to="/proposicoes"
        children={{
          name: 'Agenda',
          nodes: [
            <NavItem
              type="Button"
              tab="TAB1"
              to="/proposicoes"
              children="Home"
            />,
            <NavItem
              type="Button"
              tab="TAB2"
              to="/proposicoes"
              children="Home"
            />
          ]
        }}
      />
    ),
    itemId: 'proposicoesRoute',
    to: '/proposicoes'
  }),
  '/partidos': createNavItem({
    leftIcon: (
      <FontIcon className="nav-icon t-primary">sports_kabaddi</FontIcon>
    ),
    children: (
      <NavItem
        tab="none"
        type="Menu"
        to="/partidos"
        children={{
          name: 'partidos',
          nodes: [
            <NavItem type="Button" tab="TAB1" to="/partidos" children="Home" />,
            <NavItem type="Button" tab="TAB2" to="/partidos" children="Home" />
          ]
        }}
      />
    ),
    itemId: 'partidosRoute',
    to: '/partidos'
  }),
  '/tags': createNavItem({
    leftIcon: <FontIcon className="nav-icon t-primary">menu_book</FontIcon>,
    children: (
      <NavItem
        tab="none"
        type="Menu"
        to="/tags"
        children={{
          name: 'tags',
          nodes: [
            <NavItem type="Button" tab="TAB1" to="/tags" children="Home" />,
            <NavItem type="Button" tab="TAB2" to="/tags" children="Home" />
          ]
        }}
      />
    ),
    itemId: 'tagsRoute',
    to: '/tags'
  }),
  '/verbas': createNavItem({
    leftIcon: <FontIcon className="nav-icon t-primary">attach_money</FontIcon>,
    children: (
      <NavItem
        tab="none"
        type="Menu"
        to="/verbas"
        children={{
          name: 'Verbas',
          nodes: [
            <NavItem type="Button" tab="TAB1" to="/verbas" children="Home" />,
            <NavItem type="Button" tab="TAB2" to="/verbas" children="Home" />
          ]
        }}
      />
    ),
    itemId: 'verbasRoute',
    to: '/verbas'
  })
};

export default NavegationItems;
