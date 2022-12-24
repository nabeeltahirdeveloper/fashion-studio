import colors from "../colors";


const style = {
    container:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        width:'100%',
        marginBottom:45,
        marginTop:10,
        boxShadow: `2px 4px 6px ${colors.lightGray}`
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

export default style;