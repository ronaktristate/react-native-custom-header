import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Platform, ImageProps, TextInput, ViewStyle, StyleProp, TextStyle, ImageStyle } from 'react-native';
import { getStatusBarHeight } from './iPhoneHelp';

export type Props = {
   backButton: boolean,
   rightIcon: boolean,
   showSearchBar: boolean,

   onBackButtonPress: any,
   leftIconPress: any,

   rightImage: any,
   onPressRightIcon: any,
   onChangeText: any,
   onPressSearchCross: any,

   middleText: string,
   searchValue: string,

   leftIcon: ImageProps,
   backButtonSource: ImageProps,

   mainStyle: StyleProp<ViewStyle>,
   middleTextStyle: StyleProp<TextStyle>,
   rightImageStyle: StyleProp<ImageStyle>,
   searchBarWrapStyle: StyleProp<ViewStyle>,
   backButtonViewStyle: StyleProp<ViewStyle>,
   firstViewCustomstyle: StyleProp<ViewStyle>,
   middleViewCustomstyle: StyleProp<ViewStyle>,
   lastViewCustomstyle: StyleProp<ViewStyle>,

};

const Header: React.FC<Props> = ({
   backButton,
   onBackButtonPress,
   rightIcon,
   rightImage,
   middleText,
   leftIcon,
   leftIconPress,
   mainStyle,
   middleTextStyle,
   onPressRightIcon,
   rightImageStyle,
   showSearchBar,
   searchValue,
   onPressSearchCross,
   onChangeText,
   searchBarWrapStyle,
   backButtonSource,
   backButtonViewStyle,
   firstViewCustomstyle,
   middleViewCustomstyle,
   lastViewCustomstyle,
}) => {
   return (
      <View style={[styles.container, mainStyle]} >
         {
            showSearchBar ?
               <View style={[styles.middleSearch, searchBarWrapStyle]}>
                  <TextInput
                     placeholder={"Search.."}
                     placeholderTextColor={"gray"}
                     selectionColor={"gray"}
                     onChangeText={onChangeText}
                     value={searchValue}
                     autoFocus
                     style={styles.searchtext}
                  />
                  <TouchableOpacity onPress={onPressSearchCross}>
                     <Image source={require("./assets/close-icon.png")} />
                  </TouchableOpacity>
               </View>
               :
               <React.Fragment>
                  <View style={[styles.firstView, firstViewCustomstyle]}>
                     {
                        backButton ?
                           <View style={[styles.backButton, backButtonViewStyle]}>
                              <TouchableOpacity
                                 onPress={() => { if (onBackButtonPress) onBackButtonPress(); }}
                                 delayPressIn={0}
                              >
                                 <Image source={backButtonSource.source || require("./assets/back-icon.png")} />
                              </TouchableOpacity>
                           </View>
                           :
                           leftIcon ?
                              <View style={[styles.backButton]}>
                                 <TouchableOpacity
                                    onPress={() => leftIconPress && leftIconPress()}
                                    delayPressIn={0}
                                    hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}
                                 >
                                    <Image source={leftIcon.source} />
                                 </TouchableOpacity>
                              </View>
                              :
                              null
                     }
                  </View>
                  <View
                     style={[styles.middleView, middleViewCustomstyle]}>
                     {middleText ?
                        <Text numberOfLines={1} style={[styles.middleTextStyle, middleTextStyle, {}]}> {middleText}</Text>
                        :
                        null}
                  </View>
                  {rightIcon ?
                     <View style={[styles.lastView, lastViewCustomstyle]}>
                        <TouchableOpacity activeOpacity={0.8} onPress={onPressRightIcon}>
                           {rightImage ?
                              <Image source={rightImage} style={rightImageStyle} />
                              : null
                           }
                        </TouchableOpacity>
                     </View>
                     :
                     <View style={[styles.lastView, lastViewCustomstyle]} />
                  }
               </React.Fragment>
         }
      </View>
   )
}

export default Header;


/**component styling */
const styles = StyleSheet.create({
   container: {
      paddingTop: Platform.OS === 'android'
         ? 25 :
         (getStatusBarHeight(true) + 10),
      flexDirection: 'row',
      paddingBottom: 15,
   },
   backButton: {
   },
   middleView: {
      alignItems: 'center',
      flex: 3.5,
   },
   middleTextStyle: {
      fontSize: 20,
      color: "black",
   },
   firstView: {
      paddingLeft: 20,
      flex: 0.3
   },
   lastView: {
      alignItems: 'flex-end',
      paddingRight: 20,
      flex: 0.3
   },
   middleSearch: {
      flex: 1,
      borderWidth: 1,
      marginHorizontal: 20,
      paddingHorizontal: 5,
      borderColor: 'black',
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      borderRadius: 10,
      paddingVertical: 5,
      height: 40,
   },
   searchtext: {
      color: 'black',
      fontSize: 14,
      flex: 1,
   }
})

