let sorsz;
let oszlopsz;

function Ellenoriz()
{
    sorsz = parseInt(document.getElementById("sor").value);
	oszlopsz = parseInt(document.getElementById("oszlop").value);
    if ( sorsz < 10 || sorsz > 30 || oszlopsz < 10 || oszlopsz > 30)
    {
        alert(" A sor és oszlop értékének 10 és 30 között kell lennie! \n Add meg újra!")
    }
    else General();
}

function General()
{	
	var div = document.getElementById("doboz");
	div.innerHTML = "";
	sorsz = parseInt(document.getElementById("sor").value);
	oszlopsz = parseInt(document.getElementById("oszlop").value);

	var tabla = document.createElement("table");
    
	for(let i = 0; i<sorsz+1; i++)
	{
		var sor = document.createElement("tr");
		for(let j = 0; j<oszlopsz+1; j++)
		{
			var cella = document.createElement("td");
            if ( i == 0 || j == 0)
            {
                if ( i == 0) cella.innerHTML = j;
                else if ( j == 0) cella.innerHTML = i;

                cella.style.backgroundColor = Szinez(i, j);
                let c = cella.style.backgroundColor;
                cella.value = [i,j,c];
                //console.log(cella.value);
                cella.id = i+ " " +j;
                    
                sor.appendChild(cella);
            }
            else
            {
                var szam = i * j;
                cella.innerHTML = szam;
                cella.style.backgroundColor = Szinez(i, j);
                let c = cella.style.backgroundColor;
                cella.value = [i,j,c];
                //console.log(cella.value);
                cella.id = i+ " " +j;
                    
                cella.addEventListener("mouseenter", function(){JeloloSzin(this)} );
                cella.addEventListener("mouseenter", function(){Szoroz(this)} );
                cella.addEventListener("mouseleave", function(){SzinVissza(this);} );
                    
                sor.appendChild(cella);
            }
		}
		tabla.appendChild(sor);
	}
	div.appendChild(tabla);

    document.getElementById("i").value = "0";
    document.getElementById("j").value = "0";
    document.getElementById("e").value = "0";
}


function Szinez(i, j)
{
    if (i == 0 || j == 0) return "pink";
    else return "lightgreen";

}

function JeloloSzin(cella)
{
    cella.style.backgroundColor = "yellow";
    let s = cella.value[0];
    let o = cella.value[1];

    for (i = 0; i < sorsz+1; i++)
    {
        document.getElementById(i+ " " +o).style.backgroundColor = "yellow";
    }

    for (j = 0; j < oszlopsz+1; j++)
    {
        document.getElementById(s+ " " +j).style.backgroundColor = "yellow"; 
    }
}

function SzinVissza(cella)
{
    let s = cella.value[0];
    let o = cella.value[1];
    let c = cella.value[2];

    document.getElementById(0+ " " +o).style.backgroundColor = "pink";
    document.getElementById(s+ " " +0).style.backgroundColor = "pink";
    for (let i = 1; i < sorsz+1; i++)
    {
        document.getElementById(i+ " " +o).style.backgroundColor = c;
    }

    for (let j = 1; j < oszlopsz+1; j++)
    {
        document.getElementById(s+ " " +j).style.backgroundColor = c;
    }
}

function Szoroz(cella)
{
    let i = cella.value[0];
    let j = cella.value[1];
    document.getElementById("i").value = i;
    document.getElementById("j").value = j;
    document.getElementById("e").value = i*j;

}

General();