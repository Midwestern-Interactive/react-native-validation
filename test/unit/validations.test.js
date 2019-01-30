const Rules = require('../../src/ValidationRules').ValidationRules

// Email Validation
test('email validation fails successfully', () => {
  const ruleTest = new Rules().call('email')('testField', 'test')

  expect(ruleTest).toBe(false)
})

test('email validation passes successfully', () => {
  const ruleTest = new Rules().call('email')('testField', 'test@test.com')

  expect(ruleTest).toBe(true)
})

// Required Validation
test('required validation fails successfully', () => {
  const ruleTest = new Rules().call('required')('testField')

  expect(ruleTest).toBe(false)
})

test('required validation passes successfully', () => {
  const ruleTest = new Rules().call('required')('testField', 'test@test.com')

  expect(ruleTest).toBe(true)
})

// Alpha Validation
test('alpha validation fails successfully', () => {
  const ruleTest = new Rules().call('alpha')('testField', 'abc 123')

  expect(ruleTest).toBe(false)
})

test('alpha validation passes successfully', () => {
  const ruleTest = new Rules().call('alpha')('testField', 'abc')

  expect(ruleTest).toBe(true)
})

// Alpha Num Validation
test('alpha num validation fails successfully', () => {
  const ruleTest = new Rules().call('alpha_num')('testField', 'abc@123')

  expect(ruleTest).toBe(false)
})

test('alpha num validation passes successfully', () => {
  const ruleTest = new Rules().call('alpha_num')('testField', 'abc123')

  expect(ruleTest).toBe(true)
})

// Alpha Dash Validation
test('alpha dash validation fails successfully', () => {
  const ruleTest = new Rules().call('alpha_dash')('testField', 'fail me')

  expect(ruleTest).toBe(false)
})

test('alpha dash validation passes successfully', () => {
  const ruleTest = new Rules().call('alpha_dash')('testField', 'pass_me')

  expect(ruleTest).toBe(true)
})

// Min Validation
test('min validation fails successfully', () => {
  const ruleTest = new Rules().call('min')('testField', 'less than 100', 100)

  expect(ruleTest).toBe(false)
})

test('min validation passes successfully', () => {
  const ruleTest = new Rules().call('min')('testField', 'longer than 2', 2)

  expect(ruleTest).toBe(true)
})

// Max Validation
test('max validation fails successfully', () => {
  const ruleTest = new Rules().call('max')('testField', 'more than 1', 1)

  expect(ruleTest).toBe(false)
})

test('max validation passes successfully', () => {
  const ruleTest = new Rules().call('max')('testField', 'less than 100', 100)

  expect(ruleTest).toBe(true)
})

// String Validation
test('string validation fails successfully', () => {
  const ruleTest = new Rules().call('string')('testField', 1)

  expect(ruleTest).toBe(false)
})

test('string validation passes successfully', () => {
  const ruleTest = new Rules().call('string')('testField', 'string')

  expect(ruleTest).toBe(true)
})

// Confirmed Validation
test('confirmed validation fails successfully', () => {
  const ruleTest = new Rules({ 'testField_confirmation': 'not equal' }).call('confirmed')('testField', 'equal')

  expect(ruleTest).toBe(false)
})

test('confirmed validation passes successfully', () => {
  const ruleTest = new Rules({ 'testField_confirmation': 'equal' }).call('confirmed')('testField', 'equal')

  expect(ruleTest).toBe(true)
})

// In Validation
test('in validation fails successfully', () => {
  const ruleTest = new Rules().call('in')('testField', 'notIn', 'in,test,test2')

  expect(ruleTest).toBe(false)
})

test('in validation passes successfully', () => {
  const ruleTest = new Rules().call('in')('testField', 'in', 'in,test,test2')

  expect(ruleTest).toBe(true)
})

// Not In Validation
test('not in validation fails successfully', () => {
  const ruleTest = new Rules().call('not_in')('testField', 'in', 'in,test,test2')

  expect(ruleTest).toBe(false)
})

test('not in validation passes successfully', () => {
  const ruleTest = new Rules().call('not_in')('testField', 'notIn', 'in,test,test2')

  expect(ruleTest).toBe(true)
})

// Integer Validation
test('integer validation fails successfully', () => {
  const ruleTest = new Rules().call('integer')('testField', 'string')

  expect(ruleTest).toBe(false)
})

test('integer validation passes successfully', () => {
  const ruleTest = new Rules().call('integer')('testField', 2)

  expect(ruleTest).toBe(true)
})

// Digits Validation
test('digits validation fails successfully', () => {
  const ruleTest = new Rules().call('digits')('testField', 123, 4)

  expect(ruleTest).toBe(false)
})

test('digits validation passes successfully', () => {
  const ruleTest = new Rules().call('digits')('testField', 123, 3)

  expect(ruleTest).toBe(true)
})

// Digits Between Validation
test('digits between validation fails successfully', () => {
  const ruleTest = new Rules().call('digits_between')('testField', 123, 4, 6)

  expect(ruleTest).toBe(false)
})

test('digits between validation passes successfully', () => {
  const ruleTest = new Rules().call('digits_between')('testField', 12345, 4, 6)

  expect(ruleTest).toBe(true)
})

// Accepted Validation
test('accepted validation fails successfully', () => {
  const ruleTest = new Rules().call('accepted')('testField', false)

  expect(ruleTest).toBe(false)
})

test('accepted validation passes successfully', () => {
  const ruleTest = new Rules().call('accepted')('testField', true)

  expect(ruleTest).toBe(true)
})

// Between Validation
test('between validation fails successfully', () => {
  const ruleTest = new Rules().call('between')('testField', 10, 1, 9)

  expect(ruleTest).toBe(false)
})

test('between validation passes successfully', () => {
  const ruleTest = new Rules().call('between')('testField', 10, 1, 100)

  expect(ruleTest).toBe(true)
})

// Boolean Validation
test('boolean fails successfully', () => {
  const ruleTest = new Rules().call('boolean')('testField', 'not a boolean')

  expect(ruleTest).toBe(false)
})

test('between validation passes successfully', () => {
  const ruleTest = new Rules().call('boolean')('testField', true)

  expect(ruleTest).toBe(true)
})

// Different Validation
test('different fails successfully', () => {
  const ruleTest = new Rules({ otherField: 'same' }).call('different')('testField', 'same', 'otherField')

  expect(ruleTest).toBe(false)
})

test('different validation passes successfully', () => {
  const ruleTest = new Rules({ otherField: 'different' }).call('different')('testField', 'same', 'otherField')

  expect(ruleTest).toBe(true)
})

// Same Validation
test('same fails successfully', () => {
  const ruleTest = new Rules({ otherField: 'different' }).call('same')('testField', 'same', 'otherField')

  expect(ruleTest).toBe(false)
})

test('same validation passes successfully', () => {
  const ruleTest = new Rules({ otherField: 'same' }).call('same')('testField', 'same', 'otherField')

  expect(ruleTest).toBe(true)
})

// GT Validation
test('gt fails successfully', () => {
  const ruleTest = new Rules({ 'otherField': 2 }).call('gt')('testField', 1, 'otherField')

  expect(ruleTest).toBe(false)
})

test('gt validation passes successfully', () => {
  const ruleTest = new Rules({ 'otherField': 1 }).call('gt')('testField', 2, 'otherField')

  expect(ruleTest).toBe(true)
})

// GTE Validation
test('gte fails successfully', () => {
  const ruleTest = new Rules({ 'otherField': 2 }).call('gte')('testField', 1, 'otherField')

  expect(ruleTest).toBe(false)
})

test('gte validation passes successfully', () => {
  const ruleTest = new Rules({ 'otherField': 2 }).call('gte')('testField', 2, 'otherField')

  expect(ruleTest).toBe(true)
})

// LT Validation
test('lt fails successfully', () => {
  const ruleTest = new Rules({ 'otherField': 1 }).call('lt')('testField', 2, 'otherField')

  expect(ruleTest).toBe(false)
})

test('lt validation passes successfully', () => {
  const ruleTest = new Rules({ 'otherField': 2 }).call('lt')('testField', 1, 'otherField')

  expect(ruleTest).toBe(true)
})

// LTE Validation
test('lte fails successfully', () => {
  const ruleTest = new Rules({ 'otherField': 1 }).call('lte')('testField', 2, 'otherField')

  expect(ruleTest).toBe(false)
})

test('lte validation passes successfully', () => {
  const ruleTest = new Rules({ 'otherField': 1 }).call('lte')('testField', 1, 'otherField')

  expect(ruleTest).toBe(true)
})
