#!/bin/bash

# Script to fix cache service issues and rebuild the project
echo "Clearing Gradle caches..."
rm -rf ~/.gradle/caches/
rm -rf ~/.gradle/daemon/
rm -rf ~/.gradle/wrapper/

echo "Clearing Android build caches..."
rm -rf android/app/build/
rm -rf example/android/app/build/

echo "Running Gradle with clean build..."
cd example/android && ./gradlew clean --init-script=../../init.gradle
cd ../..
cd android && ./gradlew clean --init-script=../init.gradle
cd ..

echo "Cache cleared and project cleaned. You can now rebuild your project."