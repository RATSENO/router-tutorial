import { useParams } from 'react-router-dom'

const Article = () => {
    const {id}=useParams;
    return (
        <h2>
            <div>게시글 {id}</div>
        </h2>
    )
};

export default Article;;