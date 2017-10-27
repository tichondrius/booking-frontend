import styled, { css } from 'styled-components';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import LinearProgress from 'material-ui/LinearProgress';

export const BodyWrapperStyled = styled.div`
  max-width: 900px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  @media (max-width: 700px) {
    margin-left: 10px;
    margin-right: 10px;
	}
`;

export const ContainerWrapperStyled = styled.div`
  flex: 1;
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

