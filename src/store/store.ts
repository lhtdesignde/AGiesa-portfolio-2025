import { atomWithReset } from 'jotai/utils';

// pageTitleAtom is used to store the title of the page
export const pageTitleAtom = atomWithReset<string>('Overview');

// modalAtom is used to store the modal state
export const modalAtom = atomWithReset('');
