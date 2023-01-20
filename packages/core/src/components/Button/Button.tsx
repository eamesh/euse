import { Button as BaseButton, ButtonProps as BaseButtonProps } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { styled, ThemeOptions } from '@mui/material/styles';

interface StyledBaseButtonProps extends BaseButtonProps {
  nowrap?: boolean;
  selected?: boolean;
}

const StyledBaseButton = styled(({ nowrap, selected, ...rest }: StyledBaseButtonProps) => <BaseButton {...rest} />)`
  white-space: ${({ nowrap }) => (nowrap ? 'nowrap' : 'normal')};
  ${({ selected, theme }) => {
    if (!selected) {
      return '';
    }

    const isDark = theme.palette.mode === 'dark';
    const color = isDark ? '255' : '0';

    return `
      background-color: rgba(${color}, ${color}, ${color}, 0.1);
      border-color: rgba(${color}, ${color}, ${color}, 0.3) !important;
    `;
  }}
`;

export type ButtonProps = Omit<BaseButtonProps, 'color'> & {
  color?: BaseButtonProps['color'] | 'danger';
  to?: string | Object;
  nowrap?: boolean;
  selected?: boolean;
};

export default function Button(props: ButtonProps) {
  const { color = 'secondary', to, onClick, disableElevation = true, ...rest } = props;

  const navigate = useNavigate();

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    if (to) {
      navigate(to);
    }

    if (onClick) {
      onClick(e);
    }
  }

  switch (color) {
    case 'danger':
      return <StyledBaseButton color="error" onClick={handleClick} disableElevation={disableElevation} {...rest} />;
    case 'primary':
      return <StyledBaseButton onClick={handleClick} disableElevation={disableElevation} color="primary" {...rest} />;
    case 'secondary':
      return <StyledBaseButton onClick={handleClick} disableElevation={disableElevation} color="secondary" {...rest} />;
    default:
      return <StyledBaseButton onClick={handleClick} disableElevation={disableElevation} {...rest} />;
  }
}
