var Itemname =new Array();
var Itemdesc = new Array();
var Price = new Array();
var Quantity = new Array();

var cartItemname =new Array();
var cartItemdesc = new Array();
var cartPrice = new Array();
var cartQuantity = new Array();

var i=0;
var d =0;
var text="";

	if(localStorage!=null)
	{
		Itemname = (localStorage.getItem('0')).split(',');
		Itemdesc = (localStorage.getItem('1')).split(',');
		Price = (localStorage.getItem('2')).split(',');
		Quantity = (localStorage.getItem('3')).split(',');
		
		cartItemname = (localStorage.getItem('4')).split(',');
		cartItemdesc = (localStorage.getItem('5')).split(',');
		cartPrice = (localStorage.getItem('6')).split(',');
		cartQuantity = (localStorage.getItem('7')).split(',');
	}
function show()
{
	document.getElementById("myform").style.visibility = "visible";
}
function display()
{
	text="";
	if(Itemname.length==0)
	{
		localStorage.clear();
	}
	for (i = 0; i < Itemname.length; i++)
	{
		text+="<div style='position:relative;' class='row'>";
		if(Quantity[i]==0)
		{
			text+="<div style='";
			if(i!=0)
			{
				text+="margin-top:25px;";
			}
			text+="background-color:rgba(255,255,0,0.6); border-radius:10px; position:absolute; z-index:10; width:100%; height:90px;'><center style='position:absolute;top:50%; left:50%; transform:translate(-50%, -50%); color:red; font-size:34px; font-weight:900'>OUT OF STOCK</center></div>"
		}
  		text+="<div class='col-sm-4' style='";
  		if(i!=0)
  		{
  			text+="margin-top:25px;";
  		}
  		text+="height:70px; float:left; font-size:16px; float:left;'>"+Itemname[i];
  		text+="<br>"+Itemdesc[i]+"<br>Price: "+Price[i]+"<br>Quantity: "+Quantity[i];
  		text+="</div><div class='col-sm-4' style='";
  		if(i!=0)
  		{
  			text+="margin-top:25px;";
  		}
  		text+="height:70px; float:right;'><button class='btn' style='background-color:red;border-color:transparent; color:#fff; border-radius:5px;' onclick=deleteitem("+i+")>DELETE</button>";
  		text+="<br><br><button class='btn' style='border-radius:5px; border-color:transparent; background-color:blue; color:#fff;' onclick=edit("+i+")>EDIT</button></div>";
  		text+="<div class='col-sm-3' style='";
  		if(i!=0)
  		{
  			text+="margin-top:25px;";
  		}
  		text+="height:70px'><button id='cart' style='margin-top:15px; color:#fff; background-color:green; border-radius:5px; width:140px; height:40px;' class='btn' onclick='addtocart("+i+")'><span class='glyphicon glyphicon-shopping-cart'></span>ADD TO CART</BUTTON></div></div>";
	}
	document.getElementById("showval").innerHTML =text;
	text="";
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

	display();
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
	localStorage.clear();
	if(Itemname!=null)
	{
		localStorage.setItem('0',Itemname);
		localStorage.setItem('1',Itemdesc);
		localStorage.setItem('2',Price);
		localStorage.setItem('3',Quantity);
		display();
	}
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
	text1+=i+")>DELETE</button>";
	text1+="<br><br><button class='btn' style='border-radius:5px; border-color:transparent; background-color:blue; color:#fff;' onclick=edit("+i+")>EDIT</button></div><br>";
	document.getElementById("searchresult").innerHTML=text1;
	text1="";
}
function edit(i)
{
	$("#searchresult").slideUp();
  	$("#myform").slideUp();
	console.log(i);
	var edittext="";
	edittext+="<input type='text'  id='itemna' value='"+Itemname[i]+"' required='Item name is necessary'/>"
	edittext+="<br>";
	edittext+="<input type='text' id='itemde' value='"+Itemdesc[i]+"' required='Item description is necessary'/>"
	edittext+="<br>";
	edittext+="<input type='number' id='pr' style='width: 190px; height: 16px;' value='"+Price[i]+"' required='Invalid value'/>";
	edittext+="<br>";
	edittext+="<input type='number' id='qa' style='width: 190px; height: 16px;' value='"+Quantity[i]+"' required='Invalid value'/>"
	edittext+="<br>";
	edittext+="<button type='submit' id='edit' onclick='edititem("+i+")' class='.btn' style='margin-top:15px; width: 120px; font-size: 16px; height: 30px; background-color: red; color: #fff; border-radius: 5px; border-color: transparent;'>EDIT";
	edittext+="</button>";
	document.getElementById("ediForm").innerHTML = edittext;
	document.getElementById("ediForm").style.visibility = "visible";
	$("#ediform").slideDown();
}
function edititem(i)
{
	console.log(i);
	var itemna = document.getElementById("itemna");
	var itemnde = document.getElementById("itemde");
	var pr = document.getElementById("pr");
	var qa = document.getElementById("qa");
	if(itemde.value.length<=8)
	{
		console.log("desc");
		alert("Description must be 8 or greater in length");
		return false;
	}
	if(qa.value<=0)
	{
		alert("Quantity cannot be zero");
		return false;
	}
	for(j=0;j<Itemname.length;j++)
	{
		if((itemna.value).localeCompare(Itemname[j])==0)
		{
			alert("VALUE IS NOT UNIQUE");
			return false;
		}
	}
	Itemname[i]=itemna.value;
	Itemdesc[i]=itemde.value;
	Price[i] = pr.value;
	Quantity[i]=qa.value;

	localStorage.setItem('0',Itemname);
	localStorage.setItem('1',Itemdesc);
	localStorage.setItem('2',Price);
	localStorage.setItem('3',Quantity);

	$("#ediform").slideUp();
	display();
}
function addtocart(i)
{
	var d=0;
	for(j=0;j<cartItemname.length;j++)
	{
		if(cartItemname[j]==Itemname[i])
		{
			var t = parseInt(cartQuantity[j]);
			t=t+1;
			cartQuantity[j] = t;
			d=1;
			Quantity[i]= Quantity[i]-1;
			break;
		}
	}
	alert("ITEM ADDED TO CART");
	if(d==0)
	{
		Quantity[i]= Quantity[i]-1;
		cartItemname.push(Itemname[i]);
		cartItemdesc.push(Itemdesc[i]);
		cartPrice.push(Price[i]);
		cartQuantity.push(1);
	}
	JSON.stringify(cartItemname);
	JSON.stringify(cartItemdesc);
	JSON.stringify(cartPrice);
	JSON.stringify(cartQuantity);
	JSON.stringify(Quantity);
	localStorage.setItem('3',Quantity);
	localStorage.setItem('4',cartItemname);
	localStorage.setItem('5',cartItemdesc);
	localStorage.setItem('6',cartPrice);
	localStorage.setItem('7',cartQuantity);

	cartItemname = (localStorage.getItem('4')).split(',');
	cartItemdesc = (localStorage.getItem('5')).split(',');
	cartPrice = (localStorage.getItem('6')).split(',');
	cartQuantity = (localStorage.getItem('7')).split(',');
	location.reload();
}
function displaycart()
{
	text="";
	for (i = 0; i < cartItemname.length; i++)
	{
		text+="<div class='row'>";
  		text+="<div class='col-sm-4' style='";
  		if(i!=0)
  		{
  			text+="margin-top:25px;";
  		}
  		text+="height:70px; width:50%; float:left; font-size:16px; float:left;'>"+cartItemname[i];
  		text+="<br>"+cartItemdesc[i]+"<br>Price: "+cartPrice[i]+"<br>Quantity: "+cartQuantity[i];
  		text+="</div><div class='col-sm-4' style='";
  		if(i!=0)
  		{
  			text+="margin-top:25px;";
  		}
  		text+="height:70px; width:50%; float:right;'><button class='btn' style='background-color:red;border-color:transparent; color:#fff; border-radius:5px;' onclick=deletecartitem("+i+")>DELETE</button>";
  		text+="</div>";
	}
	document.getElementById("showcartitems").innerHTML =text;
	text="";
}
$(document).ready(function(){
  $("#searchresult").slideUp();
  $("#myform").slideUp();
  $("#ediform").slideUp();
  $("#hide").click(function(){
    $("#searchresult").slideUp();
    $("#myform").slideDown();
    $("#ediform").slideUp();
  });
  
  $(".glyphicon").click(function(){
    $("#searchresult").slideDown();
    $("#myform").slideUp();
    $("#ediform").slideUp();
  });
  
  $("#add").click(function(){
    $("#myform").slideUp();
  });
});