import React from 'react';
import { View }from 'react-native';
import Pageheader from '../../components/PageHeader';

import styles from './styles';

function TeacherList(){
    return(
        <View style={styles.container}>
            <Pageheader title="Proffs disponiveis"/>
        </View>
    )
}
export default TeacherList;