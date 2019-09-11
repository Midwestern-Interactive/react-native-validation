export class DefaultRules {
  sometimes (fieldName, value) {
    if (this.dataset[fieldName] !== undefined) {
      return true
    }
  }

  required (fieldName, value) {
    return value !== undefined && value !== null && (value > 0 || value.length > 0)
  }

  alpha (fieldName, value) {
    return value.match(/^[a-z]+$/i) !== null
  }

  alpha_dash (fieldName, value) {
    return value.match(/^[a-z_-]+$/i) !== null
  }

  alpha_num (fieldName, value) {
    return value.match(/^[a-z0-9]+$/i) !== null
  }

  email (fieldName, value) {
    return value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) !== null
  }

  min (fieldName, value, length) {
    return value.length > length
  }

  max (fieldName, value, length) {
    return value.length < length
  }

  string (fieldName, value) {
    return typeof value === 'string'
  }

  confirmed (fieldName, value) {
    return value === this.dataset[fieldName + '_confirmation']
  }

  in (fieldName, value, options) {
    return options.split(',').indexOf(value) !== -1
  }

  not_in (fieldName, value, options) {
    return options.split(',').indexOf(value) === -1
  }

  integer (fieldName, value) {
    return typeof value === 'number'
  }

  json (fieldName, value) {
    try {
      JSON.parse(value)
    } catch (e) {
      return false
    }

    return true
  }

  digits (fieldName, value, length) {
    return typeof value === 'number' && String(value).length === length
  }

  digits_between (fieldName, value, min, max) {
    return typeof value === 'number' && String(value).length > min && String(value).length < max
  }

  accepted (fieldName, value) {
    return [1, 'yes', 'on', true].indexOf(value) !== -1
  }

  between (fieldName, value, min, max) {
    return value > min && value < max
  }

  boolean (fieldName, value) {
    return [true, false, 1, 0, '1', '0'].indexOf(value) !== -1
  }

  different (fieldName, value, otherFieldName) {
    return value !== this.dataset[otherFieldName]
  }

  same (fieldName, value, otherFieldName) {
    return value === this.dataset[otherFieldName]
  }

  filled (fieldName, value) {
    if (this.dataset[fieldName] !== undefined) {
      return value !== undefined && value.length > 0
    }
  }

  present (fieldName, value) {
    return this.dataset[fieldName] !== undefined
  }

  gt (fieldName, value, otherFieldName) {
    return value > this.dataset[otherFieldName]
  }

  gte (fieldName, value, otherFieldName) {
    return value >= this.dataset[otherFieldName]
  }

  lt (fieldName, value, otherFieldName) {
    return value < this.dataset[otherFieldName]
  }

  lte (fieldName, value, otherFieldName) {
    return value <= this.dataset[otherFieldName]
  }
}
