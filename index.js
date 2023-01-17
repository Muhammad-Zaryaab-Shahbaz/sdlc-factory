const wrapper = document.querySelector('.wrapper');
let finalMonth, totalMoneyMade = 4;
let initialInvestment = 1000000;

let screen = 1;
let sdlc;

const screenAdd = () => {
  screen = screen + 1;
  modulesHandler()
}
const screenMinus = () => {
  screen = screen - 1;
  modulesHandler()
}


// calculating values
function getRandomInt(min, max) { return Math.random() * (max - min + 1) + min };
const januaryMonth = (fundStart, sdlc) => {
  const obj = {
    fundStart: fundStart,
    moneyOut: function () { return ((this.droidProduced() * this.droidProductionCost()) + (this.numberOfBugs() * this.bugFixCost())) },
    moneyIn: function () { return ((this.droidProduced() - this.defectiveCount()) * this.droidSellCost()) },
    droidProduced: function () { return getRandomInt(sdlc.droidProductionRate.lower, sdlc.droidProductionRate.upper) },
    defectivePercentage: function () { return (getRandomInt((sdlc.percentageOfDefectiveDroids.lower * 100), (sdlc.percentageOfDefectiveDroids.upper * 100)) / 100) },
    defectiveCount: function () { return (this.droidProduced() * (this.defectivePercentage() / 100)) },
    droidProductionCost: function () { return getRandomInt(sdlc.droidProductionCost.lower, sdlc.droidProductionCost.upper) },
    numberOfBugs: function () { return (this.droidProductionCost() * (getRandomInt(((sdlc.rateOfNewBugs.lower / 100) * 100), ((sdlc.rateOfNewBugs.upper / 100) * 100))) / 100) },
    bugFixCost: function () { return getRandomInt(sdlc.droidProductionRate.lower, sdlc.droidProductionRate.upper) },
    droidUpSellCost: function () { return getRandomInt(((sdlc.droidUpSellPercentage.lower / 100) * 100), ((sdlc.droidUpSellPercentage.upper / 100) * 100)) },
    droidSellCost: function () { return ((this.droidProductionCost() * (this.droidUpSellCost() / 100)) + this.droidProductionCost()) }
  }

  const obj2 = {
    fundStart: obj.fundStart,
    moneyOut: obj.moneyOut(),
    moneyIn: obj.moneyIn(),
    droidProduced: obj.droidProduced(),
    defectivePercentage: obj.defectivePercentage(),
    defectiveCount: obj.defectiveCount(),
    droidProductionCost: obj.droidProductionCost(),
    numberOfBugs: obj.numberOfBugs(),
    bugFixCost: obj.bugFixCost(),
    droidUpSellCost: obj.droidUpSellCost(),
    droidSellCost: obj.droidSellCost(),
  }

  return obj2;
}
const othersMotnhs = (fundStart, sdlc) => {
  const obj = {
    fundStart: function () { return fundStart },
    moneyOut: function () { return ((this.droidProduced() * this.droidProductionCost()) + (this.numberOfBugs() * this.bugFixCost())) },
    moneyIn: function () { return ((this.droidProduced() - this.defectiveCount()) * this.droidSellCost()) },
    droidProduced: function () { return getRandomInt(sdlc.droidProductionRate.lower, sdlc.droidProductionRate.upper) },
    defectivePercentage: function () { return (getRandomInt((sdlc.percentageOfDefectiveDroids.lower * 100), (sdlc.percentageOfDefectiveDroids.upper * 100)) / 100) },
    defectiveCount: function () { return (this.droidProduced() * (this.defectivePercentage() / 100)) },
    droidProductionCost: function () { return getRandomInt(sdlc.droidProductionCost.lower, sdlc.droidProductionCost.upper) },
    numberOfBugs: function () { return (this.droidProductionCost() * (getRandomInt(((sdlc.rateOfNewBugs.lower / 100) * 100), ((sdlc.rateOfNewBugs.upper / 100) * 100))) / 100) },
    bugFixCost: function () { return getRandomInt(sdlc.droidProductionRate.lower, sdlc.droidProductionRate.upper) },
    droidUpSellCost: function () { return getRandomInt(((sdlc.droidUpSellPercentage.lower / 100) * 100), ((sdlc.droidUpSellPercentage.upper / 100) * 100)) },
    droidSellCost: function () { return ((this.droidProductionCost() * (this.droidUpSellCost() / 100)) + this.droidProductionCost()) }
  }

  const obj2 = {
    fundStart: obj.fundStart(),
    moneyOut: obj.moneyOut(),
    moneyIn: obj.moneyIn(),
    droidProduced: obj.droidProduced(),
    defectivePercentage: obj.defectivePercentage(),
    defectiveCount: obj.defectiveCount(),
    droidProductionCost: obj.droidProductionCost(),
    numberOfBugs: obj.numberOfBugs(),
    bugFixCost: obj.bugFixCost(),
    droidUpSellCost: obj.droidUpSellCost(),
    droidSellCost: obj.droidSellCost(),
  }

  return obj2;

}



// templates for differnet pages
// 1st screen temp and inputs handlers
const addDevFn = (add) => {
  const develpers = document.querySelector('.develpers');
  const prevValue = +develpers.value;
  const remainingDoc = document.querySelector('#budget-remaining');
  const inputsValidationContainer = document.querySelectorAll('.user-btn-container')
  inputsValidationContainer[0].style.outline = 'none'
  
  devValue = (+prevValue) + (+add)
  develpers.value = devValue;
  if (devValue == 0 || sprintsValue == 0) {
    remainingDoc.innerHTML = '';
    
  }

  remainingDoc.innerHTML = totalRemainBudget(devValue, sprintsValue);
  remainingValue = totalRemainBudget(devValue, sprintsValue);

  const warningContainer = document.getElementById('warning-massage');
  if(remainingValue < 0) {
    if(warningContainer.innerHTML !=="") return;
    warningContainer.innerHTML=`<small class="typing-slider" ><p>Your budget is less than Zero</p></small>`
  }else{
    warningContainer.innerHTML=''
  }
  if (devValue == 0 || sprintsValue == 0) {
    remainingDoc.innerHTML = '';
    return
  }
}
const minusDevFn = (minus) => {
  const develpers = document.querySelector('.develpers');
  const prevValue = +develpers.value;
  const remainingDoc = document.querySelector('#budget-remaining');
  if ((+prevValue) < minus) return;

  devValue = (+prevValue) - (minus)
  develpers.value = devValue;
  if (devValue == 0 || sprintsValue == 0) {
    remainingDoc.innerHTML = '';
  }

  remainingDoc.innerHTML = totalRemainBudget(devValue, sprintsValue);
  remainingValue = totalRemainBudget(devValue, sprintsValue);

  const warningContainer = document.getElementById('warning-massage');
  if(remainingValue < 0) {
    if(warningContainer.innerHTML !=="") return;
    warningContainer.innerHTML=`<small class="typing-slider" ><p>Your budget is less than Zero</p></small>`
  }else{
    warningContainer.innerHTML=''
  }
  if (devValue == 0 || sprintsValue == 0) {
    remainingDoc.innerHTML = '';
    return
  }
}
const addSprintFn = (add) => {
  const sprint = document.querySelector('.sprints');
  const prevValue = +sprint.value;
  const remainingDoc = document.querySelector('#budget-remaining');
  const inputsValidationContainer = document.querySelectorAll('.user-btn-container')
  inputsValidationContainer[1].style.outline = 'none'

  sprintsValue = (+prevValue) + (+add)
  sprint.value = sprintsValue;

  if (devValue == 0 || sprintsValue == 0) {
    remainingDoc.innerHTML = '';
  }

  remainingDoc.innerHTML = totalRemainBudget(devValue, sprintsValue);
  remainingValue = totalRemainBudget(devValue, sprintsValue);

  const warningContainer = document.getElementById('warning-massage');
  if(remainingValue < 0) {
    if(warningContainer.innerHTML !=="") return;
    warningContainer.innerHTML=`<small class="typing-slider" ><p>Your budget is less than Zero</p></small>`
  }else{
    warningContainer.innerHTML=''
  }
  if (devValue == 0 || sprintsValue == 0) {
    remainingDoc.innerHTML = '';
    return
  }
}
const minusSprintFn = (minus) => {
  const sprint = document.querySelector('.sprints');
  const prevValue = +sprint.value;
  const remainingDoc = document.querySelector('#budget-remaining');
  if ((+prevValue) < minus) return;

  sprintsValue = (+prevValue) - (minus)
  sprint.value = sprintsValue;
  if (devValue == 0 || sprintsValue == 0) {
    remainingDoc.innerHTML = '';
  }

  remainingDoc.innerHTML = totalRemainBudget(devValue, sprintsValue);
  remainingValue = totalRemainBudget(devValue, sprintsValue);

  const warningContainer = document.getElementById('warning-massage');
  if(remainingValue < 0 ) {
    if(warningContainer.innerHTML !=="") return;
    warningContainer.innerHTML=`<small class="typing-slider" ><p>Your budget is less than Zero</p></small>`
  }else{
    warningContainer.innerHTML=''
  }
  if (devValue == 0 || sprintsValue == 0) {
    remainingDoc.innerHTML = '';
    return
  }
}
const firstScreenTemp = () => {
  const html = ` 
  <div class="header offical-header">
  <div class="image-container">
      <img src="https://assets.tryhackme.com/img/logo/tryhackme_logo_full.svg" alt="image-logo">
  </div>
  <div class="header-content">
      <h1>SDLC Factory Game</h1>
      <p>Select amount of sprints and developers. </p>
  </div>
</div>
<div class="content">
  <div class="user-form-container">
      <form action="#" class="user-form  flex flex-col autocomplete="off" p-8">
          <span >
              <label for="price-total">
              <i class="fa-solid fa-sack-dollar"></i>
              Total Budget :
              </label>
              <p type="text"  id="price-total">R1,000,000</p>
          </span>
          <span >
              <label for="price-dev">
              <i class="fa-solid fa-arrow-up-wide-short"></i>
              Cost of developer per sprint :
              </label>
              <p type="text"  id="price-dev">3,000</p>
          </span>
          <span >
              <label for="develpers">
                <i class="fa-solid fa-user-plus"></i>
                Number of developers :
              </label>
              <div class='developer-container-input'>
                <div class='user-btn-container'>
                <button onClick='minusDevFn(10)'>-10</button>
                <button onClick='minusDevFn(5)'>-5</button>
                <button onClick='minusDevFn(1)'>-1</button>
                <input tabindex="1" type="text" value="" class="inputs-user develpers" name="devValue" id="develpers" autocomplete="off">
                <button onClick='addDevFn(1)'>+1</button>
                <button onClick='addDevFn(5)'>+5</button>
                <button onClick='addDevFn(10)'>+10</button> 
                </div>
              </div>
          </span>
          <span >
          <label for="sprints">
          <i class="fa-sharp fa-solid fa-arrows-spin"></i>
          Number of sprints :
          </label>
          <div class='developer-container-input'>
            <div class='user-btn-container'>
            <button onClick='minusSprintFn(10)'>-10</button>
            <button onClick='minusSprintFn(5)'>-5</button>
            <button onClick='minusSprintFn(1)'>-1</button>
              <input tabindex="2" type="text" class="inputs-user sprints" value="" name="sprintsValue" id="sprints" autocomplete="off">
              <button onClick='addSprintFn(1)'>+1</button>
              <button onClick='addSprintFn(5)'>+5</button>
              <button onClick='addSprintFn(10)'>+10</button>
            </div>
          </div>
      </span>
          <span >
              <label for="budget-remaining">
              <i class="fa-solid fa-money-bill"></i>
              Budget Remaining :
              </label>
              <p id="budget-remaining"></p>
          </span>
          
          <div class="btn-container"><input type="submit" value="Next" class="submit-first"></div>
      </form>
      <div class="firstScreenWarning" id="warning-massage"></div>
  </div>
</div>
 
  `

  return html
}

// 2nd screen temp and inputs handlers
const goHome = ()=>{
  remainingValue =0;
  screenMinus()

  const dev = document.querySelector('.develpers');
  const sprints = document.querySelector('.sprints');
  dev.value = devValue;
  sprints.value= sprintValue;

}
const sdlcButtonsAdd = (value, target) => {
  const remainingDoc = document.querySelector('#sprint-remaining');
  const inputField = document.querySelector(`.${target}`);
  const inputValue = +inputField.value;


  if (target == 'plaining') {
    plaining = (+value) + inputValue;
    inputField.value = plaining;
  }

  else if (target == 'definerequirements') {
    defineRequirements = (+value) + inputValue;
    inputField.value = defineRequirements;
  }

  else if (target == 'designprototyping') {
    designPrototyping = (+value) + inputValue;
    inputField.value = designPrototyping;
  }

  else if (target == 'softwaredevelopment') {
    softwaredevelopment = (+value) + inputValue;
    inputField.value = softwaredevelopment;
  }
  else if (target == 'testing') {
    testing = (+value) + inputValue;
    inputField.value = testing;
  }
  else if (target == 'development') {
    development = (+value) + inputValue;
    inputField.value = development;
  }
  else if (target == 'operationmaintaince') {
    operationMaintenance = (+value) + inputValue;
    inputField.value = operationMaintenance;
  }

  const total = +(plaining + defineRequirements + designPrototyping + softwaredevelopment + testing + development + operationMaintenance)
  remainingDoc.innerHTML = +(sprintValue - total);

  const iconsElements = document.querySelectorAll('.icon-images-game')
  if(sprintValue < total) iconsElements.forEach(el => el.style.outline = '2px solid red')
  else iconsElements.forEach(el => el.style.outline = '2px solid #a3ea2a')

  const sdlcInputs = document.querySelectorAll('.inputs-sdlc');
  sdlcInputs.forEach(el => {
    const val = (+el.value);
    if (!val || val == 0) return;
    else el.parentElement.style.outline = 'none'
  })
    upperLowerLimitCalc({ plaining, defineRequirements, designPrototyping, softwaredevelopment, operationMaintenance, development, testing },sprintValue);

}
const sdlcButtonsMinus = (value, target) => {
  const remainingDoc = document.querySelector('#sprint-remaining');
  const inputField = document.querySelector(`.${target}`);
  const inputValue = +inputField.value;

  if (target == 'plaining') {
    if ((inputValue) < value) return;
    plaining = inputValue - (+value);
    inputField.value = plaining;
  }

  else if (target == 'definerequirements') {
    if ((inputValue) < value) return;
    defineRequirements = inputValue - (+value);
    inputField.value = defineRequirements;
  }

  else if (target == 'designprototyping') {
    if ((inputValue) < value) return;
    designPrototyping = inputValue - (+value);
    inputField.value = designPrototyping;
  }

  else if (target == 'softwaredevelopment') {
    if ((inputValue) < value) return;
    softwaredevelopment = inputValue - (+value);
    inputField.value = softwaredevelopment;
  }
  else if (target == 'testing') {
    if ((inputValue) < value) return;
    testing = inputValue - (+value);
    inputField.value = testing;
  }
  else if (target == 'development') {
    if ((inputValue) < value) return;
    development = inputValue - (+value);
    inputField.value = development;
  }
  else if (target == 'operationmaintaince') {
    if ((inputValue) < value) return;
    operationMaintenance = inputValue - (+value);
    inputField.value = operationMaintenance;
  }

  const total = +(plaining + defineRequirements + designPrototyping + softwaredevelopment + testing + development + operationMaintenance)
  remainingDoc.innerHTML = +(sprintValue - total);

  const iconsElements = document.querySelectorAll('.icon-images-game')
  if(sprintValue < total) iconsElements.forEach(el => el.style.outline = '2px solid red')
  else iconsElements.forEach(el => el.style.outline = '2px solid #a3ea2a')

  const sdlcInputs = document.querySelectorAll('.inputs-sdlc');
  sdlcInputs.forEach(el => {
    const val = (+el.value);
    if (!val || val == 0) return;
    else el.parentElement.style.outline = 'none'
  })
 
    upperLowerLimitCalc({ plaining, defineRequirements, designPrototyping, softwaredevelopment, operationMaintenance, development, testing },sprintValue)
}
const secondScreenTemp = () => {
  const html = `
  <div class="header offical-header">
  <div class="image-container">
    <img src="https://assets.tryhackme.com/img/logo/tryhackme_logo_full.svg" alt="image-logo">
  </div>
  <div class="header-content">
    <h1>SDLC Factory Game</h1>
    <p>Allocate number of sprints</p>
  </div>
</div>
<div class="remaining-sprint-container">
<span class='remaining-sprint-container'>Remaining Sprints : <p id="sprint-remaining">Sprints</p></span>
<button class="go-home" onClick="goHome()"> <i class="fa-solid fa-chevron-left"></i> Home </button>
</div>
<div class="secondScreenWrapper">

  <div class="sdlc-form">
    <span>
      <label for="plaining">
        <div><img class="icon-images-game" src="./images/sdlc-icons/Planning.png" alt="planing-icon"></div>
        <img src="./images/text-images/Planning.png" alt="planing-text">
      </label>
      <div class='sdlc-container-input'>
        <div class='sdlc-btn-container'>
        <button onClick='sdlcButtonsMinus(10,"plaining")'>-10</button>
        <button onClick='sdlcButtonsMinus(5,"plaining")'>-5</button>
        <button onClick='sdlcButtonsMinus(1,"plaining")'>-1</button>
          <input tabindex="1" class="inputs-sdlc plaining" value="" name="plaining" id="plaining " autocomplete="off">
          <button onClick='sdlcButtonsAdd(1,"plaining")'>+1</button>
          <button onClick='sdlcButtonsAdd(5,"plaining")'>+5</button>
          <button onClick='sdlcButtonsAdd(10,"plaining")'>+10</button>
        </div>
      </div>
    </span>
    <span>
      <label for="definerequirements">

        <div><img class="icon-images-game" src="./images/sdlc-icons/Define and requirements.png" alt="define-requirements-icon"></div>
        <img src="./images/text-images/Define requitements.png" alt="requirement-text">
      </label>
      <div class='sdlc-container-input'>
        <div class='sdlc-btn-container'> 
        <button onClick='sdlcButtonsMinus(10,"definerequirements")'>-10</button>
        <button onClick='sdlcButtonsMinus(5,"definerequirements")'>-5</button>
        <button onClick='sdlcButtonsMinus(1,"definerequirements")'>-1</button>
          <input tabindex="2" class="inputs-sdlc definerequirements" name="definerequirements" id="definerequirements"
            autocomplete="off">
          <button onClick='sdlcButtonsAdd(1,"definerequirements")'>+1</button>
          <button onClick='sdlcButtonsAdd(5,"definerequirements")'>+5</button>
          <button onClick='sdlcButtonsAdd(10,"definerequirements")'>+10</button>
        </div>
      </div>
    </span>
    <span>
      <label for="designprototyping">

        <div><img class="icon-images-game" src="./images/sdlc-icons/Design and prototyping.png" alt="design-prototyping-icon"></div>
        <img src="./images/text-images/Design and protoyping.png" alt="image-text">
      </label>
      <div class='sdlc-container-input'>
        <div class='sdlc-btn-container'>
        <button onClick='sdlcButtonsMinus(10,"designprototyping")'>-10</button> 
        <button onClick='sdlcButtonsMinus(5,"designprototyping")'>-5</button>
        <button onClick='sdlcButtonsMinus(1,"designprototyping")'>-1</button>
          <input tabindex="3" class="inputs-sdlc designprototyping" name="designprototyping" id="designprototyping "
            autocomplete="off">
          <button onClick='sdlcButtonsAdd(1,"designprototyping")'>+1</button>
          <button onClick='sdlcButtonsAdd(5,"designprototyping")'>+5</button>
          <button onClick='sdlcButtonsAdd(10,"designprototyping")'>+10</button>
        </div>
      </div>
    </span>
    <span>
      <label for="softwaredevelopment">
        <div><img class="icon-images-game" src="./images/sdlc-icons/Software developments.png" alt="sd-icon"></div>
        <img src="./images/text-images/Software developments.png" alt="image-text">
      </label>
      <div class='sdlc-container-input'>
        <div class='sdlc-btn-container'>
        <button onClick='sdlcButtonsMinus(10,"softwaredevelopment")'>-10</button>
        <button onClick='sdlcButtonsMinus(5,"softwaredevelopment")'>-5</button>
        <button onClick='sdlcButtonsMinus(1,"softwaredevelopment")'>-1</button>
          <input tabindex="4" class="inputs-sdlc softwaredevelopment" name="softwaredevelopment" id="softwaredevelopment "
            autocomplete="off">
          <button onClick='sdlcButtonsAdd(1,"softwaredevelopment")'>+1</button>
          <button onClick='sdlcButtonsAdd(5,"softwaredevelopment")'>+5</button>
          <button onClick='sdlcButtonsAdd(10,"softwaredevelopment")'>+10</button>
        </div>
      </div>
    </span>
    <span>
      <label for="testing">
        <div><img class="icon-images-game" src="./images/sdlc-icons/Testing.png" alt="testing-icon"></div>
        <img src="./images/text-images/Testing.png" alt="image-text">
      </label>
      <div class='sdlc-container-input'>
        <div class='sdlc-btn-container'>
        <button onClick='sdlcButtonsMinus(10,"testing")'>-10</button>
        <button onClick='sdlcButtonsMinus(5,"testing")'>-5</button>
        <button onClick='sdlcButtonsMinus(1,"testing")'>-1</button>
          <input tabindex="5" class="inputs-sdlc testing" name="testing" id="testing " autocomplete="off">
          <button onClick='sdlcButtonsAdd(1,"testing")'>+1</button>
          <button onClick='sdlcButtonsAdd(5,"testing")'>+5</button>
          <button onClick='sdlcButtonsAdd(10,"testing")'>+10</button>
        </div>
      </div>
    </span>
    <span>
      <label for="development">
        <div><img class="icon-images-game" src="./images/sdlc-icons/Deployment.png" alt="development-icon"></div>
        <img src="./images/text-images/Deployment.png" alt="image-text">
      </label>
      <div class='sdlc-container-input'>
        <div class='sdlc-btn-container'>
        <button onClick='sdlcButtonsMinus(10,"development")'>-10</button>
         <button onClick='sdlcButtonsMinus(5,"development")'>-5</button>
         <button onClick='sdlcButtonsMinus(1,"development")'>-1</button>
         <input tabindex="6" class="inputs-sdlc development" name="development" id="development " autocomplete="off">
          <button onClick='sdlcButtonsAdd(1,"development")'>+1</button>
          <button onClick='sdlcButtonsAdd(5,"development")'>+5</button>
          <button onClick='sdlcButtonsAdd(10,"development")'>+10</button>
        </div>
      </div>
    </span>

    <span>
      <label for="operationmaintaince">
        <div><img class="icon-images-game" src="./images/sdlc-icons/Operations and maintenance.png" alt="maintaince-icon"></div>
        <img src="./images/text-images/Operations and maintenance.png" alt="image-text">
      </label>
      <div class='sdlc-container-input'>
        <div class='sdlc-btn-container'>
       
        <button onClick='sdlcButtonsMinus(10,"operationmaintaince")'>-10</button>
        <button onClick='sdlcButtonsMinus(5,"operationmaintaince")'>-5</button>
        <button onClick='sdlcButtonsMinus(1,"operationmaintaince")'>-1</button>
          <input tabindex="7" class="inputs-sdlc operationmaintaince" name="operationmaintaince" id="operationmaintaince "
            autocomplete="off">
          <button onClick='sdlcButtonsAdd(1,"operationmaintaince")'>+1</button>
          <button onClick='sdlcButtonsAdd(5,"operationmaintaince")'>+5</button>
          <button onClick='sdlcButtonsAdd(10,"operationmaintaince")'>+10</button>
        </div>
      </div>
    </span>
  </div>
  <div class="limts-stats">
    <div class="limts-stats__container">
      <div class="limts-stats__heading">
        <div>
          <h1>Game Metrics</h1>
        </div>
        <div>
          <h1>Lower Limit</h1>
        </div>
        <div>
          <h1>Upper Limit</h1>
        </div>
      </div>
       <div class="limts-stats__content">
      <div><b>Rate of new bugs</b>  <p></p> <p></p> </div>
      <div><b>Cost to fix bugs</b>  <p></p> <p></p> </div>
      <div><b>Droid production rate</b>  <p></p> <p></p> </div>
      <div><b>Percentage of defective droids</b>  <p></p> <p></p> </div>
      <div><b>Droid production cost</b>  <p></p> <p></p> </div>
      <div><b>Droid upsell percentage</b>  <p></p> <p></p> </div>
      <div><b>Droid sell cost</b>  <p></p> <p></p> </div>
      </div>

    </div>
  </div>
</div>
<div class="btn-container second-btn"><input  class="sdlc-form-submit" type="submit" value="Start Game"></div>
  `

  return html;
}

// 3rd screen temp 
const listMonths = (month, monthName) => {
  const html = `
  <tr >
      <td> ${monthName}</td>
      <td>${month.fundStart.toFixed(2)}</td>
      <td>${month.moneyOut.toFixed(2)}</td>
      <td>${month.moneyIn.toFixed(2)}</td>
      <td>${Math.round(month.droidProduced)}</td>
      <td>${month.defectivePercentage.toFixed(2)}%</td>
      <td>${Math.round(month.defectiveCount)}</td>
</tr>
  `
  return html
}
const thirdScreenTemp = () => {
  const html = ` 
  <div class="header offical-header">
  <div class="image-container">
      <img src="https://assets.tryhackme.com/img/logo/tryhackme_logo_full.svg" alt="image-logo">
  </div>
  <div class="header-content">
      <h1>SDLC Factory Game</h1>
      <p>Factory production line. </p>
  </div>
</div>
  <div class="content-screenthree">
      <div class="screen3-container">
        <img src="./images/screen3-ani/step-1.gif" alt="animations" class="image-animation">
      </div>
      <div class='table-result'>
     <table cellspacing="0">

    <thead >
    <tr>
        <th scope="col" > Project Run </th>
        <th scope="col"> Funds at start of month </th>
        <th scope="col"> Money Out </th>
        <th scope="col"> Money In </th>
        <th scope="col"> Droid Produced </th>
        <th scope="col"> Defective Percentage</th>
        <th scope="col"> Defective Count </th>

    </tr>
</thead>
     <tbody class="table-result-body">
    
     </tbody>
     </table>
     <div class="btn-container"><button class="next-month">Next month</button></div>
      </div>
      
  </div>
 
  `
  return html

}
// 4rd screen temp and inputs handlers
var currentDate = new Date();
var dateString = currentDate.toLocaleString('en-US', { 
  hour: 'numeric',
  minute: 'numeric',
  day: '2-digit',
  month: '2-digit',
  year: 'numeric'
});
function refreshPage() {window.location.reload()  }
const fourthScreenTemp = (values) => {
  const finalMonth = (+values.finalMonth.toFixed(2)).toLocaleString()
  const initialInvestment = (+values.initialInvestment.toFixed(2)).toLocaleString()
  const totalMoneyMade = (+values.totalMoneyMade.toFixed(2)).toLocaleString()
  let html;

  const html1 = `

  <div class="header offical-header">
  <div class="image-container">
      <img src="https://assets.tryhackme.com/img/logo/tryhackme_logo_full.svg" alt="image-logo">
  </div>
  <div class="header-content">
      <h1>SDLC Factory Game</h1>
      <p>Factory annually revenue</p>
  </div>
</div>
<div class="model-container" >
<div class="model">
    <div class="flag">
        <h2>Flag : </h2>
    </div>
    <div class="flag-model-tag">
        <h2>THM {Ruler.of.the.SDLC.Droids }</h2>
    </div>
</div>
</div>
<div class="content-screen-result">  
<div class="last-result">
<img src="https://assets.tryhackme.com/img/logo/tryhackme_logo_full.svg" alt="image-logo">
<h1>Certificate of Participation</h1>
<h2>SDLC FACTORY GAME</h2>
<p>You have successfully completed the challange of SDLC Factory Game</p>
<small class="date">${dateString.split(',')[1]}, ${dateString.split(',')[0]}</small>
<div class="last-result__stats">
    <span>
    <h1 >Final</h1>
    <b>${finalMonth}</b>
  </span>
    <span>
      <h1 >Initial Investment</h1>
      <b>${initialInvestment}</b>
    </span>
    <span>
      <h1 >Total Money Made</h1>
      <b>${totalMoneyMade}</b>
    </span>
</div>
</div>
</div>
  `
  const html2 = `  


  <div class="header offical-header">
  <div class="image-container">
      <img src="https://assets.tryhackme.com/img/logo/tryhackme_logo_full.svg" alt="image-logo">
  </div>
  <div class="header-content">
      <h1>SDLC Factory Game</h1>
      <p>Factory annually revenue</p>
  </div>
</div>

<div class="content-result">
<div class="last-result try-again">
<p>Your initial investment was not doubled, please adjust the sprint values to improve it</p>
<div class="last-result__stats try-again__stats">
<span>
<h1 >Final</h1>
<b>${finalMonth}</b>
</span>
<span>
  <h1 >Initial Investment</h1>
  <b>${initialInvestment}</b>
</span>
<span>
  <h1 >Total Money Made</h1>
  <b>${totalMoneyMade}</b>
</span>
</div>
<div class="btn-container" onClick="refreshPage()"><button >Restart Game</button></div>
</div>
</div>

  `
 
  if((values.initialInvestment * 2) < values.totalMoneyMade) html = html1;
  else html = html2;
  return html;
}




// 1st screen logic 
let devValue = 0;
let sprintsValue = 0;
let remainingValue = 0;
const userCalc = {
  totalBudget: 1000000,
  costPerDev: 3000
}
const totalRemainBudget = (noOfDev, noOfSprints) => {
  const budget = userCalc.totalBudget;
  const cost = userCalc.costPerDev;
  return (budget - cost * noOfDev * noOfSprints)
}
const handleInputsValues = (el) => {
  const remainingDoc = document.querySelector('#budget-remaining');
  const inputsValidationContainer = document.querySelectorAll('.user-btn-container')

  el.addEventListener('input', (e) => {

    if (e.target.name == 'devValue') {
      devValue = e.target.value;
      inputsValidationContainer[0].style.outline = 'none'
    }
    if (e.target.name == 'sprintsValue') {
      sprintsValue = e.target.value
      inputsValidationContainer[1].style.outline = 'none'


    };
    if (devValue == 0 || sprintsValue == 0) {
      remainingDoc.innerHTML = '';
      return
    }
    remainingDoc.innerHTML = totalRemainBudget(devValue, sprintsValue);
    remainingValue = totalRemainBudget(devValue, sprintsValue);

    const warningContainer = document.getElementById('warning-massage');
    if(remainingValue < 0) {
    if(warningContainer.innerHTML !=="") return;
      warningContainer.innerHTML=`<small class="typing-slider" ><p>Your budget is less than Zero</p></small>`
    }else{
      warningContainer.innerHTML=''
    }
  })
}

const handlerSubmiting = (handler) => {
  const inputsValidationContainer = document.querySelectorAll('.user-btn-container')
  if (devValue === 0) inputsValidationContainer[0].style.outline = '1px solid red';
  if (sprintsValue === 0) inputsValidationContainer[1].style.outline = '1px solid red';

  if (devValue == 0 || sprintsValue == 0 || remainingValue < 0) {

    return
  };
  handler()
}

// 2nd screen logic
let plaining = 0;
let defineRequirements = 0;
let designPrototyping = 0;
let softwaredevelopment = 0;
let testing = 0;
let operationMaintenance = 0;
let development = 0;
let sprintValue = 0

const secondcreenInputHandler = (el) => {
  const remainingDoc = document.querySelector('#sprint-remaining');
  el.addEventListener('input', (e) => {
    const sdlcInputs = document.querySelectorAll('.inputs-sdlc');
    sdlcInputs.forEach(el => {
      const val = (+el.value);
      if (!val || val == 0) return;
      else el.parentElement.style.outline = 'none'
    })

    if (e.target.name == 'plaining') plaining = (+e.target.value);
    if (e.target.name == 'definerequirements') defineRequirements = (+e.target.value);
    if (e.target.name == 'designprototyping') designPrototyping = (+e.target.value);
    if (e.target.name == 'softwaredevelopment') softwaredevelopment = (+e.target.value);
    if (e.target.name == 'testing') testing = (+e.target.value);
    if (e.target.name == 'development') development = (+e.target.value);
    if (e.target.name == 'operationmaintaince') operationMaintenance = (+e.target.value);

    const total = +(plaining + defineRequirements + designPrototyping + softwaredevelopment + testing + development + operationMaintenance)

    const iconsElements = document.querySelectorAll('.icon-images-game')
    if(sprintValue < total) iconsElements.forEach(el => el.style.outline = '2px solid red')
    else iconsElements.forEach(el => el.style.outline = '2px solid #a3ea2a')

    remainingDoc.innerHTML = +(sprintValue - total);
    upperLowerLimitCalc({ plaining, defineRequirements, designPrototyping, softwaredevelopment, operationMaintenance, development, testing },sprintValue)

  })

}
const secondScreenSubmitHandler = (handler) => {
  const sdlcInputs = document.querySelectorAll('.inputs-sdlc');
  sdlcInputs.forEach(el => {
    const val = (+el.value);
    if (!val || val == 0) el.parentElement.style.outline = '1px solid red'
  })
  if (plaining == 0 || defineRequirements == 0 || designPrototyping == 0 || softwaredevelopment == 0 || operationMaintenance == 0 || development == 0 || testing == 0) return;
  const total = plaining + defineRequirements + designPrototyping + softwaredevelopment + operationMaintenance + development + testing;
  if (total > sprintValue) return;
  handler()
}
const upperLowerLimitCalc = (sprintObject,sprint) => {
  const potencyFactor = ((+sprint * (Math.pow(1.5 ,-1*devValue)) * devValue)/100 *100);
  const rate = ((sprintObject.plaining * (-1 / 100) + sprintObject.defineRequirements * (0 / 100) + sprintObject.designPrototyping * (-5 / 100) + sprintObject.softwaredevelopment * (-5 / 100) + sprintObject.testing * (-10 / 100) + sprintObject.development * (2 / 100) + sprintObject.operationMaintenance * (-5 / 100)) * (potencyFactor / 100)) * 100;
  const cost = ((sprintObject.plaining * (-1 / 100) + sprintObject.defineRequirements * (0 / 100) + sprintObject.designPrototyping * (-5 / 100) + sprintObject.softwaredevelopment * (-5 / 100) + sprintObject.testing * (-10 / 100) + sprintObject.development * (2 / 100) + sprintObject.operationMaintenance * (-5 / 100)) * (potencyFactor / 100)) * 100;
  const droidpr = ((sprintObject.plaining * (2 / 100) + sprintObject.defineRequirements * (4 / 100) + sprintObject.designPrototyping * (5 / 100) + sprintObject.softwaredevelopment * (10 / 100) + sprintObject.testing * (2 / 100) + sprintObject.development * (5 / 100) + sprintObject.operationMaintenance * (5 / 100)) * (potencyFactor / 100)) * 100;
  const percentageodd = ((sprintObject.plaining * (-1 / 100) + sprintObject.defineRequirements * (-5 / 100) + sprintObject.designPrototyping * (-5 / 100) + sprintObject.softwaredevelopment * (-1 / 100) + sprintObject.testing * (-5 / 100) + sprintObject.development * (-1 / 100) + sprintObject.operationMaintenance * (-1 / 100)) * (potencyFactor / 100)) * 100;
  const droidpc = ((sprintObject.plaining * (-2 / 100) + sprintObject.defineRequirements * (-5 / 100) + sprintObject.designPrototyping * (-5 / 100) + sprintObject.softwaredevelopment * (10 / 100) + sprintObject.testing * (5 / 100) + sprintObject.development * (5 / 100) + sprintObject.operationMaintenance * (10 / 100)) * (potencyFactor / 100)) * 100;
  const droidsp = ((sprintObject.plaining * (2 / 100) + sprintObject.defineRequirements * (5 / 100) + sprintObject.designPrototyping * (5 / 100) + sprintObject.softwaredevelopment * (8 / 100) + sprintObject.testing * (0 / 100) + sprintObject.development * (0 / 100) + sprintObject.operationMaintenance * (0 / 100)) * (potencyFactor / 100)) * 100

  let phases = {
    rateOfNewBugs: {
      baseLine: 5,
      adjustmentPercentage: rate ,
      lower: function () {
        if (this.baseLine / 100 + this.adjustmentPercentage / 100 > 0) {
          return this.baseLine / 100 + this.adjustmentPercentage / 100;
        } else {
          return 0;
        }
      },
      upper: function () { return this.baseLine },
    },
    costToFixBugs: {
      baseLine: 1000,
      adjustmentPercentage: cost ,
      lower: function () { return ((this.baseLine * (-1 * this.adjustmentPercentage / 100))) },
      upper: function () { return this.baseLine }
    },
    droidProductionRate: {
      baseLine: 100,
      adjustmentPercentage: droidpr ,
      lower: function () { return (this.baseLine) },
      upper: function () { return this.baseLine * (this.adjustmentPercentage / 100) + this.baseLine }
    },
    percentageOfDefectiveDroids: {
      baseLine: 5,
      adjustmentPercentage: percentageodd ,
      lower: function () {
        if (this.baseLine / 100 + this.adjustmentPercentage / 100 > 0) {
          return this.baseLine / 100 + this.adjustmentPercentage / 100;
        } else {
          return 0;
        }
      },
      upper: function () { return this.baseLine }
    },
    droidProductionCost: {
      baseLine: 10000,
      adjustmentPercentage: droidpc ,
      lower: function () { return (this.baseLine) },
      upper: function () { return this.baseLine * (this.adjustmentPercentage / 100) + this.baseLine }
    },
    droidUpSellPercentage: {
      baseLine: 20,
      adjustmentPercentage: droidsp < 0 ? Math.floor(droidsp) : Math.ceil(droidsp),
      lower: function () { return (this.baseLine) },
      upper: function () { return (((this.baseLine / 100) + (this.adjustmentPercentage / 100)) * 100) }
    },
    droidUpSellCost: {
      baseLine: function () { return (phases.droidProductionCost.baseLine * phases.droidUpSellPercentage.baseLine / 100 + phases.droidProductionCost.baseLine) },
      adjustmentPercentage: null,
      lower: function () { return (phases.droidProductionCost.lower() * (phases.droidUpSellPercentage.lower() / 100) + phases.droidProductionCost.lower()) },
      upper: function () { return (phases.droidProductionCost.upper() * (phases.droidUpSellPercentage.upper() / 100) + phases.droidProductionCost.upper()) },
    },
  }
  sdlc = {
    rateOfNewBugs: {
      baseLine: phases.rateOfNewBugs.baseLine,
      adjustmentPercentage: phases.rateOfNewBugs.adjustmentPercentage,
      lower: phases.rateOfNewBugs.lower(),
      upper: phases.rateOfNewBugs.upper()
    },
    costToFixBugs: {
      baseLine: phases.costToFixBugs.baseLine,
      adjustmentPercentage: phases.costToFixBugs.adjustmentPercentage,
      lower: phases.costToFixBugs.lower(),
      upper: phases.costToFixBugs.upper()
    },
    droidProductionRate: {
      baseLine: phases.droidProductionRate.baseLine,
      adjustmentPercentage: phases.droidProductionRate.adjustmentPercentage,
      lower: phases.droidProductionRate.lower(),
      upper: phases.droidProductionRate.upper()
    },
    percentageOfDefectiveDroids: {
      baseLine: phases.percentageOfDefectiveDroids.baseLine,
      adjustmentPercentage: phases.percentageOfDefectiveDroids.adjustmentPercentage,
      lower: phases.percentageOfDefectiveDroids.lower(),
      upper: phases.percentageOfDefectiveDroids.upper()
    },
    droidProductionCost: {
      baseLine: phases.droidProductionCost.baseLine,
      adjustmentPercentage: phases.droidProductionCost.adjustmentPercentage,
      lower: phases.droidProductionCost.lower(),
      upper: phases.droidProductionCost.upper()
    },
    droidUpSellPercentage: {
      baseLine: phases.droidUpSellPercentage.baseLine,
      adjustmentPercentage: phases.droidUpSellPercentage.adjustmentPercentage,
      lower: phases.droidUpSellPercentage.lower(),
      upper: phases.droidUpSellPercentage.upper()
    },
    droidUpSellCost: {
      baseLine: phases.droidUpSellCost.baseLine(),
      adjustmentPercentage: phases.droidUpSellCost.adjustmentPercentage,
      lower: phases.droidUpSellCost.lower(),
      upper: phases.droidUpSellCost.upper()
    },
  }

  const element = document.querySelector('.limts-stats__content');
  const html2 = `
  <div><b>Rate of new bugs</b>  <p></p> <p></p> </div>
  <div><b>Cost to fix bugs</b>  <p></p> <p></p> </div>
  <div><b>Droid production rate</b>  <p></p> <p></p> </div>
  <div><b>Percentage of defective droids</b>  <p></p> <p></p> </div>
  <div><b>Droid production cost</b>  <p></p> <p></p> </div>
  <div><b>Droid upsell percentage</b>  <p></p> <p></p> </div>
  <div><b>Droid sell cost</b>  <p></p> <p></p> </div>
  `
  element.innerHTML = html2;

  const html = `
  <div><b>Rate of new bugs</b>  <p>${sdlc.rateOfNewBugs.lower.toFixed(0)}%</p> <p>${sdlc.rateOfNewBugs.upper.toFixed(0)}%</p> </div>
  <div><b>Cost to fix bugs</b>  <p>R.${sdlc.costToFixBugs.lower.toFixed(0)}</p> <p>R.${sdlc.costToFixBugs.upper.toFixed(0)}</p> </div>
  <div><b>Droid production rate</b>  <p>${sdlc.droidProductionRate.lower.toFixed(0)}</p> <p>${sdlc.droidProductionRate.upper.toFixed(0)}</p> </div>
  <div><b>Percentage of defective droids</b>  <p>${sdlc.percentageOfDefectiveDroids.lower.toFixed(0)}%</p> <p>${sdlc.percentageOfDefectiveDroids.upper.toFixed(0)}%</p> </div>
  <div><b>Droid production cost</b>  <p>${sdlc.droidProductionCost.lower.toFixed(0)}</p> <p>${sdlc.droidProductionCost.upper.toFixed(0)}</p> </div>
  <div><b>Droid upsell percentage</b>  <p>${sdlc.droidUpSellPercentage.lower.toFixed(0)}%</p> <p>${sdlc.droidUpSellPercentage.upper.toFixed(0)}%</p> </div>
  <div><b>Droid sell cost</b>  <p>R.${sdlc.droidUpSellCost.lower.toFixed(0)}</p> <p>R.${sdlc.droidUpSellCost.upper.toFixed(0)}</p> </div>
  `
  element.innerHTML = html
}

// 3rd screen logic
let init = 0;
let checkShowMonth = 0;
const thirdScreenAnimationHandler = () => {
  const animations = ['step-1.gif', 'step-2.gif', 'step-3.gif', 'step-4.gif', 'step-5.gif', 'step-6.gif']
  const container = document.querySelector('.image-animation');

  if (init == 6) { init = 0 }
  if (init == 0) {
    container.src = `./images/screen3-ani/${animations[init]}`
    setTimeout(() => {
      init = init + 1;
      thirdScreenAnimationHandler()
      return
    }, 1100);
  }
  else if (init == 1) {
    container.src = `./images/screen3-ani/${animations[init]}`
    setTimeout(() => {
      init = init + 1;
      thirdScreenAnimationHandler()
      return
    }, 3404);
  }
  else if (init == 2) {
    container.src = `./images/screen3-ani/${animations[init]}`
    setTimeout(() => {
      init = init + 1;
      thirdScreenAnimationHandler()
      return
    }, 4000);
  }
  else if (init == 3) {
    container.src = `./images/screen3-ani/${animations[init]}`
    setTimeout(() => {
      init = init + 1;
      thirdScreenAnimationHandler()
      return
    }, 3000);
  }
  else if (init == 4) {
    container.src = `./images/screen3-ani/${animations[init]}`
    setTimeout(() => {
      init = init + 1;
      thirdScreenAnimationHandler()
      return
    }, 6000);
  }
  else if (init == 5) {
    container.src = `./images/screen3-ani/${animations[init]}`
    setTimeout(() => {
      init = init + 1;
      thirdScreenAnimationHandler()
      return
    }, 6800);
  }

}
const thirdScreenMonthsHandler = (remainingValue,handler)=>{
  const january = januaryMonth(remainingValue, sdlc);
  const febuary = othersMotnhs(january.fundStart - january.moneyOut + january.moneyIn, sdlc)
  const march = othersMotnhs(febuary.fundStart - febuary.moneyOut + febuary.moneyIn, sdlc)
  const aprial = othersMotnhs(march.fundStart - march.moneyOut + march.moneyIn, sdlc)
  const may = othersMotnhs(aprial.fundStart - aprial.moneyOut + aprial.moneyIn, sdlc)
  const june = othersMotnhs(may.fundStart - may.moneyOut + may.moneyIn, sdlc)
  const july = othersMotnhs(june.fundStart - june.moneyOut + june.moneyIn, sdlc)
  const august = othersMotnhs(july.fundStart - july.moneyOut + july.moneyIn, sdlc)
  const september = othersMotnhs(august.fundStart - august.moneyOut + august.moneyIn, sdlc)
  const octorber = othersMotnhs(september.fundStart - september.moneyOut + september.moneyIn, sdlc)
  const november = othersMotnhs(octorber.fundStart - octorber.moneyOut + octorber.moneyIn, sdlc)
  const  december = othersMotnhs(november.fundStart - november.moneyOut + november.moneyIn, sdlc)

  const monthsData = [{month:january,str:'January'}, {str:'Febuary',month:febuary}, {month:march,str:'March'},
  {str:'April',month:aprial}, {month:may,str:'May'}, {month:june,str:'June'}, {month: july,str:'July'},
  {month:august,str:'August'}, {month:september,str:'September'}, {month:octorber,str:'October'},
  {month:november,str:'November'}, {month:december,str:'December'}];

  finalMonth = (december.fundStart - december.moneyOut + december.moneyIn);
  totalMoneyMade = finalMonth - initialInvestment;

   const tableBody = document.querySelector('.table-result-body')
  tableBody.innerHTML = listMonths(monthsData[0].month,'january')
  const btn = document.querySelector('.next-month');

  btn.addEventListener('click',()=>{
  checkShowMonth = checkShowMonth + 1;

    if(checkShowMonth ===11){
      btn.innerHTML = "Show Results"
    }
    if(checkShowMonth ===12 || checkShowMonth > 12) {
      handler()
      return
    }
    else{
      tableBody.innerHTML = listMonths(monthsData[checkShowMonth].month,monthsData[checkShowMonth].str)
    }
  })

}





// first screen handler
const firstScreenHandler = (handler) => {
  const html = firstScreenTemp();
  const parentEl = document.querySelector('.wrapper');
  parentEl.insertAdjacentHTML('afterbegin', html);


  // user for submiting form to move next page
  const userForm = document.querySelector('.user-form');
  userForm?.addEventListener('submit', (e) => e.preventDefault());

  const submitFirst = document.querySelector('.submit-first');
  submitFirst?.addEventListener('click', (e) => {
    e.preventDefault();
    handlerSubmiting(handler)
  });

  // user input validating
  const inputs = document.querySelectorAll('.inputs-user');
  inputs?.forEach(handleInputsValues);
}
// second screen handler
const secondScreenHandler = (handler, value) => {
  const html = secondScreenTemp();
  const parentEl = document.querySelector('.wrapper');
  parentEl.insertAdjacentHTML('afterbegin', html);

  sprintValue = +value;
  const remainingDoc = document.querySelector('#sprint-remaining');
  remainingDoc.innerHTML = value;

 
  upperLowerLimitCalc({ plaining, defineRequirements, designPrototyping, softwaredevelopment, operationMaintenance, development, testing },sprintValue)

  // sdlc form for submiting to move next page
  const sdlcForm = document.querySelector('.sdlc-form-submit');
  sdlcForm?.addEventListener('click', (e) => {
    e.preventDefault();
    secondScreenSubmitHandler(handler)
  });

  const inputs = document.querySelectorAll('.inputs-sdlc');
  inputs?.forEach(secondcreenInputHandler);

}
// third screen handler
const thirdScreenHandler = (remainingValue,hadnler) => {

  const html = thirdScreenTemp();
  const parentEl = document.querySelector('.wrapper');
  parentEl.insertAdjacentHTML('afterbegin', html);

  thirdScreenAnimationHandler();
  thirdScreenMonthsHandler(remainingValue,hadnler)
}
// fourth screen handler
const fourthScreenHandler = (handler, values) => {
  let html = fourthScreenTemp(values);
  let parentEl = document.querySelector('.wrapper');
  parentEl.insertAdjacentHTML('afterbegin', html);

  const closeBtn = document.querySelector('.model-close');
if(closeBtn){
  closeBtn.addEventListener('click', ()=>{
    document.querySelector('.model-container').remove() 
    parentEl.innerHTML=''
    html = fourthScreenTemp(values,false);
    parentEl.insertAdjacentHTML('afterbegin', html);
  });
}
  
}






// to show different screens
const modulesHandler = () => {
  if (screen == 1) {
    wrapper.innerHTML = '';
    return firstScreenHandler(screenAdd)
  }
  else if (screen == 2) {
    wrapper.innerHTML = '';
    return secondScreenHandler(screenAdd, sprintsValue)
  }
  else if (screen == 3) {
    wrapper.innerHTML = '';
    return thirdScreenHandler(remainingValue,screenAdd);
  }

  else if (screen == 4) {
    wrapper.innerHTML = '';
    const values = { finalMonth, initialInvestment, totalMoneyMade }
    return fourthScreenHandler(screenAdd, values)
  }
  return;
}

modulesHandler()
