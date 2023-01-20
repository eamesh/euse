import { Flex, SideBarItem } from '@euse/core';
import {
  Farming as FarmingIcon,
  FullNode as FullNodeIcon,
  Plots as PlotsIcon,
  Pooling as PoolingIcon,
  NFTs as NFTsIcon,
  Offers as OffersIcon,
  Tokens as TokensIcon,
  Settings as SettingsIcon,
} from '@euse/icons';
import { Trans } from '@lingui/macro';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledItemsContainer = styled(Flex)`
  flex-direction: column;
  flex-grow: 1;
  overflow: auto;
  padding-top: ${({ theme }) => `${theme.spacing(3)}`};
`;

const StyledRoot = styled(Flex)`
  height: 100%;
  flex-direction: column;
`;

const StyledSideBarDivider = styled(Box)`
  height: 1px;
  background: radial-gradient(36.59% 100.8% at 50% 50%, rgba(0, 0, 0, 0.18) 99.54%, rgba(255, 255, 255, 0) 100%);
`;

const StyledSettingsContainer = styled(Box)`
  background-color: ${({ theme }) => theme.palette.background.paper};
`;

export type DashboardSideBarProps = {
  simple?: boolean;
};

export default function DashboardSideBar(props: DashboardSideBarProps) {
  const { simple = false } = props;

  return (
    <StyledRoot>
      <StyledItemsContainer>
        <SideBarItem
          to="/dashboard"
          icon={TokensIcon}
          title={<Trans>Square</Trans>}
          data-testid="DashboardSideBar-square"
          end={false}
        />
      </StyledItemsContainer>
      <StyledSettingsContainer>
        <SideBarItem
          to="/dashboard/settings/general"
          icon={SettingsIcon}
          title={<Trans>Settings</Trans>}
          data-testid="DashboardSideBar-settings"
        />
      </StyledSettingsContainer>
    </StyledRoot>
  );
}
