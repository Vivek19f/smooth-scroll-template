import { Button } from "../ButtonElements"
import { BtnWrap, Column1, Column2, Heading, Img, ImgWrap, InfoContainer, InfoRow, InfoWrapper, Subtitle, TextWrapper, TopLine } from "./InfoElements2"


const Discover = (props) => {
    return ( 
        <>
            <InfoContainer id={props.id} lightBg={props.lightBg} >
                <InfoWrapper>
                    <InfoRow imgStart={props.imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{props.topLine}</TopLine>
                                <Heading lightText={props.lightText}>{props.headline}</Heading>
                                <Subtitle darkText={props.darkText}>{props.description}</Subtitle>
                                <BtnWrap>
                                    <Button 
                                        to='/' 
                                        primary={props.primary ? 1:0} 
                                        dark={props.dark ? 1:0}
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        offset={-80}
                                    >{props.buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={props.img.default} alt={props.alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
     );
}
 
export default Discover;