import React, { ReactNode } from 'react'
/* eslint-disable sort-keys */
import { Button } from '@react-md/button'
import { FontIcon } from '@react-md/icon'
import { LayoutNavigationItem, LayoutNavigationTree } from '@react-md/layout'
import { DropdownMenu } from '@react-md/menu'
import { Route } from 'react-router-dom'
import '../../common.scss'
import '../../index.scss'
import '../../index.scss'

type NavType = {
  itemId: string
  to: string
  children: ReactNode | string | undefined
  leftIcon: ReactNode | undefined
  parentId: string | null
  type: string
}
type Item = {
  name: string
  to: string
}

type ItemMenu = {
  name: string
  to: string
  items: Item[]
}

function getTerm(text: ReactNode | string | undefined, i: number) {
  return text && typeof text == 'string' ? text.split('-', i + 1)[i] : ' '
}

function getChildren(nav: NavType) {
  return nav.children && typeof nav.children == 'string' ? nav.children : ' '
}

const makeChild = (nav: NavType) => {
  switch (nav.type) {
    case 'Button':
      return (
        <Route
          render={({ history }) => (
            <Button
              theme="clear"
              onClick={() => {
                history.push(nav.to)
              }}
            >
              {nav.children}
            </Button>
          )}
        />
      )
    case 'Dual Button':
      return (
        <div className="grid col-2 hv-center">
          <Route
            render={({ history }) => (
              <Button
                theme="clear"
                onClick={() => {
                  history.push(getTerm(nav.to, 0))
                }}
              >
                {getTerm(nav.children, 0)}
              </Button>
            )}
          />
          <Route
            render={({ history }) => (
              <Button
                theme="clear"
                onClick={() => {
                  history.push(getTerm(nav.to, 1))
                }}
              >
                {getTerm(nav.children, 1)}
              </Button>
            )}
          />
        </div>
      )
    case 'Menu':
      const data: ItemMenu = JSON.parse(getChildren(nav))
      const routes: ReactNode[] = []

      data.items.map((route: Item) => {
        const item = {
          children: (
            <Route
              render={({ history }) => (
                <Button
                  onClick={() => {
                    history.push(data.to + route.to)
                  }}
                  theme="primary"
                >
                  {route.name}
                </Button>
              )}
            />
          )
        }

        routes.push(item)
      })
      console.log(routes)

      return (
        <DropdownMenu
          id={`position-right-center-${nav.to}`}
          key={'center'}
          anchor={{
            x: 'right',
            y: 'center'
          }}
          items={routes}
          menuLabel={data.name}
          dropdownIcon={<FontIcon>arrow_drop_down</FontIcon>}
          className="drop-down-button"
        >
          <span className="span-dropdown">{data.name}</span>
        </DropdownMenu>
      )
    default:
      return null
  }
}

function createRoute(
  itemId: string,
  pathname: string,
  children: string | NavType,
  leftIcon: ReactNode | undefined,
  parentId: string | null,
  type: string
): LayoutNavigationItem {
  const childData: NavType = {
    children,
    itemId,
    leftIcon,
    parentId,
    to: pathname,
    type
  }

  return {
    children: makeChild(childData),
    itemId,
    leftIcon,
    parentId,
    to: pathname
  }
}

const navItems: LayoutNavigationTree = {
  '/user': createRoute(
    'userRoute',
    '/login-/signup',
    'Login-Registrar',
    '',
    null,
    'Dual Button'
  ),
  '/': createRoute(
    'homeRoute',
    '/',
    'Home',
    <FontIcon>home</FontIcon>,
    null,
    'Button'
  ),
  '/agenda': createRoute(
    'agendaRoute',
    '/agenda',
    JSON.stringify({
      items: [
        { name: 'op1', to: '/com1' },
        { name: 'op2', to: '/com2' }
      ],
      name: 'agenda',
      to: '/agenda'
    }),
    <FontIcon>calendar_today</FontIcon>,
    null,
    'Menu'
  ),
  '/comissoes': createRoute(
    'comissoesRoute',
    '/comissoes',
    JSON.stringify({
      items: [
        { name: 'op1', to: '/com1' },
        { name: 'op2', to: '/com2' }
      ],
      name: 'comissões',
      to: '/comissoes'
    }),
    <FontIcon>attach_money</FontIcon>,
    null,
    'Menu'
  ),
  '/contratos': createRoute(
    'contratosRoute',
    '/contratos',
    JSON.stringify({
      items: [
        { name: 'op1', to: '/com1' },
        { name: 'op2', to: '/com2' }
      ],
      name: 'contratos',
      to: '/contratos'
    }),
    <FontIcon>device_hub</FontIcon>,
    null,
    'Menu'
  ),
  '/deputados': createRoute(
    'deputadosRoute',
    '/deputados',
    JSON.stringify({
      items: [
        { name: 'op1', to: '/com1' },
        { name: 'op2', to: '/com2' }
      ],
      name: 'deputados',
      to: '/deputados'
    }),
    <FontIcon>sports_kabaddi</FontIcon>,
    null,
    'Menu'
  ),
  '/legislaturas': createRoute(
    'legislaturasRoute',
    '/legislaturas',
    JSON.stringify({
      items: [
        { name: 'op1', to: '/com1' },
        { name: 'op2', to: '/com2' }
      ],
      name: 'legislaturas',
      to: '/legislaturas'
    }),
    <FontIcon>menu_book</FontIcon>,
    null,
    'Menu'
  ),
  '/legislacao': createRoute(
    'legislacaoRoute',
    '/legislacao',
    JSON.stringify({
      items: [
        { name: 'op1', to: '/com1' },
        { name: 'op2', to: '/com2' }
      ],
      name: 'legislação',
      to: '/legislacao'
    }),
    <FontIcon>menu_book</FontIcon>,
    null,
    'Menu'
  ),
  '/localidades': createRoute(
    'localidadesRoute',
    '/localidades',
    JSON.stringify({
      items: [
        { name: 'op1', to: '/com1' },
        { name: 'op2', to: '/com2' }
      ],
      name: 'localidades',
      to: '/localidades'
    }),
    <FontIcon>gps_fixed</FontIcon>,
    null,
    'Menu'
  ),
  '/midias': createRoute(
    'midiasRoute',
    '/midias',
    JSON.stringify({
      items: [
        { name: 'op1', to: '/com1' },
        { name: 'op2', to: '/com2' }
      ],
      name: 'midias',
      to: '/midias'
    }),
    <FontIcon>tv</FontIcon>,
    null,
    'Menu'
  ),
  '/plenario': createRoute(
    'plenarioRoute',
    '/plenario',
    JSON.stringify({
      items: [
        { name: 'op1', to: '/com1' },
        { name: 'op2', to: '/com2' }
      ],
      name: 'plenário',
      to: '/plenario'
    }),
    <FontIcon>voice_over_off</FontIcon>,
    null,
    'Menu'
  ),
  '/pronunciamentos': createRoute(
    'pronunciamentosRoute',
    '/pronunciamentos',
    JSON.stringify({
      items: [
        { name: 'op1', to: '/com1' },
        { name: 'op2', to: '/com2' }
      ],
      name: 'pronunciamentos',
      to: '/pronunciamentos'
    }),
    <FontIcon>mic</FontIcon>,
    null,
    'Menu'
  ),
  '/proposicoes': createRoute(
    'proposicoesRoute',
    '/proposicoes',
    JSON.stringify({
      items: [
        { name: 'op1', to: '/com1' },
        { name: 'op2', to: '/com2' }
      ],
      name: 'proposições',
      to: '/proposicoes'
    }),
    <FontIcon>menu_book</FontIcon>,
    null,
    'Menu'
  ),
  '/partidos': createRoute(
    'partidosRoute',
    '/partidos',
    JSON.stringify({
      items: [
        { name: 'op1', to: '/com1' },
        { name: 'op2', to: '/com2' }
      ],
      name: 'partidos',
      to: '/partidos'
    }),
    <FontIcon>sports_kabaddi</FontIcon>,
    null,
    'Menu'
  ),
  '/tags': createRoute(
    'tagsRoute',
    '/tags',
    JSON.stringify({
      items: [
        { name: 'op1', to: '/com1' },
        { name: 'op2', to: '/com2' }
      ],
      name: 'tags',
      to: '/tags'
    }),
    <FontIcon>menu_book</FontIcon>,
    null,
    'Menu'
  ),
  '/verbas': createRoute(
    'verbasRoute',
    '/verbas',
    JSON.stringify({
      items: [
        { name: 'op1', to: '/com1' },
        { name: 'op2', to: '/com2' }
      ],
      name: 'verbas',
      to: '/verbas'
    }),
    <FontIcon>attach_money</FontIcon>,
    null,
    'Menu'
  )
}

export default navItems
