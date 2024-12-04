import { IoUmbrella } from 'react-icons/io5';

export default function ShowWeather({ city }) {

    return (
        <div className="content">
            {city.weatherElement[0].time.map((time, index) => {
                return (
                    <div className="item2" key={index}>
                        {/* 日期 */}
                        <p>{new Date(time.startTime).toLocaleString(undefined, { day: "numeric" })}</p>
                        {/* 時間區間 */}
                        <p>
                            {new Date(time.startTime).toLocaleString(undefined, { hour: "numeric", minute: "numeric" })}<br />
                            ~<br />
                            {new Date(time.endTime).toLocaleString(undefined, { hour: "numeric", minute: "numeric" })}
                        </p>
                        {/* 天氣圖示 */}
                        {/* <p><img src="./weatherIcon/陰短暫雨.svg" alt="" /></p> */}
                        <p><img src={`./weatherIcon/${time.parameter.parameterName}.svg`} alt="" /></p>

                        {/* 天氣圖名稱 */}
                        <p>{time.parameter.parameterName}</p>

                        {/* 溫度 */}
                        <p>{city.weatherElement[2].time[index].parameter.parameterName}°C
                            ~
                            {city.weatherElement[1].time[index].parameter.parameterName}°C</p>

                        {/* 天氣概況 */}
                        <p>{city.weatherElement[3].time[index].parameter.parameterName}</p>

                        {/* 降雨機率 */}
                        <p><IoUmbrella size={15} color="blue" />{city.weatherElement[4].time[index].parameter.parameterName}%</p>

                    </div>
                )
            })}
        </div>
    )
}