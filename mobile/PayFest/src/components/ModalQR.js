import React, { useState } from 'react';
import {Modal, Text, TouchableHighlight, View,StyleSheet} from 'react-native';

import Qrcode from './Qrcode'

export default function ModalQR() {
  const[modalVisible,setModalVisible] = useState(false)

  return (
    <View style={styles.container}>
        <Modal
          animationType={'fade'}
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}
          style={styles.Modal}
          >
            <View  style={styles.Modal}>
              <View style={styles.containerModal}>
                <Qrcode/>

                <TouchableHighlight
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                  style={styles.button}
                  >
                  <Text style={styles.buttonText}>Fechar</Text>
                </TouchableHighlight>
              </View>
            </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            setModalVisible(true);
          }}
          style={styles.button}
          >
          
          <Text style={styles.buttonText}>Receber</Text>
        </TouchableHighlight>
      </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  Modal:{
    flex:1,
    backgroundColor:'rgba(87,87,87,0.5)',
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal:50,
    paddingVertical:200
  },
  containerModal:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal:30,
    backgroundColor:'#fff',
    alignSelf:'stretch'
  },
  button:{
     height:36,
     backgroundColor:'#0080c0',
     alignItems:'center',
     justifyContent:'center',
     
     alignSelf:'stretch',
     paddingHorizontal:30
  },
  buttonText:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:16
  }

})
