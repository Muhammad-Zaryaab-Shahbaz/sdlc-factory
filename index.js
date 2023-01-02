
const body = document.querySelector('.Mainbody');
console.log(body);
console.log(document.querySelector('.heyy'));
// sdlc section

let plaining = 0;
let defineRequirements = 0;
let designPrototyping = 0;
let softwaredevelopment = 0;
let testing = 0;
let operationMaintenance = 0;
let development = 0;
let sprintValue = 0

//  user first page
const Templates = () => {
  const html = sdlcTemp();
  const parentEl = document.querySelector('.body');
  parentEl.insertAdjacentHTML('afterbegin', html);
}

const handleInputsValuesSdlc = (el) => {
  const remainingDoc = document.querySelector('#sprint-remaining');
  el.addEventListener('input', (e) => {

    if (e.target.name == 'plaining') plaining = (+e.target.value);
    if (e.target.name == 'definerequirements') defineRequirements = (+e.target.value);
    if (e.target.name == 'designprototyping') designPrototyping = (+e.target.value);
    if (e.target.name == 'softwaredevelopment') softwaredevelopment = (+e.target.value);
    if (e.target.name == 'testing') testing = (+e.target.value);
    if (e.target.name == 'development') development = (+e.target.value);
    if (e.target.name == 'operationmaintaince') operationMaintenance = (+e.target.value);

    const total = +(plaining + defineRequirements + designPrototyping + softwaredevelopment + testing + development + operationMaintenance)
    remainingDoc.innerHTML = +(sprintValue - total);

    // console.log('srpint', sprintValue, 'total', total, 'remaining', sprintValue - total);


    // if (devValue == 0 || sprintsValue == 0) {
    //     remainingDoc.innerHTML = '';
    //     return
    // }
    // remainingDoc.innerHTML = totalRemainBudget(devValue, sprintsValue)
  })
}

const handlerSubmitingSdlc = (handler) => {
  if (plaining == 0 || defineRequirements == 0 || designPrototyping == 0 || softwaredevelopment == 0 || operationMaintenance == 0 || development == 0 || testing == 0) return;
  console.log('submit');
  handler()
}

const sdlcHandler = (handler, value) => {
  Templates();
  sprintValue = +value;

  // sdlc form for submiting to move next page
  const sdlcForm = document.querySelector('.sdlc-form');
  sdlcForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    handlerSubmitingSdlc(handler)
  });

  const inputs = document.querySelectorAll('.inputs-sdlc');
  inputs?.forEach(handleInputsValuesSdlc);

  const investment = document.querySelector('#sprint-invest-total');
  investment.innerHTML = sprintValue;


}

// calculating values
function getRandomInt(min, max) {
  // min = Math.ceil(min);
  // max = Math.floor(max);
  return Math.random() * (max - min + 1) + min;
}
const sdlc = {
  rateOfNewBugs: {
    lower: 0,
    upper: 5
  },
  costToFixBugs: {
    lower: 579.42,
    upper: 1000.00
  },
  droidProductionRate: {
    lower: 100,
    upper: 166
  },
  percentageOfDefectiveDroids: {
    lower: 0,
    upper: 5
  },
  droidProductionCost: {
    lower: 10000,
    upper: 13687
  },
  droidUpSellPercentage: {
    lower: 20,
    upper: 63
  },
  droidUpSellCost: {
    lower: 12000.00,
    upper: 22372.73
  },
}
const januaryMonth = (value) => {
  const obj = {
    fundStart: value,
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

const othersMotnhs = (value) => {
  const obj = {
    fundStart: function () { return value },
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
const listMonths = (month, monthName) => {
  const html = `
  <tr class="bg-white border-b">
      <td class="text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
          ${monthName}
      </td>
      <td class="text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
      ${month.fundStart.toFixed(2)}
      </td>
      <td class="text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
      ${month.moneyOut.toFixed(2)}
      </td>
      <td class="text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
      ${month.moneyIn.toFixed(2)}
      </td>
      <td class="text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
      ${month.droidProduced.toFixed(2)}
      </td>
      <td class="text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
      ${month.defectivePercentage.toFixed(2)}%
      </td>
      <td class="text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap">
      ${month.defectiveCount.toFixed(2)}
  </td>
</tr>
  `
  return html
}

const monthTemp = (month) => {
  const html = `
  <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class=" py-2 inline-block min-w-full sm:px-2 lg:px-8">
          <div class="overflow-hidden ">
              <table class="min-w-full">
                  <thead class="border-b bg-red-100">
                      <tr>
                          <th scope="col" class="text-sm font-medium text-gray-900 px-2 py-4 text-left">
                              Project Run
                          </th>
                          <th scope="col" class="text-sm font-medium text-gray-900 px-2 py-4 text-left">
                              Funds at start of month
                          </th>
                          <th scope="col" class="text-sm font-medium text-gray-900 px-2 py-4 text-left">
                              Money Out
                          </th>
                          <th scope="col" class="text-sm font-medium text-gray-900 px-2 py-4 text-left">
                              Money In
                          </th>
                          <th scope="col" class="text-sm font-medium text-gray-900 px-2 py-4 text-left">
                              Droid Produced
                          </th>
                          <th scope="col" class="text-sm font-medium text-gray-900 px-2 py-4 text-left">
                              Defective Percentage
                          </th>
                          <th scope="col" class="text-sm font-medium text-gray-900 px-2 py-4 text-left">
                              Defective Count
                          </th>

                      </tr>
                  </thead>
                  <tbody>
                  ${listMonths(month[0], 'January')}
                  ${listMonths(month[1], 'Febuary')}
                  ${listMonths(month[2], 'March')}
                  ${listMonths(month[3], 'Aprial')}
                  ${listMonths(month[4], 'May')}
                  ${listMonths(month[5], 'June')}
                  ${listMonths(month[6], 'July')}
                  ${listMonths(month[7], 'August')}
                  ${listMonths(month[8], 'September')}
                  ${listMonths(month[9], 'October')}
                  ${listMonths(month[10], 'November')}
                  ${listMonths(month[11], 'December')}






                  </tbody>
              </table>
          </div>
      </div>
  </div>
</div>
  `

  return html;
}

const sdlcTemp = () => {
  const html = ` 
  <div class="bg-white p-4">
      <h1 class="text-center font-bold text-4xl">SDLC</h1>
      <div class="flex items-center gap-12 flex-row ">
          <form action="#" class=" sdlc-form  flex flex-col gap-y-4 bg-white py-8">
              <span class="border-b flex">
                  <label for="plaining" class="w-52">Plaining</label>
                  <input type="number" class="inputs-sdlc bg-red-100" name="plaining" id="plaining ">
              </span>
              <span class="border-b flex">
                  <label for="definerequirements" class="w-52">Define Requirements</label>
                  <input type="number" class="inputs-sdlc bg-red-100" name="definerequirements" id="definerequirements ">
              </span>
              <span class="border-b flex">
                  <label for="designprototyping" class="w-52">Design & Prototyping</label>
                  <input type="number" class="inputs-sdlc bg-red-100" name="designprototyping" id="designprototyping ">
              </span>
              <span class="border-b flex">
                  <label for="softwaredevelopment" class="w-52">Software Development</label>
                  <input type="number" class="inputs-sdlc bg-red-100" name="softwaredevelopment" id="softwaredevelopment ">
              </span>
              <span class="border-b flex">
                  <label for="testing" class="w-52">Testing</label>
                  <input type="number" class="inputs-sdlc bg-red-100" name="testing" id="testing ">
              </span>
              <span class="border-b flex">
                  <label for="development" class="w-52">Development</label>
                  <input type="number" class="inputs-sdlc bg-red-100" name="development" id="development ">
              </span>

              <span class="border-b flex">
                  <label for="operationmaintaince" class="w-52">Operations & Maintenance</label>
                  <input type="number" class="inputs-sdlc bg-red-100" name="operationmaintaince" id="operationmaintaince ">
              </span>
            
              <span class="border-b flex">
                  <label for="sprint-invest-total" class="w-52">Sprint-Investment total</label>
                  <p class="flex-1" id="sprint-invest-total"></p>
              </span>
              <span class="border-b flex">
                  <label for="sprint-remaining" class="w-52">Sprints Avaiable</label>
                  <p class="flex-1" id="sprint-remaining"></p>
              </span>

              <input type="submit" value="next ->" class="bg-red-100 mt-4 cursor-pointer">
          </form>

          <div class="flex flex-col flex-1">
              <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div class=" py-2 inline-block min-w-full sm:px-6 lg:px-8">
                      <div class="overflow-hidden ">
                          <table class="min-w-full">
                              <thead class="border-b bg-red-100">
                                  <tr>
                                      <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                          #
                                      </th>
                                      <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                          Game Metrics
                                      </th>
                                      <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                          Lower Limit
                                      </th>
                                      <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                          Upper Limit
                                      </th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr class="bg-white border-b">
                                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                          Rate of new bugs
                                      </td>
                                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                          0%
                                      </td>
                                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                          5%
                                      </td>
                                  </tr>
                                  <tr class="bg-white border-b">
                                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
                                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                          Cost to fix bugs
                                      </td>
                                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                          R579.42
                                      </td>
                                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                          R1000.00
                                      </td>
                                  </tr>
                                  <tr class="bg-white border-b">
                                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
                                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                          Droid production rate
                                      </td>
                                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                          100
                                      </td>
                                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                          166
                                      </td>
                                  </tr>
                                  <tr class="bg-white border-b">
                                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">4</td>
                                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                          Percentage of defective droids
                                      </td>
                                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                          0%
                                      </td>
                                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                          5%
                                      </td>
                                  </tr>
                                  <tr class="bg-white border-b">
                                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">5</td>
                                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                          Droid production cost
                                      </td>
                                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                          10000
                                      </td>
                                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                          13687
                                      </td>
                                  </tr>
                                  <tr class="bg-white border-b">
                                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">6</td>
                                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                          Droid upsell percentage
                                      </td>
                                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                          20%
                                      </td>
                                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                          63%
                                      </td>
                                  </tr>
                                  <tr class="bg-white border-b">
                                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">7</td>
                                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                          Droid sell cost
                                      </td>
                                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                          R12000.00
                                      </td>
                                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                          R22372.73
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  `

  return html;
}

const mainTemp = () => {
  const html = ` 
  <div class="user-form-container">
  <form action="#" class="user-form border flex flex-col gap-2 bg-white p-8">
      <span class="border-b flex">
          <label for="price-total" class="w-48">Total Budget Available</label>
          <p type="text" class="flex-1" id="price-total">100000</p>
      </span>
      <span class="border-b flex">
          <label for="price-dev" class="w-48">Developer per Pay</label>
          <p type="text" class="flex-1" id="price-dev">3000</p>
      </span>
      <span class="border-b flex">
          <label for="develpers" class="w-48">Enter No Of Dev</label>
          <input type="text" class="inputs-user bg-red-100" name="devValue" id="develpers ">
      </span>
      <span class="border-b flex">
          <label for="sprints" class="w-48">Enter No Of Sprints</label>
          <input type="text" class="inputs-user bg-red-100" name="sprintsValue" id="sprints ">
      </span>
      <span class="border-b flex">
          <label for="budget-remaining" class="w-48">Budget Remaining</label>
          <p type="text" class="flex-1" id="budget-remaining"></p>
      </span>
      <input type="submit" value="next ->" class="bg-red-100 mt-4 cursor-pointer">
  </form>
  </div>`

  return html
}


// main page 

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

//  user first page
const userTemplates = () => {
  const html = mainTemp();
  const parentEl = document.querySelector('.body');
  parentEl.insertAdjacentHTML('afterbegin', html);
}

const handleInputsValues = (el) => {
  const remainingDoc = document.querySelector('#budget-remaining');
  el.addEventListener('input', (e) => {
    if (e.target.name == 'devValue') devValue = e.target.value;
    if (e.target.name == 'sprintsValue') sprintsValue = e.target.value;
    if (devValue == 0 || sprintsValue == 0) {
      remainingDoc.innerHTML = '';
      return
    }
    remainingDoc.innerHTML = totalRemainBudget(devValue, sprintsValue);
    remainingValue = totalRemainBudget(devValue, sprintsValue);
  })
}

const handlerSubmiting = (handler) => {
  if (devValue == 0 || sprintsValue == 0) return;
  console.log('submit');
  handler()
}

const userHandler = (handler) => {
  userTemplates()

  // user for submiting form to move next page
  const userForm = document.querySelector('.user-form');
  userForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    handlerSubmiting(handler)
  });

  // user input validating
  const inputs = document.querySelectorAll('.inputs-user');
  inputs?.forEach(handleInputsValues);

}




// months handler

const monthsTemplates = (remainingValue) => {
  // const monthsObject = months(remainingValue);
  const january = januaryMonth(remainingValue);
  const febuary = othersMotnhs(january.fundStart - january.moneyOut + january.moneyIn)
  const march = othersMotnhs(febuary.fundStart - febuary.moneyOut + febuary.moneyIn)
  const aprial = othersMotnhs(march.fundStart - march.moneyOut + march.moneyIn)
  const may = othersMotnhs(aprial.fundStart - aprial.moneyOut + aprial.moneyIn)
  const june = othersMotnhs(may.fundStart - may.moneyOut + may.moneyIn)
  const july = othersMotnhs(june.fundStart - june.moneyOut + june.moneyIn)
  const august = othersMotnhs(july.fundStart - july.moneyOut + july.moneyIn)
  const september = othersMotnhs(august.fundStart - august.moneyOut + august.moneyIn)
  const octorber = othersMotnhs(september.fundStart - september.moneyOut + september.moneyIn)
  const november = othersMotnhs(octorber.fundStart - octorber.moneyOut + octorber.moneyIn)
  const december = othersMotnhs(november.fundStart - november.moneyOut + november.moneyIn)

  const monthsData = [january, febuary, march, aprial, may, june, july, august, september, octorber, november, december];
  const html = monthTemp(monthsData);
  const parentEl = document.querySelector('.body');
  parentEl.insertAdjacentHTML('afterbegin', html);
}

const monthsHandler = (remainingValue) => { monthsTemplates(remainingValue) };

// to show different screens

let screen = 1;

const screenAdd = () => {
  screen = screen + 1;
  modulesHandler()
}



const modulesHandler = () => {
  if (screen == 1) {
    console.log(body);
    body.innerHTML = '';
    return userHandler(screenAdd)
  }
  else if (screen == 2) {
    body.innerHTML = '';
    return sdlcHandler(screenAdd, sprintsValue)
  }
  else if (screen == 3) {
    body.innerHTML = '';
    return monthsHandler(remainingValue);
  }
}

modulesHandler()
