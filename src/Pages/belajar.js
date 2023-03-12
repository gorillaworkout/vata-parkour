function removeSmallest(numbers) {
    var smallestNumberKEY = 0;
    for (var i = 0; i < numbers.length - 1; i++) {
      if (numbers[i + 1] < numbers[i]) {
          smallestNumberKEY = i + 1;
          numbers.splice(smallestNumberKEY, 1);
      }
    }
    return numbers;
  }

//   console.log(removeSmallest([2, 1, 3, 4, 5, 1]))


  const deleteSmallest=(n,arr)=>{

    console.log(n,arr)

    let newArr = []
    let data = arr
    data.push(n)
    // data.forEach((val,index)=>{
    //     if(val !== n){
    //         newArr.push(val)
    //     }else {
    //         newArr.push(n)
    //     }
    // })
    let uniqueArray = data.filter(function(item, pos) {
        return data.indexOf(item) == pos;
    })
    uniqueArray.sort()
    let slice = uniqueArray.slice(0,5)
    console.log(slice,'answer')
    

  }

  console.log(deleteSmallest(1,[3,5,4,2,6]),'running')

