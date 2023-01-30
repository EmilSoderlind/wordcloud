import React from 'react'

const containerStyling = { display: 'flex', flexDirection: 'column' }

const labelStyle = {
  fontSize: '24px',
}

const inputStyle = {
  padding: '8px',
  margin: '8px 0',
  height: '16px',
  backgroundColor: 'lightgrey',
}

const errorLabelStyle = { color: 'red', minHeight: '24px' }

const Input = ({ label, errors, name, ...rest }, ref) => {
  return (
    <div style={containerStyling}>
      <label htmlFor={name} style={labelStyle}>
        {label}
      </label>
      <input name={name} {...rest} ref={ref} style={inputStyle} />
      <span style={errorLabelStyle}>{errors[name]?.message}</span>
    </div>
  )
}

export default React.forwardRef(Input)

// TODO: Use already existing component library or develop something ourselves
