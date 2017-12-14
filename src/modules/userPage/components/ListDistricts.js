import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


const ListDistricts = (props) => {
    const  { onSelect,district_value } = props;
    const districts = props.districts;
    console.log(props);
    // handleChange = (event, index, value) => {onSelect(value)};


    const renderItem = (district, index) => {

        return(
            <MenuItem  key= {index} value={district.id} primaryText={district.name}/>
    )};
    return (
        <SelectField
                floatingLabelText="Quận "
                value={district_value}
                onChange={(event, index, value)=>onSelect(value)}
              >
                <MenuItem value={-1} primaryText="Chọn quận" />
                {
                    districts.map((district,index)=>renderItem(district,index))
                }
        </SelectField>
    );
  };
  
  export default ListDistricts;