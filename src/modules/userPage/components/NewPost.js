import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import DocumentTitle from 'react-document-title';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'


import { postingPost,} from '../../../redux/modules/postsReducer'
import { fetchingCities,fetchingDistricts} from '../../../redux/modules/cityDistrictsReducer'

import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';

import { ContentBlockAllStyled, TextFieldStyled, ButtonStyled, LoadingProgressStyled, ErrorPanelStyled } from '../../core/stylesheets/core.styles'
import { PaperStyled,Container,ImgContainer } from '../stylesheets/UserInfo.style'
import { ROUTE_PATH } from '../../../Routes';
import Snackbar from 'material-ui/Snackbar';
import { LoadingComponent } from "../../core/components/";
import  ListCity  from "./ListCity";
import  ListDistricts  from "./ListDistricts";
import  ImagesList  from "./ImagesList";
import  GoogleMapReact  from "google-map-react";


import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const AnyReactComponent = ({ text }) => (
  <div style={{
    position: 'relative', color: 'white', background: 'red',
    height: 40, width: 60, top: -20, left: -30,    
  }}>
    {text}
  </div>
);


class NewPost extends Component {
  static defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 11
  };


    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            cities:[],
            districts:[],
            title:'',
            city_id:-1,
        
            district_id:-1,
            room_type_id:'',
            address:'',
            price:'',
            currentSelect: 0,
            imgeString: [],
            imgePath: [],
            room_type_id:1,
            isUpdated: false,
            currentImgeCount: 2
        };
        this.handleRequestClose = this.handleRequestClose.bind(this);
        this._handleImageChange = this._handleImageChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleMoreImgClick = this.handleMoreImgClick.bind(this);
        this.clearState = this.clearState.bind(this);
      }
      componentDidMount(){
        if(this.state.cities.length < 1){
          this.props.fetchingCities();
          this.props.fetchingDistricts();
        }

        
      }
      handlePut = () => {
        const {title,username,description,	city_id,	district_id,address,	price,room_type_id} = this.state;
        // console.log(avatar);
        const {imgeString} = this.state;
        let images = []
        imgeString.map((img,index)=>{
          if(img){
            images.push(img);
          }
          
        })
        console.log(images);
         this.props.postingPost(title,'',description,	city_id,	district_id,address,	price,price,images,room_type_id)
      }
      handleMoreImgClick(){
        console.log(this.state.currentImgeCount);
        
        this.setState({
          currentImgeCount: this.state.currentImgeCount+1
        })
        
      }
      handleClick(index){
        console.log(index);
        this.setState({
          currentSelect: index
        })
        this.refs.fileUploader.click();
      }
      _handleImageChange(e) {
        e.preventDefault();
    
        let reader = new FileReader();
        let file = e.target.files[0];
        const {currentSelect,imgeString,imgePath}= this.state;

        reader.onloadend = () => {
          
          imgeString[currentSelect] = file
          imgePath[currentSelect] = reader.result
          this.setState({
            imgeString,
            imgePath
          })
          // this.setState({
          //   imgeString[currentSelect] : file,
          //   imgSrc: reader.result
          // });
        }
    
        reader.readAsDataURL(file)
      }
      handleRequestClose(){

        const {imgeString,imgePath} = this.state;
        imgeString.length = 0;
        imgePath.length = 0;
        this.setState({
            isUpdated:false,
            title:'',
            city_id:-1,
        
            district_id:-1,
            room_type_id:'',
            address:'',
            price:'',
            imgeString,
            imgePath,
            currentImgeCount: 2,
            currentSelect : 0
        })
      }
      handleChangeText = (fieldName, value) => {
        const state = {};
        state[fieldName] = value;
        this.setState(state);
      }  


      
      componentWillReceiveProps(nextProps){

        // const { first_name,last_name,phone,email,avatar } = nextProps;
        const { isUpdated} = nextProps;
        this.setState({
          isUpdated
        })
        // if(isUpdated === true){
        //     this.props.fetchingUser(this.state.username);
        
        // }else{
        //   this.setState({
        //     first_name,last_name,phone,email ,avatar,
        //     isUpdated,
        //     imgSrc: avatar
        // })
        // }

        

      }
      clearState(){
        this.setState({
          title:''
        });
      }
    render() {
        const { errors, isLogging, isAuth,fetching,cities,districts} = this.props;

        const { room_type_id,title,description,	city_id,	district_id,address,	price,price2,currentImgeCount,imgePath,isUpdated} = this.state;
        // if(isUpdated){
        //     //this.clearState();
        //  }
 
        if(fetching){
          return <LoadingComponent/>
        }
        return (
 
        <Container>
        
          <h1>Đăng bài</h1>
          <PaperStyled>
             {
           Array.isArray(errors) && errors.length > 0 &&
           <ErrorPanelStyled>
              { 
                  errors.map((err,index) => (
                 
                <li key={index}>
                  {err}
                </li>
                
              ))} 
              
           </ErrorPanelStyled>
         }
           <TextFieldStyled
              fullWidth={true}
              hintText="Title"
              floatingLabelText="Title"
              value={title}  
              onChange={(event, value) => this.handleChangeText('title', value)}
              
            /><br />
       
            <TextFieldStyled
              fullWidth={true}
              hintText="Description"
              floatingLabelText="Description"
              value={description}
              onChange={(event, value) => this.handleChangeText('description', value)}
              
            /><br />

            <TextFieldStyled
              fullWidth={true}
              hintText="Address"
              floatingLabelText="Address"
              value={address}
              onChange={(event, value) => this.handleChangeText('address', value)}
              
            /><br />
              <ListCity cities={cities} city_value={city_id} onSelect={(selected)=> this.handleChangeText('city_id',selected)}/><br/>
               <ListDistricts districts={districts} district_value={district_id} onSelect={(selected)=> this.handleChangeText('district_id',selected)} /><br/>
         
               <SelectField
                floatingLabelText="Loại phòng"
                value={room_type_id}
                onChange={(event, index, value)=> this.handleChangeText('room_type_id',value)}
              >
                <MenuItem value={1} primaryText="Phòng cho thuê" />
              
                <MenuItem value={2} primaryText="Nhà ở" />
                <MenuItem value={3} primaryText="Chung cư" />
              </SelectField>



              <TextFieldStyled
                fullWidth={true}
                type="number" 
                floatingLabelText="Input your Price"
                onChange={(event, value) => this.handleChangeText('price', value)}
                value={price}
            /><br />

            <p/>
         
            <Container>
            <div style={{height:'500px',width:'500px'}}>
                <GoogleMapReact 
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text={'Kreyser Avrora'}
            />
          </GoogleMapReact>
            </div>
              {/* <ImgContainer>
                <span>Chọn hình </span>
                <img style={{width:'200px',height:'200px',flex:1}} src={imgSrc}/>
                <FlatButton style={{flex:1}}  label="Chọn hình" primary={true}  onClick={() => this.handleClick(1) }/><br/>
              </ImgContainer><br/>

              <ImgContainer>
                <span>Chọn hình</span>
                <img style={{width:'200px',height:'200px',flex:1}} src={imgSrc}/>
                <FlatButton style={{flex:1}}  label="Chọn hình" primary={true}  onClick={() => this.handleClick(2) }/><br/>
              </ImgContainer><br/> */}

              <ImagesList currentCount={currentImgeCount} imgePath={imgePath} onClickItem={(index)=> this.handleClick(index)} />
              <ButtonStyled disabled={isLogging} onClick={()=> this.handleMoreImgClick()}  label="Thêm hình" primary={true} fullWidth={true}/>
              
            </Container>
            
    
            
      
            {/*

            */}
        
              <input type="file" id="file" ref="fileUploader" style={{display: "none"}} accept="image/*" onChange={(e)=>this._handleImageChange(e)}/>
            

           
            



            <ButtonStyled disabled={isLogging} onClick={this.handlePut}  label="Đăng tin" primary={true} fullWidth={true}/>
            {
              isLogging && <LoadingProgressStyled mode="indeterminate"/>
            }
             <Snackbar
                bodyStyle={{backgroundColor:'#4CAF50'}}
                open={isUpdated}
                message="Đăng tin  thành công"
                autoHideDuration={1000}
                onRequestClose={this.handleRequestClose}
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
    console.log(state);
    return {
         cities: state.ciDi.cities.cities,
         districts: state.ciDi.districts.districts,
         errors: state.post.errorMessage,
         isUpdated: state.post.isUpdated,
    };
  }
  

export const mapDispatchToProps = dispatch => ({
  postingPost: (title,username,description,	city_id,	district_id,address,	price,price2,images,room_type_id) => dispatch(postingPost(title,username,description,	city_id,	district_id,address,	price,price2,images,room_type_id)), 
  fetchingCities: ()=> dispatch(fetchingCities()),
  fetchingDistricts: ()=> dispatch(fetchingDistricts()),
  
    

}) 
export default connect(mapStateToProps, mapDispatchToProps)(NewPost);
  