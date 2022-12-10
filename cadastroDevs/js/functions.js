function newLine(divClass){
    let div = document.querySelector(("."+divClass));
    div.innerHTML ="";
    div.innerHTML += `<br><label for="technology">Nome da técnologia: </label>
                        <input type="text" id="technology"><br>
                        <h4>Há quantos anos você usa:</h3>
                        <input class="years" type="radio" id="02" value="0-2 anos" name="years">
                        <label for="02">0-2</label>
                        <input class="years" type="radio" id="34" value="3-4 anos" name="years">
                        <label for="34">3-4</label>
                        <input class="years" type="radio" id="5"  value="5+ anos" name="years">
                        <label for="5">5+</label><br><br>
                        <input type="button" id="save" value="Salvar">
                        <input type = "button" id="register" value="Cadastrar"> `   
    let test = readData("tech")
    if(test.length === 0){
        document.getElementById("register").disabled = true;
    }
    let saveButton = document.querySelector("input[id='save']");
    let register = document.querySelector("#register")
    saveButton.addEventListener('click', ()=>{
            getData("name", "technology");
            techAdded("techAdded")
            let technology = document.querySelector("#technology");
            let radio = document.querySelectorAll('input[name="years"]');
            
            let aux = readData("tech");

            if(aux.length !== 0){
                document.getElementById("register").disabled = false;
            }

            technology.value = " "; 
            for (let i = 0; i < radio.length; i++) {
                radio[i].checked = false;
                
            }
    });
    register.addEventListener('click', ()=>{
        let devArray = [];
        let techArray = readData("information")
        let techAux = document.querySelectorAll(".techList");
        let name = document.querySelector("#name");
        let count = localStorage.getItem("count")
        count++;
        let finalInfo = [];

       finalInfo[0] = name.value;
        console.log(finalInfo[0])
        
        
        saveData("final", finalInfo)
        for (let i = 0; i < techAux.length; i++) {
            finalInfo.push(techAux[i].innerText)
        }
        saveData("count",count)
        saveData(("devArray"+ count),finalInfo)
        localStorage.removeItem("information");
        localStorage.removeItem("tech");
        localStorage.removeItem("years");

     
    });
}

function getData(nameId, technologyId){
    let name = document.querySelector(("#" + nameId));
    let technology = document.querySelector(("#")+ technologyId);
    let informations = [];
    let informationsAll = [];
    let radio = document.querySelector("input[name='years']:checked").value
    let technologyArray = [];
    let yearsArray = [];
    

    if(localStorage.getItem("tech")){
        technologyArray = readData("tech");
        yearsArray = readData("years");
    }
    if(localStorage.getItem("information")){
        informationsAll = readData("information")
    } 

        technologyArray.push(technology.value); 
        yearsArray.push(radio);
        informations.push(technology.value,radio);
        informationsAll.push(informations)
        

        
        saveData("tech",technologyArray);
        saveData("years", yearsArray);
        saveData("information",informationsAll);


}


function techAdded(divClass){
        let tech = readData("tech");
        let years = readData("years");
        
        let div = document.querySelector((".") + divClass);
        
        let ul = document.createElement("ul")
        div.appendChild(ul);
        
        let liTech = document.createElement("ul")
        liTech.innerText = tech[tech.length - 1];
        liTech.classList.add("techList")
        
        let liYears = document.createElement("li")
        liYears.innerHTML = years[years.length - 1];
        liYears.classList.add("yearsList")

        let remove  = document.createElement("input")
        remove.type = "button"
        remove.value = "X"
        remove.classList.add("remove");


        liTech.appendChild(liYears)
        ul.append(liTech, remove)

        ul.classList.add("ul")
        
        let ulArray = document.querySelectorAll(".ul")
        let removeArray = document.querySelectorAll(".remove")
        for (let i = 0; i < ulArray.length; i++) {    
            removeArray[i].addEventListener("click", ()=>{
                
                ulArray[i].remove();

            })
        }
            
}
        
function readData(nomeChave) {
    if (window.localStorage) {
        let aux = JSON.parse(
            localStorage.getItem(nomeChave));
        let dados;
        if (aux != null) {
            dados = aux;
        } else {
            dados = [];
        }
        return dados;
    } else {
        alert("operacao não disponível");
    }
    return false;
}

function saveData(nomeChave, conteudo) {
    if (window.localStorage) {
        let dados = JSON.stringify(conteudo);
        localStorage.setItem(nomeChave, dados);
    } else {
        alert("Operação não disponível.");
    }
}
function showDevs(divClass){
    let div = document.querySelector(("."+ divClass))
    let count = readData("count")
    
    for (let i = 1; i <= count; i++) {
        let devArray = readData(("devArray"+i));
        let ul = document.createElement("ul")
        ul.innerText = devArray[0] +"\n Tecnologias:"
        ul.classList.add("ulList")
        testLi = document.createElement("div")
        for (let j = 1; j < devArray.length; j++) {
            let li = document.createElement("li")
            li.classList.add("liList")
            testLi.classList.add("testLi")
            div.append(ul)
            li.innerText = devArray[j]
            testLi.appendChild(li)
            ul.append(testLi)
           
            
        }
        
    }
}