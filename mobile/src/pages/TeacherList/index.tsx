import React , {useState}from 'react';
import { View, ScrollView, Text }from 'react-native';
import { TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';

import {Feather} from '@expo/vector-icons';

import Pageheader from '../../components/PageHeader';
import TeacherItem , {Teacher} from '../../components/TeacherItem';

import api from '../../services/api';

import styles from './styles';


function TeacherList(){
    const [isFiltersVisible,setisFiltersVisible ] = useState(false);
    
    const [subject, setSubject] = useState('');
    const [week_day, setWeek_day] = useState('');
    const [time, setTime] = useState('');

    const [teachers, setTeachers] = useState([]);


    function handleToggleFiltersVisible(){
        setisFiltersVisible(!isFiltersVisible);
    }
    
    async function handleFilterSubmit(){
        const response = await api.get('classes', {
            params: {
                subject, 
                week_day,
                time
            }
        });

        console.log(response.data);

        setTeachers(response.data);
        setisFiltersVisible(!isFiltersVisible);

    }
    return(
        <View style={styles.container}>
            <Pageheader 
                title="Proffs disponiveis" 
                headerRight={(
                    <BorderlessButton onPress={handleToggleFiltersVisible}>
                        <Feather name="filter" size={20} color="#FFF"/>
                    </BorderlessButton>
                )}
            >
                { isFiltersVisible && (
                <View style={styles.searchForm}>
                    <Text style={styles.label}>Matéria</Text>
                    <TextInput 
                        style={styles.input}
                        value={subject}
                        onChangeText={text => setSubject(text)}
                        placeholder="Qual a materia?"
                        placeholderTextColor="#c1bccc"
                    />

                    <View style={styles.inputGroup}>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Dia da Semana</Text>
                            <TextInput 
                                style={styles.input}
                                value={week_day}
                                onChangeText={text => setWeek_day(text)}
                                placeholder="Qual o dia?"
                                placeholderTextColor="#c1bccc"
                            />
                        </View>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Horario</Text>
                            <TextInput 
                                style={styles.input}
                                value={time}
                                onChangeText={text => setTime(text)}
                                placeholder="Qual Horario?"
                                placeholderTextColor="#c1bccc"
                            />
                        </View>
                    </View>
                    <RectButton 
                        style={styles.submitButton}
                        onPress={handleFilterSubmit}
                    >
                        <Text style={styles.submitButtonText}>Filtrar</Text>
                    </RectButton>
                </View>
            )}
            </Pageheader>
            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal:16,
                    paddingBottom:16
                }}
            >   
                { teachers.map((teacher:Teacher) =>{
                    return <TeacherItem key={teacher.id} teacher={teacher}/>
                })}
            </ScrollView>
            
        </View>
    )
}
export default TeacherList;