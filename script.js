/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    arr.map((item)=>{
      if(item.profession=="developer")
      {
        console.log(item);
      }
    });
  }
  
  function PrintDeveloperbyForEach(index,name, age, profession) {
    arr.forEach((item)=>{
      if(item.profession=="developer")
      {
        console.log(item);
      }
    });
  }
  
  function addData() {
    const obj={id:4, name:"Sushil", age:"20", profession:"intern"}
    arr.push(obj);
    console.log(arr);
  }
  
  function removeAdmin() {
    const updatedEmployee=arr.filter(item=>item.profession!="admin");
    console.log(updatedEmployee);
    arr=updatedEmployee;
  }
  
  function concatenateArray() {
    const newArr=[{id:6,name:"Ayush", age:"20", profession:"intern"},
  {id:7, name:"Chirag", age:"22", profession:"CTO"},
{id:8, name:"Rohit", age:"23", profession:"CEO"}];
const concatenateArray=arr.concat(newArr);
console.log(concatenateArray);
  }