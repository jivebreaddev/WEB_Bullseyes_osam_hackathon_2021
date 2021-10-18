### 본 페이지는 샘플입니다. 아래의 *[샘플 양식에 포함되어 있는 항목은 필수 기재사항]*   입니다.
해당 내용은 모두 예시이며 설명이 부족하거나 추가하고싶은 부분이 있으면 개발자님이 추가해서 작성하셔도 무관합니다. (동영상, 이미지, 텍스트 적용 전부 자유)


# Project name or Logo
![Logo](https://logosbynick.com/wp-content/uploads/2018/03/final-logo-example.png)

프로젝트명 또는 프로젝트 로고 이미지 **(택1)**

## 팀 소개
<table>
 <tr>
  <td>사진</td>
  <td>팀원명</td>
  <td>역할</td>
  <td>깃허브</td>
  <td>이메일</td>
 </tr>
   
 <tr>
  <td align='center'></td>
  <td align='center'>김범준</td>
  <td align='center'>Front-end</td>
  <td align='center'><a href="https://github.com/Rujang"><img src="http://img.shields.io/badge/Rujang-green?style=social&logo=github"/></a></td>
  <td align='center'><a href="mailto:kimbz123@gmail.com"><img src="https://img.shields.io/badge/kimbz123@gmail.com-green?logo=gmail&style=social"/></a></td>
 </tr>

 <tr>
  <td align='center'></td>
  <td align='center'>박시창</td>
  <td align='center'>Back-end</td>
  <td align='center'><a href="https://github.com/jivebreaddev"><img src="http://img.shields.io/badge/jivebreaddev-green?style=social&logo=github"/></a></td>
  <td align='center'><a href="mailto:jivebreaddev@gmail.com"><img src="https://img.shields.io/badge/jivebreaddev@gmail.com-green?logo=gmail&style=social"/></a></td>
 </tr>
</table>

## 프로젝트 설명
- 불스아이즈는 코로나 시대에 모두를 위한 마스크가 안보에 직결된 보안에 위험이 되지않도록 안면인식을 통해 신원에 대한 이중확인을 하고 의심인원에 대한 시스템적인 즉각보고와 기록일지로 보안사건이 발생했을 때 시스템적인 피드백을 줄 수 있는 프로젝트입니다. 

## 서비스 플로우
![서비스플로우](https://user-images.githubusercontent.com/89078451/137740835-3a62bcb8-239c-43e4-b42c-7a612af5602a.PNG)

## 불스아이즈 기대효과

## 불스아이즈가 가진 경쟁력

### 📋 개발문서의 구체성
전반적인 개발문서의 양호도 및 구체적 표현성

- Gitbook을 이용한 개발문서 정리
  
### ⭐ 독창성
뚜렷한 독창성 유무 정도

- 실시간으로 마스크를 쓴 사람 얼굴을 인식

### 🌱 발전 가능성
커뮤니티, 비즈니스 등에 대한 발전 가능성

- 누구나 쉽게 서비스를 관리할 수 있도록 페이지 구축

### 🌈 완성도(작품데모)
데모 결과에 대한 시현 능숙도 및 원활한 작품

- 즉시 서비스를 시행할 수 있도록 완성도 있게 제작

### 💻 공개SW 기여도
팀 역할 분배와 수행에서 보여지는 팀워크/기여

- Front-end와 Back-end로 역할을 분배하여 효과적으로 개발

## 기능 설명
 - 1. 마스크 착용,또는 미착용시 id 체크
 - 2. 위험인물 혹은 의심인물이 등장했을때에는 즉각적인 보고로 시스템적인 보안성 유지
 - 3. 건물들에 있는 인원들 출입시간과 남아있는 인원에 대한 추적 가능

## 컴퓨터 구성 / 필수 조건 안내 (Prerequisites)
1. 접속 가능한 브라우저
* 권장: Google Chrome 버젼 77 이상
2. Docker Desktop OR Engine Required
* 64-bit processor with Second Level Address Translation (SLAT)
* 4GB system RAM
* BIOS-level hardware virtualization support must be enabled in the BIOS settings. For more information, see Virtualization.
## 기술 스택 (Technique Used) 
### Server(back-end)
 -  nodejs, php, java 등 서버 언어 버전 
 - express, laravel, sptring boot 등 사용한 프레임워크 
 - DB 등 사용한 다른 프로그램 
 
### Front-end
 -  react.js 사용한 front-end 프레임워크 
 -  UI framework
 - 기타 사용한 라이브러리 (react-admin)

## 설치 안내 (Installation Process)
** STEP 1 불스아이즈 클론하기
```bash
$ git clone git@github.com:osamhack2021/AI_WEB_Bullseyes_Bullseyes.git
#Clone From Github
```
** STEP 2 Front 모듈 설치폴더로 이동하기
```
$ cd AI_WEB_Bullseyes_Bullseyes/AI\(FE\)/web-admin
#Changing directory to web-admin folder"
```
** STEP 3 Front 모듈 설치하기
```
$ npm install
#Installing libs for Frontend"
```

** STEP 4 모델 설치하기

[Model의 개발자는 https://github.com/SamYuen101234/Masked_Face_Recognition 입니다.]
- 밑 URL 에서 모델을 다운받아주십시오.
- https://drive.google.com/file/d/1DsMV1R5eqwHiVgfujlCa4NSpqmk-ecor/view?usp=sharing
그리고 클론된 AI_WEB_Bullseyes_Bullseyes/AI(BE)/bullseyes 에 넣어주시면 됩니다.



## 프로젝트 사용법 (Getting Started)

** STEP 1 Docker-compose 시작하기
```bash
$ docker-compose up
#Create docker compose for Django Backend, React Frontend, Postgre SQL "
# 에러 발생시 Ctrl + C 누르고 다시 docker-compose up 하시면 됩니다!
# DockerCompose 에서 Dependency가 안지켜질때 에러가 납니다.
```

## 팀 정보 (Team Information)
- kim beom jun (kimbz123@gmail.com), Github Id: Rujang
- Park Si Chang (jivebreaddev@gmail.com), Github Id: jivebreaddev

## 저작권 및 사용권 정보 (Copyleft / End User License)
 * [MIT](https://github.com/osam2020-WEB/Sample-ProjectName-TeamName/blob/master/license.md)

This project is licensed under the terms of the MIT license.



