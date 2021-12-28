import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function About(props) {
    let mystyle = {
        backgroundColor: props.mode === 'dark' ? 'black' : 'white',
        color: props.mode === 'dark' ? 'white' : 'black'
    }
    return (
        <div className="container my-4" style={mystyle}>
            <h1>About Us</h1>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptatibus illum sit amet delectus facilis! Quibusdam explicabo culpa nobis voluptas repudiandae placeat commodi fugiat quasi! Cum quibusdam dignissimos error autem.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={mystyle}>
                            Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda temporibus voluptatum architecto id quis, voluptate odit quod soluta at alias maiores distinctio qui saepe, cupiditate quisquam. Corporis quos iste voluptatibus.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={mystyle}>
                            Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ullam tempora ex eligendi? Cum libero consectetur incidunt, nesciunt similique cupiditate dicta hic modi sequi eum sed ex quidem exercitationem possimus!
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
