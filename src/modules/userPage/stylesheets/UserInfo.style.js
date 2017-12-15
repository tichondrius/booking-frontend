import styled, { css } from 'styled-components';
import Paper from 'material-ui/Paper';
import { Card } from 'material-ui/Card';

export const PaperStyled = styled(Paper)`
  width: 100%;
  margin: 0 auto;
  textAlign: 'center';
  padding: 20px;
  flex: 1;
  justify-content: center;
  align-items: 'center';
  @media (max-width: 700px) {
    width: 100%;
  }
  
`;
export const PostCard = styled(Card)`
margin-bottom: 10px;

`;


export const Container = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 10px;
@media(max-width: 840px){
  flex-direction: column;
  padding: 3px;
}
`;

export const ImgContainer = styled.div`
display: flex;
margin-bottom: 10px;

@media(max-width: 840px){
  flex-direction: column;
  padding: 3px;
}
`;