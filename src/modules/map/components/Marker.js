import React from 'react';
import markerImageSrc from '../../../images/marker.png';  

const Marker = props => {
  const { room, active } = props;
  return (
    <div>
      <img src={markerImageSrc} style={{cursor: 'pointer'}} onClick={() => props.handleClick()}/>
      { active === true && <div onClick={()=> props.redirectPath(`room/${room.id}`)}  style={{ cursor: 'pointer', width: 70, height: 100, background: 'pink'}}>
        <img style={{width: 70, height: 70}} src={room.url}/>
        <span>{room.title}</span>
        <br/>
        <span>Giá: {room.price}</span>
      </div>
      }
    </div>
  )
}

export default Marker;