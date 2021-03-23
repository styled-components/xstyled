/* eslint-disable no-console, import/no-unresolved */
const React = require('react')
const Benchmark = require('benchmark')
const xstyled = require('@xstyled/styled-components')
const styled = require('styled-components')

const suite = new Benchmark.Suite('styled')

const md = '1024px'
const primary = 'primary'
const sp3 = '3px'
const sp1 = '1px'

const XstyledComponent = xstyled.default.div`
    @media (min-width: 1024px) {
      background: transparent;
      border-radius: 3px;
      border: 2px solid;
      border-color: primary;
      color: primary;
      margin: 0 3;
      padding: 1 3;
    }
  `

function runXstyled() {
  React.createElement(XstyledComponent, {})
}

const StyledComponent = styled.default.div`
    @media (min-width: ${() => md}) {
      background: transparent;
      border-radius: 3px;
      border: 2px solid;
      border-color: ${() => primary};
      color: ${() => primary};
      margin: 0 ${() => sp3};
      padding: ${() => sp1} ${() => sp3};
    }
  `

function runStyled() {
  React.createElement(StyledComponent, {})
}

suite
  .add('styled-components', runStyled)
  .add('@xstyled/styled-components', runXstyled)
  .on('cycle', (event) => {
    console.log(String(event.target))
  })
  .on('complete', function onComplete() {
    console.log(`Fastest is ${this.filter('fastest').map('name')}`)
  })
  .run({ async: true })
