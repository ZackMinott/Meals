import {Image, Platform, Pressable, StyleSheet, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import MealDetails from "./MealDetails";


function MealItem({title, imageURL, duration, complexity, affordability, mealId}) {

    const navigation = useNavigation();

    function pressHandler(){
        navigation.navigate("MealDetails", {
            mealId: mealId
        });
    }

    return (
        <View style={styles.mealItem}>
            <Pressable android_ripple={{color: '#ccc'}}
                       style={({pressed}) => ( pressed ? styles.buttonPressed :null)}
                       onPress={pressHandler}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image style={styles.image} source={{uri: imageURL}}/>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetails duration={duration} complexity={complexity} affordability={affordability} />
                </View>
            </Pressable>
        </View>
    )
}

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        mealItem: 4,
        shadowColor: 'black',
        shadowRadius: 8,
        shadowOpacity: 0.4,
        shadowOffset: {width: 0, height: 2},
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200
    },
    buttonPressed: {
        opacity: 0.5
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },

})