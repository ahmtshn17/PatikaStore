import React from "react";
import { Text,StyleSheet,SafeAreaView,TextInput,View,Dimensions,FlatList,Image } from "react-native";
import Products from './Datas.json'
import CardLeft from "./Components/ProductCard/CardLeft";
import CardStyle from './Components/ProductCard/Card.style'


function App(){

  return(
    <SafeAreaView style={styles.container}>

      <Text style={styles.logo}>PATİKASTORE</Text>
      <TextInput style={styles.input}
          placeholder="Ara..."
        />
        


        <FlatList data={Products} renderItem={data => <CardLeft Product={data.item}/>} numColumns={2}
         ListFooterComponent={
          <View style={CardStyle.cardLarge}>
            <Image style={CardStyle.productImageLarge} source={{uri:Products[Products.length-1].imgURL}} />
            <Text style={CardStyle.productTitle}>{Products[Products.length-1].title}</Text>
            <Text style={CardStyle.productPrice}>{Products[Products.length-1].price}</Text>
          </View>
         }/> 


    </SafeAreaView>

  );
}


const styles = StyleSheet.create({
  container:{
    backgroundColor:"white",
    flex:1,
    flexDirection:"column",
  },
  logo:{
    fontWeight:"bold",
    fontSize:25,
    margin:15,
    marginBottom:0,
    marginTop:10,
    color:"#800080"
  }, 
  input: {
    height: 40,
    margin: 15,
    padding: 10,
    borderRadius:10,
    backgroundColor:"#ECEFF1"
  },


})

export default App


