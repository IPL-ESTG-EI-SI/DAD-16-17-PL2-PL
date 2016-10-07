var object = {
  name: "Ricardo",
  email: "ricardo.p.gomes@ipleiria.pt"
}

$.each(object,function(property,value){
  console.log(property);
  console.log(value);
})

var array = [{
  name: "Ricardo",
  email: "ricardo.p.gomes@ipleiria.pt"
},{
  name: "Ricardo",
  email: "ricardo.p.gomes@ipleiria.pt"
}]

$.each(array,function(property,value){
  console.log(property);
  console.log(value);
})
