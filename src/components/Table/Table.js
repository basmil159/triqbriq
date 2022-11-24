import {
  TablContainer,
  TableHead,
  TableHeadFilter,
  TableTbody,
  TableTd,
  TableTh,
  TableTr,
} from './styleTable'
import { filterSVG } from '../../assets'
import { IconSvg } from '../../assets/styles'

export const Table = (props) => {
  if (props.list.length > 0) {
    return (
      <div
        style={{
          minHeight: '10vh',
          maxHeight: 'calc(100vh - 28.1rem)',
          overflowY: 'auto',
          overflowX: 'hidden',
        }}
      >
        <TablContainer>
          <TableHead>
            <TableTr>
              {props.colName.map((header, index) =>
                header !== 'S No.' ? (
                  <TableTh key={index}>
                    <TableHeadFilter>
                      {header}
                      {props.type === 'tool' ? null : (
                        <IconSvg width='1.2rem' height='.8rem'>
                          <use xlinkHref={filterSVG}></use>
                        </IconSvg>
                      )}
                    </TableHeadFilter>
                  </TableTh>
                ) : (
                  <TableTh key={index}>{header}</TableTh>
                )
              )}
            </TableTr>
          </TableHead>
          <TableTbody className='paragraph'>
            <List list={props.list} />
          </TableTbody>
        </TablContainer>
      </div>
    )
  }
  return (
    <section style={{ color: 'red', fontSize: '1.6rem', textAlign: 'center' }}>
      No Data found!!
    </section>
  )
}
export default Table

const List = (props) => {
  return (
    <>
      {props.list.map((obj, index) => (
        <TableTr key={index}>
          {obj.map((value, index2) => (
            <TableTd>{value}</TableTd>
          ))}
        </TableTr>
      ))}
    </>
  )
}
