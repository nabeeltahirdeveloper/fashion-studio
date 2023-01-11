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
        alignItems:'center'

    },
    heading:{
        color:colors.orange,
        marginBottom:7
    },
    rightMainContainer:{
        display: 'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    inputContainer:{
        display: 'flex',
        flexDirection:'column',
        marginBottom:20
        
    },
    input:{
        width:550,
        height:50,
        backgroundColor:colors.white,
        border:'none',
        boxShadow: `1px 1px 10px ${colors.gray}`,
        paddingTop:12,
        paddingBottom:12,
        paddingLeft:8
    },
    inputHeading:{
        fontSize:20,
        fontWeight:'700',
        marginBottom:15
    },
    newUser:{
        width:'100%',
        color:colors.orange,
        fontSize:20,
        fontWeight:700
    },
    buttonContainer:{
        display:'flex',
        justifyContent:'space-between',
        width:'100%'
    },
    signupWithGoogleButton:{
        backgroundColor:colors.white,
        border:'none',
        boxShadow: `1px 1px 10px ${colors.gray}`,
        height:50,
        color:colors.orange,
        fontSize:20,
        fontWeight:700,
        display:'flex',
        alignItems:'center',
    },
    loginButton:{
        backgroundColor:colors.orange,
        border:'none',
        boxShadow: `1px 1px 10px ${colors.gray}`,
        width:200,
        height:50,
        color:colors.white,
        fontSize:20,
        fontWeight:700
    },
    forgotPasswordContainer:{
        width:'100%',
    },
    forgotPassword:{
        textAlign:'right',
        width:'100%',
        fontSize:20,
        fontWeight:700,
    }
}

export default style;