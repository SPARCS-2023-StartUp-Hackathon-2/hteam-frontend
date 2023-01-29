# [TEAM H] hteam-frontend

Team H의 MOZIP 서비스 프론트엔드 레포지토리입니다.

해당 레포지토리는 다음 내용을 포함하고 있습니다.

- MOZIP 웹 프론트엔드 서비스 코드

## 프로젝트에서 사용한 기술

- Next.js
- TypeScript
- Mantine (Opensource Design System)
- recoil
- swr

## Dev Server 실행 방법

```bash
npm install
npm run dev
# 이후 브라우저에서 localhost:3000 으로 접속
```

## Production 배포 방법

`main` 브랜치에 커밋 시 vercel CI/CD를 통해 자동으로 배포가 진행됩니다.

배포 url은 https://mozip.vercel.app 입니다.

수동으로 배포 번들을 얻기 위해서는 `npm run build` 명령어를 사용해주세요.

## 환경 변수 및 시크릿

아래는 `.env` 파일 전문입니다. 민감한 정보가 포함되어 있지 않습니다.

```
RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED=false
NEXT_PUBLIC_HOMEPAGE_URL=https://mozip.vercel.app
```

## 기타
