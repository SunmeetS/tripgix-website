import React from 'react'
import { GroupExploreWanderOn } from './GroupExploreWanderOn'

export const ExploreWanderOn = () => {
    return (
        <div className='mainExploreWanderOn'>
            <div className="headerExploreWanderOn">
                Explore Wanderon
            </div>
            <div className='containerExploreWanderOn' >
                <GroupExploreWanderOn/>
                <GroupExploreWanderOn/>
                <GroupExploreWanderOn/>
                <GroupExploreWanderOn/>
                <GroupExploreWanderOn/>
                <GroupExploreWanderOn/>
            </div>
        </div>
    )
}
