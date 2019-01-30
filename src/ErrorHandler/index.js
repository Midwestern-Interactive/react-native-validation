import { ErrorMessages } from './errorMessages'

export class ErrorHandler {
  constructor () {
    this.defaultLanguage = 'english'
    this.currentLanguage = null

    this.errorMessages = ErrorMessages
  }

  extend (languageObject) {
    this.errorMessages[languageObject.language] = languageObject.errorMessages
  }

  setLanguage (language) {
    if (this.errorMessages.hasOwnProperty(language)) {
      this.currentLanguage = language
    }
  }

  patchLanguages (field, languagePatch) {
    for (let language of Object.keys(languagePatch)) {
      this.errorMessages[language] = { ...this.errorMessages[language], ...{ [field]: languagePatch[language] } }
    }
  }

 	generate (rule, ruleParams) {
    let message = this.errorMessages[this.currentLanguage || this.defaultLanguage][rule]
    let fieldName = ruleParams.field.replace('_', ' ').replace(/\b\w/g, l => l.toLowerCase())

    message = message.replace(':attribute', fieldName)

    for (let param of ruleParams.params) {
      message = message.replace('VAR1', param)
    }

 		return message
  }
}
