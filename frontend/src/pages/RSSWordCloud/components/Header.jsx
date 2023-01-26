const containerStyle = {
  backgroundColor: '#789ce5',
  height: '80px',
  padding: '8px',
  borderColor: 'black',
  borderBottomStyle: 'solid',
  borderWidth: '1px',
  textAlign: 'center'
}

export const Header = () => {
  return (
    <header style={containerStyle}>
      <h2>Tag Cloud By Emil Söderlind</h2>
    </header>
  )
}
