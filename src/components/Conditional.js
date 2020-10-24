import React from 'react'

function Conditional(props) {
    // condition ? statement if true : statement if false
    return(
        <div>
            {/* <h1>navbar</h1>
            {props.isLoading === true ? <p>loading...</p> : <p>fully loaded</p>}
            <h1>footer</h1> */}
            <p>fully loaded</p>
        </div>
    )
    // if (props.isLoading === true) {
    //     return (
    //         <p>loading...</p>
    //     )
    // } else {
    //     return(
    //         <p>fully loaded</p>
    //     )   
    // }
}

export default Conditional