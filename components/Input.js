export default function(props) {
  return(
    <>
      <input required type={props.type} name={props.name} onChange={props.onChange} className="input"/>
      <span className="highlight"></span>
      <span className="bar"></span>
      <label>{props.children}</label>
    </>
  )
}
