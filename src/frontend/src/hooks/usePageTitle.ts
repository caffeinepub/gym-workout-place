import { useEffect } from 'react';
import { SITE_NAME } from '../components/DesignSystem';

export function usePageTitle(title: string) {
  useEffect(() => {
    document.title = `${title} | ${SITE_NAME}`;
    return () => {
      document.title = SITE_NAME;
    };
  }, [title]);
}
