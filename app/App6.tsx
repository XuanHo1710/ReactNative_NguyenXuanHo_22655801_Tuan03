import { SafeAreaView, StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'

export default function App() {
    return (
        <SafeAreaView style={styles.container} >
            <View style={{ flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <View style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ fontWeight: 650, fontSize: 27 }}>REGISTER</Text>
                </View>
                <View style={{ flex: 5, alignItems: 'center', padding: 20, gap: 15 }}>
                    <Text style={{ width: 300, fontWeight: 500, display: "flex", alignItems: "center", gap: 5, paddingTop: 10, fontSize: 15, padding: 12, backgroundColor: "#e3e3e3" }}>Name</Text>
                    <Text style={{ width: 300, fontWeight: 500, display: "flex", alignItems: "center", gap: 5, paddingTop: 10, fontSize: 15, padding: 12, backgroundColor: "#e3e3e3" }}>Phone</Text>
                    <Text style={{ width: 300, fontWeight: 500, display: "flex", alignItems: "center", gap: 5, paddingTop: 10, fontSize: 15, padding: 12, backgroundColor: "#e3e3e3" }}>Email</Text>
                    <Text style={{ width: 300, fontWeight: 500, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 5, paddingTop: 10, fontSize: 15, padding: 12, backgroundColor: "#e3e3e3" }}>Password <Image source={{ uri: "https://www.freeiconspng.com/thumbs/eye-icon/eye-of-a-human-vector-icon--shapes-icons--icons-download-19.png" }} style={{ width: 20, height: 20 }} /></Text>
                    <Text style={{ width: 300, fontWeight: 500, display: "flex", alignItems: "center", gap: 5, paddingTop: 10, fontSize: 15, padding: 12, backgroundColor: "#e3e3e3" }}>Birthday</Text>
                    <View style={styles.container}>
                        <View style={{ display: "flex", flexDirection: "row", gap: 20 }}>
                            <TouchableOpacity style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 5 }} >
                                <View style={{ width: 20, height: 20, borderRadius: "50%", border: "2px solid #000" }} />
                                <Text>Male</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 5 }} >
                                <View style={{ width: 20, height: 20, borderRadius: "50%", border: "2px solid #000" }} />
                                <Text>Female</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 2, gap: 15 }}>
                    <TouchableOpacity style={{ width: 300, height: 40, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, backgroundColor: "#fa5555", color: "white" }} > REGISTER </TouchableOpacity>
                    <Text style={{ textAlign: "center" }}>When you agree to terms and conditions</Text>
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
