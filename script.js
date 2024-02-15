var names=new Array();
names [0]="Ajmal ";
names [1]="amad";
names [2]="julia";
names [3]="rao";
names [4]="Yakov";
names [5]="Rabit";
names [6]="Jmaal";
names [7]="Rauf";
names [8]="Sufyan";
names [9]="Harry";
names [10]="RAheem";

for (var i=0; i <names.length; i++)
    if(names[i].charAt(0)==="J" || names[i].charAt(0)==="j"){
        console.log("Goodbye" +  names[i])
    }
else{
    console.log("Hello "+  names[i])
}