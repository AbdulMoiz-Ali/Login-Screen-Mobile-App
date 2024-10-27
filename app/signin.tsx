import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Entypo from '@expo/vector-icons/Entypo';
import { Link } from "expo-router";

export default function Index() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.heading}>Sign in</Text>
                    <Text style={styles.subText}>
                        New user? <Link href={"/signup"} style={styles.linkText}>Create an account</Link>
                    </Text>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Email address</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your email"
                        placeholderTextColor="#888"
                    />
                    <TouchableOpacity style={styles.signInButton}>
                        <Text style={styles.buttonText}>Continue</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.separator}>
                    <View style={styles.line}></View>
                    <Text style={styles.orText}>or</Text>
                    <View style={styles.line}></View>
                </View>

                <View style={styles.socialContainer}>
                    <TouchableOpacity style={styles.socialButton}>
                        <Image
                            style={styles.icon}
                            source={require('@/assets/images/Social_Icons.png')}
                        />
                        <Text style={styles.socialText}>Continue with Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialButton}>
                        <Image
                            style={styles.icon}
                            source={require('@/assets/images/Frame.png')}
                        />
                        <Text style={styles.socialText}>Continue with Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialButton}>
                        <Entypo name="app-store" size={35} color="black" />
                        <Text style={styles.socialText}>Continue with Apple</Text>
                    </TouchableOpacity>
                </View>

                <Image
                    style={styles.footerImage}
                    source={require('@/assets/images/pavlovvisuals.png')}
                />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'rgb(240, 236, 243)',
    },
    header: {
        paddingTop: 40,
        paddingBottom: 20,
    },
    heading: {
        fontWeight: "bold",
        fontSize: 32,
    },
    subText: {
        paddingTop: 10,
        fontSize: 15,
    },
    linkText: {
        fontSize: 15,
        color: "#0098FF",
        fontWeight: "bold"
    },
    inputContainer: {
        marginBottom: 10,
    },
    label: {
        fontSize: 17,
    },
    input: {
        borderBottomColor: '#000',
        borderBottomWidth: 2,
        paddingVertical: 5,
        marginBottom: 15,
    },
    signInButton: {
        alignItems: 'center',
        backgroundColor: '#000',
        padding: 10,
        width: 130,
        borderRadius: 10,
        alignSelf: 'flex-end',
    },
    buttonText: {
        color: '#fff',
        fontWeight: "bold",
    },
    separator: {
        color: '#F0ECF3',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 7,
    },
    line: {
        borderBottomColor: '#000',
        borderBottomWidth: 2,
        flex: 1,
        marginHorizontal: 10,
    },
    orText: {
        fontSize: 20,
    },
    socialContainer: {
        alignItems: 'center',
    },
    socialButton: {
        backgroundColor: '#fff',
        width: 340,
        height: 51,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginVertical: 5,
    },
    socialText: {
        fontSize: 19,
    },
    icon: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    footerImage: {
        width: '100%',
        resizeMode: 'contain',
        flex: 0,
    },
});