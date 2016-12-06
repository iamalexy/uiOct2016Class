(function (){

	function total(){
		var dum =this;

		dum.addition=0;
		dum.substract=0;
		dum.product=0;
		dum.dividend=0;

	
	function mathematics(){
		var bat= this;

		bat.sum=function(a,b){
			return (a+b);

		};

		bat.difference= function(a,b){
			return (a-b);
		};

		bat.multiplication= function(a,b){
			return (a*b);
		};
		bat.division= function(a,b){
			return (a/b);
		};
	}
		var out = new mathematics();
		dum.addition = out.sum(100,200);
		dum.substract = out.difference(200,100);
		dum.product = out.multiplication(20,10);
		dum.dividend = out.division(200,100);

}



	var res = new total();
	console.log(res);
})();