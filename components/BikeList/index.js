import React from 'react'
import {View,Text, FlatList, Dimensions} from 'react-native'
import bikes from './bike' 
import styles   from "./styles";
import BikeItem from '../BikeItem'

const BikeList= (props) =>{

    return(

        <View style={styles.container}>
        
        <FlatList 
            data={bikes}
            renderItem={({item})=> <BikeItem bike={item}/>}
            showsVerticalScrollIndicator={false}
            snapToAlignment={'start'}
            decelerationRate={'fast'}
            snapToInterval={Dimensions.get('window').height}
        />
        </View>



    )


}