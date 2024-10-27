import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Index() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headertext1}>Welcome to SO</Text>
                    <Text style={styles.headertext2}>Login or Sign up to access your account</Text>
                </View>
                <View>
                    
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        flex: 1,
        padding: 40,
        textAlign: "center"
    },
    headertext1: {
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold"
    },
    headertext2: {
        textAlign: "center",
        fontSize: 15,

    }
})