import React from 'react';
import styled from 'styled-components'

function Footer(){
    return(
        <FooterContainer className="main-footer"> 
            <div className="footer-middle"> 
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <h4>Usefull yt channel</h4>
                            <ul className="list-unstyled">
                                <li> <a href="https://www.youtube.com/channel/UCsBjURrPoezykLs9EqgamOA"> Fireship</a> </li>
                                <li> <a href="https://www.youtube.com/user/gotreehouse">Tree House</a> </li>
                                <li> <a href="https://www.youtube.com/user/learncodeacademy">learnCodeAcademy</a> </li>
                                <li> <a href="https://www.youtube.com/user/thenewboston">The new boston</a> </li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h4>Usefull websites</h4>
                            <ul className="list-unstyled">
                                <li> <a href="https://www.khanacademy.org"> Khan Academy</a> </li>
                                <li> <a href="https://www.pluralsight.com/codeschool">Code school</a> </li>
                                <li> <a href="https://openclassrooms.com/fr/">Open classroom</a> </li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h4>Contact</h4>
                            <ul className="list-unstyled">
                                <li> <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjMq9fJkfbuAhWMERQKHWNkBWUQFjAAegQIARAD&url=https%3A%2F%2Ffr.linkedin.com%2Fin%2Fkaci-allaoua-26a830175&usg=AOvVaw0lj--hY8aW6Tk0dcdOyNMh">LInkedin</a> </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p className="text-xs-center"> </p>
                        &copy;{new Date().getFullYear()} Kaci's website all Rights Reserved.
                    </div>
                </div>
            </div>
        </FooterContainer>
    )
}

export default Footer;

const FooterContainer = styled.footer`
    .footer-middle {
        background : var(--mainDark);
        padding-top : 2rem; 
        color : var(--mainWhite)
    }

    .footer-bottom {
        padding-top : 2rem;
        padding-bottom : 2rem;
    }

    ul li a {
        color : var(--mainGrey);
    } 

    ul li a:hover {
        color : var(--mainLightGrey);
    } 
`;