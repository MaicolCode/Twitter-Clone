import { TwitterCard } from "./components/FollowCard.jsx";
import { ListTrendsCard } from "./components/TrendsCard.jsx";
import './App.css'

export default function App (){
    return (
        <div className="contain-cards">
            <TwitterCard/>
            <ListTrendsCard/>
        </div>        
    )
}
