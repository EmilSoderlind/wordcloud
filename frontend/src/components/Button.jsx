export const BUTTON_SIZES = {
  SMALL: {
    height: '32px',
    width: '32px',
  },
  BIG: {
    height: '81px',
    width: '128px',
  },
}

const generalStyle = {
  fontSize: '24px',
}

export const Button = ({ label, onClick, type, disabled, size = BUTTON_SIZES.BIG }) => (
  <button
    type={type}
    onClick={onClick}
    style={{
      ...generalStyle,
      ...size,
    }}
    disabled={disabled}
  >
    {label}
  </button>
)

// TODO: Use already existing component library or develop something ourselves
