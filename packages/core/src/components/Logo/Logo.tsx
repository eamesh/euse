// import { Euse } from '@euse/icons';
import { Box, BoxProps } from '@mui/material';
import { styled } from '@mui/material/styles';

// const StyledEuse = styled(Euse)`
//   max-width: 100%;
//   width: auto;
//   height: auto;
// `;

export default function Logo(props: BoxProps) {
  return <Box {...props}>{/* <StyledEuse /> */}</Box>;
}
