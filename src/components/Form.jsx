import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import '../App.css';
import Success from "./Success";
import Fail from "./Fail";
function Form() {

    const [city, setCity] = useState("");
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [temp, setTemp] = useState("");
    const [mintemp, setMintemp] = useState("");
    const [humidity, setHumidity] = useState("");
    const [pressure, setPressure] = useState("");
    const [check, setCheck] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.get(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=1484b4d611d929531738701fd0b18ecd&units=metric"
        ).then(
            result => {
                setPressure(result.data.main.pressure);
                setHumidity(result.data.main.humidity);
                setTemp(result.data.main.temp);
                setMintemp(result.data.main.temp_min);
                setDesc(result.data.weather[0].description);
                setName(city);
            }
        ).catch(
            (err) => {
                console.log(err.toJSON());
                setCheck(false);
            }
        )
    }

    return (
        <>
            <div className="conatainer  d-flex justify-content-center my-4">
                <form action>
                    <div className="form-group ">
                        <label><h3>Check Weather In Your City</h3></label>
                        <input type="text" className="form-control" placeholder="Enter city Name" onChange={(e) => {
                            setCity(e.target.value);
                        }} />
                    </div>
                    <div className="form-group pt-2">
                        <button type="submit" className="btn btn-outline-success col-12" onClick={handleSubmit}>Submit</button>
                    </div>

                </form>
            </div>

            {check ? 
            <Success 
            desc={desc}
            mintemp = {mintemp}
            temp = {temp}
            city = {city}
            humidity = {humidity}
            pressure = {pressure}
            /> 
            : <Fail/>}
            

        </>
    )
}

export default Form;