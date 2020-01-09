import React,{useEffect, useState} from 'react';
import { StyleSheet, Text, View,Button,AsyncStorage, Dimensions } from 'react-native';
import api from '../services/api'

import ModalQR from '../components/ModalQR'
import ModalReadQR from '../components/ModalReadQR'

export default function Console() {
   const [userId ,setUserId] = useState()
   const [user , setUser] = useState()
   useEffect(() => {
      getID()
      loadProfile()    
   }, []);

   async function loadProfile(){
      const response = await api.get(`/api/${userId}`)
     
      setUser(response.data)
   }
   async function getID(){
      AsyncStorage.getItem('user').then(storagedUser =>{
         const profile = storagedUser
         setUserId(profile);
      })
   }
   
   console.log(user)
   const cash = user ? user.cash : 0
  return(
      <View style={styles.containerDaddy}> 
         <Text style={styles.logo}>PayFest</Text>
         <View style={styles.container}>
            <View style={styles.boxMoney}>
               <Text style={styles.Money}>R$ {cash}</Text>
            </View>  
            <ModalQR/>
            <ModalReadQR/>
         </View>
      </View>
  )
}
const styles = StyleSheet.create({
   containerDaddy: {
      flex: 1,
      alignItems:"center",
      marginTop:30
   },
   container: {
      flex: 1,
      alignItems:"center",
      marginTop:20,
      paddingHorizontal:30
   },
   logo:{
      fontWeight:'bold',
      color:'#0080c0',
      fontSize:40
   },
   boxMoney:{
      alignSelf:'stretch',
      height:100,
      width: Dimensions.get('window').width,
      backgroundColor:'#0080c0',
      justifyContent:'center',
      paddingHorizontal:20
   },
   Money:{
      fontWeight:'bold',
      color:'#fff',
      marginBottom:7,
      fontSize:30
   },
   form:{
      alignSelf:'stretch',
      paddingHorizontal:30,
      marginTop:30
   },
   input:{
      borderWidth:1,
      borderColor:'#ddd',
      paddingHorizontal:20,
      fontSize:16,
      color:'#7c7c7c',
      height:44,
      marginBottom:20,
      borderRadius:2
   },
   buttom:{
      height:42,
      backgroundColor:'#0080c0',
      justifyContent:'center',
      alignItems:"center",
      borderRadius:2
   },
   buttonText:{
      color:'#fff',
      fontWeight:'bold',
      fontSize:16
   }
})
 