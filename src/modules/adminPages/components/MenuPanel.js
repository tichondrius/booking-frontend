import React, { Component } from 'react';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import mapImage from '../../../images/test.jpg';
import { fetchingUser } from '../../../redux/modules/userReducer'
import { connect } from 'react-redux';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ActionGroupWork from 'material-ui/svg-icons/action/group-work';
import ActionReceipt from 'material-ui/svg-icons/action/receipt';
import  ContentAdd from 'material-ui/svg-icons/content/add';

import { ROUTE_PATH } from "../../../Routes";

class MenuPanel extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
           avatar:'',
          };
    }
    componentDidMount(){
        this.props.fetchingUser(this.props.userId);
    }
    render() {
        const { username,avatar,user_type_id,redirect} = this.props;
        const type = "admin";

        return (
            <List>
                <ListItem
                    disabled={true}
                     leftAvatar={
                        <Avatar src={avatar}/>
                      }
                      
                      primaryText={username}
                      secondaryText={type}
                    
                />
                  <ListItem primaryText="Thong tin nguoi dung"  onClick={()=>redirect(ROUTE_PATH.ADMINPAGE)} leftIcon={<ActionGrade />} />
                <ListItem primaryText="Danh sách chờ duyệt" leftIcon={<ActionGroupWork />} />

                
                 
            </List>
        );
    }
}

export const mapStateToProps = state => {
    const { user, errorMessage, fetching} = state.user;
    const {first_name,last_name,phone,email,avatar,user_type_id} = user;
    return {
        
        first_name,
        last_name,
        phone,
        email,
        avatar,
        user_type_id,
        
      fetching,
      
    };
  }
  

export const mapDispatchToProps = dispatch => ({
  fetchingUser: (username) => dispatch(fetchingUser(username)), 
  
}) 
export default connect(mapStateToProps, mapDispatchToProps)(MenuPanel);
