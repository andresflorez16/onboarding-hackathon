export default function(props) {
  return(
    <>
      <input type={props.type} name={props.name} onChange={props.onChange} className="input"/>
      <span className="highlight"></span>
      <span className="bar"></span>
      <label>{props.children}</label>
    </>
  )
}
