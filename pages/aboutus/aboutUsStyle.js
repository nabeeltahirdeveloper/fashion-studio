import colors from "../../components/colors";

const style = {
    container: {
        display: 'flex',
        width:'100%',
        justifyContent:'center',
        height:'60vh'
    },
    leftContainer:{
        display: 'flex',
        justifyContent: 'center',
        flex:1
    },
    rightContainer:{
        display: 'flex',
        flex:1,
        justifyContent:'center',
        // alignItems:'center'

    },
    rightMainContainer:{
        display: 'flex',
        flexDirection:'column',
        // justifyContent:'center',
        alignItems:'center',
    },
    heading:{
        color:colors.orange,
        marginBottom:7
    },
    privacyText:{
        color:colors.gray,
        fontSize:32,
        fontWeight:400,
        width:605
    }
}

export default style;