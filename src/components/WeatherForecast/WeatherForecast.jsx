import './WeatherForecast.css'
import WeatherData from './WeatherData'
import WeatherIcon from './WeatherIcon'

const WeatherForecast = (props) => {
    console.log(props)

    const {day,img,imgAlt,conditions,time} = props
    return (
        <div className="weather">
            <WeatherData day={day}/>
            <WeatherIcon img={img} imgAlt={imgAlt} />
            <WeatherData conditions={conditions} time={time}/>
        </div>
    )
}

export default WeatherForecast