import { View, Text, Button } from 'react-native';
import {useState} from 'react';

const VotaCidade = () => {
    let cid = {
        Quixadá: 0,
        Quixeramobim: 0,
        Ibicuitinga: 0
    };

    let setQxd, setQxr, setIbc, res, setRes;

    [cid.Quixadá, setQxd] = useState(0);
    [cid.Quixeramobim, setQxr] = useState(0);
    [cid.Ibicuitinga, setIbc] = useState(0);
    [res, setRes] = useState(null);
    
    const resultado = () => {
        let vencedor = [];

        for (let i = 0; i < Object.keys(cid).length; i++) {
            if (Object.values(cid)[i] == Math.max(...Object.values(cid))) {
                vencedor.push(Object.keys(cid)[i]);
            }
        }

        setRes(vencedor.length > 1 ?
            "Empate entre: " + vencedor.toString() :
            "O vencedor é: " + vencedor.toString()
        )
    }
    
    return (
        <View>
            <View>
                <Text style={{fontSize:20,fontWeight:'bold'}}>Quixadá: {cid.Quixadá}</Text>
                <Text style={{fontSize:20,fontWeight:'bold'}}>Quixeramobim: {cid.Quixeramobim}</Text>
                <Text style={{fontSize:20,fontWeight:'bold'}}>Ibicuitinga: {cid.Ibicuitinga}</Text>
            </View>
            <View
                style={{
                    flex:1,
                    flexDirection:'row'
                }}
            >
                <View style={{margin:5}}>
                    <Button title='Quixadá' onPress = {() => setQxd(cid.Quixadá + 1)}/>
                </View>
                <View style={{margin:5}}>
                    <Button title='Quixeramobim' onPress = {() => setQxr(cid.Quixeramobim + 1)}/>
                </View>
                <View style={{margin:5}}>
                    <Button title='Ibicuitinga'onPress = {() => setIbc(cid.Ibicuitinga + 1)}/>
                </View>
            </View>
            <View style = {{margin:5}}>
                <Button title = "Resultado" onPress = {resultado}/>
            </View>
            <Text style = {{fontSize:20, fontWeight:"bold"}}>{res}</Text>
        </View>
    )
}
export default VotaCidade
