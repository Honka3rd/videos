import React from 'react';

const VideoDetail = ({video,onSubmited}) =>{
        if(video===null)
        {
            if(onSubmited===false)
                return( 
                <div className="ui placeholder" style={{height:'300px'}}>
                    <div className="image">
                        <h2 className="ui header" style={{textAlign:'center',marginTop:'30%'}}>
                            <img src="https://semantic-ui.com/images/icons/plugin.png" alt="puzzle"/>
                            <div className="content">
                                Youtube API
                                <div className="sub header">video player</div>
                            </div>
                        </h2>                    
                    </div>
                </div>
              )
            if(onSubmited===true)
                return (
                <div>
                   <div className="ui segment" style={{height:'300px'}}>
                        <div className="ui active dimmer">
                            <div className="ui large text loader">Loading...</div>
                        </div>
                    </div>
                </div>);
        }

        const vidSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

        return (
                <div>
                    <div className='ui embed'>
                        <iframe title="youtube" src={vidSrc}/>
                    </div>
                    <div className="ui segment">
                        <h2 className="ui header">
                            {video.snippet.title}
                        </h2>
                        <p>
                            {video.snippet.description}
                        </p>
                    </div>
                </div>
        );
             
}
export default VideoDetail;