import styled, { css } from 'styled-components';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import LinearProgress from 'material-ui/LinearProgress';

export const BodyWrapperStyled = styled.div`
  min-height: calc(100vh - 120px);
  overflow: overlay;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
`;

export const ContainerWrapperStyled = styled.div`
  padding: 0 15px;
  padding-top: 20px;
  flex: 1;
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

