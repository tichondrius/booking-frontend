import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';


import { LoadingComponent } from '../../core/components';
import { ContainerWrapperStyled } from '../../core/stylesheets/core.styles';
import { Row, Column } from '../../core/stylesheets/column-row.styles'; 

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export class MapsPage extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    
  }
  redirectPath  = (path) => {
    this.props.history.push(path);
  }
  render() {
    const {  } = this.props;
    return (
      <DocumentTitle title="Booking App - Search">
        <ContainerWrapperStyled>
          
          <Row>
            <Column md="8" sm="8">
              
               <GoogleMapReact
                style={{width: '100%'}}
                defaultCenter={{lat: 59.95, lng: 30.33}}
                defaultZoom={11}
              >
                <AnyReactComponent
                  lat={59.955413}
                  lng={30.337844}
                  text={'Kreyser Avrora'}
                />
              </GoogleMapReact>
            </Column>
            <Column md="4" sm="4">
             list
            </Column>
          </Row>
        </ContainerWrapperStyled>
      </DocumentTitle>
    );
  }
}

export const mapStateToProps = state => {
  return {

  };
}

export const mapDispatchToProps = dispatch => ({
  
}) 

export default connect(mapStateToProps, mapDispatchToProps)(MapsPage); 