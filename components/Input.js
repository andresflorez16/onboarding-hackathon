export default function(props) {
  return(
    <>
      <input required type={props.type} name={props.name} className="input"/>
      <span className="highlight"></span>
      <span className="bar"></span>
      <label>{props.children}</label>
    </>
  )
}
