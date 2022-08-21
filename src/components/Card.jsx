

function Card (props){
    return <div className="card">
        <img src={props.img} alt={props.alt}/>
        <h3>{props.subtitle}</h3>
        <h5>{props.description}</h5>
    </div>
}
 export default Card
