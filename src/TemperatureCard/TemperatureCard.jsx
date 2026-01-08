import "../TemperatureCard/Temp.css"
function Card({city,temp,description}){
    return(
        <div>
            <p>city: {city}</p>
            <p>temp: {temp}</p>
            <p>description: {description}</p>
        </div>

    )
}
export default Card;