function show(){
	$("#myTbody").text("");
	var data = Collection.find({
		date:{
			$gte:$(".from").val(),
			$lte:$(".to").val()
		}
	},{
		$orderBy:{date:-1},
	});
	console.log(data);
	for(var i=0;i<data.length;i++)
	{
		$("#myTbody").append(
			"<tr>"+
				"<td>"+(i+1) +"</td>"+
				"<td>"+data[i].date+"</td>"+
				"<td>"+data[i].kind+"</td>"+
				"<td>"+data[i].money+"</td>"+
				"<td>"+data[i].words+"</td>"+
			"</tr>"
		)
	}
}




var fdb = new ForerunnerDB();
var myDb = fdb.db("myDb");
var Collection = myDb.collection('Collection');
$("#search").on("click", function(){
	Collection.load(show);
});
function othershow(){
	$("#myTbody").text("");

	var dt = new Date();
	var year = dt.getFullYear();
	var month = dt.getMonth() +1;
	var my_date = 1;
	if(month < 10){month = "0" + month};
	if(my_date < 10){my_date = "0" + my_date};
	var sFromDate = year + "-" + month + "-" + my_date;

	var data = Collection.find({
		//  2017-00-00
		date:{
			$gte:sFromDate
		}
	},{
		$orderBy:{date:-1},
	});
	console.log(data);
	for(var i=0;i<data.length;i++)
	{
		$("#myTbody").append(
			"<tr>"+
				"<td>"+(i+1) +"</td>"+
				"<td>"+data[i].date+"</td>"+
				"<td>"+data[i].kind+"</td>"+
				"<td>"+data[i].money+"</td>"+
				"<td>"+data[i].words+"</td>"+
			"</tr>"
		)
	}

}



$("#this-month").on("click",function(){
	Collection.load(othershow);
});


function othothershow(){
	$("#otherTbody").text("");

	var dt = new Date();
	var year = dt.getFullYear();
	var month = dt.getMonth() +1;
	var my_date = 1;
	if(month < 10){month = "0" + month};
	if(my_date < 10){my_date = "0" + my_date};
	var sFromDate = year + "-" + month + "-" + my_date;

	var data = Collection.find({
		//  2017-00-00
		date:{
			$gte:sFromDate
		}
	},{
		$orderBy:{date:-1},
	});
	console.log(data);
	var whole = 0;
	var thwhole = 0;
	var twhole = 0;
	for(var i=0;i<data.length;i++)
	{
		if(data[i].sel=="trans")
		{
			twhole=twhole+(data[i].money)*1;
		}
		if(data[i].sel=="eat")
		{
			whole=whole+(data[i].money)*1;
		}
		if(data[i].sel=="buy")
		{
			thwhole=thwhole+(data[i].money)*1;
		}
		
	}
	var total = whole + twhole + thwhole;

	$("#otherTbody").append(
		"<tr>"+
			"<td>"+ 0 +"</td>"+
			"<td>eat</td>"+
			"<td>"+whole+"</td>"+
			"<td>"+ (whole / total * 100).toFixed(2)+"%</td>"+
		"</tr>"
	)
	$("#otherTbody").append(
		"<tr>"+
			"<td>"+ 0 +"</td>"+
			"<td>trans</td>"+
			"<td>"+twhole+"</td>"+
			"<td>"+ (twhole / total * 100).toFixed(2)+"%</td>"+
		"</tr>"
	)
	$("#otherTbody").append(
		"<tr>"+
			"<td>"+ 0 +"</td>"+
			"<td>buy</td>"+
			"<td>"+thwhole+"</td>"+
			"<td>"+ (thwhole / total * 100).toFixed(2)+"%</td>"+
		"</tr>"
	)
}


$("#search").on("click", function(){
	Collection.load(othothershow);
});


$("#this-month").on("click",function(){
	Collection.load(othothershow);
});
