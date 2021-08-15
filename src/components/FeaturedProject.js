import React, { Component } from 'react';
//import fbh from '../images/fbh.jpg';
import fb from '../images/fb.jpg';
import ig from '../images/ig.jpg';
import orangered from '../images/orangered.jpg';

class FeaturedProject extends Component {
    render() {
        return (
            <div className='project-margin'>
                
                <br/><br/>
                <div className='project-item' style={{position:'relative'}}>
                    <div style={{}}>
                        <img style={{}} src={fb} alt='facebook_clone' width='100%'/>
                    </div>
                    <div className='item-details-l' style={{textAlign:'center'}}>
                        <br/>
                        <h3 style={{fontSize:'min(7vw,36px)', fontWeight:'bold', color:'rgb(0,120,255)'}}><span>Facebook clone</span></h3>
                        <p className='' style={{textAlign:'justify', color:'rgb(0,110,255)'}}>It was very hard to develop this full-stack project. I've used <b>Django (drf)</b> and <b>Reactjs</b> together to build this. Here you'll get all the basic features of Facebook. Almost every topic of Django and Reactjs are needed to complete this project.</p>
                        <br/>
                        <div style={{display:'flex', justifyContent:'center'}}>
                            <a style={{textDecoration:'none'}} href="https://github.com/Asif-Biswas/facebook-clone-backend" rel="noreferrer" title="https://github.com/Asif-Biswas/facebook-clone-backend" target="_blank"><span style={{borderRadius:'50px', padding:'16px 36px', minWidth:'140px', textAlign:'center', color:'rgb(0,140,255)'}} className='margin border border-blue hover-blue hover-shadow pointer'>Github</span></a>
                            <a style={{textDecoration:'none'}} href="https://fb-cln.herokuapp.com" target="_blank" title="fb-cln.herokuapp.com" rel="noreferrer"><span style={{borderRadius:'50px', padding:'16px 36px', minWidth:'140px', textAlign:'center', color:'rgb(0,140,255)'}} className='margin border border-blue hover-blue hover-shadow pointer'>Visit site</span></a>
                        </div>
                    </div>
                </div>

                <hr/>
                <br/>
                <div className='project-item2'>
                    <div style={{float:'right'}}>
                        <img style={{}} src={ig} alt='instagram' width='100%'/>
                    </div>

                    <div className='item-details-r' style={{textAlign:'center'}}>
                        <br/>
                        <h3 style={{fontSize:'min(7vw,36px)', fontWeight:'bold', color:'rgb(0,120,255)'}}><span>Instagram clone</span></h3>
                        <p className='' style={{textAlign:'justify', color:'rgb(0,110,255)'}}>Don't think that I've taken a screenshot from the real Instagram website. It's an Instagram clone. Yes, done by me. All the basic features of IG, you'll get here.<br/>Language/Framework used: <b>Django, Javascript </b>and<b> CSS.</b></p>
                        <br/>
                        <div style={{display:'flex', justifyContent:'center', paddingBottom:'8px'}}>
                            <a style={{textDecoration:'none'}} href="https://github.com/Asif-Biswas/instagram-clone" rel="noreferrer" title="https://github.com/Asif-Biswas/instagram-clone" target="_blank"><span style={{borderRadius:'50px', padding:'16px 36px', minWidth:'140px', textAlign:'center', color:'rgb(0,140,255)'}} className='margin border border-blue hover-blue hover-shadow pointer'>Github</span></a>
                            <a style={{textDecoration:'none'}} href="http://asifbiswas.pythonanywhere.com" target="_blank" title="http://asifbiswas.pythonanywhere.com" rel="noreferrer"><span style={{borderRadius:'50px', padding:'16px 36px', minWidth:'140px', textAlign:'center', color:'rgb(0,140,255)'}} className='margin border border-blue hover-blue hover-shadow pointer'>Visit site</span></a>
                        </div>
                    </div>
                </div>

                <hr/>
                <br/>

                <div className='project-item' style={{position:'relative'}}>
                    <div style={{}}>
                        <img style={{}} src={orangered} alt='fbd' width='100%'/>
                    </div>
                    <div className='item-details-l' style={{textAlign:'center'}}>
                        <br/>
                        <h3 style={{fontSize:'min(7vw,36px)', fontWeight:'bold', color:'rgb(0,120,255)'}}><span>OrangeRed (E-commerce)</span></h3>
                        <p className='' style={{textAlign:'justify', color:'rgb(0,110,255)'}}>Fully responsive, greate colour combination, well designed, full-stack E-commerce web app built with <b>Django (drf)</b>, <b>ReactJs</b>, <b>Redux</b> and CSS.</p>
                        <br/>
                        <div style={{display:'flex', justifyContent:'center'}}>
                            <a style={{textDecoration:'none'}} href="https://github.com/Asif-Biswas/orangered-e-commerce-frontend" rel="noreferrer" title="https://github.com/Asif-Biswas/orangered-e-commerce-frontend" target="_blank"><span style={{borderRadius:'50px', padding:'16px 36px', minWidth:'140px', textAlign:'center', color:'rgb(0,140,255)'}} className='margin border border-blue hover-blue hover-shadow pointer'>Github</span></a>
                            <a style={{textDecoration:'none'}} href="https://orangered.herokuapp.com" target="_blank" title="fb-cln.herokuapp.com" rel="noreferrer"><span style={{borderRadius:'50px', padding:'16px 36px', minWidth:'140px', textAlign:'center', color:'rgb(0,140,255)'}} className='margin border border-blue hover-blue hover-shadow pointer'>Visit site</span></a>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default FeaturedProject;