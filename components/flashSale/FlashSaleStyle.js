import colors from "../colors"

const style = {
    saleHeading:{
        fontSize: 32,
        fontWeight: 600,
        margin: 0,
    },
    saleText:{
        marginTop:0,
        fontSize:14,
        fontWeight:400
    },
    container:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        width:'100%',
        marginBottom:45,
        marginTop:10,
        boxShadow: `2px 4px 6px ${colors.lightGray}`
      },
    subContainer:{
        display:'flex',
        alignItems:'center',
    },
    saleTimer:{
        display:'flex',
        gap:14,
        marginLeft:7
    },
    timer:{
        backgroundColor:colors.orange,
        color:colors.white,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:30,
        height:25,
        fontSize:20,
        fontWeight:400
    },
    seeAllContainer:{
        color:colors.orange,
        fontSize:12,
        fontWeight:400,
        display:'flex',
        justifyContent:'center',
        alignItems:'center', 
        gap:24
    },
    seeAllIcon:{ width: 24, height: 24 }
}

export default style