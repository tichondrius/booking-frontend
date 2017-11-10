import styled, { css } from 'styled-components';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import mapImage from '../../../images/map-access.jpg';

export const MapContainerStyled = styled(Card)`
  background-image: url(${mapImage});
  display: flex;
  height: 80px;
  justify-content: center;
  align-items: center;
  border: 8px solid white;
  margin-bottom: 10px;
`
