import { useRouter } from 'next/router'

const SetString = (str, programTitle = false, stringDeclensionNumber = -1) => {
  const router = useRouter()

  let output = ''

  if (programTitle === false) {
    if (router.locale === 'en-US') {
      output = str.en
    } else {
      output = str.ru
    }
  } else {
    if (router.locale === 'en-US') {
      output = str.titleEng
    } else {
      output = str.title
    }
  }

  if (stringDeclensionNumber >= 0 && router.locale === 'ru')
    output = str.ru[stringDeclensionNumber]

  return output
}

export default SetString
