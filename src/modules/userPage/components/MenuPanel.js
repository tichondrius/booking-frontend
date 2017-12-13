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


class MenuPanel extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
           avatar:'',
          };
    }
    render() {
        const { username,avatar,user_type_id } = this.props;
        let type;
        if(user_type_id=== 2){
            type="Người thuê"
        }else if(user_type_id===3){
            type="Người cho thuê"
            
        }else{
            type="admin"
        }
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
                  <ListItem primaryText="Thong tin nguoi dung" leftIcon={<ActionGrade />} />
                  {
                     user_type_id === 3 &&  <div>
                     <ListItem primaryText="Danh sách bài đăng" leftIcon={<ActionReceipt />} />
                     <ListItem primaryText="Danh sách chờ duyệt" leftIcon={<ActionGroupWork />} />
                     
                       
                   </div>
                  }
                 
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
