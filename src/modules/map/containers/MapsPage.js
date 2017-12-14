import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GoogleMapReact from 'google-map-react';


import { fetchingRooms } from '../../../redux/modules/roomReducer'
import { LoadingComponent } from '../../core/components';
import { ContainerWrapperStyled } from '../../core/stylesheets/core.styles';
import { Row, Column } from '../../core/stylesheets/column-row.styles'; 
import { Marker } from '../components';
import { MapWrapperStyled } from '../stylesheets/map.style';
import { RoomItemMap } from '../../roomdetail/components'

export class MapsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: null, 
      center: {
        lat: 10.7626825,
        lng: 106.6803805,
      },
      zoom: 11,
    };
  }
  componentWillMount() {
    this.props.fetchingRooms();
  }
  redirectPath  = (path) => {
    this.props.history.push(path);
  }
  handleGetPosition = (room) => {
    const { latitude, longtitude } = room;
    this.setState({
      activeId: room.id,
      center: {
        lat: latitude,
        lng: longtitude,
      },
      zoom: 15,
    })
  }
  render() {
    const {  isFetching, rooms } = this.props;
    return (
      <DocumentTitle title="Booking App - Search">
        <ContainerWrapperStyled>
          {
            isFetching === true && <Row>
              <LoadingComponent />
            </Row>
          }
          {
            rooms.length > 0 &&
             <Row>
            <Column md="9" sm="9">
              <MapWrapperStyled>
               <GoogleMapReact
                center={this.state.center}
                zoom={this.state.zoom}
                onChange={({ center, zoom }) => { this.setState({
                  center,
                  zoom,
                })}}
              >
                { rooms.map(room => {
                  return (
                    <Marker
                      redirectPath={this.redirectPath}
                      handleClick={() => this.handleGetPosition(room)}
                      active={this.state.activeId === room.id}
                      lat={room.latitude}
                      lng={room.longtitude}
                      text={room.title}
                      room={room}
                    />
                  );
                })}
               
              </GoogleMapReact>
              </MapWrapperStyled>
            </Column>
            <Column md="3" sm="3">
            <div style={{width: '100%', height: 'calc(100vh - 130px)', overflow: 'scroll'}}>
              {
                rooms.map(room => <RoomItemMap active={this.state.activeId === room.id} onGetPosition={() => this.handleGetPosition(room)} key={room.id} redirectPath={this.redirectPath} room={room}/>)
              }
            </div>
            </Column>
          </Row>
          }
         
        </ContainerWrapperStyled>
      </DocumentTitle>
    );
  }
}

export const mapStateToProps = state => {
  const { rooms, errors, isFetching } = state.room.rooms;
  return {
    rooms: rooms || [],
    errors,
    isFetching,
  };
}

export const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    fetchingRooms: fetchingRooms,
  }, dispatch),
}) 

export default connect(mapStateToProps, mapDispatchToProps)(MapsPage); 