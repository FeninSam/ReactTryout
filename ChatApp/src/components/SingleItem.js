import React,{Component} from 'react';
import {View,Text} from 'react-native';

class SingleItem extends Component{
    render(){
        return(
            <View>
                <Text>
                 {this.props.name}
                </Text>
            </View>
        );
    }
}
SingleItem.defaultProps={
    name:'B'
}
SingleItem.propTypes={
    name:React.PropTypes.string
}
export default SingleItem;