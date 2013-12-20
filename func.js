function Shape(x,y)
{

    return function(func_name,args)
    {
       if (func_name=="move") {
         return Shape(x+args[0],y+args[1]);
       }else if (func_name=="print") {
         return "Shape x ="+x+"; y="+y;
       }else{
        return;
       }
    }
}

function Rectangle(x,y,w,h)
{
    return function(func_name,args)
    {
       if (func_name=="move") {
            return Rectangle(x+args[0],y+args[1],w,h);
        }else if (func_name=="print") {
            return "Rectangle x = "+x+" y="+y+" w="+w+" h="+h;
        }else{
            return Shape(x,y)(func_name,args);
        }
    }
}
function Box(x,y,s)
{
    return function(func_name,args){
       if (func_name=="move") {
            return Box(x+args[0],y+args[0],s);
        }else if (func_name=="print") {
            return "Box x="+x+" y="+y+" s="+s;
        }else{
            return Rectangle(x,y,s,s)(func_name,args);
        }
    }
}


function Cyrcle(x,y,r)
{
    return function(func_name,args){
       
        if (func_name=="move") {
            return Cyrcle(x+args[0],y+args[0],r);
        }else if (func_name=="print") {
            return "Cyrcle x="+x+" y="+y+" r="+r;
        }else{
            return Shape(x,y)(func_name,args);
        }
    }
}


function Composite(x,y,shapes)
{
    return function(func_name,args)
    {
        if (func_name=="add") {
          return  Composite(x,y,shapes.push(args[0]));
        }else if (func_name=="move") {
            return Composite(x+args[0],y+args[1],shapes.map(
                                        function(item){ 
                                            return item(func_name,[args[0],args[1]]); 
                                        }
                                        )
                    );
        }else if (func_name=="print") {
            return "Composite: x="+x+" y="+y+"\n"+shapes.map(
                                                        function(item){
                                                          return  item(func_name);
                                                        }
                                                        ).join("\n");
        };
    }
}

function w(msg) 
{
    document.write(msg);
}
function testData(){
	try {
		document.write("<pre>");
        w("Start");
       var shape = Rectangle(4,4,4,5);
        
       var composite = Composite(0,0,[Rectangle(1,1,2,3),Box(2,2,4),Cyrcle(3,3,7)]);
       composite("add",[shape]);
       w("Current state: \n"+composite("print"));

       composite = composite("move",[1,1]);
       w("\n\n");
       w("Move (1,1)\n"+composite("print"));
       

       w("\n\nMove (-1,-1)\n"+composite("move",[-1,-1])("print"));
       

	} catch (e) {
		document.write("Exception: " + e);
	}
}