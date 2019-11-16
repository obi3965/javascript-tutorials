let btn = document.querySelector('#btn');
btn.addEventListener('click', function(){
    document.querySelector("#read-more").innerHTML = 
    "lorem lorem lorem";
    btn.style.display ="none"
});


let movies = ['jan', 'ahmad','klara'];
//change the array to string
let name = movies.join(" ")
console.log(name);

//put the new string inside the paragraph
let p = document.getElementById("movies");
console.log(p);

p.textContent = name;

//to create html element
let main = document.querySelector('.main');
let ul = document.createElement('ul');
main.appendChild(ul);

movies.forEach(function(item){
    let li = document.createElement('li');
    
    let text = document.createTextNode(item);
    li.appendChild(text);
    ul.appendChild(li)
    li.addEventListener('click', function(){
        console.log('li is clicked')
    })
})