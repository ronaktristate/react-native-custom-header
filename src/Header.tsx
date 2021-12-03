import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Platform, ImageProps, TextInput } from 'react-native';
import { getStatusBarHeight } from './iPhoneHelp';

export type Props = {
   backButton: boolean,
   onBackButtonPress: Function,
   rightIcon: boolean,
   rightImage: any,
   middleText: string,
   leftIcon: ImageProps,
   leftIconPress: Function,
   mainStyle: any,
   middleTextStyle: any,
   onPressRightIcon: any,
   rightImageStyle: any,
   showSearchBar: boolean,
   searchValue: string,
   onPressSearchCross: any,
   onChangeText: any,
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
}) => {
   return (
      <View style={[styles.container, mainStyle,]} >
         {
            showSearchBar ?
               <View style={[styles.middleSearch, {}]}>
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
                  <View style={styles.firstView}>
                     {
                        backButton ?
                           <View
                              style={[styles.backButton]}
                           >
                              <TouchableOpacity
                                 onPress={() => { if (onBackButtonPress) onBackButtonPress(); }}
                                 delayPressIn={0}
                              >
                                 <Image source={require("./assets/back-icon.png")} />
                              </TouchableOpacity>
                           </View>
                           :
                           leftIcon ?
                              <View
                                 style={[styles.backButton]}
                              >
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
                     style={[styles.middleView]}>
                     {middleText ?
                        <Text numberOfLines={1} style={[styles.middleTextStyle, middleTextStyle, {}]}> {middleText}</Text>
                        :
                        null}
                  </View>
                  {rightIcon ?
                     <View style={[styles.lastView]}>
                        <TouchableOpacity activeOpacity={0.8} onPress={onPressRightIcon}>
                           {rightImage ?
                              <Image source={rightImage} style={rightImageStyle} />
                              : null
                           }
                        </TouchableOpacity>
                     </View>
                     :
                     <View style={[styles.lastView]} />
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
      paddingHorizontal: 10,
      borderColor: 'white',
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      borderRadius: 10,
      paddingVertical: 10
   },
   searchtext: {
      color: 'black',
      fontSize: 14,
      flex: 1,
      height: 50
   }
})

