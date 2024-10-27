import { Entypo } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Index() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.heading}>Explore now</Text>
                    <Text style={styles.subText}>
                        Join SO today.
                    </Text>
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
                        <Entypo name="app-store" size={35} color="black" />
                        <Text style={styles.socialText}>Continue with Apple</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.separator}>
                    <View style={styles.line}></View>
                    <Text style={styles.orText}>or</Text>
                    <View style={styles.line}></View>
                </View>
                {/* <View style={styles.upfooter}> */}
                <TouchableOpacity style={styles.createaccount}>
                    <Text style={styles.createaccounttext}>Continue account</Text>
                </TouchableOpacity>
                <Text style={styles.text}>Already have an account?</Text>
                <TouchableOpacity style={styles.signbtn}>
                    <Link href={"/signin"} style={styles.signbtnText}>Sign in</Link>
                </TouchableOpacity>
                {/* </View> */}

                <View style={styles.footer}>
                    <Text style={styles.footertext}>
                        By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use
                    </Text>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ffffff',
    },
    header: {
        paddingTop: 40,
        paddingBottom: 20,
    },
    heading: {
        fontWeight: "bold",
        fontSize: 52,
    },
    subText: {
        paddingTop: 5,
        fontSize: 26.16,
        fontWeight: "bold",
    },
    socialContainer: {
        alignItems: 'center',
        paddingVertical: 5
    },
    socialButton: {
        backgroundColor: '#fff',
        width: 340,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginVertical: 8,
        borderWidth: 1,
        borderColor: 'gray',
    },
    socialText: {
        fontSize: 19,
    },
    icon: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    separator: {
        color: '#F0ECF3',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 8
    },
    line: {
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        flex: 1,
        marginHorizontal: 10,
    },
    orText: {
        fontSize: 20,
        paddingBottom: 3
    },
    createaccount: {
        backgroundColor: '#0098FF',
        width: 330,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginVertical: 10,
    },
    createaccounttext: {
        fontSize: 20,
        paddingBottom: 3,
        color: '#ffffff',
        fontWeight: "bold"
    },
    text: {
        paddingTop: 15,
        fontWeight: "bold",
        fontSize: 17,
        paddingBottom: 10
    },
    signbtn: {
        backgroundColor: '#fff',
        width: 320,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginVertical: 8,
        borderWidth: 1,
        borderColor: 'gray',
    },
    signbtnText: {
        fontSize: 19,
        fontWeight: 'bold',
        color: "#0098FF"
    },
    footer: {
        flex: 1,
        marginHorizontal: 10,
        justifyContent: "flex-end"
    },
    footertext: {
        textAlign: "center",
        backgroundColor: "#ffff",
        color: 'gray'
    }
});