import React from 'react'
import AnimatedNumber from 'react-animated-number'
function Header() {
    return (
        <div className='body'>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <AnimatedNumber 
                            value = {6844}
                            style = {
                                {
                                    fontSize: 25
                                }
                            }
                            duration={500}
                            formatValue={n=>n.toFixed(0)}
                        />
                        <p>Riders</p>
                    </div>

                    <div className="col-sm">
                        <AnimatedNumber 
                            value = {4000}
                            style = {
                                {
                                    fontSize: 25
                                }
                            }
                            formatValue={n=>n.toFixed(0)}
                        />
                        <p>Rides</p>
                    </div>

                    <div className="col-sm">
                        <AnimatedNumber 
                            value = {10000}
                            style = {
                                {
                                    fontSize: 25
                                }
                            }
                            formatValue={n=>n.toFixed(0)}
                        />
                        <p>Distance travelled(Kms)</p>
                    </div>
                </div>
            </div>

            <div className="container1">
                <h2>Dont believe us? Hear it from our customers.</h2>
            </div>

        </div>
    )
}

export default Header
