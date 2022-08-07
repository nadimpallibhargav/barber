import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TouchableHighlight, TextInput } from 'react-native';
import color from '../config/colors';

function LoginPage() {

    const [UserName, setUserName] = React.useState("");
    const [Password, setPassword] = React.useState("");

    return (
        <View style={styles.container}>
            <View style={styles.HeaddingWrapper}>
                <Text style={styles.Heading}>Log In</Text>
            </View>
            <View style={styles.textWrapper}>
                <Text style={styles.InputLabel}>User Name</Text>
            </View>
            <TextInput style={styles.input} value={UserName} onChangeText={setUserName} />
            <View style={styles.textWrapper}>
                <Text style={styles.InputLabel}>Password</Text>
            </View>
            <TextInput style={styles.input} value={Password} onChangeText={setPassword} />
            <View style={styles.textWrapper}>
                <Text style={styles.InputLabel}>Forgot Password ?</Text>
            </View>
            <View style={[styles.textWrapper, styles.signUpText]}>
                <Text style={styles.InputLabel}>Don't Have Acoount </Text>
                <TouchableHighlight><Text style={[styles.InputLabel, styles.linkText]} >SIGN UP</Text></TouchableHighlight>
            </View>
            <TouchableOpacity style={styles.Btn}>
                <Text style={styles.BtnText}>Log In</Text>
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
        marginVertical: 12,
    },
    HeaddingWrapper: {
        marginBottom: 40,
        display: 'flex',
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
        marginTop: 20,
    },
    BtnText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: color.whiteColor,
        width: '100%',
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: color.blackColor,
        padding: 10,
        height: 40,
        width: '75%',
        borderRadius: 4,
        marginBottom: 20
    },
    textWrapper: {
        width: "75%",
        marginBottom: 10
    },
    InputLabel: {
        fontSize: 16,
    },
    signUpText: {
        marginBottom: 100,
        flexDirection: 'row',
    },
    linkText: {
        color: color.blueColor,
    }
})

export default LoginPage;