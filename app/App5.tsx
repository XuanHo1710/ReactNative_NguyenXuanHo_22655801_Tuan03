import { SafeAreaView, StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'

export default function App() {
    return (
        <SafeAreaView style={styles.container} >
            <View style={{ flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <View style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ fontWeight: 650, fontSize: 27 }}>LOGIN</Text>
                </View>
                <View style={{ flex: 2, alignItems: 'center', padding: 20, gap: 30 }}>
                    <Text style={{ width: 300, fontWeight: 500, display: "flex", alignItems: "center", gap: 5, paddingTop: 10, fontSize: 15, padding: 15, backgroundColor: "#e3e3e3" }}>Email</Text>
                    <Text style={{ width: 300, fontWeight: 500, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 5, paddingTop: 10, fontSize: 15, padding: 15, backgroundColor: "#e3e3e3" }}>Password <Image source={{ uri: "https://www.freeiconspng.com/thumbs/eye-icon/eye-of-a-human-vector-icon--shapes-icons--icons-download-19.png" }} style={{ width: 20, height: 20 }} /></Text>
                </View>
                <View style={{ flex: 2, gap: 15 }}>
                    <TouchableOpacity style={{ width: 300, height: 40, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, backgroundColor: "#fa5555", color: "white" }} > LOGIN </TouchableOpacity>
                    <Text style={{ textAlign: "center" }}>When you agree to terms and conditions</Text>
                    <Text style={{ textAlign: "center", color: "blue", fontWeight: "500" }}>Forgot your password?</Text>
                    <Text style={{ textAlign: "center" }}>Or login with</Text>
                </View>
                <View style={{ flex: 1, display: "flex", flexDirection: "row" }}>

                    <Image source={require("./img/footer.png")} style={{ width: 250, height: 33 }} />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: "#c1f7dd"
    }
});
