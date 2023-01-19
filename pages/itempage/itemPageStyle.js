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
    itemHeading:{
        fontSize: 32,
        fontWeight: 600,
    },
    priceContainer:{
        display:'flex',
        gap:22,
        alignItems:'center',
    },
    originalPrice:{
        fontSize: 32,
        fontWeight: 600,
        color: colors.orange,
    },
    oldPrice:{
        fontSize: 15,
        fontWeight: 600,
        color: colors.lightGray,
    },
    discount:{
        fontSize: 12,
        fontWeight: 400,
    },
    countButtonContainer:{
        display:'flex',
        gap:26,
        alignItems:'center',
    },
    countChangeButton:{
        width: 50,
        height: 50,
        backgroundColor: colors.orange,
        border: 'none',
        fontSize: 40,
        color: colors.white,
    }, 
    countButton:{
        width: 50,
        height: 50,
        fontSize: 40,
        color: colors.orange,
        border: '1px solid',
        borderColor: colors.orange,
        textAlign: 'center',
    },
    buyContainer:{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        gap: 116,
    },
    buyNowButton:{
        width: 250,
        height: 50,
        backgroundColor: colors.orange,
        border: 'none',
        color: colors.white,
        borderRadius: 10,
        fontSize: 24,
    },
    addToCartButton:{
        width: 250,
        height: 50,
        backgroundColor: colors.white,
        border: '1px solid',
        borderColor: colors.orange,
        color: colors.orange,
        borderRadius: 10,
        fontSize: 24,
    },
    releventItemsHeading:{
        fontSize: 24,
        fontWeight: 500,
    },
    releventItemsContainer:{
        display:'flex',
        gap:33,
        marginBottom: 33,
    },
    nextButtonIcon:{
        width: 45,
        height: 180,
        color: colors.orange,
        border: '1px solid',
        borderColor: colors.orange,
    }


}

export default style;