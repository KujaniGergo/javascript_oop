export{muveletletrehoz,muvelt}

const muveletletrehoz = (jel)=>{
    if (jel == "+") {
        return(a,b)=>{return a+b}
    }
}

const muvelt = (n1,n2,callback)=>{
    const result = callback(n1,n2)
    return {result};
}

