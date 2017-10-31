import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { Redirect } from 'react-router-dom'
import { authLogin } from '../../../redux/modules/authReducer'

import { ContainerWrapperStyled, TextFieldStyled, ButtonStyled, LoadingProgressStyled } from '../../core/stylesheets/core.styles'
import { IntroducePanelStyled, TopPanelStyled, BranchStyled, BranchDescStyled, BottomPanelStyled } from '../stylesheets/homepage.style';
import { ROUTE_PATH } from '../../../Routes';


const HomePage = (props) => {
  return (
    <DocumentTitle title="Booking App - Home page">
      <ContainerWrapperStyled>
        <IntroducePanelStyled>
          <TopPanelStyled>
            <BranchStyled>
              Booking App
            </BranchStyled>
            <BranchDescStyled>
              Tìm khách sạn với giá lý tưởng với giá tốt nhất
            </BranchDescStyled>
          </TopPanelStyled>
          <BottomPanelStyled>
            <TextFieldStyled
              fullWidth={true}
              hintText="Ví dụ: Hà nội"
              floatingLabelText="Tìm kiếm địa điểm"
            />
          </BottomPanelStyled>
        </IntroducePanelStyled>
      </ContainerWrapperStyled>    
    </DocumentTitle>
  );
}

export default HomePage;