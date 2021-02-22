import React from 'react';
import {View, Text} from 'react-native'
import styles from './styles'
import BikeButton from "../StyledButton";

const BikeItem = (props) => {
    
    const {name,tagline,taglineCTA,image} =props.bike;
    
    return(
      
        <View style={styles.bikeContainer}>

          <ImageBackground 
            source={image}
            style={styles.image} />

          <View style={styles.titles}>
            <Text style={styles.title}>{name}</Text>
              <Text style={styles.subtitle}>{tagline}</Text>

          </View>
        <View styles={styles.buttonContainer}>

          <BikeButton type='primary' content={'Custom Order'} onPress={()=> {console.warn('')}} />
          <BikeButton type='secondary' content={'Existing Inventory'} onPress={()=> {console.warn('')}} />
        </View>
        
        </View>

       
 
    )



}
export default BikeItem;