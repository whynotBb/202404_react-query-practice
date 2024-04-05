import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

const ReactQueryPage = () => {
    const fetchPost = () => {
        return axios.get('http://localhost:3004/posts');
    };
    const {isLoading, data, isError, error} = useQuery({
        queryKey: ['posts'],
        queryFn: fetchPost,
        retry: 1, //api 호출 재시도 횟수
        select: (data) => {
            return data.data;
        }, // data 안에 원하는 값만 가져오기
        gcTime: 5000, // 캐시 5초 저장 (후 삭제)
    });
    console.log(isLoading, data);
    console.log('error', isError, error);
    if (isLoading) {
        return <h3>Loading...</h3>;
    }
    if (isError) {
        return <h3>error : {error.message}</h3>;
    }

    return (
        <div>
            <p>
                {data.map((item, index) => (
                    <p>{item.title}</p>
                ))}
            </p>
        </div>
    );
};
export default ReactQueryPage;
