// shim process.env
window.process = { env: { } }

var packages = [
  'core',
  'data',
  'core/adt',
  'core/fantasy-land',
  'core/lambda',
  'core/object',
  'data/conversions',
  'data/either',
  'data/future',
  'data/maybe',
  'data/task',
  'data/validation',
]
.reduce((packages, entry) => Object.assign(packages, {
  [`folktale/${entry}`]: {
    main: 'index'
  }
}), {})

System.config({
  defaultJSExtensions: true,
  map: {
    folktale: 'https://raw.githubusercontent.com/origamitower/folktale/master/src'
  },
  packages: packages
})
