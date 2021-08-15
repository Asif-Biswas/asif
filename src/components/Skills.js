import React, { Component } from 'react';
// import { FaBootstrap, FaCss3Alt, FaHtml5, FaPython, FaReact, FaSearch } from 'react-icons/fa';
// import { SiDjango, SiRedux } from 'react-icons/si';
// import { IoLogoJavascript } from 'react-icons/io';
import Python from './skillItem/Python';
import Django from './skillItem/Django';
import Javascript from './skillItem/Javascript';
import ReactSkill from './skillItem/ReactSkill';
import ReduxSkill from './skillItem/ReduxSkill';
import CSSSkill from './skillItem/CSSSkill';
import Bootstrap from './skillItem/Bootstrap';
import Html from './skillItem/Html';
import Googling from './skillItem/Googling';

class Skills extends Component {
    render() {
        return (
            <div className='white' style={{transform:'rotate(5deg)', width:'130vw', marginLeft:'-64px', paddingBottom:'66px'}}>
                <div style={{transform:'rotate(-5deg)', marginLeft:'64px', width:'100vw'}}>
                    <div className='project-margin'>
                    
                        <h2><span style={{fontSize:'min(7vw,36px)', borderBottom:'double 3px rgb(0,120,252)', color:'rgb(0,120,252)', fontWeight:'bold'}} className='padding'>My Skills:</span></h2>
                        <br/>
                        <div>
                            {/* <div style={{margin:'8px 16px'}}>
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
                            </div> */}

                            

                            <br/>

                            {/* <div style={{width:'200px', height:'200px', position:'relative'}}>
                                <div style={{borderRadius:'50%', overflow:'hidden', width:'100%'}}>
                                    <div style={{display:'flex', width:'100%'}}>
                                        <div style={{width:'50%', paddingBottom:'50%', backgroundColor:'lightGrey'}}></div>
                                        <div style={{width:'50%', paddingBottom:'50%', backgroundColor:'red'}}></div>
                                    </div>
                                    <div style={{display:'flex'}}>
                                        <div style={{width:'50%', paddingBottom:'50%', backgroundColor:'red'}}></div>
                                        <div style={{width:'50%', paddingBottom:'50%', backgroundColor:'red'}}></div>
                                    </div>
                                </div>
                                <div style={{position:'absolute', top: 0, left: 0, width:'100%', height:'100%', padding:'12px', borderRadius:'50%'}}>
                                    <div style={{backgroundColor:'white', width:'100%', height:'100%', borderRadius:'50%'}}></div>
                                </div>
                            </div> */}


                            <div className="project-margin" style={{display:'flex', justifyContent:'space-around'}}>
                                <Python/>
                                <Javascript/>
                                <Django/>
                            </div>
                            <br/>
                            <div className="project-margin" style={{display:'flex', justifyContent:'space-around'}}>
                                <ReactSkill/>
                                <ReduxSkill/>
                                <CSSSkill/>
                            </div>
                            <br/>
                            <div className="project-margin" style={{display:'flex', justifyContent:'space-around'}}>
                                <Bootstrap/>
                                <Html/>
                                <Googling/>
                            </div>
                                
                                {/* <div style={{width:'25%', height:'25%', position:'relative'}}>
                                    <div style={{overflow:'hidden', width:'100%', borderRadius:'50%'}}>
                                        <div style={{display:'flex', width:'100%'}}>
                                            <div style={{width:'50%', paddingBottom:'50%', position:'relative'}}>
                                                <div style={{display:'flex', position:'absolute', width:'100%', top:'0'}}>
                                                    <div style={{width:'50%', paddingBottom:'50%', backgroundColor:'lightGrey'}}></div>
                                                    <div style={{width:'50%', paddingBottom:'50%', backgroundColor:'lightGrey'}}></div>
                                                </div>
                                                <div style={{display:'flex', position:'absolute', width:'100%', top:'50%'}}>
                                                    <div style={{width:'50%', paddingBottom:'50%', backgroundColor:'red'}}></div>
                                                    <div style={{width:'50%', paddingBottom:'50%', backgroundColor:'red'}}></div>
                                                </div>
                                            </div>
                                            <div style={{width:'50%', paddingBottom:'50%', position:'relative'}}>
                                                <div style={{display:'flex', position:'absolute', width:'100%', top:'0'}}>
                                                    <div style={{width:'50%', paddingBottom:'50%', backgroundColor:'lightGrey'}}></div>
                                                    <div style={{width:'50%', paddingBottom:'50%', backgroundColor:'lightGrey'}}></div>
                                                </div>
                                                <div style={{display:'flex', position:'absolute', width:'100%', top:'50%'}}>
                                                    <div style={{width:'50%', paddingBottom:'50%', backgroundColor:'red'}}></div>
                                                    <div style={{width:'50%', paddingBottom:'50%', backgroundColor:'red'}}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{display:'flex'}}>
                                            <div style={{width:'50%', paddingBottom:'50%', position:'relative'}}>
                                                <div style={{display:'flex', position:'absolute', width:'100%', top:'0'}}>
                                                    <div style={{width:'50%', paddingBottom:'50%', backgroundColor:'lightGrey'}}></div>
                                                    <div style={{width:'50%', paddingBottom:'50%', backgroundColor:'lightGrey'}}></div>
                                                </div>
                                                <div style={{display:'flex', position:'absolute', width:'100%', top:'50%'}}>
                                                    <div style={{width:'50%', paddingBottom:'50%', backgroundColor:'red'}}></div>
                                                    <div style={{width:'50%', paddingBottom:'50%', backgroundColor:'red'}}></div>
                                                </div>
                                            </div>
                                            <div style={{width:'50%', paddingBottom:'50%', position:'relative'}}>
                                            <div style={{display:'flex', position:'absolute', width:'100%', top:'0'}}>
                                                    <div style={{width:'50%', paddingBottom:'50%', backgroundColor:'lightGrey'}}></div>
                                                    <div style={{width:'50%', paddingBottom:'50%', backgroundColor:'lightGrey'}}></div>
                                                </div>
                                                <div style={{display:'flex', position:'absolute', width:'100%', top:'50%'}}>
                                                    <div style={{width:'50%', paddingBottom:'50%', backgroundColor:'red'}}></div>
                                                    <div style={{width:'50%', paddingBottom:'50%', backgroundColor:'red'}}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="progress-bar-padding" style={{position:'absolute', top: 0, left: 0, width:'100%', height:'100%', borderRadius:'50%'}}>
                                        <div style={{backgroundColor:'white', width:'100%', height:'100%', borderRadius:'50%', display:'flex', justifyContent:'center', alignItems:'center'}}>
                                            <div>
                                                <FaPython style={{fontSize:'10vw', color:'red'}}/>
                                                <div className="progress-bar-fontsize" style={{textAlign:'center', color:'red'}}>Python</div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}

                                
                            


                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;