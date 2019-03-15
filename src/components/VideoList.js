import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({vids,onSelect})=>{
    const renderedList = vids.map(vid =>{
        return <VideoItem key={vid.id.videoId} onSelectItem={onSelect} video={vid}/>;
    })

    if(vids.length===0)
        return(
            <div className="ui placeholder">
                <div className="full line"></div>
                <div className="full line"></div>
                <div className="full line"></div>
                <div className="full line"></div>
                <div className="full line"></div>
                <div className="full line"></div>
                <div className="full line"></div>
                <div className="full line"></div>
                <div className="full line"></div>
                <div className="full line"></div>
                <div className="full line"></div>
                <div className="full line"></div>
                <div className="full line"></div>
                <div className="full line"></div>
                <div className="full line"></div>
                <div className="full line"></div>
            </div>
        )

    return <div className="ui relaxed divided list">{renderedList}</div>
}

export default VideoList;