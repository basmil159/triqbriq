import { PaginationBtn, PaginationDiv, PaginationNum } from './style'
import { React, useEffect } from 'react'
const Pagination = (props) => {
  useEffect(() => {
    document.getElementById('1').setAttribute('checked', 'true')
  })
  return (
    <PaginationDiv>
      <span>
        Showing {props.firstItem + 1} - {props.lastItem} of {props.totalItems}{' '}
        items
      </span>
      <PaginationNum>
        {[...Array(props.Pages)].map((pgNo, i) => (
          <label htmlFor={i + 1}>
            <input
              className='pgno'
              type='radio'
              id={i + 1}
              name='page'
              style={{ display: 'none' }}
            />
            <PaginationBtn onClick={() => props.paginate(i + 1)} key={i + 1}>
              {i + 1}
            </PaginationBtn>
          </label>
        ))}
      </PaginationNum>
    </PaginationDiv>
  )
}

export default Pagination
