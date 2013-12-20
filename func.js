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
            return Shape(x,y);
        }
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
       var shape = Rectangle(1,2,3,4);
        w(shape("print"));
       

	} catch (e) {
		document.write("Exception: " + e);
	}
}