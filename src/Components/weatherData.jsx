import { IoUmbrella } from 'react-icons/io5';

const WeatherData = ({ city }) => {
    return (
        <div className="weather-Data">
            {city.weatherElement[0].time.map((time, index) => {
                const startTime = new Date(time.startTime);
                const endTime = new Date(time.endTime);

                return (
                    <div className="item2" key={index}>
                        {/* 日期 */}
                        <p>{startTime.toLocaleString(undefined, { day: "numeric" })}</p>

                        {/* 時間區間 */}
                        <p>
                            {startTime.toLocaleString(undefined, { hour: "numeric", minute: "numeric" })}<br />
                            ~<br />
                            {endTime.toLocaleString(undefined, { hour: "numeric", minute: "numeric" })}
                        </p>

                        {/* 天氣圖示 */}
                        <p>
                            <img
                                src={`./weatherIcon/${time.parameter.parameterName}.svg`}
                                alt={time.parameter.parameterName}
                            />
                        </p>

                        {/* 天氣圖名稱 */}
                        <p>{time.parameter.parameterName}</p>

                        {/* 溫度 */}
                        <p>
                            {city.weatherElement[2].time[index].parameter.parameterName}°C
                            ~
                            {city.weatherElement[1].time[index].parameter.parameterName}°C
                        </p>

                        {/* 天氣概況 */}
                        <p>{city.weatherElement[3].time[index].parameter.parameterName}</p>

                        {/* 降雨機率 */}
                        <p>
                            <IoUmbrella size={15} color="blue" />
                            {city.weatherElement[4].time[index].parameter.parameterName}%
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default WeatherData;