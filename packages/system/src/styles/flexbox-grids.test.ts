import { flexboxGrids } from './flexbox-grids'

describe('#flexboxGrids', () => {
  it('supports row', () => {
    expect(flexboxGrids({ row: true })).toEqual({
      boxSizing: 'border-box',
      flexGrow: 1,
      flexWrap: 'wrap',
      display: 'flex',
    })
  })

  it('supports col', () => {
    expect(flexboxGrids({ col: 0.2 })).toEqual({
      boxSizing: 'border-box',
      flexBasis: 0,
      flexGrow: 1,
      maxWidth: '20%',
      flex: '0 0 20%',
    })

    expect(flexboxGrids({ col: 4 / 12 })).toEqual({
      boxSizing: 'border-box',
      flexBasis: 0,
      flexGrow: 1,
      maxWidth: '33.3333%',
      flex: '0 0 33.3333%',
    })

    expect(flexboxGrids({ col: true })).toEqual({
      boxSizing: 'border-box',
      flexBasis: 0,
      flexGrow: 1,
      maxWidth: '100%',
    })

    expect(flexboxGrids({ col: 'auto' })).toEqual({
      boxSizing: 'border-box',
      flexBasis: 0,
      flexGrow: 1,
      maxWidth: 'none',
      flex: '0 0 auto',
      width: 'auto',
    })

    expect(flexboxGrids({ col: { xs: 0.2, md: 20 } })).toEqual({
      boxSizing: 'border-box',
      flexBasis: 0,
      flexGrow: 1,
      maxWidth: '20%',
      flex: '0 0 20%',
      '@media (min-width: 768px)': { flex: '0 0 20px', maxWidth: '20px' },
    })
  })
})
