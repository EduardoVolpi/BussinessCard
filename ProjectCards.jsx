import { View, Text, Image } from 'react-native';

// TODO FUNÇÃO PROJECT CARD
 export default function ProjectCard(props) {
   return (
     <View>
       <Image
         source={props.imagem}
         style={{
           height: 150,
           aspectRatio: 16 / 9,
           borderRadius: 10,
           marginTop: 20,
           marginBottom: 10,
         }}
       />
       <Text style={{ fontSize: 18, textAlign: 'center', color: '#7e7e7e' }}>{props.name}</Text>
     </View>
   );
 }