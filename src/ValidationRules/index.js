import { DefaultRules } from './DefaultRules'

export class ValidationRules extends DefaultRules {
  constructor (dataset = {}) {
    super()

    this.dataset = dataset
  }

  call (rule) {
    if (typeof this[rule] === 'function') {
  	 return this[rule].bind(this)
    } else {
      console.warn('React Native Validation: called unknown validation rule "' + rule + '"')
      return () => { return true }
    }
  }
}
