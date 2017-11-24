import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { Redirect } from 'react-router-dom';
import { RomApi } from '../../api';
import axios from 'axios';
import Divider from 'material-ui/Divider';
import {
  ContainerWrapperStyled,
  TextFieldStyled, ButtonStyled,
  LoadingProgressStyled,
  ContentBlockStyled,
  ContentBlockAllStyled,
  ContentBlockLStyled,
  CardStyled,
  CardHeaderStyled,
  ContentBlockRStyled, ButtonWrapper} from '../../core/stylesheets/core.styles'
// import { IntroducePanelStyled,
//   TopPanelStyled, BranchStyled, BranchDescStyled, BottomPanelStyled
//   } from '../stylesheets/homepage.style';

import { InforRoom, Detailnfo,PriceComp} from '../components'; 
import { ROUTE_PATH } from '../../../Routes';
import mapImage from '../../../images/test.jpg';

export default  class RoomDetailPage extends React.Component {

  loadRoomsByIdFromServer(id){
    
    console.log(id);
    const url = "https://chiasephong.herokuapp.com/api/posts/" + id;
    axios.get(url)
    .then(res => {
      
      this.setState({ data: res.data[0] });
      console.log(this.state.data.title);
    })
  }
  componentDidMount() {


    //RomApi.getRooms(rooms);
   // console.log(this.props.match.params.id);
    this.loadRoomsByIdFromServer(this.props.match.params.id);
    // if(!this.pollInterval){
    //   this.pollInterval = setInterval(this.loadRoomsByIdFromServer,2000);
    // }
   
  }
  constructor(props) {
    super(props);
    this.state = { data : [] };
    var foo = {}

    console.log(this.props);
    this.loadRoomsByIdFromServer = this.loadRoomsByIdFromServer.bind(this);
    this.pollInterval = null;

  }
  render(){

    return (
      <DocumentTitle title="Booking App - Room Details">
    
       <CardStyled>
        <ContentBlockAllStyled>
          <ContentBlockLStyled>
        
                  <InforRoom
                  title = {this.state.data.title}
                  background = {mapImage}
                  content={this.state.data.description}
             />  
              
              
          </ContentBlockLStyled>
          <ContentBlockRStyled>
              <PriceComp text="test" discountPrice ="100" currentPrice= {this.state.data.price}/>
          </ContentBlockRStyled>>
      </ContentBlockAllStyled>
          
          <Divider/>
          <Detailnfo>
  
          </Detailnfo>
        </CardStyled>
      </DocumentTitle>
    );
  }
  
}



