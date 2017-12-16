function show(){
	$("#myTbody").text("");
	var data = Collection.find({
	},{
		$orderBy:{date:-1},
		$limit:10
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
Collection.load(show);
