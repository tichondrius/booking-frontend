import React from 'react';
import { Column } from '../../core/stylesheets/column-row.styles';
import { RoomWrapper} from '../stylesheets/room.style'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import mapImage from '../../../images/test.jpg';

const RoomItemMap = (props) => {
  const { room, redirectPath, onGetPosition } = props;
  return (
        <Card style={{margin: "0px 5px 5px 5px"}}>
          <CardMedia
          >
            <img style={{width: '100%', height: 150}} src={room.url} alt="" />
          </CardMedia>
          <CardText>
            <p>Tên: {room.title}</p>
            <p>Giá: {room.price}</p>
          </CardText>
          <CardActions>
            <FlatButton label="Chi tiết" onClick={() => redirectPath(`room/${room.id}`)}/>
            <FlatButton onClick={onGetPosition} label="Vị trí" />
          </CardActions>
        </Card>
  )
}

export default RoomItemMap;