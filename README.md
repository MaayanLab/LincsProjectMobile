Generating .apk for Android

1) Be sure to update version in build.gradle
http://stackoverflow.com/questions/35924721/how-to-update-version-number-of-react-native-app

2) Update gradle.properties passwords but do not commit them.
pass hint: modified-lowercase-sysbio

3) cd android && ./gradlew assembleRelease
https://facebook.github.io/react-native/docs/signed-apk-android.html

4) Uninstall any previous versions of this app from Android emulator

5) Test with: react-native run-android --variant=release
