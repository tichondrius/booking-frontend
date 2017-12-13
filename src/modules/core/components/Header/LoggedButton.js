import React from 'react';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { ROUTE_PATH } from '../../../../Routes';
const LoggedButton = (props) => (
  <IconMenu
    iconButtonElement={
      <IconButton><MoreVertIcon color="#fff"/></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
  <MenuItem primaryText="Thông tin cá nhân" onClick={()=>props.onChangePath(ROUTE_PATH.USERPAGE)}/>
  <MenuItem primaryText="Help" />
  <MenuItem primaryText="Sign out" onClick={props.onLogout}/>
</IconMenu>
)


export default LoggedButton;