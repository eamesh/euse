import {
  Button as BaseButton,
  ButtonProps as BaseButtonProps,
  ThemeOptions,
  SimplePaletteColorOptions,
  styled,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const StyledBaseButton = styled(({ nowrap, selected, ...rest }: any) => <BaseButton {...rest} />)`
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

function getColor(theme: ThemeOptions, variant: string) {
  switch (variant) {
    case 'contained':
      return (theme.palette?.error as SimplePaletteColorOptions).contrastText;
    default:
      return theme.palette?.error?.main;
  }
}

const DangerButton = styled(StyledBaseButton)`
  color: ${({ theme, variant }) => getColor(theme, variant)};
  ${({ theme, variant }) => (variant === 'contained' ? `background-color: ${theme.palette.danger.main};` : undefined)}

  &:hover {
    color: ${({ theme, variant }) => getColor(theme, variant)};
    ${({ theme, variant }) => (variant === 'contained' ? `background-color: ${theme.palette.danger.main};` : undefined)}
  }
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

  function handleClick(...args: any[]) {
    if (to) {
      navigate(to);
    }

    if (onClick) {
      onClick(args as unknown as any);
    }
  }

  switch (color) {
    case 'danger':
      return <DangerButton onClick={handleClick} disableElevation={disableElevation} {...rest} />;
    case 'primary':
      return <StyledBaseButton onClick={handleClick} disableElevation={disableElevation} color="primary" {...rest} />;
    case 'secondary':
      return <StyledBaseButton onClick={handleClick} disableElevation={disableElevation} color="secondary" {...rest} />;
    default:
      return <StyledBaseButton onClick={handleClick} disableElevation={disableElevation} {...rest} />;
  }
}
