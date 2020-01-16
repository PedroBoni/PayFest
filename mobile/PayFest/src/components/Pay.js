import React,{useEffect, useState} from 'react'
import { StyleSheet, Text, View,AsyncStorage,TextInput,TouchableOpacity } from 'react-native'

import api from '../services/api'

export default function Pay() {
//STATES//
   const [value,setValue] = useState()
   const [idReceptor,setIdReceptor] = useState()
   const [idPay,setIdPay] = useState('5e1216336c685a22bc98f72f')
   //const getID = async()=>{ await AsyncStorage.getItem('user').then(storagedUser => {setIdPay(storagedUser)})}
   
   /*useEffect(()=>{
      if(idPay == undefined){
         getID()
      }
   },[])
console.log(value)
console.log(idReceptor)
console.log(idPay)*/
const PayFunction =  async () =>{
   const a = value
   const b = idPay
   const c = idReceptor
try{
   const response = await api.put('/pay',{
      idPay:b,
      value:a,
      idReceptor:c
   })
}
catch(err){
   console.log(err)
}
   console.log(response.status)
   console.log(response.data)

}  
   async function handleSubmit(){
      console.log('funcao chamada')
      PayFunction(   )
   }
   return(
      <View style={styles.form}>
         <Text style={styles.label}>ID RECEPTOR</Text>
         <TextInput
            style={styles.input}
            placeholder="Id do Receptor"
            placeholderTextColor='#7c7c7c'
            autoCapitalize="none"
            autoCorrect={false}
            value={idReceptor}
            onChangeText={setIdReceptor}
         />
         <Text style={styles.label}>CASH</Text>
         <TextInput
            style={styles.input}
            placeholder="Cash"
            placeholderTextColor='#7c7c7c'
            keyboardType='number-pad'
            autoCapitalize="none"
            autoCorrect={false}
            value={value}
            onChangeText={setValue}
         />
         <TouchableOpacity style={styles.buttom} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Pagar</Text>
         </TouchableOpacity>
      </View>
   )
}
const styles = StyleSheet.create({
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
