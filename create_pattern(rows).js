function create_pattern(rows){
  for(i=1;i<=rows;i++){
    console.log(i);//when we write console.log(anything) we automattically shift to next line after something is printed
    var j=i;
    while(j){ 
    process.stdout.write('*');//we do not shift to next line by process.stdout.write()
      j--;
    }
    console.log();//to delibrately move to the next line we can write console.log() 
  }
}

create_pattern(5);