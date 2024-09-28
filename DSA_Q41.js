//follow up of rearrange the array , if the positive and negative element are not equal

const rearr = (a) => {
    const pos = [];
    const neg = [];

    for(let i=0;i<a.length;i++){
        if(a[i]>0){
            pos.push(a[i]);
        }
        else{
            neg.push(a[i]);
        }
    }

    if(pos.length > neg.length){
        for(let i=0; i<neg.length;i++){
            a[2*i] = pos[i];
            a[2*i+1] = neg[i];
        }

        let index = 2*neg.length;
        for(let i=neg.length; i<pos.length;i++){
            a[index] = pos[i];
            index++;
        }
    }
    else{
        for(let i=0; i<pos.length;i++){
            a[2*i] = pos[i];
            a[2*i+1] = neg[i];
        }

        let index = 2*pos.length;
        for(let i=pos.length; i<neg.length;i++){
            a[index] = neg[i];
            index++;
        }
    }
    return arr;
}

const arr = [3,1,-2,-5,2,-4,5,6];
console.log(rearr(arr));
