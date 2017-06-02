import React,{Component} from 'react';
import {View,Text} from 'react-native';

class SingleItem extends Component{
constructor(props){
super(props);

}
      static navigationOptions={
        title:"Package",
        state:{
            params:{
                name:"something"
            }
        }
    }
    
    render(){
        const {params}=this.props.navigation.state;
        return(
            <View>
                
                <Text>
                 {/*{params.name}*/}
                 placeholder
                </Text>
            </View>
        );
    }
}
// SingleItem.defaultProps={
//     name:'Samosa'
// }

export default SingleItem;