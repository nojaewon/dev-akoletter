# AKO Letter
> The ako letter service is a card news service in the form of SNS.
<img src="https://user-images.githubusercontent.com/82192655/242472378-d7789f00-b6cf-4198-9017-c1342fe4912b.png" width=300>

## _The Card News Service in the form of SNS_
It is a web page for a platform where people who want to subscribe to the card news editor of the category they are interested in and who want to be an editor and produce their own card news. _polotno_ is a opinionated JavaScript library and React components to build canvas editor for several business use cases. This project is a graduation project of Dongguk University Capstone Design.

## Dependencies
![HTML](https://img.shields.io/badge/html5-444444?style=for-the-badge&logo=html5) ![CSS](https://img.shields.io/badge/css3-444444?style=for-the-badge&logo=css3) ![ES6](https://img.shields.io/badge/es6-444444?style=for-the-badge&logo=JavaScript) <br/>
![React](https://img.shields.io/badge/react-18.2.0-444444?style=for-the-badge&logo=react)
![ReactRouter](https://img.shields.io/badge/react_router-6.9.0-444444?style=for-the-badge&logo=reactrouter)
![Redux](https://img.shields.io/badge/redux-8.0.5-444444?style=for-the-badge&logo=redux)<br/>
![Axios](https://img.shields.io/badge/axios-1.3.4-444444?style=for-the-badge&logo=axios)
![Polotno](https://img.shields.io/badge/Polotno-1.9.1-444444?style=for-the-badge&logo=data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTicgICdodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCc+PHN2ZyBoZWlnaHQ9IjI1Ni4wMDAwMDBwdCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIgdmVyc2lvbj0iMS4wIiB2aWV3Qm94PSIwIDAgMjU2LjAwMDAwMCAyNTYuMDAwMDAwIiB3aWR0aD0iMjU2LjAwMDAwMHB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0ibm9uZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsMjU2LjAwMDAwMCkgc2NhbGUoMC4xMDAwMDAsLTAuMTAwMDAwKSI+PHBhdGggZD0iTTExODMgMjQ1MSBjLTE1NSAtODYgLTUwNiAtNDEwIC03MzcgLTY4MSAtMTA1IC0xMjMgLTE5MiAtMjQ3IC0yMDIgLTI4NiAtNyAtMjcgLTUgLTMwIDE2NSAtMjE3IDY0IC03MCAxMTggLTEzMiAxMTkgLTEzOCAyIC01IC01IC05IC0xNSAtOSAtMjcgMCAtMzEyIC05OCAtMzU2IC0xMjMgLTQyIC0yMyAtNzcgLTcyIC03NyAtMTA2IDAgLTMyIDUxIC03OCA5NSAtODcgNDIgLTggMTUzIDEzIDQwNSA3NyBsMTU0IDM5IDk1IC05NCA5NCAtOTQgLTMxIC0xMTkgYy02MSAtMjMyIC05MyAtMzk1IC04NiAtNDM3IDggLTQ3IDUyIC05NiA4NiAtOTYgMjYgMCA2MyAyMyA5MCA1NSAyMSAyNSA3MSAxNTYgMTEzIDI5MiBsMzEgMTAzIDE1MCAtMTQwIGM4MiAtNzcgMTU5IC0xNDMgMTcyIC0xNDYgMTIgLTQgMzcgLTEgNTUgNiA0MyAxNyAxNTYgOTkgMjQwIDE3NCAxMDIgOTIgNTYwIDU2NyA2MjggNjUzIDY0IDgwIDEwOSAxNjAgMTA5IDE5MiAwIDEyIC05NiAxMTcgLTI0OSAyNzMgbC0yNDkgMjU0IDE0NyAxNTEgYzE2NSAxNjkgMjA2IDIyMiAxOTcgMjUxIC00IDExIC0zMSA0MyAtNjEgNzEgLTg2IDgxIC04NCA4MiAtMjkxIC0xMjQgbC0xNzUgLTE3NCAtMTg3IDE4MSBjLTI0NSAyMzcgLTM0NiAzMjggLTM2MyAzMjggLTggMCAtMzggLTEzIC02NiAtMjl6IG0zMDggLTM0NCBjMjY3IC0yNTIgNzY1IC03NzEgNzkxIC04MjMgMTQgLTI5IC0xNCAtODAgLTEwMiAtMTkxIC0yNTUgLTMxNyAtNjczIC02ODggLTc0MCAtNjU3IC01OCAyNyAtMTAxMCA5NjkgLTEwMTAgOTk5IDAgMjUgMjggNzQgODggMTU1IDY0IDg2IDQ5NyA1MjggNTg4IDYwMSA3NSA2MCAxNDIgOTkgMTcwIDk5IDEzIDAgOTEgLTY2IDIxNSAtMTgzeiIvPjwvZz48L3N2Zz4=)

## Goals
SNS형 카드 뉴스 서비스

## Target
1. 관심이 있는 카테고리의 카드뉴스 에디터를 구독하여 제공받고 싶은 사람
2. 에디터가 되어 나만의 카드 뉴스를 제작해 보고 싶은 사람

## Quick Start
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

    a. json-server를 사용하지 않고 로컬 서버를 여는 경우 commonJS/api.js의 상수 값 useJSONserver를 false로 바꿔주어야 함

    b. 올려둔 원격 서버와 통신을 하는 경우 위의 api.js의 상수 값 LOCAL 또한 false로 바꿔주어야 함.   

## Some Pages
I recommend installing the project according to quick start and viewing the web page in person, but I attach an image for quick view.

### MainPage
<img src="https://user-images.githubusercontent.com/82192655/242469281-62d30c95-a660-4122-8d89-f41436991abc.png"/>

### EditPage by Polotno
<img src="https://user-images.githubusercontent.com/82192655/242469234-627ee098-4ad0-4d0a-bcef-57392eef90b5.png"/>