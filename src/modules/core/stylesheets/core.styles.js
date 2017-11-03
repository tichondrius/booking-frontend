import styled, { css } from 'styled-components';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import LinearProgress from 'material-ui/LinearProgress';

export const BodyWrapperStyled = styled.div`
  min-height: calc(100vh - 0px);
  overflow: overlay;
  width: 100%;
  max-width: 1200px ;
  margin: 0 auto;
  background: #fff;
`;

export const ContentBlockStyled = styled.div`
  display: inline-block;
  margin-bottom: ${props => props.noMarginBottom ? 0 : 20}px;
  width: 100%;
`;

export const ContentBlockAllStyled = styled.div`
  display: flex;
  padding-left: 30px;
  padding-right: 30px;
  @media(max-width: 840px){
    flex-direction: column;
    padding: 3px;
  }
`;

export const ContainerWrapperStyled = styled.div`
  padding: 0 15px;
  padding-top: 20px;
  flex: 1;
`;

export const ContentBlockLStyled = styled.div`
  flex: 1;
`;

export const ContentBlockRStyled = styled.div`
  flex: 0 0 45%;
  ${props => props.barCode && css`
    text-align: center;
  `}
  ${props => props.noMargin && css`
    margin: 0px;
  `}
`;

export const SiteWrapperStyled = styled.div`

`;

export const TextFieldStyled = styled(TextField)`
  
`

export const ButtonStyled = styled(RaisedButton)`
  margin-top: 10px;
  margin-bottom: 10px;
`

export const LoadingProgressStyled = styled(LinearProgress)`
  margin-top: 10px;
  margin-bottom: 10px;
`

export const ButtonWrapper = styled.div`
  flex: 1;
  margin: 0 auto;
`

