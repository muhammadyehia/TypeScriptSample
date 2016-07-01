interface Book{
	id:number;
	title:string;
	author:string;
	available:boolean;
	pages?:number;
	markDamaged?:DamageLogger
}
interface DamageLogger{
	(reason:string):string;
}

interface Person{
	name:string;
	email:string;
}
interface Employee extends Person{
	
	address:string;
}
interface Iservice {
	DoWork:(item:string)=>string;
}
export{Book,DamageLogger, Employee,Iservice}
