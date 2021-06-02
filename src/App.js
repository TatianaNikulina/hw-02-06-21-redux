import React from 'react'
import {connect} from 'react-redux'
import PersonBook from "./components/PersonBook";

const App = ({}) => {
    return (
        <div>
        <PersonBook />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        name: state.name,
        phone: state.phone
    }
}

export default connect(mapStateToProps, null)(App);

