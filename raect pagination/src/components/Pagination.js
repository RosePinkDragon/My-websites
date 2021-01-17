import React from 'react'

export default function Pagination({ postsPerPage, totalPosts, paginate}) {
  
  const pageNumbers = []

  for(let i= 1; i<=Math.ceil(totalPosts/ postsPerPage); i++){
    pageNumbers.push(i)
  }
  
  return (
    <nav>
    
      <ul className="pagination">
        {
          pageNumbers.map(number => (
            <li className="page-item" key={number}>
              <p 
              className="page-link"
              onClick={() => paginate(number)}>
                {number}
              </p>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}
