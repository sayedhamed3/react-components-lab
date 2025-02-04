const WeatherData = (props) => {
    console.log(props)

    const {day,conditions,time} = props
    return (
        <div>
            <h2>{day}</h2>
            {conditions && <p><span>conditions: </span>{conditions}</p>}
            {time && <p><span>time: </span>{time}</p>}
        </div>
    )
}

export default WeatherData