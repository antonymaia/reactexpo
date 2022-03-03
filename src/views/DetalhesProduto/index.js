import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const DetalhesProduto = ({ route }) => {
    const { imagem, estudio, itemDesc, itemName, titulo, preco, id } = route.params;
    return (
        <View style={style.container}>
            <Background/>
            <DescricaoItem/>
        </View>
    );
};

const style = StyleSheet.create({
    container:{
        flex: 1,
    }
});