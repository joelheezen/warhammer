let rdyBtn = document.getElementById("readyButton")
rdyBtn.addEventListener("click", submitDetails)

function submitDetails() {
    console.log("clicked the rdy button")

    //declare vars
    let leftName = document.getElementById("leftTeamName").value
    let sec1Left = document.getElementById("sec1LeftSelect").value
    let sec2Left = document.getElementById("sec2LeftSelect").value
    let sec3Left = document.getElementById("sec3LeftSelect").value

    let rightName = document.getElementById("rightTeamName").value
    let sec1Right = document.getElementById("sec1RightSelect").value
    let sec2Right = document.getElementById("sec2RightSelect").value
    let sec3Right = document.getElementById("sec3RightSelect").value

    document.getElementById("title").remove()
    document.getElementById("leftTeamLabel").remove()
    document.getElementById("rightTeamLabel").remove()
    document.getElementById("leftTeamName").remove()
    document.getElementById("rightTeamName").remove()

    document.getElementById("leftNameHeader").innerHTML = `${leftName}`
    document.getElementById("rightNameHeader").innerHTML = `${rightName}`

    let scoreLeftDiv = document.createElement("leftScore")
    let scoreRightDiv = document.createElement("rightScore")

    let leftTeam =  document.getElementById("leftTeam")
    let rightTeam = document.getElementById("rightTeam")

    leftTeam.insertBefore(scoreLeftDiv, document.getElementById("leftContainer"))
    rightTeam.insertBefore(scoreRightDiv, document.getElementById("rightContainer"))

    let cardPrimaryLeft = document.createElement("card")
    let cardPrimaryDescLeft = document.createElement("card")
    let cardProgressiveLeft = document.createElement("card")
    let cardProgressiveDescLeft = document.createElement("card")

    let cardPrimaryRight = document.createElement("card")
    let cardPrimaryDescRight = document.createElement("card")
    let cardProgressiveRight = document.createElement("card")
    let cardProgressiveDescRight = document.createElement("card")

    cardPrimaryDescLeft.classList.add("rndCard")
    cardProgressiveDescLeft.classList.add("rndCard")

    cardPrimaryDescRight.classList.add("rndCard")
    cardProgressiveDescRight.classList.add("rndCard")

    cardPrimaryLeft.innerHTML = `<h3>Primary objective</h3>`
    cardProgressiveLeft.innerHTML = `<h3>Progressive objective</h3>`

    cardPrimaryRight.innerHTML = `<h3>Primary objective</h3>`
    cardProgressiveRight.innerHTML = `<h3>Progressive objective</h3>`

    document.getElementById("leftTeamLeft").appendChild(cardPrimaryLeft)
    document.getElementById("leftTeamLeft").appendChild(cardProgressiveLeft)
    document.getElementById("leftTeamRight").appendChild(cardPrimaryDescLeft)
    document.getElementById("leftTeamRight").appendChild(cardProgressiveDescLeft)

    document.getElementById("rightTeamLeft").appendChild(cardPrimaryRight)
    document.getElementById("rightTeamLeft").appendChild(cardProgressiveRight)
    document.getElementById("rightTeamRight").appendChild(cardPrimaryDescRight)
    document.getElementById("rightTeamRight").appendChild(cardProgressiveDescRight)

    let rnd11 = document.createElement("rnd")
    let rnd12 = document.createElement("rnd")
    let rnd13 = document.createElement("rnd")
    let rnd14 = document.createElement("rnd")
    let rnd15 = document.createElement("rnd")

    let rnd21 = document.createElement("rnd")
    let rnd22 = document.createElement("rnd")
    let rnd23 = document.createElement("rnd")
    let rnd24 = document.createElement("rnd")
    let rnd25 = document.createElement("rnd")

    let rnd31 = document.createElement("rnd")
    let rnd32 = document.createElement("rnd")
    let rnd33 = document.createElement("rnd")
    let rnd34 = document.createElement("rnd")
    let rnd35 = document.createElement("rnd")

    let rnd41 = document.createElement("rnd")
    let rnd42 = document.createElement("rnd")
    let rnd43 = document.createElement("rnd")
    let rnd44 = document.createElement("rnd")
    let rnd45 = document.createElement("rnd")

    rnd11.innerHTML = `<h2>rnd1</h2><input class="numberInput type="number" maxlength="2" value="0">`
    rnd12.innerHTML = `<h2>rnd2</h2><input class="numberInput type="number" maxlength="2" value="0">`
    rnd13.innerHTML = `<h2>rnd3</h2><input class="numberInput type="number" maxlength="2" value="0">`
    rnd14.innerHTML = `<h2>rnd4</h2><input class="numberInput type="number" maxlength="2" value="0">`
    rnd15.innerHTML = `<h2>rnd5</h2><input class="numberInput type="number" maxlength="2" value="0">`

    rnd21.innerHTML = `<h2>rnd1</h2><input class="numberInput type="number" maxlength="2" value="0">`
    rnd22.innerHTML = `<h2>rnd2</h2><input class="numberInput type="number" maxlength="2" value="0">`
    rnd23.innerHTML = `<h2>rnd3</h2><input class="numberInput type="number" maxlength="2" value="0">`
    rnd24.innerHTML = `<h2>rnd4</h2><input class="numberInput type="number" maxlength="2" value="0">`
    rnd25.innerHTML = `<h2>rnd5</h2><input class="numberInput type="number" maxlength="2" value="0">`

    rnd31.innerHTML = `<h2>rnd1</h2><input class="numberInput type="number" maxlength="2" value="0">`
    rnd32.innerHTML = `<h2>rnd2</h2><input class="numberInput type="number" maxlength="2" value="0">`
    rnd33.innerHTML = `<h2>rnd3</h2><input class="numberInput type="number" maxlength="2" value="0">`
    rnd34.innerHTML = `<h2>rnd4</h2><input class="numberInput type="number" maxlength="2" value="0">`
    rnd35.innerHTML = `<h2>rnd5</h2><input class="numberInput type="number" maxlength="2" value="0">`

    rnd41.innerHTML = `<h2>rnd1</h2><input class="numberInput type="number" maxlength="2" value="0">`
    rnd42.innerHTML = `<h2>rnd2</h2><input class="numberInput type="number" maxlength="2" value="0">`
    rnd43.innerHTML = `<h2>rnd3</h2><input class="numberInput type="number" maxlength="2" value="0">`
    rnd44.innerHTML = `<h2>rnd4</h2><input class="numberInput type="number" maxlength="2" value="0">`
    rnd45.innerHTML = `<h2>rnd5</h2><input class="numberInput type="number" maxlength="2" value="0">`

    cardPrimaryDescLeft.appendChild(rnd11)
    cardPrimaryDescLeft.appendChild(rnd12)
    cardPrimaryDescLeft.appendChild(rnd13)
    cardPrimaryDescLeft.appendChild(rnd14)
    cardPrimaryDescLeft.appendChild(rnd15)

    cardProgressiveDescLeft.appendChild(rnd21)
    cardProgressiveDescLeft.appendChild(rnd22)
    cardProgressiveDescLeft.appendChild(rnd23)
    cardProgressiveDescLeft.appendChild(rnd24)
    cardProgressiveDescLeft.appendChild(rnd25)

    cardPrimaryDescRight.appendChild(rnd31)
    cardPrimaryDescRight.appendChild(rnd32)
    cardPrimaryDescRight.appendChild(rnd33)
    cardPrimaryDescRight.appendChild(rnd34)
    cardPrimaryDescRight.appendChild(rnd35)

    cardProgressiveDescRight.appendChild(rnd41)
    cardProgressiveDescRight.appendChild(rnd42)
    cardProgressiveDescRight.appendChild(rnd43)
    cardProgressiveDescRight.appendChild(rnd44)
    cardProgressiveDescRight.appendChild(rnd45)
    

    addSecondaries("left", leftName, sec1Left, sec2Left, sec3Left)
    addSecondaries("right", rightName, sec1Right, sec2Right, sec3Right)
    console.log("added secondaries")

    document.getElementById("sec1LeftSelect").remove()
    document.getElementById("sec2LeftSelect").remove()
    document.getElementById("sec3LeftSelect").remove()

    document.getElementById("sec1LeftLabel").remove()
    document.getElementById("sec2LeftLabel").remove()
    document.getElementById("sec3LeftLabel").remove()

    document.getElementById("sec1RightSelect").remove()
    document.getElementById("sec2RightSelect").remove()
    document.getElementById("sec3RightSelect").remove()

    document.getElementById("sec1RightLabel").remove()
    document.getElementById("sec2RightLabel").remove()
    document.getElementById("sec3RightLabel").remove()

   

    let scoreInputs = document.querySelectorAll(".numberInput")

    scoreInputs.forEach(element => {
        element.addEventListener("input", calculateScore)
        element.addEventListener("focus", function(){removeNumber(element)})
        element.addEventListener("focusout" , function(){removeEmpty(element)})
    });

    let brArray = document.querySelectorAll(".removable")
    
    brArray.forEach(element => {
        element.remove()
    });
    
    let topBar = document.getElementById("header-bar")
    for(let i = 1; i<6; i++) {
        let rndBtn = document.createElement("rndBtn")
        topBar.appendChild(rndBtn)
        rndBtn.innerHTML = `Round ${i}`
        rndBtn.addEventListener("click", function(){toggleColour(rndBtn)})
    }
    
    console.log(scoreInputs)

    rdyBtn.remove()
    calculateScore()
}

function toggleColour(element){
    console.log(element)
    if(element.style.backgroundColor == "rgba(0, 128, 0, 0.5)"){
        element.style.backgroundColor = "rgba(128, 128, 128, 0.5)"
    } else {
        element.style.backgroundColor= "rgba(0, 128, 0, 0.5)"
    }
}

function addSecondaries(side, name, s1, s2, s3) {
    let leftDiv 
    let rightDiv
    if (side == "left"){
        leftDiv = document.getElementById("leftTeamLeft")
        rightDiv = document.getElementById("leftTeamRight")
    } else if (side == "right") {
        leftDiv = document.getElementById("rightTeamLeft")
        rightDiv = document.getElementById("rightTeamRight")
    }
    else {
        console.log("you absolute donkey, how did you manage to fuck this up?")
    }
    addSecondary(s1, leftDiv)
    addSecondary(s2, leftDiv)
    addSecondary(s3, leftDiv)
    addDescription(s1, rightDiv)
    addDescription(s2, rightDiv)
    addDescription(s3, rightDiv)
    console.log(side, name, s1, s2, s3)
}

function addSecondary(sec, div) {
    let card = document.createElement("card")
    switch (sec){
        case "ASSASSINATION":
           card.innerHTML = `<h3>ASSASSINATION</h3>Score 3 victory points at the end of the battle for each enemy CHARACTER unit that is destroyed. At the end of the battle, if the enemy WARLORD is destroyed, score 1 extra victory point.`
           break;
        case "BRING IT DOWN":
            card.innerHTML = `<h3>BRING IT DOWN</h3>At the end of the battle, score victory points for each enemy MONSTER or VEHICLE model that is destroyed, as follows:<ul><li>Score 1 victory point for each of those destroyed models with a Wounds characteristic of 9 or less.</li><li>Score 2 victory points for each of those destroyed models with a Wounds characteristic of 10-14.</li><li>Score 3 victory points for each of those destroyed models with a Wounds characteristic of 15-19.</li><li>Score 4 victory points for each of those destroyed models with a Wounds characteristic of 20 or more.</li>`
            break;
        case "NO PRISONERS":
            card.innerHTML = `<h3>NO PRISONERS</h3>If you select this objective, keep a Kill Points tally. Each time an enemy model is destroyed (excluding VEHICLE, MONSTER or CHARACTER models), add a number of marks to this tally equal to the Wounds characteristic of the destroyed model. At the end of the battle, divide your Kill Points tally by 10 and round down - the result is the number of victory points you score. In addition, if your Kill Points tally is between 50 and 99, you score 1 additional victory point, and if your tally is 100 or more, you score 2 additional victory points.`
            break;
        case "GRIND THEM DOWN":
            card.innerHTML = `<h3>GRIND THEM DOWN</h3>Score 3 victory points at the end of the battle round if more enemy units than friendly units were destroyed this battle round.`
            break;
        case "ABHOR THE WITCH":
            card.innerHTML = `<h3>ABHOR THE WITCH</h3>You cannot select this secondary objective if your army includes any PSYKER units. Score 3 victory points at the end of the battle for each enemy PSYKER CHARACTER unit that is destroyed, and 2 victory points for every other enemy PSYKER unit that is destroyed.`
            break;
        case "WARP RITUAL":
            card.innerHTML = `<h3>WARP RITUAL</h3>If you select this objective, keep a Ritual Points tally; add 1 to that tally each time a unit from your army completes the following psychic action during the battle:<br><br> <b>Warp Ritual (Psychic Action - Warp Charge 3):</b> One PSYKER CHARACTER unit from your army can attempt to perform this psychic action in your Psychic phase if it is within 6" of the centre of the battlefield.<br><br>At the end of the battle, score 3 victory points if your Ritual Points tally is 1, score 7 victory points if your tally is 2, or score 12 victory points if your tally is 3 or more.`
            break;
        case "PSYCHIC INTERROGATION":
            card.innerHTML = `<h3>PSYCHIC INTERROGATION</h3>Score 3 victory points each time you successfully complete the following psychic action:<br><br><b>Psychic Interrogation (Psychic Action - Warp Charge 4):</b> One PSYKER CHARACTER unit from your army can attempt to perform this psychic action in your Psychic phase if it is within 24" of any enemy CHARACTER units.<br><br>In addition, if the result of the Psychic test is equal to or greater than the Leadership characteristic of any enemy CHARACTER models within 24" of the PSYKER unit that completed this psychic action, you gain 1 Command point at the end of the phase.`
            break;
        case "RAISE THE BANNERS HIGH":
            card.innerHTML = `<h3>RAISE THE BANNERS HIGH</h3>If you select this objective, units from your army can attempt the following action:<br><br><b>Raise Banners (Action):</b> One or more INFANTRY units from your army can start to perform this action at the end of your Movement phase. Each unit from your army that starts to perform this action must be within range of a different objective marker you control and that does not have one of your banners raised on it (see below). The action is completed at the end of your turn. If completed, that objective marker is said to have one of your army's banners raised on it (the banner is 'removed' if your opponent controls the objective marker at the start of any Command phase).<br><br>Score 1 victory point at the end of each of your Command phases, and 1 victory point at the end of the battle, for each objective marker on the battlefield that has one of your banners raised on it.`
            break;
        case "RETRIEVE NEPHILIM DATA":
            card.innerHTML = `<h3>RETRIEVE NACHMUND DATA</h3>If you select this objective, keep a Retrieved Data tally. In addition, units from your army can attempt the following action:<br><br><b>Retrieve Data (Action):</b> One INFANTRY or BIKER unit from your army can start to perform this action at the end of your Movement phase if it is wholly within a table quarter that has not had a servo-skull retrieved by your army (see below) and it is more than 6" away from any other table quarter. This action is completed at the end of your turn provided the unit performing it is still within the same table quarter. If completed, roll one D6, subtracting 1 from the result if the unit that completed the action has the Troops Battlefield Role: if the result is less than or equal to the number of models currently in that unit, that table quarter is said to have had a servo-skull retrieved by your army and you add 1 to your Retrieved Data tally.<br><br>At the end of the battle, score 4 victory points if your Retrieved Data tally is 2, score 8 victory points if your tally is 3, or score 12 victory points if your tally is 4.`
            break;
        case "BEHIND ENEMY LINES":
            card.innerHTML = `<h3>BEHIND ENEMY LINES</h3>Score 2 victory points at the end of your turn if one unit from your army (excluding AIRCRAFT units) is wholly within your opponent's deployment zone. Score 4 victory points at the end of your turn instead if two or more units from your army (excluding AIRCRAFT units) are wholly within your opponent's deployment zone.`
            break;
        case "ENGAGE ON ALL FRONTS":
            card.innerHTML = `<h3>ENGAGE ON ALL FRONTS</h3>Score 2 victory points at the end of your turn if you have one or more qualifying units (see below) from your army wholly within three different table quarters, and those units are all more than 6" away from any other table quarter. Score 3 victory points instead if you have one or more qualifying units from your army wholly within each table quarter, and those units are all more than 6" away from any other table quarter. A qualifying unit is one that has a Starting Strength of 3 or more models, or one that contains 1 or more VEHICLE or MONSTER models (excluding AIRCRAFT models).`
            break;
        case "CUSTOM":
            card.innerHTML = `<textarea class="emptyArea">This is used for mission or faction specific secondaries, enter the description here</textarea>`
    }
    div.appendChild(card)
}

function addDescription(sec, div) {
    let card = document.createElement("card")
    card.classList.add("rndCard")
    div.appendChild(card)
    let rnd1 = document.createElement("rnd")
    let rnd2 = document.createElement("rnd")
    let rnd3 = document.createElement("rnd")
    let rnd4 = document.createElement("rnd")
    let rnd5 = document.createElement("rnd")

    rnd1.innerHTML = `<h2>rnd1</h2><input class="numberInput type="number" maxlength="2" value="0">`
    rnd2.innerHTML = `<h2>rnd2</h2><input class="numberInput type="number" maxlength="2" value="0">`
    rnd3.innerHTML = `<h2>rnd3</h2><input class="numberInput type="number" maxlength="2" value="0">`
    rnd4.innerHTML = `<h2>rnd4</h2><input class="numberInput type="number" maxlength="2" value="0">`
    rnd5.innerHTML = `<h2>rnd5</h2><input class="numberInput type="number" maxlength="2" value="0">`
    card.appendChild(rnd1)
    card.appendChild(rnd2)
    card.appendChild(rnd3)
    card.appendChild(rnd4)
    card.appendChild(rnd5)
}

function removeNumber(e){
    if (e.value == 0){
        e.value = ""
    }
}

function removeEmpty(e){
    if (e.value == "") {
        e.value = 0
    }
    calculateScore()
}


function calculateScore(){
    let scoreLeftDiv = document.getElementsByTagName("leftScore")[0]
    let scoreRightDiv = document.getElementsByTagName("rightScore")[0]

    let leftTeam =  document.getElementById("leftTeam")
    let rightTeam = document.getElementById("rightTeam")

    let leftScoreArray = leftTeam.querySelectorAll(".numberInput")
    let rightScoreArray = rightTeam.querySelectorAll(".numberInput")

    let leftScoreTotal = 0
    let rightScoreTotal = 0

    leftScoreArray.forEach(element => {
        leftScoreTotal += parseInt(element.value)
    });

    rightScoreArray.forEach(element => {
        rightScoreTotal += parseInt(element.value)
    });
    console.log(rightScoreTotal)
    console.log(leftScoreTotal)

    scoreLeftDiv.innerHTML = `<h4>${leftScoreTotal}</h4>`
    scoreRightDiv.innerHTML = `<h4>${rightScoreTotal}</h4>`
}