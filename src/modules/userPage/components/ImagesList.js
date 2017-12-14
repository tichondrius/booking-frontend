import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import {ImgContainer } from '../stylesheets/UserInfo.style'


const ImagesList = (prop) => {
    const count = prop.currentCount;
    const  { onClickItem,imgePath } = prop;
    const temp = [];
    for(let i =0; i< count;i++){
        temp[i] = i;
    }
    const renderItem = (index) => {
        
        return(
            <ImgContainer key={index}>
            <span>Chọn hình {index + 1}</span>
            <img style={{width:'200px',height:'200px',flex:1}} src={imgePath[index]}/>
            <FlatButton style={{flex:1}}  label="Chọn hình" primary={true}  onClick={() => onClickItem(index) }/><br/>
          </ImgContainer>
    )};
    return (
        <div>
            {
                temp.map((index)=>renderItem(index))
            }
        </div>
    );
};

export default ImagesList;