var Itemname =new Array();
var Itemdesc = new Array();
var Price = new Array();
var Quantity = new Array();
var i=0;
var d =0;
var text="";

	if(localStorage!=null)
	{
		Itemname = (localStorage.getItem('0')).split(',');
		Itemdesc = (localStorage.getItem('1')).split(',');
		Price = (localStorage.getItem('2')).split(',');
		Quantity = (localStorage.getItem('3')).split(',');
	}
function show()
{
	document.getElementById("myform").style.visibility = "visible";
}
function additem(){
	location.reload();
	document.getElementById("searchresult").style.visibility = "hidden";
	var itemname = document.getElementById("itemname");
	var itemdesc = document.getElementById("itemdesc");;
	var price = document.getElementById("price");;
	var quantity = document.getElementById("quantity");;

	if(itemdesc.value.length<=8)
	{
		console.log("desc");
		alert("Description must be 20 or greater in length");
		return false;
	}
	if(quantity.value<=0)
	{
		alert("Quantity cannot be zero");
		return false;
	}
	for(i=0;i<Itemname.length;i++)
	{
		if((itemname.value).localeCompare(Itemname[i])==0)
		{
			alert("VALUE IS NOT UNIQUE");
			return false;
		}
	}
	Itemname.push(itemname.value);
	Itemdesc.push(itemdesc.value);
	Price.push(price.value);
	Quantity.push(quantity.value);
	JSON.stringify(Itemname);
	JSON.stringify(Itemdesc);
	JSON.stringify(Price);
	JSON.stringify(Quantity);
	localStorage.setItem('0',Itemname);
	localStorage.setItem('1',Itemdesc);
	localStorage.setItem('2',Price);
	localStorage.setItem('3',Quantity);

	Itemname = (localStorage.getItem('0')).split(',');
	Itemdesc = (localStorage.getItem('1')).split(',');
	Price = (localStorage.getItem('2')).split(',');
	Quantity = (localStorage.getItem('3')).split(',');

	for (i = 0; i < Itemname.length; i++)
	{
  		text+="<div style='";
  		if(i!=0)
  		{
  			text+="margin-top:25px;";
  		}
  		text+="width:50%; height:70px; float:left; font-size:16px; float:left;'>"+Itemname[i];
  		text+="<br>"+Itemdesc[i]+"<br>Price: "+Price[i]+"<br>Quantity: "+Quantity[i];
  		text+="</div><div style='";
  		if(i!=0)
  		{
  			text+="margin-top:25px;";
  		}
  		text+="width:50%; height:70px; float:right;'><button class='.btn' style='background-color:red;border-color:transparent; color:#fff; border-radius:5px;' onclick=deleteitem(";
  		text+=i+")>DELETE</button></div><br>";
	}
	document.getElementById("showval").innerHTML =text;
	text="";
	document.getElementById("myform").style.visibility = "hidden";
	open=0;
}
function deleteitem(i){
	if(i==0)
	{
		if(Itemname.length==1)
		{
			Itemname.pop();
			Itemdesc.pop();
			Price.pop();
			Quantity.pop();
		}
		else
		{
			for(j=0;j<Itemname.length-1;j++)
			{
				Itemname[j]=Itemname[j+1];
				Itemdesc[j]=Itemdesc[j+1];
				Price[j]=Price[j+1];
				Quantity[j]=Quantity[j+1];
			}
			Itemname.pop();
			Itemdesc.pop();
			Price.pop();
			Quantity.pop();	
		}
	}
	Itemname.splice(1, i);
	Itemdesc.splice(1, i);
	Price.splice(1, i);
	Quantity.splice(1, i);
	Itemname = (localStorage.getItem('0')).split(',');
	Itemdesc = (localStorage.getItem('1')).split(',');
	Price = (localStorage.getItem('2')).split(',');
	Quantity = (localStorage.getItem('3')).split(',');
	for (i = 0; i < Itemname.length; i++)
	{
  		text+="<div style='";
  		if(i!=0)
  		{
  			text+="margin-top:25px;";
  		}
  		text+="width:50%; height:70px; float:left; font-size:16px; float:left;'>"+Itemname[i];
  		text+="<br>"+Itemdesc[i]+"<br>Price: "+Price[i]+"<br>Quantity: "+Quantity[i];
  		text+="</div><div style='";
  		if(i!=0)
  		{
  			text+="margin-top:25px;";
  		}
  		text+="width:50%; height:70px; float:right;'><button class='.btn' style='background-color:red;border-color:transparent; color:#fff; border-radius:5px;' onclick=deleteitem(";
  		text+=i+")>DELETE</button></div><br>";
	}
	console.log(text);
	document.getElementById("showval").innerHTML =text;
	text="";
}
function clearlist()
{
	localStorage.clear();
	location.reload();
}
function search()
{
	var i = document.getElementById("seach").value;
	var text1="";
	text1+="<div style='";
	text1+="width:50%; height:70px; float:left; font-size:16px; float:left;'>"+Itemname[i];
	text1+="<br>"+Itemdesc[i]+"<br>Price: "+Price[i]+"<br>Quantity: "+Quantity[i];
	text1+="</div><div style='";
	text1+="width:50%; height:70px; float:right;'><button class='.btn' style='background-color:red;border-color:transparent; color:#fff; border-radius:5px;' onclick=deleteitem(";
	text1+=i+")>DELETE</button><br>";
	document.getElementById("searchresult").innerHTML=text1;
	text1="";
}
function display()
{
	for (i = 0; i < Itemname.length; i++)
	{
  		text+="<div style='";
  		if(i!=0)
  		{
  			text+="margin-top:25px;";
  		}
  		text+="width:50%; height:70px; float:left; font-size:16px; float:left;'>"+Itemname[i];
  		text+="<br>"+Itemdesc[i]+"<br>Price: "+Price[i]+"<br>Quantity: "+Quantity[i];
  		text+="</div><div style='";
  		if(i!=0)
  		{
  			text+="margin-top:25px;";
  		}
  		text+="width:50%; height:70px; float:right;'><button class='btn' style='background-color:red;border-color:transparent; color:#fff; border-radius:5px;' onclick=deleteitem(";
  		text+=i+")>DELETE</button>";
  		text+="<br><br><button class='btn' style='border-radius:5px; border-color:transparent; background-color:blue; color:#fff;' onclick=edit("+i+")>EDIT</button></div><br>";
	}
	console.log(text);
	document.getElementById("showval").innerHTML =text;
	text="";
}
function edit(i)
{

}
$(document).ready(function(){
  $("#searchresult").slideUp();
  $("#myform").slideUp();
  $("#hide").click(function(){
    $("#searchresult").slideUp();
    $("#myform").slideDown();
  });
  $(".glyphicon").click(function(){
    $("#searchresult").slideDown();
    $("#myform").slideUp();
  });
  $("#add").click(function(){
    $("#myform").slideUp();
  });
});