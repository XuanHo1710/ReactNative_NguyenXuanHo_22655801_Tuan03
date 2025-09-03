import { SafeAreaView, StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'

export default function App() {
    return (
        <SafeAreaView style={styles.container} >
            <LinearGradient
                colors={['#e0f7fa', '#e0f7fa', '#45bfff']}
                style={styles.container}
            >
                <View style={{ flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <View style={{ flex: 2, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/61/61457.png" }} style={{ width: 150, height: 150 }} />
                    </View>
                    <View style={{ flex: 2, alignItems: 'center', padding: 20 }}>
                        <Text style={{ fontWeight: 600, paddingTop: 10, fontSize: 27 }}>FORGET</Text>
                        <Text style={{ paddingBottom: 20, fontWeight: 600, fontSize: 27 }}>PASSWORD</Text>
                        <Text style={{ textAlign: "center", fontWeight: 600 }}>Provide your account's email for which you want to reset your password</Text>
                    </View>
                    <View style={{ flex: 1, gap: 30 }}>
                        <Text style={{ fontWeight: 500, display: "flex", alignItems: "center", gap: 5, paddingTop: 10, fontSize: 15, padding: 10, backgroundColor: "#b8c0c2" }}><Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/542/542638.png" }} style={{ width: 20, height: 20 }} /> Email</Text>
                        <TouchableOpacity style={{ width: 300, height: 40, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, backgroundColor: "yellow" }} > NEXT </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, display: "flex", gap: 20, flexDirection: "row" }}>

                    </View>
                </View>
            </ LinearGradient>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    }
});
