import colors from "../../components/colors";

const style = {
    mainContainer: { display: 'flex', width: '100%' },
    leftContainer: { 
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap:23
     },
    productMainImage: {
        height: 450,
        width: 'auto',
    },
    bottomImages:{
        width:75,
        height:75,
    },
    bottomContainer:{
        display:'flex',
        gap:23, 
        marginBottom:23
    },
    arrowIcon:
        {
            width:75,
            height:75,
            color: colors.orange
        }
    ,
    rightContainer: { flex: 1 },


}

export default style;