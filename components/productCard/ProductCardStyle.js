import colors from "../colors"

const style = {
    cardImage:{
        width: 200,
        height: 200,
        margin:0
    },
    cardContainer:{
        width: 200,
        paddingBottom: 10,
        backgroundColor: colors.white,
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
    },
    cardTitle:{
        fontSize:14,
        fontWeight: "600",
        color: colors.black,
        margin:0,
        paddingTop: 0,
        paddingBottom: 0,
    },
    newPrice:{
        fontSize: 14,
        fontWeight: "600",
        color: colors.orange,
        margin:0,
        paddingTop: 0,
        paddingBottom: 0,
    },
    oldPrice:{
        fontSize: 8,
        fontWeight: "600",
        color: colors.gray,
        width:"fit-content",
        margin:0,
        paddingTop: 0,
        paddingBottom: 0,
    },
    imageContainer:{
        height: 200,
    },
    discount:{
        fontSize: 8,
        fontWeight: "600",
        color:colors.black,
        marginLeft: 5,
    },
    oldPriceContainer:{
        display: "flex",
    }
}


export default style