import React from 'react';
import { Column } from '../../core/stylesheets/column-row.styles';
import { RoomWrapper} from '../stylesheets/room.style'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import mapImage from '../../../images/test.jpg';

const RoomItem = (props) => {
  const { room, redirectPath } = props;
  return (
     <Column md="6" sm="6">
        <Card style={{margin: "0px 5px 5px 5px"}}>
          <CardHeader
            title={room.username}
            subtitle="Subtitle"
            avatar={mapImage}
          />
          <CardMedia
          >
            <img style={{width: '100%', height: 150}} src={room.url} alt="" />
          </CardMedia>
          <CardTitle title={room.title} subtitle="Card subtitle" />
          <CardText>
           <p>Giá: {room.price}</p>
          </CardText>
          <CardActions>
            <FlatButton label="Chi tiết" onClick={() => redirectPath(`room/${room.id}`)}/>
            <FlatButton label="Yêu thích" />
          </CardActions>
        </Card>
     </Column>
  )
}

export default RoomItem;