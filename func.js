function Shape(x,y)
{

    return function(func_name,args)
    {
       if (func_name =="getX") {
          return x;
       }else if (func_name=="getY") {
         return y;
       }else if (func_name=="setX") {
         return Shape(args[0],y);
       }else if (func_name=="setY"){
         return Shape(x,args[0]);
       }else if (func_name=="move") {
         return Shape(x+args[0],y+args[1]);
       }else if (func_name=="print") {
         return "\nShape x ="+x+"; y="+y+"\n";
       }else{
        return;
       }
    }
}

function Rectangle(x,y,w,h)
{
    return function(func_name,args)
    {
        if (func_name=="getW") {
            return w;
        }else if (func_name=="setW") {
            return Rectangle(x,y,args[0],h);
        }else if (func_name=="getH") {
            return h;
        }else if (func_name=="setH") {
            return Rectangle(x,y,w,args[0]);
        }else if (func_name=="setX") {
            return Rectangle(args[0],y,w,h);
        }else if (func_name=="setY") {
            return Rectangle(x,args[0],w,h);
        }else if (func_name=="move") {
            return Rectangle(x+args[0],y+args[1],w,h);
        }else if (func_name=="print") {
            return "\nRectangle x = "+x+" y="+y+" w="+w+" h="+h+"\n";
        }else{
            return Shape(x,y)(func_name,args);
        }
    }
}
function Box(x,y,s)
{
    return function(func_name,args){
        if (func_name=="getS") {
            return s;
        }else if (func_name=="setS") {
            return Box(x,y,args[0]);
        }else if (func_name== "setX") {
            return Box(args[0],y,s);
        }else if (func_name=="setY") {
            return Box(x,args[0],s);
        }else if (func_name=="move") {
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
        if (func_name=="getR") {
            return s;
        }else if (func_name=="setR") {
            return Cyrcle(x,y,args[0]);
        }else if (func_name== "setX") {
            return Cyrcle(args[0],y,r);
        }else if (func_name=="setY") {
            return Cyrcle(x,args[0],r);
        }else if (func_name=="move") {
            return Cyrcle(x+args[0],y+args[0],r);
        }else if (func_name=="print") {
            return "Cyrcle x="+x+" y="+y+" r="+r;
        }else{
            return Shape(x,y)(func_name,args);
        }
    }
}


function Composite(X,Y,shapes)
{
    return function(func_name,args)
    {
        if (func_name=="add") {
          return  Composite(x,y,shapes.push(args[0]));
        }else if (func_name=="move") {
            return Composite(x+args[0],y+args[1],shapes.forEach(function(item){ return item(func_name,[args[0],args[1]]); }));
        }else if (func_name=="print") {
            return "Composite:\n"+shapes.forEach(function(item){item(func_name);});
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
       var shape = Composite(1,2,4);
        w(shape);
       

	} catch (e) {
		document.write("Exception: " + e);
	}
}