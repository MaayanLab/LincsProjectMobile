Building a release Android APK file.

1) Be sure to update version in build.gradle
http://stackoverflow.com/questions/35924721/how-to-update-version-number-of-react-native-app

2) Update gradle.properties passwords BE SURE NOT TO not commit them into git.

3) In the root folder of the app, in your terminal type
`cd android && ./gradlew assembleRelease`
https://facebook.github.io/react-native/docs/signed-apk-android.html

4) Your file should be within {app root}/android/app/outputs/apk/app-release.apk

5) Uninstall any previous versions of this app from Android emulator(GenyMotion)

6) Test with: react-native run-android --variant=release
