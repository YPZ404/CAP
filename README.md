# End-to-End Testing
Please read the below information for running e2e tests.

## Dependencies
Please note that all app binaries can be built using the external eas build server, however it is recommended to build these locally.

Both these binaries must be placed in the correct location according to the .detoxrc.json file.
### IOS (Mac Only)
- For running IOS tests, `applesimutil` needs to be installed.
- A binary `.app` file is required to run the detox tests from.
- A local build can be generated using this command `npx eas-cli build --platform ios --profile preview --non-interactive --local`, however it is highly temperamental and requires the correct versions of dependencies including fastlane, xcode and cocoapods. It is recommendded to try using the latest versions. For example, it seems that xcode 12.4 or below causes errors with fastlane. Refer to this [link](https://docs.expo.dev/build-reference/infrastructure/#image--macos-big-sur-114-xcode-125) for the exact server infrastructure eas servers use.

### Android (Windows and Mac)
- 2 binaries are required, a "Test" apk, and the "actual app" apk.
- These binaries can be built locally with the corect setup using the 'debug' and 'preview' profiles in the `eas.json` configuration. 
- A Dockerfile and docker-compose.yml setup has been provided which uses Docker for building the binaries. Once the container has completed the build process, these binaries can be copied from the exited container to the host using the `docker cp` command. The app binary will be named located at `CONTAINER_NAME:/app/android.apk`.
- Running the tests on Android requires using a 64-bit emulator.

## Running the tests
These tests can be run on IOS and android with the following commands, respectively:
- `npm run e2e-ios`
- `npm run e2e-android`

