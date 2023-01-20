import { Box, Tooltip as BaseTooltip, TooltipProps } from '@mui/material';
import { forwardRef } from 'react';

import CopyToClipboard from '../CopyToClipboard';
import Flex from '../Flex';

type Props = TooltipProps & {
  copyToClipboard?: boolean;
  maxWidth?: any;
  disableInteractive?: boolean;
};

function Tooltip(props: Props, ref: any) {
  const { copyToClipboard = false, title, maxWidth = 200, disableInteractive, children, ...rest } = props;

  const titleContent = copyToClipboard ? (
    <Flex alignItems="center" gap={1}>
      <Box maxWidth={maxWidth}>{title}</Box>
      <CopyToClipboard
        value={title?.toString() as unknown as string}
        fontSize="small"
        invertColor
        size={'small'}
        clearCopiedDelay={1000}
      />
    </Flex>
  ) : (
    title
  );

  return (
    <BaseTooltip title={titleContent} disableInteractive={!copyToClipboard && disableInteractive} {...rest} ref={ref}>
      {Array.isArray(children) ? <span>{children}</span> : children}
    </BaseTooltip>
  );
}

export default forwardRef(Tooltip);
