<%*
let columns = await tp.system.prompt("Column count?");
columns = parseInt(columns);

let content ="";
let first = "";
let second = "";
let third = "";

for(let i = 0; i < columns; i++){
  first += i===0 ? "       " :"|        ";
  second+= "| ------ ";
  third += "|        ";
} 

first += "|\n";
second += "|\n"
third += "|\n"

content = first + second + third;

%>| <%tp.file.cursor(1)%><%content%>