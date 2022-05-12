import React from 'react'

export default function Alert(props) {
    const capitalize=(word)=>{
        const lower=word.toLowerCase();
        // lower.charAt(0)-->means character at 0 index 
        // lower.slice(1)-->it takes all characters but not takes first character 
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        // if props.alert is true than evaluates otherwise not evaluates 
        <div style={{height:"10vh",width:"100%"}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}</strong> :{props.alert.msg}
        </div>}
        </div>
    )
}
