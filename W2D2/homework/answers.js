//Easy going 
for (var Num = 1; Num <= 20 ; Num++){
console.log(Num);
}
// completed 

// Get Even
for (let evenNum = 0; evenNum <= 200; evenNum++){
    if(evenNum % 2 == 0){
        console.log(evenNum);
    }
}
// completed 

//Fizz Buzz
for (let i = 1; i <= 100; i++){
    if (i % 15 === 0) {
        console.log('FizzBuzz', i);
    }
    else if (i % 5 === 0) {
        console.log('Buzz', i);
    }
    else if(i % 3 ===0){
        console.log('Fizz' , i);
    }
    else{
        console.log(i)
    }
}
// Wild wild life
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant",  5000 , "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"];
plantee.fill(5001, 2, 3);
wolfy.fill("Gotham City", 3, );
console.log(plantee, wolfy);
dart.splice(4, 1, "Hawkins");
console.log(dart);
wolfy.fill("Gameboy", 0, 1);
console.log(wolfy);

//Yell at the Ninja Turtle
const turtle = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
for (let x of turtle) {
    console.log(x.toUpperCase());
}

//Methods, Revised
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
console.log(favMovies.indexOf('Titanic'));
let hello = favMovies.sort();
console.log(hello);
console.log(favMovies);
console.log(hello === favMovies);
// 1.yes it permanently altered it. sort sorted alphabetically.
let youtube = favMovies.pop();
console.log(youtube);
favMovies.push("Guardians of the Galaxy");
console.log(favMovies);
favMovies1 = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
console.log(favMovies1.reverse());
console.log(favMovies1.shift());
// upshift return new item at the begining of an array.
console.log(favMovies1.indexOf("Django Unchained"));
//14
favMovies1.splice(14, 1, "Avatar");
// 7.yes permanantely
console.log(favMovies1.length);
//18
console.log(favMovies1);
const movie = favMovies1.slice(9, 18);
console.log(movie);
// No
//It changed the value of new array
console.log(movie.indexOf("Fast and Furious"));
// -1
// not sure


//Where is Waldo
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert", ["Lucinda", "Jacc", "Neff", "Snoop"], ["Petunia", ["Baked Goods", "Waldo"]]];
whereIsWaldo.splice (1, 1);
console.log(whereIsWaldo[1][2]);
let john = whereIsWaldo[1].splice(2, 1, "No One");
console.log(whereIsWaldo);
console.log(whereIsWaldo[2][1][1]);

//Excited Kitten
const kitten = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..." ];
for(let i = 0; i < 20; i++){
    
    if (i % 2 == 0){
        let ran = Math.random();
        let g = ran * 2;
        console.log(kitten[Math.round(g)])
    }
    else {
        console.log("Love me, pet me! HSSSSSS!");
    }
}

// Find the Median
const nums = [14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12, 17, 12, 71, 18, 15, 12];
nums.sort();
let len = nums.length;
let position = len / 2;
console.log(len, position);
if (len % 2 != 0){
    console.log(nums[(position + (position + 1)) / 2]);
}
else {
    console.log(nums[position]);
}