import React from 'react';
import ContributerCard from './contributor-card';


class Contributers extends React.Component {
    render() {
        let contributerCards = this.props.contributers.map((contributer) => 
            <ContributerCard 
                name={contributer.name} 
                description={contributer.description} 
                links={contributer.links} 
                pfp={contributer.profileImg}/>
        );  
        return(
            <>
                {contributerCards}
            </>
        )
    }
}

export default Contributers;
 