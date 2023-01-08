import { createContext } from 'react';

export default createContext<{
  dialogs: any[];
}>({
  dialogs: [],
});
