/* eslint-env browser */
import React from 'react'

function getTable(max = 30) {
  const table = []
  for (let i = 0; i < max; i++) {
    table[i] = [1]
    for (let j = 1; j < max; j++) {
      const next = table[i][j - 1] - (Math.random() * table[i][j - 1]) / 10
      table[i].push(next.toFixed(4))
    }
  }
  return table
}

function getUniqueSize(table) {
  const set = new Set()
  table.forEach(row => row.forEach(x => set.add(x)))
  return set.size
}

function toPercent(x) {
  return `${(x * 100).toFixed(2)}%`
}

async function runTestRerender() {
  const input = document.querySelector('input')
  for (let i = 0; i < 10; i++) {
    // eslint-disable-next-line no-await-in-loop
    await new Promise(resolve => {
      performance.mark(`startRerender${i}`)
      input.click()

      setTimeout(() => {
        setTimeout(() => {
          performance.mark(`endRerender${i}`)
          performance.measure(
            `measureRerender${i}`,
            `startRerender${i}`,
            `endRerender${i}`,
          )
          resolve()
        }, 0)
      }, 0)
    })
  }
}

function willMount() {
  if (!document.location.search.includes('test=true')) return
  performance.mark('startMount')
}

function didMount() {
  if (!document.location.search.includes('test=true')) return

  performance.mark('endMount')
  performance.measure('measureMount', 'startMount', 'endMount')

  if (document.location.search.includes('butch=true')) {
    runTestRerender()
    return
  }

  const input = document.querySelector('input')
  performance.mark('startRerender')
  input.click()
  setTimeout(() => {
    performance.mark('endRerender')
    performance.measure('measureRerender', 'startRerender', 'endRerender')
  }, 0)
}

function useWillMount(callback) {
  const rendered = React.useRef(false)
  if (!rendered.current) {
    callback()
  }
  rendered.current = true
}

function useDidMount(callback) {
  const callbackRef = React.useRef()
  React.useLayoutEffect(() => {
    callbackRef.current = callback
  })
  React.useLayoutEffect(() => {
    callbackRef.current()
  }, [])
}

export default function App({ Table }) {
  useWillMount(willMount)
  useDidMount(didMount)
  const [table, setTable] = React.useState(getTable())
  const handleClick = React.useCallback(() => setTable(getTable()), [])
  return (
    <div>
      <h2>The higher the percentage, the faster was the cell render</h2>
      <div>
        <input type="submit" value="Generate" onClick={handleClick} />{' '}
        <span>{getUniqueSize(table)} unique cells</span>
      </div>
      <Table table={table} toPercent={toPercent} />
    </div>
  )
}
