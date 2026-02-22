# Tishoo 해커톤

## Tishoo 프로젝트 시작하기

### 1. 프로젝트 클론
먼저 아래 명령어로 Git 저장소를 로컬에 클론하세요:

```
[git clone https://github.com/Memory-kiosk/media-kiosk.git](https://github.com/dokkk0dahee/Tishoo-front.git)
```
레포가 로컬로 복제됩니다.

---
### 2. 의존성 설치
프로젝트 디렉터리로 이동한 후, 모든 의존성을 설치합니다:
```
cd Tishoo-front
npm install
```
package.json에 정의된 패키지가 자동으로 설치됩니다.

---
### 3. 개발 서버 실행
모든 패키지 설치가 완료되면, 개발 서버를 시작하세요:
```
npm run dev
```
개발 모드로 실행되며, 코드 변경 시 자동으로 반영됩니다. 웹 브라우저에서 아래 주소로 접속해서 애플리케이션을 확인하세요:

```
http://localhost:5173
```
---
## 커밋 컨벤션
e.g. [STYLE] 홈페이지 스타일링

- `[FEAT]` - 새로운 기능 추가
- `[STYLE]` - css 수정 및 코드의 의미에 영향을 미치지 않는 변경사항
- `[FIX]` - 버그 수정
- `[REFACTOR]` -  리팩토링, 기능 변화 없이 코드 구조 개선
- `[CHORE]` - 코드 수정 외 잡다한 작업 (빌드 과정이나 설정 변경 등)
- `[DOCS]` - 문서 변경
- `[TEST]` - 테스트 코드 추가 또는 수정
- `[RENAME]` - 파일, 폴더, 변수 등 이름 변경
- `[REMOVE]` - 파일, 폴더, 변수 등 삭제
- `[COMMENT]` - 주석 추가, 삭제, 수정
