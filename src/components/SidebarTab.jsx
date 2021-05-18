import React from 'react'
import classnames from 'classnames'
import { HomeWorkRounded } from '@material-ui/icons'

export default function SidebarTab(props) {
  const { icon: Icon } = props

  /**
  |--------------------------------------------------
  | Handlers
  |--------------------------------------------------
  */
  function getTabIconClass(id) {
    return classnames('', {
      'text-primary': props.currentTab === id
    })
  }

  function getTabClass(id) {
    return classnames(
      'flex items-center px-4 py-2 m-2 cursor-pointer text-gray-400 rounded hover:text-primary-sidebar hover:bg-white',
      {
        'text-primary bg-white px-4 rounded opacity-100': props.currentTab === id
      }
    )
  }

  /**
  |--------------------------------------------------
  | Render
  |--------------------------------------------------
  */
  return (
    <div className={getTabClass(props.id)} onClick={props.onClick}>
      <Icon className={getTabIconClass(props.id)} color="inherit" />
      <p className="text-sm ml-2">{props.name}</p>
    </div>
  )
}

/**
|--------------------------------------------------
| Default Props
|--------------------------------------------------
*/
SidebarTab.defaultProps = {
  currentTab: '1',
  name: '',
  id: '1',
  icon: HomeWorkRounded,
  onClick: () => {}
}