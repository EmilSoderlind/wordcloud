const containerStyle = {
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: '#ffffff',
  padding: '8px',
  display: 'flex',
  justifyContent: 'space-around',
  borderColor: '#e02e3d',
  borderTopStyle: 'solid',
  borderWidth: '4px',
  textAlign: 'center',
}

export const Footer = () => {
  return (
    <footer style={containerStyle}>
      <a href='mailto:soderlindemil@gmail.com'>Email me 📧</a>
      <a href='https://www.linkedin.com/in/emilsoderlind/'>LinkedIn 🥸</a>
    </footer>
  )
}
