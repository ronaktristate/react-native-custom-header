# react-native-header-custom-header

Custom Header Component

## Installation

```sh
npm install react-native-header-custom-header
```

or

```sh
yarn add react-native-header-custom-header
```

## Usage

```js
import HeaderComponent from "react-native-header-custom-header";

render(){
     <HeaderComponent
       backButton
       middleText={'Home Screen'}
     />
}
```

## New Features

1. Back Button
2. Search 
3. RightSide Button
4. LeftSide Button

### Configuration
##### Select:

| Property | Type |  
|---------------|----------|
| backButton | boolean | 
| rightIcon | boolean |
| showSearchBar | boolean | 
| onBackButtonPress | function | 
| leftIconPress | function | 
| rightImage | Image source | 
| onPressRightIcon | function | 
| onChangeText | function | 
| onPressSearchCross | function | 
| middleText | string | 
| searchValue | string | 
| leftIcon | Image source | 
| backButtonSource | Image source | 
| mainStyle | style object | 
| middleTextStyle | style object | 
| rightImageStyle | style object | 
| searchBarWrapStyle | style object | 
| backButtonViewStyle | style object | 
| firstViewCustomstyle | style object | 
| middleViewCustomstyle | style object | 
| lastViewCustomstyle | style object | 
   

## License

MIT
