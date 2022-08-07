import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import color from '../config/colors';

function EntryPage() {
  return (
    <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
        <View style={styles.HeaddingWrapper}>
            <Text style={styles.Heading}>Welocome !</Text>
            <Text style={styles.Heading}>CUT TIME before HAIR</Text>
        </View>
        <TouchableOpacity style={styles.Btn}>
            <Text style={styles.BtnText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.Btn, styles.SignUp]}>
            <Text style={styles.BtnText}>Sign Up</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 40,
    },
    logo: {
        width: 80,
        height: 80,
        resizeMode: 'cover',
        marginBottom: 30,
        borderRadius: 50,
    },
    HeaddingWrapper: {
        marginBottom: 40,
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
    },
    Heading: {
        fontSize: 20,
        fontWeight: 'bold',
        color: color.blackColor,
        marginBottom: 20,
    },
    Btn: {
        backgroundColor: color.blueColor,
        paddingHorizontal: 12,
        paddingVertical: 12,
        borderRadius: 4,        
        width: '75%',
        textAlign: 'center',
        marginTop: 20,
    },
    BtnText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: color.whiteColor,
        width: '100%',
        textAlign: 'center',
    },
    SignUp: {
        backgroundColor: color.greenColor,
    }
})

export default EntryPage;