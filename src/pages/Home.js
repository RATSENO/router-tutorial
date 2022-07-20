import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>홈</h1>
            <p>최초</p>
            <ul>
                <li>
                    <Link to="/about">소개</Link>
                </li>
                <li>
                    <Link to="/profile/velopert">velopert 프로필</Link>
                </li>
                <li>
                    <Link to="/profile/gildong">gildong 프로필</Link>    
                </li>
                <li>
                    <Link to="/profile/void">존재하지 않음</Link>
                </li>                                                
            </ul>
        </div>
    );
};

export default Home;    