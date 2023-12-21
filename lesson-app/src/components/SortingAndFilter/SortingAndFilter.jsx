export const SortingAndFilter = () => {
    return (
    <div className="for-select">
        <select name='price' id='select-price'>
            <option value="">-chose an option-</option>
            <option value="high to low">high to low</option>
            <option value="low to high">low to high</option>
        </select>
        <select name="raiting" id='select-raiting'>
            <option value="">-chose an option-</option>
            <option value="high to low">high to low</option>
            <option value="low to high">low to high</option>
        </select>
    </div>
        
    )
}



//2. установить redux, вот так: npm install redux
//3. создать React компонент SortingAndFilter в которьій добавить два селекта (как у нас есть для Country) 
//у каждого из которьій есть два варианта "high to low" и "low to high"
  // 1 select назьівается price  
   //2 select назьівается raiting