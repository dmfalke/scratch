const logWith = (...args) => console.log.bind(console, ...args)
const errorWith = (...args) => console.error.bind(console, ...args)

// typescript-plugin config
SystemJS.config({
  packages: {
    "ts": {
      "main": "plugin.js",
    },
    "typescript": {
      "main": "lib/typescript.js",
      "meta": {
        "lib/typescript.js": {
          "exports": "ts"
        },
      }
    }
  },
  map: {
    ts: 'https://unpkg.com/plugin-typescript@5.3.1/lib/',
    typescript: 'https://unpkg.com/typescript@2.1.4'
  },
  transpiler: 'ts',
  typescriptOptions: {
    "noImplicitAny": true,
    "removeComments": false,
    "preserveConstEnums": true,
    "allowSyntheticDefaultImports": true,
    "noImplicitReturns": true,
    "sourceMap": true,
    "jsx": "react",
    "strictNullChecks": true,
    "lib": [ "dom", "es2015", "es2016" ]
  }
})

// app config
SystemJS.config({
  defaultJSExtensions: true,
  map: {
    'lodash': 'https://unpkg.com/lodash@4.17.4',
  },
});

System.register("test", [], function($__export) {
  console.log('executing test module')
  $__export({
    name: 'TEST',
    age: 123456
  });
})

System.import("test").then(test => console.log(test.name));

System.import('./Task.ts')
.then(({Task}) => new Task(res => setTimeout(res, 1000, "Hello!")).run(console.log))

System.import('./invalid-syntax').then(logWith('invalid-syntax'), errorWith('invalid-syntax'))