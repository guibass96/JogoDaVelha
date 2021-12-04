$(document).ready(function() {
    console.log("ready!");
    generateContainer()
});



function generateContainer(){
     
    for(var i=0; i<= 2; i++){
        var tr =  '<tr>'
        for(var j=0;j <= 2; j++){
         tr += '<td>--</td>'
        } 
       tr +=  '</tr>';
       $('#content-table').append(tr)
    }

}