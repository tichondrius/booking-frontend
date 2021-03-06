import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import DocumentTitle from 'react-document-title';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { fetchingUser,updatingUser } from '../../../redux/modules/userReducer'
import Avatar from 'material-ui/Avatar';
import { ContentBlockAllStyled, TextFieldStyled, ButtonStyled, LoadingProgressStyled, ErrorPanelStyled } from '../../core/stylesheets/core.styles'
import { PaperStyled,Container } from '../stylesheets/UserInfo.style'
import { ROUTE_PATH } from '../../../Routes';
import Snackbar from 'material-ui/Snackbar';
import { LoadingComponent } from "../../core/components/";
class InforUser extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
          username: this.props.username,
          userId :this.props.userId,
         first_name: '',
         last_name: '',
         phone: '',
         email: '',
         isUpdated: false,
         avatar:'',
         imgSrc : '',
        };
        this.handleRequestClose = this.handleRequestClose.bind(this);
        this._handleImageChange = this._handleImageChange.bind(this);
      }
      componentDidMount(){
        this.props.fetchingUser(this.state.userId);
      }
      handleUpdate = () => {
        const {username,first_name,last_name,phone,email,avatar,userId} = this.state;
        console.log(avatar);
        this.props.updatingUser(username,first_name,last_name,phone,email,avatar,userId);
      }
      handleClick(){
        this.refs.fileUploader.click();
      }
      _handleImageChange(e) {
        e.preventDefault();
    
        let reader = new FileReader();
        let file = e.target.files[0];
 
        reader.onloadend = () => {
        
          this.setState({
            avatar: file,
            imgSrc: reader.result
          });
        }
    
        reader.readAsDataURL(file)
      }
      handleRequestClose(){
        this.setState({
          isUpdated:false,
      })
        this.props.fetchingUser(this.state.userId);

      }
      handleChangeText = (fieldName, value) => {
        const state = {};
        state[fieldName] = value;
        this.setState(state);
      }  

      componentWillReceiveProps(nextProps){

        const { first_name,last_name,phone,email,avatar } = nextProps;
        const { isUpdated} = nextProps;
        if(isUpdated === true){
            // this.props.fetchingUser(this.state.username);
            this.setState({isUpdated});
        
        }else{
          this.setState({
            first_name,last_name,phone,email ,avatar,
            isUpdated,
            imgSrc: avatar
        })
        }

        

      }
    render() {
        const { errors, isLogging, isAuth,fetching,userId} = this.props;
        const { username,first_name,last_name,phone,email,isUpdated,avatar,imgSrc} = this.state;
        console.log(userId);
        if(fetching || isUpdated=== true){
          return (
            <div>
                <LoadingComponent/>
                <Snackbar
                bodyStyle={{backgroundColor:'#4CAF50'}}
                open={isUpdated}
                message="Đăng tin  thành công"
                autoHideDuration={1000}
                onRequestClose={this.handleRequestClose}
        />
          </div>
          )
        }
        return (

        <Container>
        
          <h1>Thông tin tài khoản</h1>
          <PaperStyled>
             {
           Array.isArray(errors) && errors.length > 0 &&
           <ErrorPanelStyled>
              { 
                  errors.map((err,index) => (
                 
                <li key={index}>
                  {err.msg}
                </li>
                
              ))} 
              
           </ErrorPanelStyled>
         }
            <Avatar style={{width:'200px',height:'200px'}} src={imgSrc}/>

            <ButtonStyled label="Change Avatar" primary={true}  onClick={() => this.handleClick() }/>
            
            <TextFieldStyled
              fullWidth={true}
              hintText="Username"
              floatingLabelText="Username"
              disabled={true}
              value={username}
              onChange={(event, value) => this.handleChangeText('username', value)}
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

            <TextFieldStyled
                fullWidth={true}
                hintText="Email"
                floatingLabelText="Input your Email"
                onChange={(event, value) => this.handleChangeText('email', value)}
                value={email}
            /><br />
              <input type="file" id="file" ref="fileUploader" style={{display: "none"}} accept="image/*" onChange={(e)=>this._handleImageChange(e)}/>
            

           
            



            <ButtonStyled disabled={isLogging} onClick={this.handleUpdate}  label="Cập nhật" primary={true} fullWidth={true}/>
            {
              isLogging && <LoadingProgressStyled mode="indeterminate"/>
            }
             <Snackbar
                bodyStyle={{backgroundColor:'#4CAF50'}}
                open={isUpdated}
                message="Sửa thành công"
                autoHideDuration={4000}
                onRequestClose={this.handleRequestClose}
                autoHideDuration={500}
        />
        
          </PaperStyled>
        </Container>    

        );
    }
}

// const styles ={
//     container:{
//         display:flex
//     },
// }
export const mapStateToProps = state => {
    const { user, errorMessage, fetching,isUpdated} = state.user;
    const {first_name,last_name,phone,email,avatar } = user;
    return {
      userId:state.auth.userId,
        first_name,
        last_name,
        phone,
        email,
        avatar,
      errors: state.user.errorMessage,
      fetching,
      isUpdated,
      
    };
  }
  

export const mapDispatchToProps = dispatch => ({
  fetchingUser: (userId) => dispatch(fetchingUser(userId)), 
  updatingUser:(username,first_name,last_name,phone,email,avatar,userId) => dispatch(updatingUser(username,first_name,last_name,phone,email,avatar,userId)),
}) 
export default connect(mapStateToProps, mapDispatchToProps)(InforUser);
  