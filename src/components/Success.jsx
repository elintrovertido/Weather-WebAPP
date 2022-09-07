import React from 'react';

function Success(props) {

    return(
        <>
        <div className="container-fluid w-8 result">
                <div class="container text-center">
                    <div class="row">
                        <div class="col-lg name">
                            City
                        </div>
                        <div class="col-lg value">
                            {props.city}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid w-8 result">
                <div class="container text-center">
                    <div class="row">
                        <div class="col-lg name">
                            Weather
                        </div>
                        <div class="col-lg value">
                            {props.desc}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid w-8 result">
                <div class="container text-center">
                    <div class="row">
                        <div class="col-lg name">
                            MAX Temperature
                        </div>
                        <div class="col-lg value">
                            {props.temp}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid w-8 result">
                <div class="container text-center">
                    <div class="row">
                        <div class="col-lg name">
                            Minimum temperature
                        </div>
                        <div class="col-lg value">
                            {props.mintemp}
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid w-8 result">
                <div class="container text-center">
                    <div class="row">
                        <div class="col-lg name">
                            Humidity
                        </div>
                        <div class="col-lg value">
                            {props.humidity}
                        </div>
                    </div>
                </div>
            </div><div className="container-fluid w-8 result">
                <div class="container text-center">
                    <div class="row">
                        <div class="col-lg name">
                            Pressure
                        </div>
                        <div class="col-lg value">
                            {props.pressure}
                        </div>
                    </div>
                </div>
            </div>
        
        
        
        </>
    )
}


export default Success;