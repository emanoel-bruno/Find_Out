export interface MainState {
  name: string;
  theme: string;
}

export interface UserState {
  authToken: string;
  name: string;
}
const getGastoMensal = (ano:string,mes:string):string => {return `/gastos/${ano}/${mes}`};
const getGastoAnual = (ano:string,mes:string):string => {return `/gastos/${ano}`};
const getGastoDeputadoMensal = (deputado:number, ano:string,mes:string):string => {return `/gastos/${deputado}/${ano}/${mes}`};
const getGastoDeputadoAnual = (deputado:number, ano:string,mes:string):string => {return `/gastos/${deputado}/${ano}`};
export interface ApiState {
  base: string;
  setUser: string;
  getRanking:string;
  getRankingDeputados:string
  getGastoMensal: typeof getGastoMensal
  getGastoAnual: typeof getGastoAnual
  getGastoDeputadoMensal: typeof getGastoDeputadoMensal
  getGastoDeputadoAnual: typeof getGastoDeputadoAnual
}

export interface TabState {
  tab: string;
  route: string;
}

export interface AppState {
  api: ApiState;
  main: MainState;
  tab: TabState;
  user: UserState;
}

export const apiInitial: ApiState = {
  base: 'http://localhost:80/api',
  setUser: '/register',
  getRanking: '/redesociais/ranking',
  getRankingDeputados: '/redesociais/ranking/deputados',
  getGastoMensal : getGastoMensal,
  getGastoAnual : getGastoAnual,
  getGastoDeputadoMensal : getGastoDeputadoMensal,
  getGastoDeputadoAnual : getGastoDeputadoAnual

};

export const mainInitial: MainState = {
  name: 'Find Out',
  theme: 'light'
};

export const tabInitial: TabState = {
  tab: '',
  route: 'HOME'
};

export const userInitial: UserState = {
  name: '',
  authToken: ''
};

const defaultState: AppState = {
  api: apiInitial,
  main: mainInitial,
  tab: tabInitial,
  user: userInitial
};

export default defaultState;

    // getGastoAnual:  return '/gastos/${ano}/'
    // getGastoMensalDeputado': /gastos/${deputado}/${ano}/${mes}'
    // getGastoAnualDeputado': /gastos/${deputado}/${ano}'
