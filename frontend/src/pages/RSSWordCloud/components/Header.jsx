const containerStyle = {
  backgroundColor: '#ffffff',
  height: '80px',
  padding: '8px',
  borderColor: '#e02e3d',
  borderBottomStyle: 'solid',
  borderWidth: '4px',
  textAlign: 'center',
}

const headerStyle = {
  margin: 0,
}

export const Header = () => {
  return (
    <header style={containerStyle}>
      <h1 style={headerStyle}>
        Word cloud 🔠☁️
        <br />
        By Emil Söderlind
      </h1>
    </header>
  )
}
