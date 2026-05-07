import "./MyComponent.css"
const MyComponent = (props) =>{
    return(
    <div className="contaner">
        {props.children}
    </div>
    )
}

export default MyComponent