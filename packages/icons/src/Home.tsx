import { SvgIcon, SvgIconProps } from '@mui/material';
import { styled } from '@mui/material';

import HomeIcon from './images/home.svg';

function getColor({ theme, color }: any) {
  if (color !== 'inherit') {
    return color;
  }
  return theme.palette.type === 'dark' ? 'white' : '#757575';
}

const StyledHomeIcon = styled(HomeIcon)`
  path {
    stroke: ${getColor};
    stroke-width: 2;
  }
`;

export default function Home(props: SvgIconProps) {
  return <SvgIcon component={StyledHomeIcon} viewBox="0 0 32 31" {...props} />;
}