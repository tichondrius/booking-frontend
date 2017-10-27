import React from 'react';
import AppBar from 'material-ui/AppBar';
import { FooterStyled, IconWrapperStyled } from '../../stylesheets/header.style';
import { connect } from 'react-redux';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';

import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Drawer from 'material-ui/Drawer';

import { openDrawer, closeDrawer } from '../../../../redux/modules/uiReducer';
import { authLogin, authLogout } from '../../../../redux/modules/authReducer'
import { LoginButton, LoggedButton } from '../../components';


const Header = (props) => {
  const { changeOpenDrawer, changeCloseDrawer, isDrawerOpening,
    wasLogged, login, logout } = props;
  const renderMenuItem = (item) => (
    <MenuItem key={item} onClick={() => changeCloseDrawer()}>{item}</MenuItem>
  );
  const renderListMenuItem = (items) => {
    return items.map((item) => renderMenuItem(item));
  }
  const iconRight = wasLogged ?  
    <LoggedButton onLogout={() => logout()}/> : 
    <LoginButton onClick={() => login('tichondrius', '123456')}/>
  return (
    <FooterStyled>
      <AppBar
        onLeftIconButtonTouchTap={() => changeOpenDrawer()}
        iconElementRight={iconRight}
        title="Booking app"
      />
      <Drawer open={isDrawerOpening}>
        { renderListMenuItem(['Đóng', 'Chức năng 1', 'Chức năng 2'])}
      </Drawer>
    </FooterStyled>)
};


const mapStateToProps = (state) => ({
  isDrawerOpening: state.ui.isDrawerOpening,
  wasLogged: state.auth.isPersisted && Boolean(state.auth.token),
});

const mapDispatchToProps = dispatch => ({
  changeOpenDrawer: () => dispatch(openDrawer()),
  changeCloseDrawer: () => dispatch(closeDrawer()),
  login: (username, password) => {
    dispatch(authLogin(username, password));
  },
  logout: () => dispatch(authLogout())

  
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);