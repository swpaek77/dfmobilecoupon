sudo gem uninstall cocoapods
arch -arm64 brew upgrade
arch -arm64 brew install cocoapods
[https://github.com/facebook/react-native/issues/33017]

1. pod install
   [pod install --repo-update]

2. xcode 로제타 끄기

3. android build memory
   org.gradle.jvmargs=-Xmx2048m -XX:MaxPermSize=512m -XX:+HeapDumpOnOutOfMemoryError -Dfile.encoding=UTF-8
