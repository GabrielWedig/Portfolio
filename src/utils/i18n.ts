import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpBackend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import translationEn from '../public/locales/en/translation.json'
import translationPt from '../public/locales/pt/translation.json'

export type LanguageTypes = 'pt' | 'en'

const resources = {
  en: {
    translation: translationEn
  },
  pt: {
    translation: translationPt
  }
}

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    lng: 'pt',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
