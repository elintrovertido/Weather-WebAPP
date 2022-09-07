import React from "react";
import '../App.css';
function Fail() {

    const reloadpage = ()=>{
        window.location.reload(false);
    }


    return (
        <>
            <div class="alert alert-warning warning" role="alert">
                <h5 className="warning">Please Enter Valid City Name</h5>
                <span>    </span>

                <button className="btn btn-primary btn-sm"onClick={reloadpage}> Reload Page </button>

            </div>
        </>
    )
}

export default Fail;