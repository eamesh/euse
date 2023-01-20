import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { Card, CardContent, CardMedia, Rating, Stack } from '@mui/material';
import { StarRateRounded, StarBorderRounded } from '@mui/icons-material';
import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

const StyleCardContent = styled(CardContent)`
  padding: 0 !important;
`;

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#606060',
  },
  '& .MuiRating-iconHover': {
    color: '#606060',
  },
});

const StyleCard = styled(Card)`
  cursor: pointer;
`;

function CardItem(props: IApp) {
  const navigate = useNavigate();

  function onClick() {
    navigate(props.path);
  }

  return (
    <Grid xs={12} sm={6} md={6} lg={4} xl={3}>
      <StyleCard variant="outlined" onClick={onClick}>
        <Stack direction="row" gap="16px" padding="14px">
          <CardMedia
            component="img"
            alt="green iguana"
            sx={{ width: 80, height: 80 }}
            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          />
          <StyleCardContent>
            <Stack direction="column">
              <Typography variant="subtitle2" style={{ fontWeight: 'bold' }}>
                {props.name}
              </Typography>
              <Typography variant="caption" mb="14px">
                {props.tag}
              </Typography>
              <Stack direction="row" alignItems="center" spacing={1}>
                <StyledRating
                  name="read-only"
                  size="small"
                  value={props.score}
                  readOnly
                  icon={<StarRateRounded fontSize="small" />}
                  emptyIcon={<StarBorderRounded fontSize="small" />}
                />
                <Typography variant="button">{props.used}</Typography>
              </Stack>
            </Stack>
          </StyleCardContent>
        </Stack>
      </StyleCard>
    </Grid>
  );
}

export interface IApp {
  name: string;
  tag: string;
  score: number;
  used: string;
  path: string;
  icon: ReactNode | string;
}

const hostApps: IApp[] = [
  {
    name: '一键人像抠图',
    tag: '图像',
    score: 5,
    used: '100K',
    path: '/dashboard/ai/matting',
    icon: '',
  },
  {
    name: '动漫头像',
    tag: '图像',
    score: 5,
    used: '100K',
    path: '/dashboard/ai/matting',
    icon: '',
  },
];

export default function CardSection() {
  return (
    <Grid container spacing={2}>
      {hostApps.map((item) => {
        return <CardItem {...item} />;
      })}
    </Grid>
  );
}
