import React from 'react'

export default function Table({ table, toPercent }) {
  return (
    <div>
      {table.map((row, i) => (
        <div key={i}>
          {row.map((x, j) => (
            <div key={j}>{toPercent(x)}</div>
          ))}
        </div>
      ))}
    </div>
  )
}
