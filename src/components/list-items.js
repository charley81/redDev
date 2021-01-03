import React from 'react'

const ListItems = ({ list }) => {
  return list.map(item => (
    <div key={item.objectId}>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
    </div>
  ))
}

export default ListItems
