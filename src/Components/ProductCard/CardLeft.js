import React from "react";
import { Text,View,Image } from "react-native";
import styles from './Card.style'
import Products from '../../Datas.json'

const CardLeft = (props) => {

        if(props.Product.id== Products.length -1){

        }else{
                return(


                        <View style={styles.card}>
                                <Image style={styles.productImage} source={{uri:props.Product.imgURL}} />
                                <Text style={styles.productTitle}>{props.Product.title}</Text>
                                <Text style={styles.productPrice}>{props.Product.price}</Text>
                                <Text style={styles.inStock}>{!props.Product.inStock &&'STOKTA YOK'}</Text>

                        </View>
        
                )
        }


        
    

}



export default CardLeft

