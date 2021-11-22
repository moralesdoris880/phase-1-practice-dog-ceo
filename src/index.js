console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let dogArr = [];

document.addEventListener('DOMContentLoaded', (e)=> {
    e.preventDefault();
    let breedUl = document.getElementById('dog-breeds')
    fetch(imgUrl)
        .then(response => response.json())
        .then((data) => {
            let dogDiv = document.getElementById('dog-image-container')
            dogArr = data;
            //get data
            //set what data is by console log
            //use data
            //keep console loggin in between
            for(const dog of dogArr.message) {
                let img = document.createElement("img");
                img.src = dog;
                dogDiv.appendChild(img)
            }
            //iterate through resp
            //add each img element in duv
        })
    fetch(breedUrl)
        .then(response => response.json())
        .then((data) => {
            
            for (const breed in data.message){
                let li = document.createElement('li');
                li.textContent = breed;
                breedUl.appendChild(li)
            }
            
        })
    
    breedUl.addEventListener('click',(e)=>{e.target.style.color = 'red'})
    let breedSelect = document.getElementById('breed-dropdown')
    breedSelect.addEventListener('click', (e)=>{
    let lists = document.getElementsByTagName('li');
    for (let i =0 ; i <lists.length;i++){
        if(lists[i].innerHTML.charAt(0)===e.target.value){
            lists[i].style.display = 'list-item';
        }
        else{
            lists[i].style.display = 'none';
        }
    }
    })
})


