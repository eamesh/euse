import { SvgIcon, SvgIconProps } from '@mui/material';

import NFTsIcon from './images/NFTs.svg';
import NFTsSmallIcon from './images/NFTsSmall.svg';
import ReloadIcon from './images/reload.svg';

export function NFTsSmall(props: SvgIconProps) {
  return <SvgIcon component={NFTsSmallIcon} viewBox="0 0 18 18" {...props} />;
}

export default function NFTs(props: SvgIconProps) {
  return <SvgIcon component={NFTsIcon} viewBox="0 0 38 28" {...props} />;
}

export function Reload(props: SvgIconProps) {
  return <SvgIcon component={ReloadIcon} viewBox="-3 -3 26 26" {...props} />;
}
