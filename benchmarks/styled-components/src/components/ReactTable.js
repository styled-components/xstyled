import React from 'react'

const ReactTable = function Table({ table, toPercent }) {
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

ReactTable.displayName = 'Pure React'

export default ReactTable