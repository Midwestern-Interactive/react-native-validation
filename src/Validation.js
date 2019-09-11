import { ValidationRules } from './ValidationRules'
import { ErrorHandler } from './ErrorHandler'

export class Validation {
  constructor (rules) {
    this.rules = rules
    this.errorHandler = new ErrorHandler()
  }

  extendRules (ruleObject) {
    if (ruleObject.hasOwnProperty('ruleName') && ruleObject.hasOwnProperty('method') && ruleObject.hasOwnProperty('ruleName')) {
      ValidationRules.prototype[ruleObject.ruleName] = ruleObject.method

      if (typeof ruleObject.errorMessage === 'object') {
        this.errorHandler.patchLanguages(ruleObject.ruleName, ruleObject.errorMessage)
      } else {
        this.errorHandler.patchLanguages(ruleObject.ruleName, { [this.errorHandler.defaultLanguage]: ruleObject.errorMessage })
      }
    } else {
      console.warn('React Native Validation: passed invalid rule object')
    }
  }

  extendLanguages (languageObject) {
    this.errorHandler.extend(languageObject)
  }

  setLanguage (language) {
    this.errorHandler.setLanguage(language)
  }

  validate (fields) {
    return new Promise((resolve, reject) => {
      let errors = {}

      const validationRules = new ValidationRules(this.rules, fields)

      for (let field of Object.keys(this.rules)) {
        for (let ruleStatement of this.rules[field].split('|')) {
          const rule = ruleStatement.split(':')[0]
          const parameters = ruleStatement.split(':').slice(1)

          const results = validationRules.call(rule)(field, fields[field], ...parameters)
          if (results === false) {
            if (errors.hasOwnProperty(field) === false) {
              errors[field] = []
            }

            errors[field].push(this.errorHandler.generate(rule, { field: field, params: parameters }))
          } else if (results !== true) {
            break
          }
        }
      }

      if (Object.keys(errors).length) {
        reject(errors)
      } else {
        resolve()
      }
    })
  }
}
