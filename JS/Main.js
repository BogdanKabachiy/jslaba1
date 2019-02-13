function Zadacha1() {
 var secondamount = 234245645335;
 var Hour = new Date().getMinutes()*60;
 console.log("Ответ в первой задаче: " + (secondamount - Hour));
}
Zadacha1();

function Zadacha2() {


	var str = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, at.";
	var arrayAll = new Array();
	var total = 0;
		while(str.indexOf('a') > 0)
	{
    	var temp = str.indexOf('a');
    	arrayAll[arrayAll.length] = temp + total;
    	total = temp;
    	str = str.substring(temp+1);   
	}
	
	console.log("Ответ во второй задаче: " + arrayAll);
}
Zadacha2();