

function show(){
	var data = Collection.find();
	console.log(data);
}


var fdb = new ForerunnerDB();
var myDb = fdb.db("myDb");
var Collection = myDb.collection('Collection');
Collection.load(show);

function myfunction(){

	Collection.insert({
		text:$("#my-select").val(),
		date:$(".date").val(),
		kind: $(".kind").val(),
		money: $(".money").val(),
		words:$(".words").val()

	})
	Collection.save();
	$("#my-select").val(""),
	$(".date").val(""),
	$(".kind").val(""),
	$(".money").val(""),
	$(".words").val("")
}
$("#submit").on("click",myfunction	);
