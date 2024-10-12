import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity,Linking } from 'react-native';
import Colors from '../config/Colors';

function Documentation({ navigation }) {

    const openExternalLink = (url) => {
        Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
    };

    return (
        <View style={styles.container}>
            
            <View style={styles.contentContainer}>
                <Text style={styles.sectionTitle}>Contraception Hormonale</Text>
                <Text style={styles.description}>
                    La prise de contraceptifs hormonaux peut légèrement augmenter le risque de cancer du sein en raison de l'influence des hormones comme les œstrogènes. Cependant, les risques et les avantages varient selon l'âge et d'autres facteurs personnels.
                </Text>
                <TouchableOpacity onPress={() => openExternalLink('https://www.hck.ma/fr/info-sante/focus-sur-le-cancer-du-sein-de-la-prevention-aux-m/?page=4')}>
                    <Text style={styles.link}>En savoir plus</Text>
                </TouchableOpacity>
                
                <Text style={styles.sectionTitle}>Le dépistage</Text>
                <Text style={styles.description}>
                    Le dépistage précoce par mammographie permet de détecter le cancer du sein à un stade où il est plus facile à traiter. Les méthodes de dépistage sont essentielles pour réduire la mortalité liée au cancer du sein.
                </Text>
                <TouchableOpacity onPress={() => openExternalLink('https://www.hck.ma/fr/info-sante/focus-sur-le-cancer-du-sein-de-la-prevention-aux-m/?page=4')}>
                    <Text style={styles.link}>En savoir plus</Text>
                </TouchableOpacity>
                
                <Text style={styles.sectionTitle}>L'allaitement</Text>
                <Text style={styles.description}>
                    Allaiter réduit le risque de développer un cancer du sein, car cela diminue le nombre de cycles menstruels d'une femme et donc son exposition aux hormones associées à un risque plus élevé de cancer.
                </Text>
                <TouchableOpacity onPress={() => openExternalLink('https://www.hck.ma/fr/info-sante/focus-sur-le-cancer-du-sein-de-la-prevention-aux-m/?page=4')}>
                    <Text style={styles.link}>En savoir plus</Text>
                </TouchableOpacity>

                <Text style={styles.sectionTitle}>Le tabac et l'alcool</Text>
                <Text style={styles.description}>
                    La consommation d'alcool et de tabac sont des facteurs de risque importants pour le cancer du sein. La réduction ou l'arrêt de leur consommation diminue les risques.
                </Text>
                <TouchableOpacity onPress={() => openExternalLink('https://www.hck.ma/fr/info-sante/focus-sur-le-cancer-du-sein-de-la-prevention-aux-m/?page=4')}>
                    <Text style={styles.link}>En savoir plus</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.background,
        padding: 20,
    },
    contentContainer: {
        width: '100%',
        justifyContent: 'flex-start',
        marginLeft: 20,
    },
    sectionTitle: {
        fontSize: 18,
        color: Colors.textcolor,
        marginVertical: 5,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 16,
        color: Colors.textcolor,
        marginVertical: 5,
    },
    link: {
        fontSize: 16,
        color: 'blue',
        marginVertical: 10,
        textDecorationLine: 'underline',
    },
    articleImage: {
        width: 350,
        height: 150,
        marginBottom: 20,
        borderRadius: 10,
    },
});

export default Documentation;
