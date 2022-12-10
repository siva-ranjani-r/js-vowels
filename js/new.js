var h1=document.createElement("h1");
h1.innerText="VOWEL COUNT IN STRING";
h1.classList.add("head");
document.body.appendChild(h1);

var flex=document.createElement("div");
flex.setAttribute("id","val");
flex.classList.add("value");
document.body.appendChild(flex);

var input=document.createElement("input");
input.setAttribute("id","num");
input.placeholder="enter string";
input.classList.add("bg");
flex.appendChild(input);

var but=document.createElement("button");
but.setAttribute("id","num1");
but.classList.add("bg1");
but.innerHTML="click";
flex.appendChild(but);

but.onclick=function()
{

var output=document.createElement("p");
output.setAttribute("id","output");
output.classList.add("out");
document.body.appendChild(output);
  
var name=document.getElementById("num").value;
function fun(name)
{
	var count=0;
	for(i=name.length-1;i>=0;i--)
	{
		if(name[i]=='a'||name[i]=='e'||name[i]=='i'||name[i]=='o'||name[i]=='u')
		{
			count++;
		}
	}
	output.innerHTML=count;
}
fun(name);
}

