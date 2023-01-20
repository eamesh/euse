import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { Card, CardContent, CardMedia, Rating, Stack } from '@mui/material';
import { StarRateRounded, StarBorderRounded } from '@mui/icons-material';
import CardSection from './CardSection';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const StyledRoot = styled('div')`
  max-width: 2080px;
  width: 100%;
`;

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

export default function Square() {
  return (
    <Box sx={{ flexGrow: 1 }} display="flex" flexDirection="column" alignItems="center" padding="30px">
      <StyledRoot>
        <Typography variant="h5" display="block" mb="16px">
          热门应用
        </Typography>
        <CardSection />
      </StyledRoot>
    </Box>
  );
}
