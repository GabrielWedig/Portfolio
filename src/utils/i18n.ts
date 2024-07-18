import i18n from 'i18next'
import HttpBackend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'
import { translationEn, translationPt } from '../public'

type ResourceTypes = 'pt' | 'en'

const resources = {
  en: {
    translation: translationEn
  },
  pt: {
    translation: translationPt
  }
}

const initObject = {
  resources,
  fallbackLng: 'pt',
  lng: 'pt'
}

i18n.use(HttpBackend).use(initReactI18next).init(initObject)

const getLanguageCode = () => i18n.language as ResourceTypes

export { getLanguageCode, i18n }
