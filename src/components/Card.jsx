import {ProfilesTwitter} from '../assets/Profiles'

export function TwitterCard () {
    return (
        <div className= 'tw-Card'>
            <h2><strong>A quien seguir</strong></h2>
            <ProfilesTwitter name = "midudev"/>
            <ProfilesTwitter name = 'pheralb'/>
            <ProfilesTwitter name = 'vxnder'/>
            <a href="#" className='more-users'>Ver Más</a>
        </div>
    )
}