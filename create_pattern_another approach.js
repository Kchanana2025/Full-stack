//use this string method until sir does not teach us process.stdout.write()
function create_pattern(rows){
  for(i=1;i<=rows;i++){
    var string_to_print=" ";
    var j=i;
    while(j){ 
    string_to_print+="*";
      j--;
    }
    console.log(string_to_print); 
  }
}

create_pattern(5);