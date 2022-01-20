class Card {
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name, cost, power, resilience){
        super(name, cost);

        this.power = power;
        this.resilience = resilience
    }
    attack(target) {
        target.resilience -= this.power;
        console.log('${this.name} decreased ${target.name}'s resilience by ${this.power}');
        // reduce target res by power//
        console.log(target);
    }

}

class Effect extends Card {
    constructor(name, cost, magnitude, stat){
        super(name, cost);

        this.magnitude = magnitude;
        this.stat = stat;
    }
    


    play(target) {
        if (target instanceof Unit) {
        // implement card text here 
        // because our key name is inside the var statr, we need to use bracket 
            // notation to access the key.
        target[this.stat] += this.magnitude;
        
        let changeWord = "increase";
        
        if (this.magnitude < 0) {
            changeWord = "decrease";
        }
        
        console.log(
            '${this.magnitude < 0 ? "decrease" : "increase"} tagets ${this.stat} by ${Math.abs(this.magnitude)}' 
        );
    
        console.log(target);
        }else {
        throw new Error("Target must be a unit!");
        }
    }
}


const redBeltNinja = new Unit("Red Belt Ninja", 3,3,4);
const blackBeltNinja = new Unit("Black Belt Ninja",4,5,4);

const hardAlgo = new Effect("Hard Algorithm",2,3,"resilience")
const uhandledPromiseRejection = new Effect(
    "uhandled Promise Rejection",
    1,
    -2,
    "resilience"
);

const pairProgramming = new Effect("Pair Programming",3,2,"power");

hardAlgo.play(redBeltNinja);
uhandledPromiseRejection.play(redBeltNinja);
pairProgramming.play(redBeltNinja);
redBeltNinja.attack(blackBeltNinja);