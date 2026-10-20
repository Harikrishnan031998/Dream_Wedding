export const fallbackLng = 'en';
export const languages = ['ta', 'en'];
export const defaultNS = 'common';
export const cookieName = 'i18next';

// ----------------------------------------------------------------------

export function i18nOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    lng,
    fallbackLng,
    ns,
    defaultNS,
    fallbackNS: defaultNS,
    supportedLngs: languages,
  };
}

// ----------------------------------------------------------------------

export const changeLangMessages = {
  ta: {
    success: 'மொழி வெற்றிகரமாக மாற்றப்பட்டது!',
    error: 'மொழி மாற்றம் தோல்வியடைந்தது',
    loading: 'மொழி மாற்றப்படுகிறது...',
  },
  en: {
    success: 'Language has been changed!',
    error: 'Error changing language!',
    loading: 'Loading...',
  },
};
