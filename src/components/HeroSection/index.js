import { ArroForward, ArrowRight, HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from "./HeroElemnts";
import Video from '../../videos/video1.mp4'
import { useState } from "react";
import { Button } from "../ButtonElements";

const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () =>{
        setHover(!hover)
    }
    return ( 
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Goods Transportation Made Easy</HeroH1>
                <HeroP>
                    Get Quote for booking today and get exciting offers 
                    on next payment
                </HeroP>
                <HeroBtnWrapper>
                    <Button 
                        to='home' 
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'
                    >
                        Get Started {hover ? <ArroForward/>: <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
     );
}
 
export default HeroSection;