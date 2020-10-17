/* eslint-disable no-console, import/no-unresolved */
const React = require('react')
const Benchmark = require('benchmark')
const xstyled = require('@xstyled/emotion')
const styled = require('@emotion/styled')

const suite = new Benchmark.Suite('emotion')

const primary = 'primary'
const sp3 = '3px'
const sp1 = '1px'

function runXstyled() {
  const Component = xstyled.default.div`
    background: transparent;
    border-radius: 3px;
    border: 2px solid;
    border-color: primary;
    color: primary;
    margin: 0 3;
    padding: 1 3;
  `
  React.createElement(Component, {})
}

function runStyled() {
  const Component = styled.default.div`
    background: transparent;
    border-radius: 3px;
    border: 2px solid;
    border-color: ${() => primary};
    color: ${() => primary};
    margin: 0 ${() => sp3};
    padding: ${() => sp1} ${() => sp3};
  `
  React.createElement(Component, {})
}

suite
  .add('@emotion/styled', runStyled)
  .add('@xstyled/emotion', runXstyled)
  .on('cycle', (event) => {
    console.log(String(event.target))
  })
  .on('complete', function onComplete() {
    console.log(`Fastest is ${this.filter('fastest').map('name')}`)
  })
  .run({ async: true })
