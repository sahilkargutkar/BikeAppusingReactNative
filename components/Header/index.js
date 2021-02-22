import React from 'react'
import {View,Image} from 'react-native';
import styles from './styles';


const Header =(props) =>{

    return(
        <View style={styles.container}>

        <Image style={style.logo} source={require('../../assets/image/')  } />
        <Image style={style.menu} source={require('../../assets/image/')  } />
        </View>




    )



}
export default Header