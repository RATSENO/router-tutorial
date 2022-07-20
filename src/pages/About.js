import {useLocation} from 'react-router-dom'

const About = () =>{
    const location = useLocation();

    return (
        <div>
            <h1>소개</h1>
            <p>리액트</p>
            <p>쿼리 스트링 : {location.search}</p>
        </div>
    )
};

export default About;