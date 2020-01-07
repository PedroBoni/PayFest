import React, { useState,useEffect } from 'react';

import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
// import all basic components
import QRCode from 'react-native-qrcode-svg';

 export default function Qrcode(){
    return(
      <QRCode
      //QR code value
      value={'Hello World'}
      //size of QR Code
      size={250}
      //Color of the QR Code (Optional)
      color="black"
      //Background Color of the QR Code (Optional)
      backgroundColor="white"
      //Logo of in the center of QR Code (Optional
      style={styles.qrcode}
   />
   
    )
 }
const styles = StyleSheet.create({
  qrcode:{
     marginVertical:10
  }
});