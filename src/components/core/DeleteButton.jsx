import React from 'react'
import classnames from 'classnames'

export default function DeleteButton(props) {
  /**
  |--------------------------------------------------
  | Handlers
  |--------------------------------------------------
  */
  function getClassName() {
    return classnames(
      'px-4 py-2 rounded bg-red-600 text-white text-sm hover:bg-red-700',
      props.className
    )
  }

  /**
|--------------------------------------------------
| Render
|--------------------------------------------------
*/
  return (
    <button className={getClassName()} type={props.type} onClick={props.onClick}>
      {props.children}
    </button>
  )
}

/**
|--------------------------------------------------
| Default Props
|--------------------------------------------------
*/
DeleteButton.defaultProps = {
  type: 'button',
  onClick: () => {}
}