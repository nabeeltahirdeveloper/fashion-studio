import colors from "../colors";
const headerStyle = {
    header:{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
    },
    headerContainer:{
        display: 'flex',
        alignItems: 'center',
    },
    headerText:{
        fontSize: 24,
        fontWeight: 400,
        color: colors.black,
        display: 'flex',
        gap: 10,
        paddingLeft:25
    },
    headerHeadings:{
        fontSize: 24,
        fontWeight: 400,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    searchField:{
        marginLeft:36,
        width:576,
        height:46,
        borderRadius: "10px 0px 0px 10px",
        backgroundColor:colors.darkGray,
        border: "none",
        paddingLeft: 9,
        fontSize: 20,
    },
    searchButton:{
        width: 59,
        height: 46,
        borderRadius: "0px 10px 10px 0px",
        backgroundColor: colors.orange,
        border: "none",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    currentTab:{
        color: colors.orange,
        width: 25,
        height: 4,
        backgroundColor: colors.orange,
    },
    cartIcon:{
        width: 35,
        height: 35,
    }
}

export default headerStyle;