const styles = {
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
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        display: 'flex',
        gap: 10,
        paddingLeft:25
    },
    searchField:{
        marginLeft:36,
        width:576,
        height:46,
        borderRadius: "10px 0px 0px 10px",
        backgroundColor:"#D9D9D9",
        border: "none",
        paddingLeft: 9,
        fontSize: 20,
    },
    searchButton:{
        width: 59,
        height: 46,
        borderRadius: "0px 10px 10px 0px",
        backgroundColor: '#FF881A',
        border: "none",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}

export default styles;