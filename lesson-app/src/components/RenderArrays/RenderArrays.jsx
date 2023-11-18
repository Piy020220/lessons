import './RenderArrays.css'
export const RenderArrays = ({myArray}) => {
    
    
    const mappingFun = (item) => {
        return <span key= {item}> ={item}=,</span>
    }

    const mapRender = myArray.map( mappingFun)
  return ( 
<div className="RenderArrays">
   {mapRender}
</div>
    )
}

  /*
    oleg.map((item,index)=>{
    
    
    return item + ' ' + index 
})


[21,2,33,43].map((item)=>{
    

    return item * 2
})
    */
  