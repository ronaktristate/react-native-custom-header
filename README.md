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
1. Header
 1.1 . Search 
  1.2. RightSide Button
1.3. LeftSide Button

2. CustomButton
    2.1 . Custom styles
    2.2 . button click 
    
3. CustomInputBox
   3.1. Cusomt styles
   3.2  Native InputText props
   3.3  CountryCode 
   
4. Helper Functions

5. Scalable Functions

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
