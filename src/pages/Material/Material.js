import { React, useState } from 'react'
import Pagination from '../../components/Pagination/Pagination'
import { Table } from '../../components/Table/Table'
import { Heading1 } from '../../styles/typography'

export const Material = () => {
  let list = [
    ['1', 'TRIQBRIQ_300_BALKEN', '-', '16.86', '5.22', '16.65', '22'],
    ['2', 'TRIQBRIQ_300_BALKEN', '-', '16.86', '5.22', '16.65', '22'],
    ['3', 'TRIQBRIQ_300_BALKEN', '-', '16.86', '5.22', '16.65', '22'],
    ['4', 'TRIQBRIQ_300_BALKEN', '-', '16.86', '5.22', '16.65', '22'],
    ['5', 'TRIQBRIQ_300_BALKEN', '-', '16.86', '5.22', '16.65', '22'],
    ['6', 'TRIQBRIQ_300_BALKEN', '-', '16.86', '5.22', '16.65', '22'],
    ['7', 'TRIQBRIQ_300_BALKEN', '-', '16.86', '5.22', '16.65', '22'],
    ['8', 'TRIQBRIQ_300_BALKEN', '-', '16.86', '5.22', '16.65', '22'],
    ['5', 'TRIQBRIQ_300_BALKEN', '-', '16.86', '5.22', '16.65', '22'],
    ['6', 'TRIQBRIQ_300_BALKEN', '-', '16.86', '5.22', '16.65', '22'],
    ['7', 'TRIQBRIQ_300_BALKEN', '-', '16.86', '5.22', '16.65', '22'],
    ['8', 'TRIQBRIQ_300_BALKEN', '-', '16.86', '5.22', '16.65', '22'],
  ]
  let colName = [
    'S No.',
    'Tool Name',
    'Diameter',
    'Length',
    'Width',
    'Height',
    'Quantity',
  ]

  //   let pages = [1]
  // This state is for controlling the paginations
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(10)

  // getting exact number of pages required
  let totalItems = list.length
  let pages = totalItems / itemsPerPage
  if (totalItems % itemsPerPage !== 0 && pages > 1) {
    pages = Math.trunc(pages + 1)
  }
  // getting current posts
  const lastItemIndex = currentPage * itemsPerPage
  const firstItemindex = lastItemIndex - itemsPerPage
  const currentItems = list.slice(firstItemindex, lastItemIndex)

  // getting exact number of items for last page
  const pageItem = currentItems.length

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }
  return (
    <>
      <Heading1>Materials</Heading1>
      <section className='logs'>
        <Table
          list={currentItems}
          colName={colName}
          args='logs'
          itemsPerPage='4'
          totalItems='4'
          Pages={pages}
        />
      </section>
      {/* Loads when clicked In-active Button  */}
      {/* Pagination Section for both Active and in active table  */}
      {pages > 1 && (
        <Pagination
          lastItem={firstItemindex + pageItem}
          firstItem={firstItemindex}
          totalItems={totalItems}
          Pages={pages}
          paginate={paginate}
        />
      )}
    </>
  )
}
