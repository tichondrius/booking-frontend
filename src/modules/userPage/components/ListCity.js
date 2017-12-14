import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


const ListCity = (props) => {
    const  { onSelect,city_value } = props;
    const cities = props.cities;
    const colors = ["#E91E63", "#F44336", "#8BC34A", "#4CAF50", "#009688"];  
    const renderItem = (city, index) => {

        return(
            <MenuItem  key= {index} value={city.id} primaryText={city.name}/>
    )};
    return (
        <SelectField
                floatingLabelText="Thành phố "
                value={city_value}
                onChange={(event, index, value)=>onSelect(value)}
              >
                <MenuItem value={-1} primaryText="Chọn  thành phố" />
                {
                    cities.map((city,index)=>renderItem(city,index))
                }
        </SelectField>
    );
  };
  
  export default ListCity;