import React from 'react'

export default function Alert(props) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <div style={{height:'50px'}} className="mt-3">
    {props.alertMsg && <div className={`alert alert-${props.alertMsg.color} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alertMsg.type)}</strong>: {props.alertMsg.msg}
    </div>}
    </div>
  )
}
