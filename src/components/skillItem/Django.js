import React, { Component } from 'react';
import { SiDjango } from 'react-icons/si';

class Django extends Component {
    render() {
        return (
            <div style={{width:'28%', height:'28%', position:'relative'}}>
                <div style={{overflow:'hidden', width:'100%', borderRadius:'50%'}}>
                    <div style={{display:'flex', width:'100%'}}>
                        <div style={{width:'50%', paddingBottom:'50%', position:'relative'}}>
                            <div style={{display:'flex', position:'absolute', width:'100%', top:'0'}}>
                                <div style={{width:'50%', paddingBottom:'50%', backgroundColor:'darkgreen'}}></div>
                                <div style={{width:'50%', paddingBottom:'50%', backgroundColor:'darkgreen'}}></div>
                            </div>
                            <div style={{display:'flex', position:'absolute', width:'100%', top:'50%'}}>
                                <div style={{width:'50%', paddingBottom:'50%', backgroundColor:'darkgreen'}}></div>
                                <div style={{width:'50%', paddingBottom:'50%', backgroundColor:'darkgreen'}}></div>
                            </div>
                        </div>
                        <div style={{width:'50%', paddingBottom:'50%', position:'relative'}}>
                            <div style={{display:'flex', position:'absolute', width:'100%', top:'0'}}>
                                <div style={{width:'50%', paddingBottom:'50%', backgroundColor:'lightGray'}}></div>
                                <div style={{width:'50%', paddingBottom:'50%', backgroundColor:'lightGray'}}></div>
                            </div>
                            <div style={{display:'flex', position:'absolute', width:'100%', top:'50%'}}>
                                <div style={{width:'50%', paddingBottom:'50%', backgroundColor:'darkgreen'}}></div>
                                <div style={{width:'50%', paddingBottom:'50%', backgroundColor:'darkgreen'}}></div>
                            </div>
                        </div>
                    </div>
                    <div style={{display:'flex'}}>
                        <div style={{width:'50%', paddingBottom:'50%', position:'relative'}}>
                            <div style={{display:'flex', position:'absolute', width:'100%', top:'0'}}>
                                <div style={{width:'50%', paddingBottom:'50%', backgroundColor:'darkgreen'}}></div>
                                <div style={{width:'50%', paddingBottom:'50%', backgroundColor:'darkgreen'}}></div>
                            </div>
                            <div style={{display:'flex', position:'absolute', width:'100%', top:'50%'}}>
                                <div style={{width:'50%', paddingBottom:'50%', backgroundColor:'darkgreen'}}></div>
                                <div style={{width:'50%', paddingBottom:'50%', backgroundColor:'darkgreen'}}></div>
                            </div>
                        </div>
                        <div style={{width:'50%', paddingBottom:'50%', position:'relative'}}>
                        <div style={{display:'flex', position:'absolute', width:'100%', top:'0'}}>
                                <div style={{width:'50%', paddingBottom:'50%', backgroundColor:'darkgreen'}}></div>
                                <div style={{width:'50%', paddingBottom:'50%', backgroundColor:'darkgreen'}}></div>
                            </div>
                            <div style={{display:'flex', position:'absolute', width:'100%', top:'50%'}}>
                                <div style={{width:'50%', paddingBottom:'50%', backgroundColor:'darkgreen'}}></div>
                                <div style={{width:'50%', paddingBottom:'50%', backgroundColor:'darkgreen'}}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="progress-bar-padding" style={{position:'absolute', top: 0, left: 0, width:'100%', height:'100%', borderRadius:'50%'}}>
                    <div style={{backgroundColor:'white', width:'100%', height:'100%', borderRadius:'50%', display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <div>
                        <div style={{display:'flex', justifyContent:'center'}}>
                            <SiDjango style={{fontSize:'10vw', color:'darkgreen'}}/></div>
                            <div className="progress-bar-fontsize" style={{textAlign:'center', color:'darkgreen'}}>Django</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Django;