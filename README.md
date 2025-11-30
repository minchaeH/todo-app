# 할 일 관리 웹 애플리케이션 (To-Do List Web App)

1.  프로젝트 소개
HTML, CSS, JavaScript(ES Modules)를 활용하여 제작한 할 일 관리 웹 애플리케이션입니다.  
할 일 추가, 삭제, 완료 체크, 실시간 날짜/시간 표시, 명언 설정, 할 일 난이도 설정 기능을 포함하고 있으며, localStorage를 사용하여 새로고침 후에도 데이터가 유지됩니다.  
본 프로젝트는 바이브코딩 웹 프로젝트 과제 제출을 위해 제작되었습니다.

---

2.  주요 기능
- 할 일 추가 기능
- 할 일 삭제 기능
- 완료 체크박스 (완료 시 줄긋기 및 회색 처리)
- 완료 상태 localStorage 저장
- 실시간 날짜/시간 표시
- 새로고침 후에도 데이터 유지
- 할 일 난이도 설정
- 명언 스스로 설정

---

3. 사용한 기술 스택
- HTML5  
- CSS3  
- JavaScript (Vanilla JS)  
- ES Modules (import/export)  
- LocalStorage  

---

4. 실행 방법

방법 1) GitHub Pages에서 바로 실행 (추천)
https://minchaeh.github.io/todo-app/

방법 2) Live Server 실행 (권장)
1. VS Code에서 프로젝트 폴더 열기
2. `index.html` 우클릭
3. **Open with Live Server** 선택

방법 3) 직접 실행
- `index.html` 더블클릭하여 브라우저에서 열기  
(※ ES Modules 경로 문제로 Live Server 실행을 권장)

---

5. 🧪 테스트 체크리스트
- [x] 할 일 추가 시 목록에 정상 등록
- [x] 체크박스 클릭 시 스타일 변화 및 상태 저장
- [x] 삭제 버튼 기능 정상 작동
- [x] 새로고침 후에도 데이터 유지 확인
- [x] 시간/날짜 실시간 갱신
- [x] 명언 설정하기
- [x] 할 일 난이도 설정하기

---

6. 📄 참고 사항
- Live Server가 아닌 직접 파일 열기 방식에서는 import 경로 오류가 발생할 수 있음
- localStorage는 브라우저별로 독립적으로 저장됨
