#### 작업 예정
-외부 data.js 파일에서 json 데이터를 저장한 후 html에 불러와서 파싱
-외부 사이트에서 제공하는(RestAPI서버) json데이터를 jtml에 불러와 파싱
-RestAPI 서버 중 코로나 19 확지낮 데이터를 받아서 html에서 파싱
-REstAPI 서버 주소(빅데이터) : htgetdatatps://coroname.me/

#### 201013 목 작업내역 : jQuery, Json 데이터 파싱
- 모바일 메인 페이지를 만들어서 과제로 제출 - > 스프링에서 프로그램 입히는 소스로 사용
- jQuery 코어 다운 받기 : min 버전(압축-속도),일반버전(개발)
- 작업폴더 나누는 이유 : 관공서, 대학, 기업의 웹프로그램(사이트)를 제작하게 되면 제작 이후 무상 유지 보수를 하는데 이후 유지보수, 리뉴얼 비용이 책정됨
- 리뉴얼 할 때는 덮어쓰는 게 아니라 다른 새로운 폴더를 만들어서 작업을 하게됨.
- 픽사베이 이미지3개 : 로고 1, 슬라이드 이미지 1, noimage 받고 경로 적어놓기
-https://pixabay.com/ko/photos/%EA%B2%A8%EC%9A%B8-%EB%88%88-%EA%B0%90%EA%B8%B0-%ED%99%94%EC%9D%B4%ED%8A%B8-%EC%84%9C%EB%A6%AC-260817/ 슬라이드
-로고 : https://pixabay.com/ko/photos/%EC%95%84%EC%9D%B4%EC%8A%AC%EB%9E%80%EB%93%9C-%EB%B6%81%EA%B7%B9-%EC%97%AC%EC%9A%B0-%ED%8F%AD%EC%8A%A4-1979445/
-no image : https://pixabay.com/ko/vectors/%EB%B9%99%EC%82%B0-iceburg-%EC%96%BC%EC%9D%8C-2070977/


#### 20210511 화 작업내역
- 로렘입숨 기억하기
- URL 경로(path) : /루트,
- html5의 레이아웃 구조 제작.
- 서버 : 응답하는 프로그램==response(아파치, 톰캣)
- 클라이언트 : 요청하는 프로그램 == request(웹브라우저)
http://127.0.0.1:80[8080or9000or5500or6500(port)]
-pc의 네트워크 내부주소(공통):127.0.0.1==localhost
- 고유주소 : yahoo.com(도메인)== 74.6.143.25(tp주소)
- ip주소버전 : ipv4(원래 알던 거), ipv6(새로 바뀐 긴 거)
-포트가 안 붙은 도메인은 없지만 그냥 생략 (안보임)
- HTML도 버전이 있음 : HTML5(새거),HTML4.01(구)

#### 2021.05.10 mon 작업내역
깃 업로드 절차 1. 커밋(commit) 2. 푸쉬(push)
깃 다운로드 절차 1. pull : 작업물 이동할 때
html 과 깃 저장소와 연결
포트(port) : 포트번호로 서비스를 만드는 것이 트렌드, 옛날엔 80 포트에 다 묶어놨음
모든 서비스를 개별로 분리하는 것 : 마이크로 서비스. == RestAPI 서비스와 동급
같은 도메인이라도 포트만 달라도 됨
같은 직원이 포트만 가지고 서비스를 가져다 사용함.
html : hyper text markup language 태그를 사용하는 언어 tag 란 <의미있는문자>...</의미있는 문자>
md : Mark down language 태그를 사용하지 않는 언어
