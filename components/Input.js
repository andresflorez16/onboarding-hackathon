export default function(props) {
  return(
    <>
      <input required="" type={props.type} className="input"/>
      <span className="highlight"></span>
      <span className="bar"></span>
      <label>{props.children}</label>
    </>
  )
}
