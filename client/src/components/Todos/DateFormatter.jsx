import React from "react";
import { Typography } from "@mui/material";

function DateFormatter({date, label}) {
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

    if(date){
        const formatedDate = new Date(date).toLocaleDateString("en-US", options);
        return <Typography variant="body2"><span className="bold-text">{label}</span>  : {formatedDate}</Typography>
    }else{
        const currentDate = new Date().toLocaleDateString("en-US", options);
        return <Typography variant="body2"><span className="bold-text">{label}</span> : {currentDate}</Typography>
    }
}

export default DateFormatter ;