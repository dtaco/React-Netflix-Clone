import React from 'react';
import styled from 'styled-components';
import { BsArrowLeft } from 'react-icons/bs';
import video from '../assets/video.mp4';


export default function Player(props) {
    

    return (
        <Container>
            <div className="player">
                <div className="back">
                    <BsArrowLeft/>
                </div>
                <video src={video} autoPlay loop controls muted>
                    
                </video>
            </div>
        </Container>
    )
}

const Container = styled.div`

`
