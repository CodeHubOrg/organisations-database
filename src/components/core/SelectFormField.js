import React from 'react'

const SelectFormField = ({name, labelName, options, defaultVal, val, callback}) => {
  const selectOptions = options.map((option, index) => {
    const [value, label] = option
    return (<option key={index} value={value}>{label}</option>) 
  })
  
  return (
    <div className="form--control">
        <label htmlFor={name}>{labelName}</label>
        <select id={name} 
                name={name}
                onChange={(e) => callback(e)}
                defaultValue={defaultVal}
                value={val}
        >
          {selectOptions}   
        </select> 
    </div>
  )
}

export default SelectFormField
