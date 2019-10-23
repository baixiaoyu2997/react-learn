let initState={
    todos:[{
        id:parseInt(Math.random()*10000),
        isComplate:false,
        title:'学习redux'
    },{
        id:parseInt(Math.random()*10000),
        isComplate:true,
        title:'学习react'
    },{
        id:parseInt(Math.random()*10000),
        isComplate:false,
        title:'学习node'
    }]
}
function reducer(state=initState,actions){
    // switch (actions.type) {
    //     case value:
            
    //         break;
    
    //     default:
    //         break;
    // }
    return state
}
export default reducer;