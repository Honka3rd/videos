import React from 'react';
import '../VideoItem.css'

 const VideoItem =({video,onSelectItem})=> {
    return (
    <div onClick={()=>onSelectItem(video)} className="video-item item">
        <img className="ui avatar image" src={video.snippet.thumbnails.high.url} alt={video.id.kind}/>
        <div className="content">
            <div className="header">{video.snippet.title}</div>
            <div className="description">{video.snippet.channelTitle}</div>
        </div>
    </div>);
}

export default VideoItem;
