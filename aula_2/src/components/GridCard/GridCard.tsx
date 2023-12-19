import { Card, CardContent, Typography } from '@mui/material';
import { postsModel } from '../../models/posts.model';
import { theme } from '../../../styles/theme';

type props = {
  cardData: postsModel;
};

const GridCard = (props: props) => {
  const { cardData } = props;

  return (
    <Card sx={{ height: '30rem' }}>
      <CardContent>
        <Typography
          fontSize={theme.sizes.small}
          marginBottom={'0.5rem'}
          color={theme.colors.primaryColor}
          textAlign={'center'}
        >
          {cardData.title}
        </Typography>
        <Typography
          fontSize={theme.sizes.small}
          color={theme.colors.primaryColor}
        >
          Descrição: {cardData.body}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default GridCard;
