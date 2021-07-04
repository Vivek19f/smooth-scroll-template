import {Component} from 'react'
import { ServicesCard, ServicesContainer, ServicesH1, ServicesIcon, ServicesP, ServicesWrapper } from "./ServiceElements";
import Icon1 from '../../images/part-load.svg'
import Icon2 from '../../images/parcel2.svg'
import Icon3 from '../../images/door-to-door.svg'
import Icon4 from '../../images/time-bond1.svg'
import Slider from 'react-slick'

export default class Services extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        return ( 
            <ServicesContainer id="services">
                <ServicesH1>Our Services</ServicesH1>
                <ServicesWrapper>
                    
                        <ServicesCard>
                            <ServicesIcon src={Icon1}/>
                            <ServicesP>Part-load <br/>Services</ServicesP>
                        </ServicesCard>
                        <ServicesCard>
                            <ServicesIcon src={Icon2}/>
                            <ServicesP>Parcel <br/>Services</ServicesP>
                        </ServicesCard>
                        <ServicesCard>
                            <ServicesIcon src={Icon3}/>
                            <ServicesP>Door to Door Services</ServicesP>
                        </ServicesCard>
                      
                 
                </ServicesWrapper>
            </ServicesContainer>
         );
    
    }
}
