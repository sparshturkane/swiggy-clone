import { SafeAreaView, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

function HomeScreen() {
    const navigation = useNavigation();
    return (
        <SafeAreaView className="flex-1 items-center justify-center">
            <Text className="text-red-500">Home Screen</Text>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

export default HomeScreen;