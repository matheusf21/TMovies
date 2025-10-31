import { View, Text, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Image, Dimensions  } from 'react-native'
import React from 'react'
import { styles } from '../theme'
import { useNavigation } from '@react-navigation/native';

var { width, height } = Dimensions.get('window'); {
    let movieName = "Joker: folie à Deux";
    const navigation = useNavigation();
    return (
        <View className="mb-9 space-y-4">
            <View className="mx-4 flex-row justify-between items-center">
                <Text className="text-white text-xl">{title}</Text>
                <TouchableOpacity>
                    <Text style={style.text} className="text-lg">Ver todos</Text>
                </TouchableOpacity>
            </View>
            <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 15}}
            >
                {
                    data.map((item, index) => {
                        return (
                            <TouchableWithoutFeedback
                            key={index}
                            onPress={() => navigation.navigate('Movie', item)}
                            >
                            
                              <View className="space-y-1 mr-4">
                                <Image
                                 source={require('../assets/images/moviePoster2.jpg')}
                                 className="rounded-2-xl"
                                 style={{ width: width * 0.35, height: height * 0.26}}
                                />
                                <Text className="text-neutral-300 ml-1 text-center">
                                    {
                                        movieName.lenght > 14 ? movieName.slice(0,14) + '...' : movieName
                                    }
                                </Text>
                              </View>

                            </TouchableWithoutFeedback>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}


    export default function MovieList({title, data}) {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  )
}