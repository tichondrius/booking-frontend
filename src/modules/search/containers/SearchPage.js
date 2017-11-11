import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

import { FormSearch } from '../components';
import { ContainerWrapperStyled, ButtonStyled, CardStyled } from '../../core/stylesheets/core.styles';
import { Row, Column } from '../../core/stylesheets/column-row.styles'; 
import { MapContainerStyled } from '../stylesheets/search.style';


export default class SearchPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <DocumentTitle title="Booking App - Search">
        <ContainerWrapperStyled>
          <Row>
            <Column md="3" sm="3">
              <MapContainerStyled>
                <ButtonStyled label="Đến bản đồ"></ButtonStyled>
              </MapContainerStyled>
              <FormSearch />
            </Column>
            <Column md="9" sm="9">
              
            </Column>
          </Row>
        </ContainerWrapperStyled>
      </DocumentTitle>
    );
  }
}