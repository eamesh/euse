import { FiberManualRecord as FiberManualRecordIcon } from '@mui/icons-material';
import { forwardRef } from 'react';
import { styled } from '@mui/material/styles';
import { SvgIconProps } from '@mui/material';

const StyledFiberManualRecordIcon = styled(({ color, ...rest }: SvgIconProps) => <FiberManualRecordIcon {...rest} />)`
  font-size: 1rem;
  color: ${({ color }) => color};
`;

type Props = {
  color: 'inherit' | 'action' | 'disabled' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
};

// @ts-ignore
function Status(props: Props, ref) {
  const { color } = props;

  return (
    <div ref={ref}>
      <StyledFiberManualRecordIcon color={color} />
    </div>
  );
}

export default forwardRef(Status);
