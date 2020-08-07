import React from 'react';
import { View }from 'react-native';
import Pageheader from '../../components/PageHeader';

import styles from './styles';

function Favorites(){
    return(
        <View style={styles.container}>
            <Pageheader title="Meus proffs favoritos"/>
        </View>
    )
}
export default Favorites;