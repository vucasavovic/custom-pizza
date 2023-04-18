export class Pizza{
    name = ''
    size = PizzaSize.Unselected;
    cuts = PizzaCuts.Unselected;
    ingredients=[];

    price = ()=>{
        let sum = 0;
        this.ingredients.forEach(ingredient => {
          sum+=ingredient.price;
        });
        return  Math.round( sum * 1e2 ) / 1e2;
    }

}


export class Ingredient{
    constructor(id,name,type, price){
        this.id = id
        this.name = name
        this.type = type
        this.price = price
    }
}

export class PizzaSize{
    static SixInches = 6;
    static EightInches = 8;
    static TenInches = 10;
    static TwelweInches = 12
    static Unselected = 0;
}

export class PizzaCuts{
    static Four = 4;
    static Six = 6;
    static Eight = 8;
    static Unselected = 0;
}
 