// function Team (name,country) {
//
//     this.name = name;
//     this.country = country;
// }
var winners=[{name:"Bayern München",country:"Germany",id:0},{name:"Benfica",country:"Portugal",id:1},{name:"Chelsea",country:"England",id:2},
    {name:"Juventus",country:"Italy",id:3},{name:"Monaco",country:"France",id:4},{name:"Real Madrid",country:"Spain",id:5},
    {name:"Shakhtar Donetsk",country:"Ukraine",id:6},{name:"Spartak Moskva",country:"Russia",id:7}]

var teams=[{name:"Anderlecht",country:"Belgium",id:8},{name:"APOEL",country:"Cyprus",id:9},{name:"Atlético Madrid",country:"Spain",id:10},
    {name:"Barcelona",country:"Spain",id:11},{name:"Basel",country:"Switzerland",id:12}, {name:"Beşiktaş",country:"Turkey",id:13},
{name:"Borussia Dortmund",country:"Germany",id:14}, {name:"Celtic",country:"Scotland",id:15},{name:"CSKA Moskva",country:"Russia",id:16},
   {name:"Feyenoord",country:"Netherlands",id:17},  {name:"Liverpool",country:"England",id:18}, {name:"Manchester City",country:"England",id:19},
{name:"Manchester United",country:"England",id:20},{name:"Tottenham Hotspur",country:"England",id:21}, {name:"Sporting CP",country:"Portugal",id:22},
{name:"Sevilla",country:"Spain",id:23}, {name:"Roma",country:"Italy",id:24}, {name:"RB Leipzig",country:"Germany",id:25}, {name:"Qarabağ",country:"Azbekistan",id:26},
{name:"Porto",country:"Portugal",id:27},{name:"Paris Saint-Germain",country:"France",id:28}, {name:"Olympiacos",country:"Greece",id:29},
{name:"Maribor",country:"Slovenia",id:30}, {name:"Napoli",country:"Italy",id:31}]

var gr=[[{name:"Bayern München",country:"Germany",id:0},{name:"Olympiacos",country:"Greece",id:29},{name:"Sevilla",country:"Spain",id:23},{name:"CSKA Moskva",country:"Russia",id:16}],
[{name:"Monaco",country:"France",id:4},{name:"Basel",country:"Switzerland",id:12},{name:"Manchester United",country:"England",id:20},{name:"Sporting CP",country:"Portugal",id:22}],
[{name:"Chelsea",country:"England",id:2},{name:"Atlético Madrid",country:"Spain",id:10},{name:"Porto",country:"Portugal",id:27},{name:"Roma",country:"Italy",id:24}],
[{name:"Juventus",country:"Italy",id:3},{name:"Anderlecht",country:"Belgium",id:8},{name:"Barcelona",country:"Spain",id:11},{name:"Beşiktaş",country:"Turkey",id:13}],
[{name:"Benfica",country:"Portugal",id:1},{name:"Maribor",country:"Slovenia",id:30},{name:"Paris Saint-Germain",country:"France",id:28},{name:"Napoli",country:"Italy",id:31}],
[{name:"Spartak Moskva",country:"Russia",id:7},{name:"Qarabağ",country:"Azbekistan",id:26},{name:"Liverpool",country:"England",id:18},{name:"Feyenoord",country:"Netherlands",id:17}],
[{name:"Real Madrid",country:"Spain",id:5},{name:"Manchester City",country:"England",id:19},{name:"APOEL",country:"Cyprus",id:9},{name:"Celtic",country:"Scotland",id:15}],
[{name:"Shakhtar Donetsk",country:"Ukraine",id:6},{name:"Tottenham Hotspur",country:"England",id:21},{name:"RB Leipzig",country:"Germany",id:25},{name:"Borussia Dortmund",country:"Germany",id:14}]]

var i=8
    // document.write("<p style='color: aliceblue'>"+winners.length+"<\p>")
var groups=[]
var imax=8
var jmax=4

for(var l=0;l<imax;l++)
{
    groups[l]=[];
    for (var j=0;j<jmax;j++) {
        groups[l][j]=0;
    }
}

// for(var l=0;l<imax;l++)
// {
//
//     for (var j=0;j<jmax;j++) {
//     document.write("<p style='color: aliceblue'><img src='static/images/9.png' style='max-height: 20px ;max-width: 20px'>   "+groups[l][j]+"<\p>")
//     }
// }

var index=0;
while(i>0)
{
    var r=Math.floor(Math.random()*i);
    // var img = new Image();
    // img.src = "static/images/"+winners[r].id+".png";
    // var src = document.getElementById("x");
    // src.appendChild(img);

    // document.write("<p style='color: aliceblue'><img src='static/images/9.png' style='max-height: 20px ;max-width: 20px'>   "+winners[r].name+"<\p>")
    groups[index++][0]=winners[r];
    winners.splice(r,1);
    i--;
}


// document.write("<p style='color: aliceblue'>"+winners[0].name+"<\p>")
// groups[index][0]=winners[0]
i=24
var x=["Group A","Group B","Group C","Group D","Group E","Group F","Group G","Group H"]
// var t=0
// while(t<8)
// {
//     document.write("<p style='color: aliceblue'>"+x[t] +"<\p>");
//     document.write("<p style='color: aliceblue'><img src='static/images/9.png' style='max-height: 20px ;max-width: 20px'>  "+groups[t][0].name+"<\p>");
//     t++
// }
// document.write("<p style='color: aliceblue'>"+teams[24].name +"<\p>");


for(var j=1;j<jmax;j++)
{
    var teamout=[]
    var l=0
        // document.write("<h1 style='color: aliceblue'>"+teams.length +"<\h1>");

    while(l<imax && teams.length>0)
    {
        var flag=1
        var r=Math.floor(Math.random()*teams.length);
        var k=0
        while(k<jmax)
        {
            if(groups[l][k].country===teams[r].country)
            {
                flag=0
                break
            }
            k++
        }
        if(flag===1)
        {
            groups[l++][j]=teams[r]

                // var e=teamout.length
                while(teamout.length>0)
                {
                    teams.push(teamout.pop())
                    // e--

                }

            teams.splice(r,1)

        }
        else
        {

            teamout.push(teams[r])
            teams.splice(r,1)

        }
        // i--
    }

}

// if(groups[7][3]===null)
// {
//     groups[7][3]=teams[0]
// }
// function myFunction() {
//     var x = document.createElement("IMG");
//     x.setAttribute("src", "img_pulpit.jpg");
//     x.setAttribute("width", "20px");
//     x.setAttribute("height", "20px");
//     x.setAttribute("alt", "The Pulpit Rock");
//     document.body.appendChild(x);
// }
if(teamout.length>0)
{
    groups[7][3]=teamout[0]
}
//     for(var l=0;l<imax;l++)
// {
//     document.write("<p style='color: aliceblue'>"+x[l] +"<\p>");
//
//     for (var j=0;j<jmax;j++) {
//
//
//     // var x = document.getElementById("myImg").src;
//     // document.getElementById("demo").innerHTML = x;
//     document.write("<p style='color: aliceblue'> "+groups[l][j].name+"<\p>")
//     }
//
//
//
//
// }
// var img = new Image();
//         img.src = "static/images/"+groups[l][j].id+".png";
//         var src = document.getElementById("x");
//         img.onload = function() {
//         src.appendChild(img)
//         };

var f=0

for(var l=0;l<4;l++)
{
	for(j=l+1;j<4;j++)
	{
		if(groups[7][l].country===groups[7][j].country)
		{
			groups=gr
            f=1
			break
		}
	}
}

document.write("<div style='position:absolute; left: 150px; top: 20px;'><p style='color: aliceblue'> "+x[0]+"<\p>" +
    "<div id='x'><p style='color: aliceblue; display: inline'> "+groups[0][0].name+"<\p></div>" +
    "<div id='x1'><p style='color: aliceblue; display: inline'> "+groups[0][1].name+"<\p></div>" +
    "<div id='x2'><p style='color: aliceblue; display: inline'> "+groups[0][2].name+"<\p></div>" +
    "<div id='x3'><p style='color: aliceblue; display: inline'> "+groups[0][3].name+"<\p></div></div>")
document.write("<div style='position:absolute; left: 340px; top: 20px;'><p style='color: aliceblue'> "+x[1]+"<\p>" +
    "<div id='y'><p style='color: aliceblue; display: inline'> "+groups[1][0].name+"<\p></div>" +
    "<div id='y1'><p style='color: aliceblue; display: inline'> "+groups[1][1].name+"<\p></div>" +
    "<div id='y2'><p style='color: aliceblue; display: inline'> "+groups[1][2].name+"<\p></div>" +
    "<div id='y3'><p style='color: aliceblue; display: inline'> "+groups[1][3].name+"<\p></div></div>")
document.write("<div style='position:absolute; left: 620px; top: 20px;'><p style='color: aliceblue'> "+x[2]+"<\p>" +
    "<div id='z'><p style='color: aliceblue; display: inline'> "+groups[2][0].name+"<\p></div>" +
    "<div id='z1'><p style='color: aliceblue; display: inline'> "+groups[2][1].name+"<\p></div>" +
    "<div id='z2'><p style='color: aliceblue; display: inline'> "+groups[2][2].name+"<\p></div>" +
    "<div id='z3'><p style='color: aliceblue; display: inline'> "+groups[2][3].name+"<\p></div></div>")
document.write("<div style='position:absolute; left: 810px; top: 20px;'><p style='color: aliceblue'> "+x[3]+"<\p>" +
    "<div id='a'><p style='color: aliceblue; display: inline'> "+groups[3][0].name+"<\p></div>" +
    "<div id='a1'><p style='color: aliceblue; display: inline'> "+groups[3][1].name+"<\p></div>" +
    "<div id='a2'><p style='color: aliceblue; display: inline'> "+groups[3][2].name+"<\p></div>" +
    "<div id='a3'><p style='color: aliceblue; display: inline'> "+groups[3][3].name+"<\p></div></div>")



document.write("<div style='position:absolute; left: 150px; top: 250px;'><p style='color: aliceblue'> "+x[4]+"<\p>" +
    "<div id='x_'><p style='color: aliceblue; display: inline'> "+groups[4][0].name+"<\p></div>" +
    "<div id='x_1'><p style='color: aliceblue; display: inline'> "+groups[4][1].name+"<\p></div>" +
    "<div id='x_2'><p style='color: aliceblue; display: inline'> "+groups[4][2].name+"<\p></div>" +
    "<div id='x_3'><p style='color: aliceblue; display: inline'> "+groups[4][3].name+"<\p></div></div>")
document.write("<div style='position:absolute; left: 340px; top: 250px;'><p style='color: aliceblue'> "+x[5]+"<\p>" +
    "<div id='y_'><p style='color: aliceblue; display: inline'> "+groups[5][0].name+"<\p></div>" +
    "<div id='y_1'><p style='color: aliceblue; display: inline'> "+groups[5][1].name+"<\p></div>" +
    "<div id='y_2'><p style='color: aliceblue; display: inline'> "+groups[5][2].name+"<\p></div>" +
    "<div id='y_3'><p style='color: aliceblue; display: inline'> "+groups[5][3].name+"<\p></div></div>")
document.write("<div style='position:absolute; left: 620px; top: 250px;'><p style='color: aliceblue'> "+x[6]+"<\p>" +
    "<div id='z_'><p style='color: aliceblue; display: inline'> "+groups[6][0].name+"<\p></div>" +
    "<div id='z_1'><p style='color: aliceblue; display: inline'> "+groups[6][1].name+"<\p></div>" +
    "<div id='z_2'><p style='color: aliceblue; display: inline'> "+groups[6][2].name+"<\p></div>" +
    "<div id='z_3'><p style='color: aliceblue; display: inline'> "+groups[6][3].name+"<\p></div></div>")
document.write("<div style='position:absolute; left: 810px; top: 250px;'><p style='color: aliceblue'> "+x[7]+"<\p>" +
    "<div id='a_'><p style='color: aliceblue; display: inline'> "+groups[7][0].name+"<\p></div>" +
    "<div id='a_1'><p style='color: aliceblue; display: inline'> "+groups[7][1].name+"<\p></div>" +
    "<div id='a_2'><p style='color: aliceblue; display: inline'> "+groups[7][2].name+"<\p></div>" +
    "<div id='a_3'><p style='color: aliceblue; display: inline'> "+groups[7][3].name+"<\p></div></div>")


// var teee="teams"
// document.write("<p style='color: aliceblue'> "+teee+"<\p>")
// for(var l=0;l<teamout.length;l++)
//     {
//         document.write("<p style='color: aliceblue'> "+teamout[l].name+"<\p>")
//     }

// document.


        var img = new Image(20, 20);
        img.src = "images/"+groups[0][0].id+".png";
        var src=document.getElementById("x");
        src.insertBefore(img,src.firstChild);


        img = new Image(20, 20);
        img.src = "images/"+groups[0][1].id+".png";
        src=document.getElementById("x1");
        src.insertBefore(img,src.firstChild);


        img = new Image(20, 20);
        img.src = "images/"+groups[0][2].id+".png";
        src=document.getElementById("x2");
        src.insertBefore(img,src.firstChild);


        img = new Image(20, 20);
        img.src = "images/"+groups[0][3].id+".png";
        src=document.getElementById("x3");
        src.insertBefore(img,src.firstChild);


        ///////////
        img = new Image(20, 20);
        img.src = "images/"+groups[1][0].id+".png";
        src=document.getElementById("y");
        src.insertBefore(img,src.firstChild);


        img = new Image(20, 20);
        img.src = "images/"+groups[1][1].id+".png";
        src=document.getElementById("y1");
        src.insertBefore(img,src.firstChild);


        img = new Image(20, 20);
        img.src = "images/"+groups[1][2].id+".png";
        src=document.getElementById("y2")
        src.insertBefore(img,src.firstChild);


        img = new Image(20, 20);
        img.src = "images/"+groups[1][3].id+".png";
        src=document.getElementById("y3");
        src.insertBefore(img,src.firstChild);

        ////////////////////////

        img = new Image(20, 20);
        img.src = "images/"+groups[2][0].id+".png";
        src=document.getElementById("z");
        src.insertBefore(img,src.firstChild);


        img = new Image(20, 20);
        img.src = "images/"+groups[2][1].id+".png";
        src=document.getElementById("z1");
        src.insertBefore(img,src.firstChild);


        img = new Image(20, 20);
        img.src = "images/"+groups[2][2].id+".png";
        src=document.getElementById("z2")
        src.insertBefore(img,src.firstChild);


        img = new Image(20, 20);
        img.src = "images/"+groups[2][3].id+".png";
        src=document.getElementById("z3");
        src.insertBefore(img,src.firstChild);


        ////////////////////////////////////////


        img = new Image(20, 20);
        img.src = "images/"+groups[3][0].id+".png";
        src=document.getElementById("a");
        src.insertBefore(img,src.firstChild);


        img = new Image(20, 20);
        img.src = "images/"+groups[3][1].id+".png";
        src=document.getElementById("a1");
        src.insertBefore(img,src.firstChild);


        img = new Image(20, 20);
        img.src = "images/"+groups[3][2].id+".png";
        src=document.getElementById("a2")
        src.insertBefore(img,src.firstChild);


        img = new Image(20, 20);
        img.src = "images/"+groups[3][3].id+".png";
        src=document.getElementById("a3");
        src.insertBefore(img,src.firstChild);



        ///////////////
/////////////////////
/////////////////////


        img = new Image(20, 20);
        img.src = "images/"+groups[4][0].id+".png";
        src=document.getElementById("x_");
        src.insertBefore(img,src.firstChild);


        img = new Image(20, 20);
        img.src = "images/"+groups[4][1].id+".png";
        src=document.getElementById("x_1");
        src.insertBefore(img,src.firstChild);


        img = new Image(20, 20);
        img.src = "images/"+groups[4][2].id+".png";
        src=document.getElementById("x_2");
        src.insertBefore(img,src.firstChild);


        img = new Image(20, 20);
        img.src = "images/"+groups[4][3].id+".png";
        src=document.getElementById("x_3");
        src.insertBefore(img,src.firstChild);


        ///////////
        img = new Image(20, 20);
        img.src = "images/"+groups[5][0].id+".png";
        src=document.getElementById("y_");
        src.insertBefore(img,src.firstChild);


        img = new Image(20, 20);
        img.src = "images/"+groups[5][1].id+".png";
        src=document.getElementById("y_1");
        src.insertBefore(img,src.firstChild);


        img = new Image(20, 20);
        img.src = "images/"+groups[5][2].id+".png";
        src=document.getElementById("y_2")
        src.insertBefore(img,src.firstChild);


        img = new Image(20, 20);
        img.src = "images/"+groups[5][3].id+".png";
        src=document.getElementById("y_3");
        src.insertBefore(img,src.firstChild);

        ////////////////////////

        img = new Image(20, 20);
        img.src = "images/"+groups[6][0].id+".png";
        src=document.getElementById("z_");
        src.insertBefore(img,src.firstChild);


        img = new Image(20, 20);
        img.src = "images/"+groups[6][1].id+".png";
        src=document.getElementById("z_1");
        src.insertBefore(img,src.firstChild);


        img = new Image(20, 20);
        img.src = "images/"+groups[6][2].id+".png";
        src=document.getElementById("z_2")
        src.insertBefore(img,src.firstChild);


        img = new Image(20, 20);
        img.src = "images/"+groups[6][3].id+".png";
        src=document.getElementById("z_3");
        src.insertBefore(img,src.firstChild);


        ////////////////////////////////////////


        img = new Image(20, 20);
        img.src = "images/"+groups[7][0].id+".png";
        src=document.getElementById("a_");
        src.insertBefore(img,src.firstChild);


        img = new Image(20, 20);
        img.src = "images/"+groups[7][1].id+".png";
        src=document.getElementById("a_1");
        src.insertBefore(img,src.firstChild);


        img = new Image(20, 20);
        img.src = "images/"+groups[7][2].id+".png";
        src=document.getElementById("a_2")
        src.insertBefore(img,src.firstChild);


        img = new Image(20, 20);
        img.src = "images/"+groups[7][3].id+".png";
        src=document.getElementById("a_3");
        src.insertBefore(img,src.firstChild);


        if(f===1)
        {
            			document.write("<p style='color: aliceblue; display: inline'><\p>")

        }