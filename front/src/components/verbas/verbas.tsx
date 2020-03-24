import { withRouter, RouteProps } from 'react-router-dom';
import React, {Component} from 'react';
import { connect } from 'react-redux'
import { AppState } from '../../state';
import axios from 'axios';
import Grid from '../layout/grid';
import {Text,TextContainer} from "@react-md/typography";
import { emphasize } from '@material-ui/core';
interface PropsfromState {
  getRanking: string,
  getRankingDeputados: string
}
interface VerbasState {
  redesSociais:any;
  listaDeputados:any;
}


class Verbas extends Component<PropsfromState, VerbasState> {
  constructor(props:PropsfromState){
    super(props);
    this.updateData();
  }

  updateData(){
    axios.get(this.props.getRanking)
    .then((response) => {
      let object = response.data;
      object = Object.keys(object).map(function(key) {
        return [Number(key), object[key]];
      });
      this.setState({
        redesSociais: object
      });
    });
    axios.get(this.props.getRankingDeputados)
    .then((response) => {
      let object = response.data;
      this.setState({
        listaDeputados: object
      });
    });
  }

  componentDidMount(){
    this.updateData();
  }
  render(){
      return(
        <div>
          <TextContainer>
          <Text type="headline-1" align="center" color="theme-primary">Verbas</Text>
        </TextContainer>
        <Grid
          fullWidth={true}
          horizontal="center"
          vertical="middle"
          columns={2}
          rows={1}
          gap={1}
        >
        { (this.state.redesSociais) }
        </Grid>
        </div>
      )
    }
}
const mapStateToProps = ({api}: AppState) => ({
  getRanking: api.getRanking,
  getRankingDeputados: api.getRankingDeputados
});
const mapDispatchToProps = (dispatch: any) => ({});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Verbas));
