import { ServicesCard, ServicesContainer, ServicesH1, ServicesIcon, ServicesP, ServicesWrapper } from "./ServiceElements";
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-1.svg'
import Icon3 from '../../images/svg-1.svg'
const Services = () => {
    return ( 
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesP>We help reducse your fee and increas revenue overall</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesP>We help reducse your fee and increas revenue overall</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesP>We help reducse your fee and increas revenue overall</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
     );
}
 
export default Services;