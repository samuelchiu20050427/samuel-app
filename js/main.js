

function show(){
	var data = Collection.find();
	console.log(data);
}


var fdb = new ForerunnerDB();
var myDb = fdb.db("myDb");
var Collection = myDb.collection('Collection');
Collection.load(show);

function myfunction(){
	if( $(".money").val() == ''){
		alert(" invalid input!");
		return ;
	}
	Collection.insert({
		sel:$("#my-select").val(),
		date:$(".date").val(),
		kind: $(".kind").val(),
		money: $(".money").val(),
		words:$(".words").val()
	})
	Collection.save();
	$(".sel").val(""),
	$(".date").val(""),
	$(".kind").val(""),
	$(".money").val(""),
	$(".words").val("")
}
$("#submit").on("click",myfunction);
