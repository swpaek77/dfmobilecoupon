sudo gem uninstall cocoapods
arch -arm64 brew upgrade
arch -arm64 brew install cocoapods
[https://github.com/facebook/react-native/issues/33017]

1. pod install
   [pod install --repo-update]

2. xcode 로제타 끄기

3. android build memory
   org.gradle.jvmargs=-Xmx2048m -XX:MaxPermSize=512m -XX:+HeapDumpOnOutOfMemoryError -Dfile.encoding=UTF-8

4. npx react-native link react-native-vector-icons

5. brew tap homebrew/cask-versions
   brew install --cask zulu11

6. android admob
   main. ca-app-pub-6661482404483333~5303899586

   banner. ca-app-pub-6661482404483333/6425409561
   앱 열기. ca-app-pub-6661482404483333/5612242530
   전면. ca-app-pub-6661482404483333/6505687656
   네이티브. ca-app-pub-6661482404483333/2794507503

7. ios admob
   main. ca-app-pub-6661482404483333~5599127646

   banner. ca-app-pub-6661482404483333/2783841163
   앱 열기. ca-app-pub-6661482404483333/6542180826
   전면. ca-app-pub-6661482404483333/2566442647
   네이티브. ca-app-pub-6661482404483333/8785200787

[할것 리스트]

1. 앱 로고 생성
2. 앱 스플래시 스크린 생성
3. 안드로이드 키 생성

- keytool -genkey -v -keystore dfMobileCoupon.keystore -alias dfMobileCoupon -keyalg RSA -keysize 2048 -validity 100000

4. 애플 노티피케이션 생성
5. 애플 개발자 가입?
6. 구글 개발자 찾기
7. 구글 배포
8. 쿠폰 넣을 앱뷰 찾기
9. 토큰 넣기
10. 앱 디바이스 정보 가져오기
