import React, { useState } from 'react'
import Pagination from '../../components/Pagination/Pagination'
import Table from '../../components/Table/Table'
import { Heading1 } from '../../styles/typography'
import {
  ToolBtn,
  ToolBtnActive,
  ToolBtnInactive,
  ToolDiv,
  ToolTopbar,
} from './style'

// Active tool Components
const ActiveTool = (props) => {
  return <Table list={props.list} colName={props.colName} type='tool' />
}

// In-active tool Components
const InactiveTool = (props) => {
  return <Table list={props.list} colName={props.colName} type='tool' />
}

export const Tools = () => {
  // active tools list
  let Activelist = [
    ['1', 'Threadcutter M12', '16', '16.86', '5.22', '16.65', 'eye'],
    ['2', 'Threadcutter M12', '16', '16.86', '5.22', '16.65', 'eye'],
    ['3', 'Threadcutter M12', '16', '16.86', '5.22', '16.65', 'eye'],
    ['4', 'Threadcutter M12', '16', '16.86', '5.22', '16.65', 'eye'],
    ['5', 'Threadcutter M12', '16', '16.86', '5.22', '16.65', 'eye'],
    ['6', 'Threadcutter M12', '16', '16.86', '5.22', '16.65', 'eye'],
    ['7', 'Threadcutter M12', '16', '16.86', '5.22', '16.65', 'eye'],
    ['8', 'Threadcutter M12', '16', '16.86', '5.22', '16.65', 'eye'],
    ['9', 'Threadcutter M12', '16', '16.86', '5.22', '16.65', 'eye'],
    ['10', 'Threadcutter M12', '16', '16.86', '5.22', '16.65', 'eye'],
    ['11', 'Threadcutter M12', '16', '16.86', '5.22', '16.65', 'eye'],
    ['12', 'Threadcutter M12', '16', '16.86', '5.22', '16.65', 'eye'],
    ['13', 'Threadcutter M12', '16', '16.86', '5.22', '16.65', 'eye'],
    ['14', 'Threadcutter M12', '16', '16.86', '5.22', '16.65', 'eye'],
    ['15', 'Threadcutter M12', '16', '16.86', '5.22', '16.65', 'eye'],
    ['16', 'Threadcutter M12', '16', '16.86', '5.22', '16.65', 'eye'],
  ]

  // inactive tools list
  let Inactivelist = [
    ['1', 'Precision driller', '16', '16.86', '5.22', '16.65', 'eye'],
    ['2', 'Precision driller', '16', '16.86', '5.22', '16.65', 'eye'],
    ['3', 'Precision driller', '16', '16.86', '5.22', '16.65', 'eye'],
    ['4', 'Precision driller', '16', '16.86', '5.22', '16.65', 'eye'],
    ['5', 'Precision driller', '16', '16.86', '5.22', '16.65', 'eye'],
    ['6', 'Precision driller', '16', '16.86', '5.22', '16.65', 'eye'],
  ]

  // Column name for tools table  list
  let colName = [
    'S No.',
    'Tool Name',
    'Length',
    'Radius',
    'Feed Rate',
    'Rotation Speed',
    'Data',
  ]

  const [showActiveTools, setShowActiveTools] = useState(true) //to load the specific table list in a button click i.e active/inactive
  const [selectList, setShowSelectList] = useState(Activelist) //to select the specific list to load in a button click i.e active/inactive

  // This state is for controlling the paginations
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(10)

  console.log(selectList)
  // getting exact number of pages required
  let totalItems = selectList.length
  let pages = totalItems / itemsPerPage
  if (totalItems % itemsPerPage !== 0 && pages > 1) {
    pages = Math.trunc(pages + 1)
  }
  // getting current posts
  const lastItemIndex = currentPage * itemsPerPage
  const firstItemindex = lastItemIndex - itemsPerPage
  const currentItems = selectList.slice(firstItemindex, lastItemIndex)
  // getting exact number of items for last page
  const pageItem = currentItems.length

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <>
      <ToolDiv>
        <ToolTopbar>
          <Heading1>Projects</Heading1>
          <ToolBtn>
            <ToolBtnActive
              onClick={() => {
                setShowActiveTools(true)
                setShowSelectList(Activelist)
              }}
            >
              Active
            </ToolBtnActive>
            <ToolBtnInactive
              onClick={() => {
                setShowActiveTools(false)
                setShowSelectList(Inactivelist)
              }}
            >
              Inactive
            </ToolBtnInactive>
          </ToolBtn>
        </ToolTopbar>
        {showActiveTools && (
          <ActiveTool list={currentItems} colName={colName} />
        )}{' '}
        {/* Loads when clicked Active Button  */}
        {!showActiveTools && (
          <InactiveTool list={currentItems} colName={colName} />
        )}{' '}
        {/* Loads when clicked In-active Button  */}
        {/* Pagination Section for both Active and in active table  */}
        {pages >= 1 && (
          <Pagination
            lastItem={firstItemindex + pageItem}
            firstItem={firstItemindex}
            totalItems={totalItems}
            Pages={pages}
            paginate={paginate}
          />
        )}
      </ToolDiv>
    </>
  )
}
