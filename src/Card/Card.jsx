import "./Card.css"
function Card({variable,variableText}){
    return(
        <div>
            <p>{variableText}:{variable}</p>
        </div>

    )
}
export default Card;