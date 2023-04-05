# 아코 레터 AKO Letter

## Goals
SNS형 카드 뉴스 서비스

## Target
1. 관심이 있는 카테고리의 카드뉴스 에디터를 구독하여 제공받고 싶은 사람
2. 에디터가 되어 나만의 카드 뉴스를 제작해 보고 싶은 사람

## 실행순서
1. 해당 프로젝트를 열고 모듈을 설치한다.
```
cd ako-client
npm install
```
2. 클라이언트 서버를 실행한다.
```
//cd ako-client
npm start
```
3. JSON-SERVER를 실행한다.(서버를 열 경우 필요 없음)
json-server가 실행이 되지 않을 시, json-server를 global로 설치해야 동작 함.
```
// 새 터미널을 열어서 실행
// cd ako-client
// (npm install -g json-server)
cd json-server
json-server --routes routes.json --port 8080 --watch db.json
```
4. 프로젝트를 확인한다.

