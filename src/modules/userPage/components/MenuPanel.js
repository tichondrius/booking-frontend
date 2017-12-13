import React, { Component } from 'react';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import mapImage from '../../../images/test.jpg';

import ActionGrade from 'material-ui/svg-icons/action/grade';
import ActionGroupWork from 'material-ui/svg-icons/action/group-work';
import ActionReceipt from 'material-ui/svg-icons/action/receipt';


class MenuPanel extends Component {
    render() {
        const { username } = this.props;
        
        return (
            <List>
                <ListItem
                    disabled={true}
                     leftAvatar={
                        <Avatar src={mapImage}/>
                      }
                      
                      primaryText={username}
                      secondaryText="Loai nguoi dung"
                />
                  <ListItem primaryText="Thong tin nguoi dung" leftIcon={<ActionGrade />} />
                  <div>
                    <ListItem primaryText="Danh sách bài đăng" leftIcon={<ActionReceipt />} />
                    <ListItem primaryText="Danh sách chờ duyệt" leftIcon={<ActionGroupWork />} />
                    
                      
                  </div>
            </List>
        );
    }
}

export default MenuPanel;