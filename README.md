React Native Validation
======
![](https://img.shields.io/npm/dw/@midwestern/react-native-validation.svg?style=flat) ![](https://img.shields.io/npm/v/@midwestern/react-native-validation.svg?style=flat) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

 
*This package is currently a WIP, so feel free to contribute.*

**Promise-based validation for React Native**

#### Introduction
React Native Validation allows for quick and seamless validation out of the box. We designed the package based on [Laravel's Validation]((https://laravel.com/docs/5.7/validation)) and works almost interchangeably.

#### Features:
- Multiple languages support, as well as custom language support
- Extendable
- Easy to learn and use
- Light-weight

## Installing

Install React Native Validation through NPM

```
$ npm i @midwestern/react-native-validation
```

Importing React Native Validation into your components

```
import Validation from '@midwestern/react-native-validation'
```

## Usage

### Example
```js
const Validator = new Validation({
  first_name: 'required|alpha|max:255',
  last_name: 'required|alpha|max:255',
  email: 'required|string|email|max:255|unique:users',
  password: 'required|string|min:6|confirmed'
})

Validator.validate(this.state.form)
  .then(() => {
    // success
  })
  .catch(errors => {
    this.setState(state => {
      state.errors = errors
      

      return state
    })
  })
```

### Available Rules
| Rule | Description |
|---|---|
| required | forces the field to be required|
| min:val | forces the field length to be longer than the value |
| max:val | forces the field to be shorter than the value|
| required | forces the field to be required| 

### Making your own rules
**note: your method should return a boolean which represents whether or not the validation succeeded**
```js
const Validator = new Validation({
  exampleField: 'required|matchExample:OrMe'
})

Validator.extendRules({
  ruleName: 'matchExample',
  method: (fieldName, val, val2) => {
      return val === 'example' || val === val2
  },
  errorMessage: {
    english: 'FIELD didnt match VAR1 or example'
  }
})
```

### Extending error messages language
**note: not defining an error message for a rule will result in that rule defaulting to english**
```js
const Validator = new Validation({
  first_name: 'required|alpha|max:255',
  last_name: 'required|alpha|max:255',
  email: 'required|string|email|max:255|unique:users',
  password: 'required|string|min:6|confirmed'
})

Validator.extendLanguages({
  language: 'spanish',
  errorMessages: {
    required: 'ENTRADA es requerido',
    alpha: 'ENTRADA solo puede contener caracteres alfa',
    email: 'ENTRADA debe ser una dirección de correo electrónico válida',
    min: 'ENTRADA la longitud debe ser más que los caracteres VAR1',
    max: 'ENTRADA la longitud debe ser menor que los caracteres VAR1',
    string: 'ENTRADA debe ser una cadena válida',
    confirmed: 'ENTRADA debe ser confirmado'
  }
})

Validator.setLanguage('spanish')
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Carter Bland** - developer

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
