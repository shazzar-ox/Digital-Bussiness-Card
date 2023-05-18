import React from 'react'
import twitter from './assets/twitter.png'
import facebook from './assets/facebook.png'
import instagram from './assets/instagram.png'
import github from './assets/github.png'

const Footer = ()=> {
    return(
        
        <footer className='foot-div'>
            <ul>
                <li>
                <a href="https://twitter.com/The_First_Elder"><img src={twitter} alt="" /></a>
                </li>
                <li>
                <a href="https://web.facebook.com/abikoye.mayowa.7"><img src={facebook} alt="" /></a>
                </li>
                <li>
                <a href=""><img src={instagram} alt="" /></a>
                </li>
                <li>
                <a href="https://github.com/shazzar-ox"> <img src={github} alt="" /></a>  
                </li>
            </ul>                      
        </footer>
    
    )
}

export default Footer