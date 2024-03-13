let crude = document.querySelector('.crude-cost')
let parsedCrude = parseFloat(crude.innerHTML)
let minerCost = document.querySelector('.miner-cost')
let parsedMinerCost = parseFloat(minerCost.innerHTML)


    function incrementCrude(){
       parsedCrude += 1;
       crude.innerHTML = parsedCrude}
    
    function buyMiner(){
        if (parsedCrude >= parsedMinerCost){
            parsedCrude -= parsedMinerCost
            crude.innerHTML = parsedCrude
        }
    }

    