import { Text, View, StyleSheet } from 'react-native'


const Person = ({ name, age }) => { 
    return(
      <View style={styles.container}>
        <Text style={styles.text}> Name: {name} </Text>
        <Text style={styles.text}> Age: {age} </Text>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D0D0D0',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    justifyContent: 'center',
  },

  text: {
    fontSize: 30,
    color: 'white',
    fontFamily: 'Poppins_300Light',
  }
})

export default Person;