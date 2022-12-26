import colors from "../colors"

const style = {

    footerContainer:{
        width: '100%',
        height: 392,
        backgroundColor:colors.orange,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 140,
        paddingRight: 140,
    },
    logoStyle:{
        width: 300,
        height: 100,
    },
    leftSide:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:56
    },
    text:{
        width: 390,
    },
    footerTabs:{
        marginLeft: 140,
    },
    rightSide:{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
    input:{
        backgroundColor: colors.white,
        width: '100%',
        height: 30,
        borderRadius: 5,
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        border: 'none',
    },
    firstName:{
        width: '45%'
    },
    lastName:{
        width: '45%',
    },
    nameContainer:{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 14,
    },
    email:{
        marginBottom: 14,
    },
    subject:{
        borderRadius : '5px 5px 0px 0px',
        borderBottom: `1px solid ${colors.lightGray} `,
    },
    message:{
        height: 130,
        borderRadius : '0px 0px 5px 5px',
    },
    button:{
        backgroundColor: colors.darkOrange,
        color: colors.white,
        width: '100%',
        height: 30,
        borderRadius: 5,
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        border: 'none',
        marginTop: 14,
    },

}


export default style