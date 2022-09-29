import React from "react";
import { Typography } from "@mui/material";

function DateFormatter({date, label}) {
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

    if(date){
        const formatedDate = new Date(date).toLocaleDateString("en-US", options);
        return <Typography> {label} : {formatedDate}</Typography>
    }else{
        const currentDate = new Date().toLocaleDateString("en-US", options);
        return <Typography>{label} : {currentDate}</Typography>
    }
}

export default DateFormatter ;