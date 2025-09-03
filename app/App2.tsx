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
                        <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Circle_file.487.png/1200px-Circle_file.487.png?20190329164217" }} style={{ width: 150, height: 150 }} />
                    </View>
                    <View style={{ flex: 2, alignItems: 'center', padding: 20 }}>
                        <Text style={{ fontWeight: 600, paddingTop: 10, fontSize: 27 }}>Grow</Text>
                        <Text style={{ paddingBottom: 20, fontWeight: 600, fontSize: 27 }}>Your Business</Text>
                        <Text style={{ textAlign: "center", fontWeight: 600 }}>We will help you to grow your business using online server</Text>
                    </View>
                    <View style={{ flex: 1, display: "flex", gap: 20, flexDirection: "row" }}>
                        <TouchableOpacity style={{ width: 100, height: 40, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, backgroundColor: "yellow" }} > LOGIN </TouchableOpacity>
                        <TouchableOpacity style={{ width: 100, height: 40, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, backgroundColor: "yellow" }} > SIGN UP </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, display: "flex", gap: 20, flexDirection: "row" }}>
                        <Text style={{ paddingBottom: 50, fontWeight: 600, fontSize: 20 }}>HOW WE WORK?</Text>
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
