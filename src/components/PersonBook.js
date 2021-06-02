import React from 'react'
import {connect} from 'react-redux'
import {CHANGE_NAME, CHANGE_PHONE} from "../store/typesList";

const PersonBook = ({name, phone, changeName, changePhone }) => {
    return (
        <div>
            <div>
                <input type='text' value={name} placeholder='Name' onChange={(event)=>{changeName(event.target.value)}}/>
            </div>
            <div>
                <input type='text' value={phone} placeholder='Phone' onChange={(event)=>{changePhone(event.target.value)}}/>
            </div>
        {/*<div> {`Name: ${name} Phone ${phone}`} </div>*/}
        </div>
)
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeName: (newName) => dispatch({type: CHANGE_NAME, payload: newName}),
        changePhone: (newPhone) => dispatch({type: CHANGE_PHONE, payload: newPhone})
    }
}

export default connect(null, mapDispatchToProps)(PersonBook)