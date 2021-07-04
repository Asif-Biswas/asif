import React, { Component } from 'react';
import { FaBootstrap, FaCss3Alt, FaHtml5, FaPython, FaReact, FaSearch } from 'react-icons/fa';
import { SiDjango, SiRedux } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io';

class Skills extends Component {
    render() {
        return (
            <div className='white' style={{transform:'rotate(5deg)', width:'130vw', marginLeft:'-64px', paddingBottom:'66px'}}>
                <div style={{transform:'rotate(-5deg)', marginLeft:'64px', width:'100vw'}}>
                    <div className='project-margin'>
                    <br/>
                        <h2><span style={{fontSize:'min(5vw,36px)', borderBottom:'solid 5px rgb(0,120,252)', color:'rgb(0,120,252)', fontWeight:'bold'}} className='padding'>Technologies I familiar with:</span></h2>
                        <br/>
                        <div>
                            <div style={{margin:'8px 16px'}}>
                                <div style={{display:'flex', marginBottom:'8px'}}>
                                    <div>
                                        <FaPython style={{fontSize:'min(5.5vw,25px)', color:'rgb(0,150,255)', marginBottom:'-4px'}}/>
                                        <span style={{fontSize:'min(4.6vw,23px)', color:'rgb(0,150,255)'}}> Python</span>
                                    </div>
                                </div>
                                <div className='border border-blue' style={{maxWidth:'700px', marginRight:'80px', marginLeft:'16px'}}>
                                    <div className='blue' style={{width:'70%', height:'5px', textAlign:'right'}}><span style={{color:'white'}}></span></div>
                                </div>
                            </div>

                            <div style={{margin:'8px 16px'}}>
                                <div style={{display:'flex', marginBottom:'8px'}}>
                                    <div>
                                        <SiDjango style={{fontSize:'min(5.5vw,25px)', color:'rgb(0,150,255)', marginBottom:'-4px'}}/>
                                        <span style={{fontSize:'min(4.6vw,23px)', color:'rgb(0,150,255)'}}> Django</span>
                                    </div>
                                </div>
                                <div className='border border-blue' style={{maxWidth:'700px', marginRight:'80px', marginLeft:'16px'}}>
                                    <div className='blue' style={{width:'80%', height:'5px', textAlign:'right'}}><span style={{color:'blue'}}></span></div>
                                </div>
                            </div>

                            <div style={{margin:'8px 16px'}}>
                                <div style={{display:'flex', marginBottom:'8px'}}>
                                    <div>
                                        <IoLogoJavascript style={{fontSize:'min(5.5vw,25px)', color:'rgb(0,150,255)', marginBottom:'-4px'}}/>
                                        <span style={{fontSize:'min(4.6vw,23px)', color:'rgb(0,150,255)'}}> Javascript</span>
                                    </div>
                                </div>
                                <div className='border border-blue' style={{maxWidth:'700px', marginRight:'80px', marginLeft:'16px'}}>
                                    <div className='blue' style={{width:'70%', height:'5px', textAlign:'right'}}><span style={{color:'blue'}}></span></div>
                                </div>
                            </div>

                            <div style={{margin:'8px 16px'}}>
                                <div style={{display:'flex', marginBottom:'8px'}}>
                                    <div>
                                        <FaReact className='spin' style={{fontSize:'min(5.5vw,25px)', color:'rgb(0,150,255)', marginBottom:'-4px'}}/>
                                        <span style={{fontSize:'min(4.6vw,23px)', color:'rgb(0,150,255)'}}> Reactjs</span>
                                    </div>
                                </div>
                                <div className='border border-blue' style={{maxWidth:'700px', marginRight:'80px', marginLeft:'16px'}}>
                                    <div className='blue' style={{width:'80%', height:'5px', textAlign:'right'}}><span style={{color:'blue'}}></span></div>
                                </div>
                            </div>

                            <div style={{margin:'8px 16px'}}>
                                <div style={{display:'flex', marginBottom:'8px'}}>
                                    <div>
                                        <SiRedux style={{fontSize:'min(5.5vw,25px)', color:'rgb(0,150,255)', marginBottom:'-4px'}}/>
                                        <span style={{fontSize:'min(4.6vw,23px)', color:'rgb(0,150,255)'}}> Redux</span>
                                    </div>
                                </div>
                                <div className='border border-blue' style={{maxWidth:'700px', marginRight:'80px', marginLeft:'16px'}}>
                                    <div className='blue' style={{width:'70%', height:'5px', textAlign:'right'}}><span style={{color:'blue'}}></span></div>
                                </div>
                            </div>

                            <div style={{margin:'8px 16px'}}>
                                <div style={{display:'flex', marginBottom:'8px'}}>
                                    <div>
                                        <FaBootstrap style={{fontSize:'min(5.5vw,25px)', color:'rgb(0,150,255)', marginBottom:'-4px'}}/>
                                        <span style={{fontSize:'min(4.6vw,23px)', color:'rgb(0,150,255)'}}> Bootstrap</span>
                                    </div>
                                </div>
                                <div className='border border-blue' style={{maxWidth:'700px', marginRight:'80px', marginLeft:'16px'}}>
                                    <div className='blue' style={{width:'65%', height:'5px', textAlign:'right'}}><span style={{color:'blue'}}></span></div>
                                </div>
                            </div>

                            <div style={{margin:'8px 16px'}}>
                                <div style={{display:'flex', marginBottom:'8px'}}>
                                    <div>
                                        <FaCss3Alt style={{fontSize:'min(5.5vw,25px)', color:'rgb(0,150,255)', marginBottom:'-4px'}}/>
                                        <span style={{fontSize:'min(4.6vw,23px)', color:'rgb(0,150,255)'}}> CSS3</span>
                                    </div>
                                </div>
                                <div className='border border-blue' style={{maxWidth:'700px', marginRight:'80px', marginLeft:'16px'}}>
                                    <div className='blue' style={{width:'85%', height:'5px', textAlign:'right'}}><span style={{color:'blue'}}></span></div>
                                </div>
                            </div>

                            <div style={{margin:'8px 16px'}}>
                                <div style={{display:'flex', marginBottom:'8px'}}>
                                    <div>
                                        <FaHtml5 style={{fontSize:'min(5.5vw,25px)', color:'rgb(0,150,255)', marginBottom:'-4px'}}/>
                                        <span style={{fontSize:'min(4.6vw,23px)', color:'rgb(0,150,255)'}}> HTML5</span>
                                    </div>
                                </div>
                                <div className='border border-blue' style={{maxWidth:'700px', marginRight:'80px', marginLeft:'16px'}}>
                                    <div className='blue' style={{width:'90%', height:'5px', textAlign:'right'}}><span style={{color:'blue'}}></span></div>
                                </div>
                            </div>

                            <div style={{margin:'8px 16px'}}>
                                <div style={{display:'flex', marginBottom:'8px'}}>
                                    <div>
                                        <FaReact style={{fontSize:'min(5.5vw,25px)', color:'rgb(0,150,255)', marginBottom:'-4px'}}/>
                                        <span style={{fontSize:'min(4.6vw,23px)', color:'rgb(0,150,255)'}}> React Native</span>
                                    </div>
                                </div>
                                <div className='border border-blue' style={{maxWidth:'700px', marginRight:'80px', marginLeft:'16px'}}>
                                    <div className='blue' style={{width:'45%', height:'5px', textAlign:'right'}}><span style={{color:'blue'}}></span></div>
                                </div>
                            </div>

                            <div style={{margin:'8px 16px'}}>
                                <div style={{display:'flex', marginBottom:'8px'}}>
                                    <div>
                                        <FaSearch style={{fontSize:'min(5.5vw,25px)', color:'rgb(0,150,255)', marginBottom:'-4px'}}/>
                                        <span style={{fontSize:'min(4.6vw,23px)', color:'rgb(0,150,255)'}}> Googling😜</span>
                                    </div>
                                </div>
                                <div className='border border-blue' style={{maxWidth:'700px', marginRight:'80px', marginLeft:'16px'}}>
                                    <div className='blue' style={{width:'80%', height:'5px', textAlign:'right'}}><span style={{color:'blue'}}></span></div>
                                </div>
                            </div>

                            <br/><br/>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;