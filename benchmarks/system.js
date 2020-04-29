/* eslint-disable no-console, import/no-unresolved */
const Benchmark = require('benchmark')
const xsys = require('@xstyled/system')
const sys = require('styled-system')

// Benchmark.options.maxTime = 0.2

const xsysSystem = xsys.compose(xsys.fontSize, xsys.space)

const sysSystem = sys.compose(sys.fontSize, sys.space)

const suite = new Benchmark.Suite('systems')

const xSysValue = {
  theme: {},
  p: { xs: 1, md: 20 },
  mt: 10,
  m: '20px',
  fontSize: 10,
}
function runXsys() {
  return xsysSystem(xSysValue)
}

const sysValue = { theme: {}, p: [1, 20], mt: 10, m: '20px', fontSize: 10 }
function runSys() {
  return sysSystem(sysValue)
}

console.log('xsys', runXsys())
console.log('sys', runSys())

suite
  .add('@xstyled/system', runXsys)
  .add('styled-system', runSys)
  .on('cycle', (event) => {
    console.log(String(event.target))
  })
  .on('complete', function onComplete() {
    console.log(`Fastest is ${this.filter('fastest').map('name')}`)
  })
  .run({ async: true })
