import { withRouter, RouteProps } from 'react-router-dom';
import * as React from 'react';
import { connect } from 'react-redux'
interface Props {
  name:string
}
const mapStateToProps = (state: any) => ({});
const mapDispatchToProps = (dispatch: any) => ({});
class Pronunciamentos extends React.Component<never, any> {
  render(){
    return <h1>Pronunciamentos</h1>
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Pronunciamentos) as React.ComponentType<any>);