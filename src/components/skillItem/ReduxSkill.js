import React, { Component } from 'react';
import { SiRedux } from 'react-icons/si';

class ReduxSkill extends Component {
    render() {
        return (
            <div style={{width:'28%', height:'28%', position:'relative'}}>
                <div style={{overflow:'hidden', width:'100%', borderRadius:'50%'}}>
                    <div style={{display:'flex', width:'100%'}}>
                        <div style={{width:'50%', paddingBottom:'50%', position:'relative'}}>
                            <div style={{display:'flex', position:'absolute', width:'100%', top:'0'}}>
                                <div style={{width:'50%', paddingBottom:'50%', backgroundColor:'lightGrey'}}></div>
                                <div style={{width:'50%', paddingBottom:'50%', backgroundColor:'lightGrey'}}></div>
                            </div>
                            <div style={{display:'flex', position:'absolute', width:'100%', top:'50%'}}>
                                <div style={{width:'50%', paddingBottom:'50%', backgroundColor:'lightGrey'}}></div>
                                <div style={{width:'50%', paddingBottom:'50%', backgroundColor:'rgb(174, 21, 212)'}}></div>
                            </div>
                        </div>
                        <div style={{width:'50%', paddingBottom:'50%', position:'relative'}}>
                            <div style={{display:'flex', position:'absolute', width:'100%', top:'0'}}>
                                <div style={{width:'50%', paddingBottom:'50%', backgroundColor:'lightGray'}}></div>
                                <div style={{width:'50%', paddingBottom:'50%', backgroundColor:'rgb(174, 21, 212)'}}></div>
                            </div>
                            <div style={{display:'flex', position:'absolute', width:'100%', top:'50%'}}>
                                <div style={{width:'50%', paddingBottom:'50%', backgroundColor:'rgb(174, 21, 212)'}}></div>
                                <div style={{width:'50%', paddingBottom:'50%', backgroundColor:'rgb(174, 21, 212)'}}></div>
                            </div>
                        </div>
                    </div>
                    <div style={{display:'flex'}}>
                        <div style={{width:'50%', paddingBottom:'50%', position:'relative'}}>
                            <div style={{display:'flex', position:'absolute', width:'100%', top:'0'}}>
                                <div style={{width:'50%', paddingBottom:'50%', backgroundColor:'rgb(174, 21, 212)'}}></div>
                                <div style={{width:'50%', paddingBottom:'50%', backgroundColor:'rgb(174, 21, 212)'}}></div>
                            </div>
                            <div style={{display:'flex', position:'absolute', width:'100%', top:'50%'}}>
                                <div style={{width:'50%', paddingBottom:'50%', backgroundColor:'rgb(174, 21, 212)'}}></div>
                                <div style={{width:'50%', paddingBottom:'50%', backgroundColor:'rgb(174, 21, 212)'}}></div>
                            </div>
                        </div>
                        <div style={{width:'50%', paddingBottom:'50%', position:'relative'}}>
                        <div style={{display:'flex', position:'absolute', width:'100%', top:'0'}}>
                                <div style={{width:'50%', paddingBottom:'50%', backgroundColor:'rgb(174, 21, 212)'}}></div>
                                <div style={{width:'50%', paddingBottom:'50%', backgroundColor:'rgb(174, 21, 212)'}}></div>
                            </div>
                            <div style={{display:'flex', position:'absolute', width:'100%', top:'50%'}}>
                                <div style={{width:'50%', paddingBottom:'50%', backgroundColor:'rgb(174, 21, 212)'}}></div>
                                <div style={{width:'50%', paddingBottom:'50%', backgroundColor:'rgb(174, 21, 212)'}}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="progress-bar-padding" style={{position:'absolute', top: 0, left: 0, width:'100%', height:'100%', borderRadius:'50%'}}>
                    <div style={{backgroundColor:'white', width:'100%', height:'100%', borderRadius:'50%', display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <div>
                        <div style={{display:'flex', justifyContent:'center'}}>
                            <SiRedux style={{fontSize:'10vw', color:'rgb(174, 21, 212)'}}/></div>
                            <div className="progress-bar-fontsize" style={{textAlign:'center', color:'rgb(174, 21, 212)'}}>Redux</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ReduxSkill;