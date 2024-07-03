import React from 'react'
import './tags.scss'

const Tags = (props) => {
    const {tags} = props;
  return (
    <div className="tags">
        {tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
        ))}
    </div>
  )
}

export default Tags