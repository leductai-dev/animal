import React, { useState, useRef, useEffect } from 'react'

function Pagination(props) {
  const { pagination, onPageChange } = props
  const { _page, _limit, _totalRows } = pagination
  const totalPages = Math.ceil(_totalRows / _limit)
  console.log("innfooooooooooooooooo")
  console.log(_limit,_totalRows)
  console.log(totalPages)

  const _handlePageChange = (newPage) => {
    if (onPageChange) {
      onPageChange(newPage)
    }
  }

  return (
    <div className="pagination">
      <ul className="pagination-list">
        <li className="pagination-item">
          <button
          className="pagination-btn"
            disabled={_page <= 1}
            onClick={() => {
              _handlePageChange(_page - 1)
            }}
          >
            {`<`}
          </button>
        </li>

        {Array.from({ length: totalPages }).map((val, index) => {
          return (
            <li className="pagination-item">
              <button className="pagination-btn"
                key={index}
                disabled={index + 1 == _page}
                onClick={() => {
                  _handlePageChange(index + 1)
                }}
              >
                {index + 1}
              </button>
            </li>
          )
        })}
        <li className="pagination-item">
          <button
            className="pagination-btn"
            disabled={_page > totalPages}
            onClick={() => {
              _handlePageChange(_page + 1)
            }}
          >
            {`>`}
          </button>
        </li>
      </ul>
    </div>
  )
}
export default Pagination
