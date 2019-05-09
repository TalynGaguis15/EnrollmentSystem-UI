import React,{ Component } from 'react';
import '../css/body.css';
import stilogo from '../images/stilogo.png';


export default class Logo extends Component{
    render(){
        return(
                <article>
                 <image className="image" src={stilogo} alt="Logo"></image>
                </article>
        );
    }
}
