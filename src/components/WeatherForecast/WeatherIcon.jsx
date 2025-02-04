const WeatherIcon = (props) => {

    const {img,imgAlt} = props
    return (
        <div>
            <img src={img} alt={imgAlt} />
        </div>
    )
}

export default WeatherIcon