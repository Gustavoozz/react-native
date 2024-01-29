import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

const Games = ({ name, releaseDate, genre, price }) => {
    return(
        <View style={styles.container}>

        <Text style={styles.gameTitle}> {name} </Text>
        <Text style={styles.text}> Release date: {releaseDate} </Text>
        <Text style={styles.text}> Game genre: {genre} </Text>
        <Text style={styles.text}> Price: {price} </Text>

        <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>BUY</Text>
        </TouchableOpacity>

      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D0D0D0',
        padding: 10,
        margin: 10,

        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
      },

      gameTitle: {
        color: 'red',
        fontSize: 30,
        fontFamily: 'Poppins_500Medium'
      },
    
      text: {
        fontSize: 30,
        color: 'white',
        fontFamily: 'Poppins_300Light',
      },

      button: {
        marginTop: 10,  
        width: '70%',
        height: 40,
        backgroundColor: 'grey',

        borderRadius: 9,
        marginTop: 18,
        marginBottom: 10,
        justifyContent: 'center',

        alignItems: 'center',
      },

      textButton: {
        color: 'white',
        fontSize: 24,
      },
    })
    
export default Games;
