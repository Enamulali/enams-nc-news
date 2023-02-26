# Welcome to NC News!

A responsive front-end social news application connected to my [backend news API server](https://github.com/Enamulali/back-end-API-project). 
This was project was built using React as part of a full stack solo-project during the Northcoders bootcamp.

### To view a live version of this app, visit:
https://nc-news-ea.netlify.app 

and view the back-end api hosted at:
https://enams-news-api.onrender.com/api/articles 

## Installation

1. To set up this project locally, run: 
```
git clone https://github.com/Enamulali/enams-nc-news.git
```
2. Now navigate inside the folder `enams-nc-news`
```
cd enams-nc-news
```
3. Run `npm install` to install dependencies. This may take a few minutes.

4. Run `npm start` to run the app. This is available on 
```
http://localhost:3000/
```

## Native iOS and android apps

You can now run the application as native android and iOS apps. Built using [CapacitorJS](https://capacitorjs.com/docs/).

### Pre-requisites: 

<details>
<summary>Android</summary>
<br>
1. You should have android studio installed on your machine. Check here: https://developer.android.com/studio.
</details>

<details>
<summary>iOS</summary>
<br>
1. You should have XCode installed on your machine. You can install using the Apple App Store on your Mac. Check here: https://apps.apple.com/us/app/xcode/id497799835?mt=12

2. You should install Xcode command line tools:
```
xcode-select --install
```

3. Install Homebrew to install Cocoapods:
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

4. Install Cocoapods:
```
brew install cocoapods
```

5. Install Cocoapods without Homebrew:
```
sudo gem install cocoapods
```
<br>
</details>

[For further support refer to capacitor environment setup docs](https://capacitorjs.com/docs/getting-started/environment-setup)

### Running the app: 

1. Run `npm install` to install dependencies. This may take a few minutes.

2. Build a local version of the app, using:
```
npm run build
```

3. Sync your built web application to your native project, using:
```
npx cap sync
```

4. To open the project in Xcode, run:
```
npx cap open ios
```
To open the project in Android Studio, run:
```
npx cap open android
```

5. To run the project on a device or simulator, run:
```
npx cap run ios
npx cap run android
```


# Navigating the app

After opening the app, you are greeted with with a homepage, from which you can navigate the app. 
