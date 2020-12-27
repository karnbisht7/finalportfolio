import React from 'react'
import './CommunityStyles.css'
import { Link , BrowserRouter , Route , Switch , useHistory} from 'react-router-dom'
import Post from './screens/Post'
import Feed from './screens/Feed'
import Profile from './screens/Profile'




const CommunityRouting = () => {
    
    return(
        <Switch>
            <Route exact path="/Community/mypost">
                <Post />
            </Route>
            <Route exact path="/community/feed">
                <Feed />
            </Route>
            <Route exact path="/community/myprofile">
                <Profile />
            </Route>
        </Switch>
    )
}


function Community() {

    const history = useHistory()

    const goLogin = () => {
        history.push('/login')
    }


    return (
        <div className="community-god">
           <BrowserRouter>
                <nav className="community-nav-bar">
                    <ul>
                    <li><Link className="community-nav-link" to="/login" onClick={()=>goLogin()}>Logout</Link></li>
                    <li><Link className="community-nav-link" to="/community/mypost">Post</Link></li>
                    <li><Link className="community-nav-link" to="/community/Feed">Feed</Link></li>
                    <li><Link className="community-nav-link" to="/community/myprofile">Profile</Link></li>
                    <li className="community-logo"><Link className="community-nav-link-logo" to="/community/feed">Community</Link></li>
                </ul>
                </nav>
                <CommunityRouting /> 
            </BrowserRouter>
            
        </div>
    )
}

export default Community
