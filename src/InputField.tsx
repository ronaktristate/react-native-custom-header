import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, ImageProps, TextInput, ViewStyle, StyleProp, TextInputProps, } from 'react-native';

export type Props = {
   style: StyleProp<ViewStyle>,
   value: string,
   InputRef: any,
   editable: boolean,
   multiline: boolean,
   keyboardType: string,
   returnKeyType: string,
   containerStyle: StyleProp<ViewStyle>,
   onSubmitEditing: any,
   rightIcon: ImageProps,
   onPressRightIcon: any,
   placeholder: string,
   rightIconColor: string,
   placeholderTextColor: string,
   onChangeText: any,
   secureTextEntry: boolean,
   textAlignVertical: string,
   blurOnSubmit: boolean,
   autoCapitalize: string,
   selectionColor: string,
   maxLength: number,
   autoFocus: boolean,
   inputAccessoryViewID: string,
   valueCode: string,
   rightIconStyle: StyleProp<ViewStyle>,
   leftCountryCode: boolean,
   onChangeTextCode: any,
   placeholderForCode: string,
   countryCodeEditable: boolean,
   rightImageStyle: ImageProps,
   otherTextInputProps: TextInputProps,
}

const InputField: React.FC<Props> = ({
   style,
   value,
   InputRef,
   editable,
   multiline,
   containerStyle,
   onSubmitEditing,
   rightIcon,
   onPressRightIcon,
   rightImageStyle,
   placeholder,
   onChangeText,
   secureTextEntry,
   blurOnSubmit,
   selectionColor,
   maxLength,
   autoFocus,
   inputAccessoryViewID,
   valueCode,
   rightIconStyle,
   leftCountryCode,
   onChangeTextCode,
   placeholderForCode,
   countryCodeEditable,
   otherTextInputProps,
}) => {
   let placeholderTextColor1 = '#8C939C'
   return (
      <View style={[styles.container, containerStyle, {}]}>
         {leftCountryCode ?
            <View style={styles.leftView}
               pointerEvents={countryCodeEditable ? 'auto' : 'none'}
            >
               <TextInput
                  maxLength={3}
                  editable={countryCodeEditable || true}
                  value={valueCode}
                  returnKeyType={'done'}
                  keyboardType={'numeric'}
                  onChangeText={onChangeTextCode}
                  placeholder={placeholderForCode}
                  placeholderTextColor={placeholderTextColor1}
                  style={[{ fontSize: 16, padding: 0 }]}
               />
            </View> : null
         }
         <TextInput
            {...otherTextInputProps}
            placeholder={placeholder}
            value={value}
            blurOnSubmit={blurOnSubmit}
            multiline={multiline}
            autoFocus={autoFocus}
            selectionColor={selectionColor ? selectionColor : 'black'}
            onSubmitEditing={onSubmitEditing}
            underlineColorAndroid={'transparent'}
            editable={editable}
            placeholderTextColor={placeholderTextColor1}
            ref={InputRef}
            inputAccessoryViewID={inputAccessoryViewID}
            style={[styles.textStyle, style, {}]}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            maxLength={maxLength || 500}
         />
         {rightIcon ?
            <TouchableOpacity activeOpacity={onPressRightIcon ? 0.5 : 1} onPress={onPressRightIcon} style={rightIconStyle}>
               <Image
                  source={rightIcon}
                  style={rightImageStyle.style}
               />
            </TouchableOpacity>
            : null
         }
      </View>
   );
}

export default InputField;

/**component styling */
const styles = StyleSheet.create({
   container: {
      height: 48,
      flexDirection: 'row',
      marginHorizontal: 35,
      borderWidth: 1,
      borderRadius: 15,
      paddingHorizontal: 15,
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20,
      backgroundColor: '"#FFFFFF66"',
      borderColor: '#C2C8CF'
   },
   textStyle: {
      flex: 1,
      fontSize: 16,
      paddingRight: 10,
      color: 'black',
   },
   leftView: {
      marginEnd: 15,
      paddingRight: 15,
      marginVertical: 8,
      flexDirection: "row",
      alignItems: 'center',
      borderRightWidth: 0.7,
      borderRightColor: 'gray',
   },
})