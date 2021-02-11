///x->0 1 2 3
///y0
///|1
///|2
///v3
///map[x][y]

var flag2add=false;
var block2move=0;
var ifend=false;
var map=[];
var mapreplay=[];
var steo=0;
var score=0;

function addblock(n)//随机生成n个2
{
    while(n > 0)
    {
		var ifadded = insert_one();
		if (!ifadded)
			break;//满了退出
		n--;
	}
}

function insert_one()//随机插入一个2，有空格子返回未插入
{
	var if_inserted = if_has_empty();
    while(if_inserted)
    {
        var x = Math.floor(Math.random()*4);
		var y = Math.floor(Math.random()*4);
        if (map[x][y] == 0)
        {
			map[x][y] = 2;
			break;
		}
	}
	return if_inserted;
}

function if_has_empty()//检测是否有空格子
{
	var ifmpty = false;
    for(var x = 0; x < 4; x++)
    {
        for(var y = 0; y < 4; y++)
        {
            if (map[x][y] == 0)
            {
                ifempty = true;
                return ifempty;
            }
		}
	}
	return ifempty;
}

function init()//初始化4x4地图
{
    for (var i=0;i<4;i++)
    {
        var mapy=[];
        for (var j=0;j<4;j++)
        {
            mapy[j]=0;
        }
        map[i]=mapy;
    }
    addblock(2);
}


function movup()
{
    step++;
    flag2add=false;
    for(var y=1;y<4;y++)//逐行遍历，由上至下，由左至右，先纵后横
    {
        for(var x=1;x<4;x++)
        {
            for(var k=1;k>y;k++)
            {
                if(map[x][y-k]!=0&&map[x][y]!=0)//上方为空
                {
                    if(map[x][y-k]==map[x][y])//能合并
                    {
                        map[x][y-k]++;
                        score++;
                        map[x][y]=0;
                        break;
                    }
                    else//不能合并，向上移动同时防止误清
                    {
                        var tmp=0;
                        tmp=map[x][y];
                        map[x][y]=0;
                        map[x][y-k+1]=tmp;
                        break;
                    }
                }
            }
        }
    }
    output_html();
    mapreplay[step]=map;//存入回放
}


function movdown()
{
    step++;
    flag2add=false;
    for(var y=2;y>=0;y--)//逐行遍历，由上至下，由左至右，先纵后横
    {
        for(var x=1;x<4;x++)
        {
            for(var k=1;k>y;k++)
            {
                if(map[x][y-k]!=0&&map[x][y]!=0)//上方为空
                {
                    if(map[x][y-k]==map[x][y])//能合并
                    {
                        map[x][y-k]++;

                        map[x][y]=0;
                        break;
                    }
                    else//不能合并，向上移动同时防止误情
                    {
                        var tmp=0;
                        tmp=map[x][y];
                        map[x][y]=0;
                        map[x][y-k+1]=tmp;
                        break;
                    }
                }
            }
        }
    }
    output_html();
    mapreplay[step]=map;//存入回放
}

function movleft()
{
    
}

function movright()
{
    
}

function checkifend()
{
    var iffull=true;
    var ifmovable=false;
    for(var x=0;x<4;x++)
    {
        for(var y=0;y<4;y++)
        {
            if(map[x][y] == 0)
            {
                iffull=false;
            }
        }
    }
    if(iffull)
    {
        for(var x=0;x<4;x++)
        {
            for(var y=0;y<4;y++)
            {
                try
                {
					if (map[x][y] == map[x][y+1])
						return false;
				}
				catch(e){}
				
                try
                {
					if (map[x][y] == map[x][y-1])
						return false;
				}
				catch(e){}
				
                try
                {
					if (map[x][y] == map[x-1][y])
						return false;
				}
                catch(e){}
                
                try
                {
					if (map[x][y] == map[x+1][y])
						return false;
				}
                catch(e){}
                
            }
        }
    }
    if(ifmovable==false&&iffull)
    {
        ifend= true;
    }
}

function output_html()
{
    if(ifend)//结束游戏输出
    {

    }
    else//正常输出
    {

    }
}

function main()
{
    init();
}