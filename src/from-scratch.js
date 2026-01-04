const makeIdFunc = () => {
  let count=1
  return ()=>{return count++}

};
const makePasswordChecker = (correctPassword) => {
  let pass = String(correctPassword)
  let count =0
  return (test)=>{count ++;return count<=3?test==correctPassword:'Account locked';}
};

const makeMultiplier = (multiplier) => {
return (arr)=>arr.map((val)=>val*multiplier)
};

const makeFilterByLength = (length) => {
return (arr)=>arr.filter((val)=>val.length<=length)
};

const makeGradeTracker = () => {
let grades=[]
return{
  addGrade(grade){
    if(grade>100 ||grade<0||typeof(grade)!='number'){
      return false
    }
    grades.push(grade)
    return true
  }
  ,
  getAverage(){
    return grades.length?grades.reduce((acc,val)=>acc+val,0)/grades.length:0
  }
}
};

const makeShoppingList = () => {
let bag = []
return {
  addItem(item){
    bag.push(item)
    console.log(`${item} successfully added! Now you have ${bag.length} item(s).`)
    return bag.length
  },
  getItems(){
    return [...bag]
  },
  removeItem(item){
    let newarr=[]
    let check =bag.length
    for(let option of bag)
      if(item!=option)
        newarr.push(option)
    bag=[...newarr]
    console.log(newarr.length!=check?`${item} successfully removed. You now have ${bag.length} item(s).`:`${item} not found.`)
    return newarr.length!=check
  }
}
};

module.exports = {
  makeIdFunc,
  makePasswordChecker,
  makeMultiplier,
  makeFilterByLength,
  makeGradeTracker,
  makeShoppingList,
};
