## react-query v.5

https://tanstack.com/query/v5/docs/framework/react/overview
npm i @tanstack/react-query
npm i @tanstack/react-query-devtools

## json server setting

npm i -g json-server
json-server --watch db.json --port 3004

## react-query

api 호출 실패하면 재시도 기능이 있음(횟수 정할 수 있고 기본이 3번)
isLoading, data, isError, error(메시지)
받아온 데이터는 캐시에 저장 해 두고, 다시 재진입 시 캐시 데이터가 있다면
isLoading 대신 캐시 데이터 보여줌 > 뒷단에서 api 호출 > 업데이트 된 값이 있으면 화면, 데이터 업데이트
캐시의 저장 수명 설정 가능(너무 오래된 데이터, 메모리 공간 확보를 위해)
ㄴ> 같은 화면에서는 적용되지 않고, 다른 페이지 이동 시 설정 시간 경과하면 삭제됨
ㄴ> 미설정 시 기본 값 5분(설정 시간 단위 : 마이크로 second)
