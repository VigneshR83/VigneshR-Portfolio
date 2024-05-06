import React from 'react'

const TabButton = ({ active, selectTab, children}) => {
const buttonClasses = active ? 'text-blue-500 border-b border-blue-500' : 'text-gray-800'

  return (
    <button onClick={selectTab}>
    <p className={`mr-3 font-semibold hover:text-gray-500 ${buttonClasses}`}>
    {children}
    </p>
    </button>
  )
}

export default TabButton