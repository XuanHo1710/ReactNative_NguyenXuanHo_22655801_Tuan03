import { SafeAreaView, StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'

export default function App() {
    return (
        <SafeAreaView style={styles.container} >
            <View style={{ flex: 1, flexDirection: "column" }}>
                <View style={{ flex: 1, padding: 20 }}>
                    <Text style={{ fontWeight: 650, fontSize: 27 }}>LOGIN</Text>
                </View>
                <View style={{ flex: 2, alignItems: 'center', padding: 20, gap: 15 }}>
                    <Text style={{ width: 300, fontWeight: 500, display: "flex", alignItems: "center", gap: 5, paddingTop: 10, fontSize: 15, padding: 12, backgroundColor: "#ededeb" }}>
                        <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/18/18148.png" }} style={{ width: 20, height: 20 }} />
                        Name
                    </Text>


                    <Text style={{ width: 300, fontWeight: 500, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 5, paddingTop: 10, fontSize: 15, padding: 12, backgroundColor: "#ededeb" }}>
                        <Text style={{ display: "flex", alignItems: "center" }}>
                            <Image source={{ uri: "https://static.thenounproject.com/png/10982-200.png" }} style={{ width: 30, height: 20 }} />
                            Password
                        </Text>
                        <Image source={{ uri: "https://www.freeiconspng.com/thumbs/eye-icon/eye-of-a-human-vector-icon--shapes-icons--icons-download-19.png" }} style={{ width: 20, height: 20 }} /></Text>

                    <View style={styles.container}>

                    </View>
                </View>
                <View style={{ flex: 4, gap: 30, alignItems: "center" }}>
                    <TouchableOpacity style={{ width: 300, height: 40, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, backgroundColor: "black", color: "white", fontSize: 20 }} > LOGIN </TouchableOpacity>
                    <Text style={{ textAlign: "center", fontWeight: 600, fontSize: 20 }}>CREATE ACCOUNT</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#ffda73"
    }
});
