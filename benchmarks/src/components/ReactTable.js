import * as React from 'react'

export default function Table({ table, toPercent }) {
  return (
    <>
      <h3>Pure React</h3>
      <div>
        {table.map((row, i) => (
          <div key={i}>
            {row.map((x, j) => (
              <div key={j}>{toPercent(x)}</div>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}
