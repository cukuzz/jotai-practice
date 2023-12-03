interface IProps {
  text?: string
}
const HorizonLine: React.FC<IProps> = (props) => {
  const { text } = props
  return (
    <div
      style={{
        width: '100%',
        textAlign: 'center',
        borderBottom: '1px solid #aaa',
        lineHeight: '0.1em',
        margin: '10px 0 20px',
      }}
    >
      {text ? <span style={{ background: '#fff', padding: '0 10px', color: 'black' }}>{text}</span> : null}
    </div>
  )
}

export default HorizonLine
