import { useMemo } from 'react';

import { getSupabaseBrowserClient } from '../config/client';

export const useSupabase = () => {
  return useMemo(getSupabaseBrowserClient, []);
};
