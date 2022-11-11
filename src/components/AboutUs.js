import React from "react";
import styled from "styled-components";

const Div = styled.div`
    background-color: black;
    color: grey;
    display: flex;
    justify-content: space-between;
`
const Flexchild = styled.div`
`

function AboutUs() {
    return(
        <Div>
            <Flexchild>
                <h2>About Us</h2>
                <p>The Bravo Library is here<br/> to avail programming<br/> E-books</p>
            </Flexchild>
            <Flexchild>
                <h3>Contact Us</h3>
                <p>+254 796 919 370</p>
            </Flexchild>
        </Div>
    )
}

export default AboutUs;