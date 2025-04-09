import { vi } from 'vitest';

vi.mock('react-i18next', () => ({
  useTranslation: vi.fn().mockReturnValue({ t: (key: string) => key })
}));
