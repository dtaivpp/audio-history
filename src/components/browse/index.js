import React from 'react';
import AudioCard from './audio-card';


class Browse extends React.Component {
    render() {
        let audioCards = this.props.audioFiles.map((interview) => 
            <AudioCard 
                name={interview.name} 
                description={interview.description}
                tags={interview.tags}
                featureImg={interview.featureImg}
                src={interview.src}
            />
        );  
        return(
            <>
                {audioCards}
            </>
        )
    }
}

export default Browse;
 