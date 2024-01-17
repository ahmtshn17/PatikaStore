import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({

    card:{
        backgroundColor:"#ECEFF1",
        width: Dimensions.get("window").width /2 -20,
        height: Dimensions.get("window").height /2.5,
        borderRadius:10,
        padding:15,
        margin:10
      }, 
      productImage:{
        width: Dimensions.get("window").width /2 -45,
        height: Dimensions.get("window").height /4.4,
        alignSelf:"center",
        borderRadius:10,
      },
      productTitle:{
        fontWeight:"bold",
        color:"black",
        marginTop:5
      },
      productPrice:{
        fontWeight:"bold",
        marginTop:5,
        fontSize:12
      },
      cardLarge:{
        backgroundColor:"#ECEFF1",
        width: Dimensions.get("window").width /1 - 20,
        height: Dimensions.get("window").height /2.65,
        borderRadius:10,
        padding:15,
        margin:10
      },
      productImageLarge:{
        width: Dimensions.get("window").width /1 -80,
        height: Dimensions.get("window").height /4.4,
        alignSelf:"center",
        borderRadius:10,
      },
      inStock: {
        fontWeight:'bold',
        color:'red'
      }
})