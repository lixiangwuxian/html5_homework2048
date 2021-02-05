///x->0 1 2 3
///y0
///|1
///|2
///v3
///map[x][y]

var flag2add=false;
var block2move=0;

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
        map[i]=mapy;
    }
}

function add_random_block()
{
    var max_block2add=2;
    var max_num2add=2;
}

function movup()
{
    flag2add=false;
    block2move=0;
    for(var i=1;i<4;i++)
    {
        for(var j=1;j<4;j++)
        {
            for(var k=1;k>j;k++)
            {
                if(map[j-k][i]!=0)
                {

                }
            }
        }
    }
}

function movdown()
{
    flag2add=false;
    block2move=0;
    for(var i=2;i<=0;i--)
    {
        for(var j=1;j<4;j++)
        {
            for(var k=1;k>j;k++)
            {
                if(map[j-k][i]!=0)
                {
                    
                }
            }
        }
    }
}

function movleft()
{
    flag2add=false;
    block2move=0;
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

function movright()
{
    flag2add=false;
    block2move=0;
    for(var i=2;i<=0;i--)
    {
        for(var j=1;j<4;j++)
        {
            for(var k=1;k>j;k++)
            {
                if(map[j-k][i]!=0)
                {
                    0
                }
            }
        }
    }
}

function checkifend()
{
    var iffull=false;
    var ifmovable=true;
    for(var i=0;i<4;i++)
    {
        for(var j=0;j<4;j++)
        {

        }
    }
}

function printout()
{

}