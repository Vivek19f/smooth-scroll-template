import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FooterConatianer, FooterLinksContainer, FooterWrap,FooterLinksWrapper,FooterLinksItems, FooterLink, FooterLinkTitle, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from "./FooterElements";
import { animateScroll as scroll } from 'react-scroll';
const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return ( 
        <FooterConatianer>
            <FooterWrap>
                <FooterLinksContainer>
                   <FooterLinksWrapper>
                       <FooterLinksItems>
                           <FooterLinkTitle>About Us</FooterLinkTitle>
                           <FooterLink to="/signin">Testimonials</FooterLink>
                           <FooterLink to="/signin">Careers</FooterLink>
                           <FooterLink to="/signin">Investors</FooterLink>
                           <FooterLink to="/signin">Terms and Services</FooterLink>
                       </FooterLinksItems>
                       <FooterLinksItems>
                           <FooterLinkTitle>Contact US</FooterLinkTitle>
                           <FooterLink to="/signin">Testimonials</FooterLink>
                           <FooterLink to="/signin">Careers</FooterLink>
                           <FooterLink to="/signin">Investors</FooterLink>
                           <FooterLink to="/signin">Terms and Services</FooterLink>
                       </FooterLinksItems>
                   </FooterLinksWrapper>
                   <FooterLinksWrapper>
                       <FooterLinksItems>
                           <FooterLinkTitle>Videos</FooterLinkTitle>
                           <FooterLink to="/signin">Testimonials</FooterLink>
                           <FooterLink to="/signin">Careers</FooterLink>
                           <FooterLink to="/signin">Investors</FooterLink>
                           <FooterLink to="/signin">Terms and Services</FooterLink>
                       </FooterLinksItems>
                       <FooterLinksItems>
                           <FooterLinkTitle>Social Media</FooterLinkTitle>
                           <FooterLink to="/signin">Testimonials</FooterLink>
                           <FooterLink to="/signin">Careers</FooterLink>
                           <FooterLink to="/signin">Investors</FooterLink>
                           <FooterLink to="/signin">Terms and Services</FooterLink>
                       </FooterLinksItems>
                   </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>IGC</SocialLogo>
                        <WebsiteRights>IGC &#169; {new Date().getFullYear()} All Rights Reserved</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                                <FaYoutube/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterConatianer>
     );
}
 
export default Footer;