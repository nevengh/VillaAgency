import './CardSection4.css'

const CardSection4 = (props) => {
    return (
        <div className="sec-4-card">
            <div className="sec-4-card-circle"></div>
            <h2>{props.title}</h2>
            <p>{props.text1}<br/>{props.text2}</p>
        </div>
    )
}

export default CardSection4