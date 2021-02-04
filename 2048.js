///


function init()
{
    var map=[];
    for (var i=0;i<4;i++)
    {
        var mapy=[];
        for (var j=0;j<4;j++)
        {
            mapy[i]=0;
        }
        map[i]= mapy;
    }
}

function add_random_block()
{
    
}

function movup()
{
    var flag2add=false;
    var block2move=0;
    for(var i=1;i<4;i++)
    {
        for(var j=1;j<4;j++)
        {
            for(var k=1;k>j;k++)
            {
                if(map[i][j-k]!=0)
                {

                }
            }
        }
    }
}

function movdown()
{

}

function movleft()
{

}

function movright()
{

}

function printout()
{

}

init();
consoctrl();
//htmlctrl();