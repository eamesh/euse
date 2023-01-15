import { createContext, ReactNode, useMemo, useCallback, useState } from 'react';
import { usePrefs } from '@euse/api-react';
import type { Mode } from '../../constants';

export const ModeContext = createContext<
  | {
      mode?: Mode;
      setMode: (mode: Mode) => void;
    }
  | undefined
>(undefined);

export type ModeProviderProps = {
  children: ReactNode;
  mode?: Mode;
  persist?: boolean;
};

export default function ModeProvider(props: ModeProviderProps) {
  const { mode: defaultMode, children, persist = false } = props;
  const [modeState, setModeState] = useState<Mode | undefined>(defaultMode);
  const [modePref, setModePref] = usePrefs<Mode>('mode', defaultMode);

  const handleSetMode = useCallback(
    (newMode: Mode) => {
      persist ? setModeState(newMode) : setModeState(newMode);
    },
    [persist, setModePref, setModeState]
  );

  const mode = persist ? modePref : modeState;

  const context = useMemo(
    () => ({
      mode,
      setMode: handleSetMode,
    }),
    [mode, handleSetMode]
  );

  return <ModeContext.Provider value={context}>{children}</ModeContext.Provider>;
}
