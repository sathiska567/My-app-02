function Mapping() {
    const list1= [1,2,3,4,5,6];
    const list2=list1.map((number) =>number*2);

    console.log(list2);

    const li01 = [1,2,3,4,5,6];
    const li02 = li01.map((number) => number*number);

    console.log(li02);

}

export default Mapping;