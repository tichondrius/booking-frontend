import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import DocumentTitle from 'react-document-title';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { authSignUp, flushErrorLogin } from '../../../redux/modules/authReducer'

import { ContainerWrapperStyled, TextFieldStyled, ButtonStyled, LoadingProgressStyled, ErrorPanelStyled } from '../../core/stylesheets/core.styles'
import { PaperStyled, } from '../stylesheets/signUp.style'
import { ROUTE_PATH } from '../../../Routes';


import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
     first_name: '',
     last_name: '',
     phone: '',
     email: '',
     user_type_id: 1,
     repassword: '',
    };
  }
  componentWillMount() {
    console.log(this.props);
    this.props.flushError();
  }
  handleSignUp = () => {
    const { username, password,first_name,last_name,phone,email,user_type_id,repassword} = this.state;
    this.props.signUp(username, password,first_name,last_name,phone,email,user_type_id,repassword);
  }
  handleClick(){
    this.refs.fileUploader.click();
  }
  _handleImageChange(e) {
    e.preventDefault();

    //let reader = new FileReader();
    let file = e.target.files[0];
    console.log(file)
    // reader.onloadend = () => {
    //     console.log(file)
    // //   this.setState({
    // //     file: file,
    // //     imagePreviewUrl: reader.result
    // //   });
    // }

    // reader.readAsDataURL(file)
  }
  handleChange = (event, index, value) => this.setState({user_type_id: value});
  handleChangeText = (fieldName, value) => {
    const state = {};
    state[fieldName] = value;
    this.setState(state);
  }  
  render() {
    const { error, isLogging, isAuth} = this.props;
    const { username, password,first_name,last_name,phone,email,repassword } = this.state;
   

    return (
      <DocumentTitle title="Booking App - Login">
        <ContainerWrapperStyled>
        
          
          <PaperStyled>
             {
           Array.isArray(error) && error.length > 0 &&
           <ErrorPanelStyled>
              { 
                  error.map((err,index) => (
                 
                <li key={index}>
                  {err.msg}
                </li>
                
              ))} 
              
           </ErrorPanelStyled>
         }
            <TextFieldStyled
              fullWidth={true}
              hintText="Username"
              floatingLabelText="Input your username"
              value={username}
              onChange={(event, value) => this.handleChangeText('username', value)}
            /><br />
            <TextFieldStyled
              fullWidth={true}
              hintText="Password"
              type="password"
              floatingLabelText="Input your password"
              onChange={(event, value) => this.handleChangeText('password', value)}
              value={password}
            /><br />
              <TextFieldStyled
              fullWidth={true}
              hintText="RePassword"
              type="password"
              floatingLabelText="Input your password again"
              onChange={(event, value) => this.handleChangeText('repassword', value)}
              value={repassword}
            /><br />
              <TextFieldStyled
              fullWidth={true}
              hintText="First name"
              floatingLabelText="Input your First name"
              onChange={(event, value) => this.handleChangeText('first_name', value)}
              value={first_name}
            /><br />

            <TextFieldStyled
              fullWidth={true}
              hintText="Last name"
              floatingLabelText="Input your Last name"
              onChange={(event, value) => this.handleChangeText('last_name', value)}
              value={last_name}
            /><br />

            <TextFieldStyled
                fullWidth={true}
                type="number" 
                floatingLabelText="Input your Phone"
                onChange={(event, value) => this.handleChangeText('phone', value)}
                value={phone}
            /><br />
             <SelectField
                floatingLabelText="Loại người dùng"
                value={this.state.user_type_id}
                onChange={this.handleChange}
              >
                <MenuItem value={1} primaryText="Người thuê" />
                <MenuItem value={2} primaryText="Người cho thuê" />
              </SelectField>
            <TextFieldStyled
                fullWidth={true}
                hintText="Email"
                floatingLabelText="Input your Email"
                onChange={(event, value) => this.handleChangeText('email', value)}
                value={email}
            /><br />
            
            {/* <input type="file" id="file" ref="fileUploader" style={{display: "none"}} onChange={(e)=>this._handleImageChange(e)}/>
            <ButtonStyled label="Get Avatar" primary={true}  onClick={() => this.handleClick()}/> */}
            

            <ButtonStyled disabled={isLogging} onClick={this.handleSignUp}  label="Đăng ký" primary={true} fullWidth={true}/>
            {
              isLogging && <LoadingProgressStyled mode="indeterminate"/>
            }
          </PaperStyled>
        </ContainerWrapperStyled>    
      </DocumentTitle>
    );
  }
  
};

export const mapPropsToState = (state) => ({
  error: state.auth.errorMessage,
  isLogging: state.auth.isLogging,
  isAuth: state.config.isPersisted && Boolean(state.auth.token),
})

export const mapProps = dispatch => ({
  signUp: (username, password,first_name,last_name,phone,email,user_type_id,repassword) => dispatch(authSignUp(username, password,first_name,last_name,phone,email,user_type_id,repassword)),
  flushError: () => dispatch(flushErrorLogin()),
})

export default connect(mapPropsToState, mapProps)(SignUpPage);