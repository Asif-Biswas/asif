import React, { Component } from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

class Contact extends Component {
    constructor() {
        super()
        this.state={
            href: '',
            subject:'',
            body:'',
        }
    }
    sendMail=()=>{
        this.setState({href: 'mailto:asifbiswas85@gmail.com?subject='+this.state.subject+'&body='+this.state.body})
    }

    inputSubject=(e)=>{
        this.setState({subject: e.target.value})
    }

    inputBody=(e)=>{
        this.setState({body: e.target.value})
    }
    render() {
        return (
            <div style={{marginTop:'-64px', width:'100vw'}}>
                <div className='bgc' style={{transform:'rotate(5deg)', width:'120vw', paddingBottom:'50px', zIndex:'2', marginLeft:'-16px'}}>
                    <div className='' style={{transform:'rotate(-5deg)', width:'100vw'}}>
                        <br/><br/>
                        <div style={{textAlign:'center', color:'white', marginLeft:'min(10vw, 64px)'}}>
                            <h1 className='fontFamily' style={{fontSize:'min(10vw,50px)'}}>Contact me</h1>
                            <div style={{display:'flex', justifyContent:'center'}}>
                                <p className='fontFamily' style={{fontSize:'min(6vw,30px)', opacity:'.7', maxWidth:'700px', textAlign:'justify', textAlignLast:'center'}}>If you’d like to chat about a project, please fill in the form below and I’ll get back within 1-2 days.</p>
                            </div>
                        </div>
                        <br/><br/>

                        
                    </div>
                </div>

                <br/><br/><br/>

                <div className='about-margin'>
                    <div className='card-2 light-grey border-blue' style={{maxWidth:'800px', margin:'auto', borderTop:'5px solid', borderRadius:'10px'}}>
                        <div style={{padding:'min(10vw, 64px) 16px', textAlign:'center'}}>
                            <h3 style={{fontSize:'min(6vw,32px)', color:'gray'}}>Status</h3>
                            <h1 style={{fontSize:'min(7vw,40px)'}} className='fontFamily text-blue'>Available</h1>
                            <p style={{fontSize:'min(5vw,26px)'}} className='fontFamily text-grey'>I’m currently taking on new projects!</p>
                        </div>
                    </div>
                </div>

                <br/><br/>

                <div className='about-margin'>
                    <div style={{display:'flex'}} className='hide-small'>
                        <div style={{width:'50%', marginRight:'4px'}}>
                            <label style={{fontSize:'26px', color:'gray'}}>Name</label>
                            <input type='text' style={{width:'100%', height:'58px', borderRadius:'5px', border:'solid 2px grey', backgroundColor:'rgb(240,240,240)', paddingLeft:'8px', fontSize:'24px', color:'grey'}} /> <br/><br/>
                        </div>
                        <div style={{width:'50%', marginLeft:'4px'}}>
                            <label style={{fontSize:'26px', color:'gray'}}>Email</label>
                            <input type='email' style={{width:'100%', height:'58px', borderRadius:'5px', border:'solid 2px grey', backgroundColor:'rgb(240,240,240)', paddingLeft:'8px', fontSize:'24px', color:'grey'}} /> <br/><br/>
                        </div>
                    </div>
                    <div className='hide-large hide-medium'>
                        <div>
                            <label style={{fontSize:'26px', color:'gray'}}>Name</label>
                            <input type='text' style={{width:'100%', height:'58px', borderRadius:'5px', border:'solid 2px grey', backgroundColor:'rgb(240,240,240)', paddingLeft:'8px', fontSize:'24px', color:'grey'}} /> <br/><br/>
                        </div>
                        <div>
                            <label style={{fontSize:'26px', color:'gray'}}>Email</label>
                            <input type='email' style={{width:'100%', height:'58px', borderRadius:'5px', border:'solid 2px grey', backgroundColor:'rgb(240,240,240)', paddingLeft:'8px', fontSize:'24px', color:'grey'}} /> <br/><br/>
                        </div>
                    </div>

                    <label style={{fontSize:'26px', color:'gray'}}>Subject</label>
                    <input onChange={this.inputSubject} type='text' style={{width:'100%', height:'58px', borderRadius:'5px', border:'solid 2px grey', backgroundColor:'rgb(240,240,240)', paddingLeft:'8px', fontSize:'24px', color:'grey'}} /> <br/><br/>

                    <label style={{fontSize:'26px', color:'gray'}}>How can I help?</label>
                    <textarea onChange={this.inputBody} style={{width:'100%', height:'140px', borderRadius:'5px', border:'solid 2px grey', backgroundColor:'rgb(240,240,240)', paddingLeft:'8px', fontSize:'24px', color:'grey'}} required></textarea> <br/><br/>

                    <div className='hide-small' style={{display:'flex', justifyContent:'center'}}>
                    <a onClick={this.sendMail} href={this.state.href} style={{textDecoration:'none'}}><button className='button blue' style={{width:'100%', height:'60px', borderRadius:'50px', maxWidth:'400px', fontSize:'24px', margin:'0 24px'}}>Send Message</button></a>
                    </div>
                    <a onClick={this.sendMail} href={this.state.href} style={{textDecoration:'none'}}><button className='button blue hide-large hide-medium' style={{width:'100%', height:'60px', borderRadius:'10px', fontSize:'24px'}}>Send Message</button></a>
                </div>

                <br/><br/>

                <div className='about-margin'>
                    <div style={{display:'flex', justifyContent:'space-around'}}>
                        <a href="https://github.com/Asif-Biswas" target="_blank" rel="noreferrer">
                            <FaGithub className='hover-text-grey' style={{fontSize:'min(10vw, 64px)', color:'rgb(19, 119, 233)'}}/>
                        </a>
                        <a href="">
                            <FaFacebook className='hover-text-grey' style={{fontSize:'min(10vw, 64px)', color:'rgb(19, 119, 233)'}}/>
                        </a>
                        <a href="https://www.instagram.com/asif.biswas/" target="_blank" rel="noreferrer">
                            <FaInstagram className='hover-text-grey' style={{fontSize:'min(10vw, 64px)', color:'rgb(19, 119, 233)'}}/>
                        </a>
                    
                        <a href="https://www.linkedin.com/in/asif-biswas-8131431ab/" target="_blank" rel="noreferrer">
                            <FaLinkedin className='hover-text-grey' style={{fontSize:'min(10vw, 64px)', color:'rgb(19, 119, 233)'}}/>
                        </a>
                        <a href="">
                            <FaTwitter className='hover-text-grey' style={{fontSize:'min(10vw, 64px)', color:'rgb(19, 119, 233)'}}/>
                        </a>
                    </div>
                </div>

                <br/><br/><br/>

                <hr/>
                <div>
                    <br/>
                    <p style={{textAlign:'center', color:'grey', opacity:'.6'}}>Designed & Built by Asif</p>
                    <br/>
                </div>
            </div>
        );
    }
}

export default Contact;