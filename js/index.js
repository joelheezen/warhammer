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
    document.getElementById("leftTeamLabel").remove()
    document.getElementById("rightTeamLabel").remove()
    document.getElementById("leftTeamName").remove()
    document.getElementById("rightTeamName").remove()

    document.getElementById("leftNameHeader").innerHTML = `${leftName}`
    document.getElementById("rightNameHeader").innerHTML = `${rightName}`

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

    rnd11.innerHTML = `<h2>rnd1</h2><br><br><input class="numberInput type="number" maxlength="2" value="0">`
    rnd12.innerHTML = `<h2>rnd2</h2><br><br><input class="numberInput type="number" maxlength="2" value="0">`
    rnd13.innerHTML = `<h2>rnd3</h2><br><br><input class="numberInput type="number" maxlength="2" value="0">`
    rnd14.innerHTML = `<h2>rnd4</h2><br><br><input class="numberInput type="number" maxlength="2" value="0">`
    rnd15.innerHTML = `<h2>rnd5</h2><br><br><input class="numberInput type="number" maxlength="2" value="0">`

    rnd21.innerHTML = `<h2>rnd1</h2><br><br><input class="numberInput type="number" maxlength="2" value="0">`
    rnd22.innerHTML = `<h2>rnd2</h2><br><br><input class="numberInput type="number" maxlength="2" value="0">`
    rnd23.innerHTML = `<h2>rnd3</h2><br><br><input class="numberInput type="number" maxlength="2" value="0">`
    rnd24.innerHTML = `<h2>rnd4</h2><br><br><input class="numberInput type="number" maxlength="2" value="0">`
    rnd25.innerHTML = `<h2>rnd5</h2><br><br><input class="numberInput type="number" maxlength="2" value="0">`

    rnd31.innerHTML = `<h2>rnd1</h2><br><br><input class="numberInput type="number" maxlength="2" value="0">`
    rnd32.innerHTML = `<h2>rnd2</h2><br><br><input class="numberInput type="number" maxlength="2" value="0">`
    rnd33.innerHTML = `<h2>rnd3</h2><br><br><input class="numberInput type="number" maxlength="2" value="0">`
    rnd34.innerHTML = `<h2>rnd4</h2><br><br><input class="numberInput type="number" maxlength="2" value="0">`
    rnd35.innerHTML = `<h2>rnd5</h2><br><br><input class="numberInput type="number" maxlength="2" value="0">`

    rnd41.innerHTML = `<h2>rnd1</h2><br><br><input class="numberInput type="number" maxlength="2" value="0">`
    rnd42.innerHTML = `<h2>rnd2</h2><br><br><input class="numberInput type="number" maxlength="2" value="0">`
    rnd43.innerHTML = `<h2>rnd3</h2><br><br><input class="numberInput type="number" maxlength="2" value="0">`
    rnd44.innerHTML = `<h2>rnd4</h2><br><br><input class="numberInput type="number" maxlength="2" value="0">`
    rnd45.innerHTML = `<h2>rnd5</h2><br><br><input class="numberInput type="number" maxlength="2" value="0">`

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

    let scoreLeftDiv = document.createElement("leftScore")
    let scoreRightDiv = document.createElement("rightScore")

    let leftTeam =  document.getElementById("leftTeam")
    let rightTeam = document.getElementById("rightTeam")

    leftTeam.appendChild(scoreLeftDiv)
    rightTeam.appendChild(scoreRightDiv)

    let scoreInputs = document.querySelectorAll(".numberInput")

    scoreInputs.forEach(element => {
        element.addEventListener("input", calculateScore)
    });

    console.log(scoreInputs)

    rdyBtn.remove()
    calculateScore()
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
           card.innerHTML = `Score 3 victory points at the end of the battle for each enemy CHARACTER model that is destroyed. If the enemy WARLORD was destroyed during the battle, gain 1 additional victory point.`
           break;
        case "BRING IT DOWN":
            card.innerHTML = `Score 1 victory point at the end of the battle for each enemy MONSTER or VEHICLE model with a Wounds characteristic of 9 or less that is destroyed, 2 victory points for each enemy MONSTER or VEHICLE model with a Wounds characteristic of between 10-14 that is destroyed, and 3 victory points for each enemy MONSTER or VEHICLE model with a Wounds characteristic of 15 or more that is destroyed.`
            break;
        case "TITAN HUNTER":
            card.innerHTML = `Score 4 victory points at the end of the battle if one enemy TITANIC model is destroyed, 9 victory points if two enemy TITANIC models are destroyed, or 15 victory points if three or more enemy TITANIC models are destroyed.`
            break;
        case "FOR THE EMPEROR! (Astra Militarum)":
            card.innerHTML = `Score 1 victory point at the end of the battle round for each enemy unit that was destroyed during that battle round by an ASTRA MILITARUM unit from your army (to a maximum of 3 victory points per battle round).`
            break;
        case "NO PRISONERS":
            card.innerHTML = `If you select this objective, keep a Kill Points tally. Each time an enemy model is destroyed, unless that model is a VEHICLE, MONSTER or CHARACTER unit, add a number of marks to this tally equal to the Wounds characteristic of the destroyed model. A model can, if it is resurrected for any reason (i.e. it was destroyed and subsequently returned to the battlefield), potentially have marks added to this tally several times (assuming it is resurrected and subsequently destroyed several times over). </br></br>At the end of the battle, divide your Kill Points tally by 10 and round down - the result is the number of victory points you score. In addition, if your Kill Points tally is between 50 and 99, you score 1 additional victory point, and if your Kill Points tally is 100 or more, you score 2 additional victory points.`
            break;
        case "GRIND THEM DOWN":
            card.innerHTML = `Score 3 victory points at the end of the battle round if more enemy units than friendly units were destroyed this battle round.`
            break;
        case "TO THE LAST":
            card.innerHTML = `If you select this objective, then before the battle, after you have selected deployment zones, identify which three units from your army (excluding those with the Fortifications Battlefield Role) have the highest points value, and make a note of them on your army roster (if two or more are tied, you choose between them). If your army has three or fewer units, you instead identify all the units in your army. A unit's points value includes the points of all weapons, other wargear and upgrades it is has. You score 5 victory points for each of these units that are on the battlefield at the end of the battle. If a unit splits into several smaller units during a battle, all of those separate units (excluding DRONE units) must be on the battlefield at the end of the battle to score 5 victory points; if some of those separate units (excluding DRONE units) are on the battlefield at the end of the battle, but not all of them are, you score 3 victory points instead of 5.`
            break;
        case "PATH OF DESTRUCTION (Chaos Knights)":
            card.innerHTML = `Score 1 victory point at the end of the battle round for each of the following conditions that were satisfied during that battle round (for a maximum of 3 victory points):One or more enemy units were destroyed by a CHAOS KNIGHTS model from your army while that CHAOS KNIGHTS model was wholly within your deployment zone.One or more enemy units were destroyed by a CHAOS KNIGHTS model from your army while that CHAOS KNIGHTS model was more than 3" away from either player's deployment zone.One or more enemy units were destroyed by a CHAOS KNIGHTS model from your army while that CHAOS KNIGHTS model was wholly within your opponent's deployment zone.`
            break;
        case "SYNAPTIC INSIGHT (Tyranids)":
            card.innerHTML = `If you select this objective, keep a Synaptic Kill tally. Reset this tally to 0 at the start of each battle round. Each time an enemy model (excluding Dedicated Transport models) is destroyed by a SYNAPSE model from your army; if that enemy had a Wounds characteristic between 3 and 5, add 1 to your Synaptic Kill tally; if it had a Wounds characteristic between 6 and 9, add 2 to this tally; if it had a Wounds characteristic of 10 or more, add 3 to this tally.<br><br>Score 3 victory points at the end of the battle round if your Synaptic Kill tally is 4 or more. You cannot score more than 12 victory points from this objective.`
            break;
        case "THE LONG WAR (Chaos Space Marines)":
            card.innerHTML = `<ul><li>At the end of your turn, you score 1 victory point for each enemy unit that was within range of an objective marker at the start of that turn that was destroyed by a HERETIC ASTARTES unit from your army during that turn.</li><li>At the end of your turn, you score 2 victory points if you control one or more objective markers that were controlled by your opponent at the start of that turn, and a HERETIC ASTARTES unit from your army is within range of one or more of those objective markers.</li></ul>You cannot score more than 3 victory points from this secondary objective per turn.`
            break;
        case "MALEFIC TERROR (Chaos Daemons)":
            card.innerHTML = `<ul><li>Each time an enemy model flees the battlefield, score 1 victory point.</li><li>Each time an enemy unit is destroyed by an attack made by a CHAOS DAEMONS unit from your army, before removing the last model from the battlefield, roll 2D6: if the result equals or exceeds the current Leadership characteristic of that enemy model, score 1 victory point.</li></ul>You cannot score more than 4 victory points from this secondary objective per turn.`
            break;
        case "ABHOR THE WITCH":
            card.innerHTML = `You cannot select this secondary objective if your army includes any PSYKER units. Score 3 victory points at the end of the battle for each enemy PSYKER CHARACTER unit that is destroyed, and 2 victory points for every other enemy PSYKER unit that is destroyed.`
            break;
        case "WARP RITUAL":
            card.innerHTML = `If you select this objective, keep a tally of Ritual points; add 1 to that tally each time a unit from your army successfully completes the following psychic action during the battle:<br><br> <b>Warp Ritual (Psychic Action - Warp Charge 3):</b> One PSYKER CHARACTER unit from your army can attempt to perform this psychic action in your Psychic phase if it is within 6" of the centre of the battlefield.<br><br>At the end of the battle, score 3 victory points if your Ritual tally is 1, score 7 victory points if your tally is 2, or score 12 victory points if your tally is 3 or more.`
            break;
        case "PIERCE THE VEIL":
            card.innerHTML = `Score 8 victory points at the end of the battle if one or more units from your army successfully completed the following psychic action 2 or more times during the battle, or 15 victory points at the end of the battle if one or more units from your army successfully completed the following psychic action 4 times during the battle (note that you can only score this objective once):<br><br><b>Pierce the Veil (Psychic Action - Warp Charge 4):</b> One PSYKER CHARACTER unit from your army can attempt to perform this psychic action during your Psychic phase if it is within 6" of your opponent's battlefield edge and more than 6" from any enemy models.`
            break;
        case "PSYCHIC INTERROGATION":
            card.innerHTML = `Score 3 victory points each time you successfully complete the following psychic action:<br><br><b>Psychic Interrogation (Psychic Action - Warp Charge 4):</b> One PSYKER CHARACTER unit from your army can attempt to perform this psychic action in your Psychic phase if it is within 24" of any enemy CHARACTER units.`
            break;
        case "RAISE THE BANNERS HIGH":
            card.innerHTML = `If you select this objective, then units in your army can perform the following action:<br><br><b>Raise Banners (Action):</b> One or more INFANTRY units from your army can start to perform this action at the end of your Movement phase. Each unit from your army that starts to perform this action must be in range of a different objective marker that does not have one of your banners raised upon it (see below). A unit cannot start this action while there are any enemy units (excluding AIRCRAFT units) in range of the same objective marker. The action is completed at the end of your turn. If this action is successfully completed, that objective marker is said to have one of your army's banners raised on it (the banner is 'removed' if your opponent controls the objective marker at the start of any phase).<br><br>Score 1 victory point at the end of each of your Command phases, and 1 victory point at the end of the battle, for each objective marker on the battlefield that has one of your banners raised upon it.`
            break;
        case "INVESTIGATE SIGNAL":
            card.innerHTML = `Score 3 victory points each time a unit from your army successfully completes the following action:<br><br><b>Investigate Signal (Action):</b> One INFANTRY unit from your army that contains 3 or more models can start to perform this action at the end of your Movement phase if it is wholly within 6" of the centre of the battlefield. This action is completed at the end of your turn provided the unit attempting it is still wholly within 6" of the centre of the battlefield and no enemy units (excluding AIRCRAFT units) are wholly within 6" of the centre of the battlefield.`
            break;
        case "RETRIEVE NACHMUND DATA":
            card.innerHTML = `If you select this objective, keep a Retrieved Data tally. In addition, units in your army can perform the following action:<br><br><b>Retrieve Data (Action):</b> One INFANTRY or BIKER unit from your army can start to perform this action at the end of your Movement phase if it is wholly within a table quarter that has not had a servo-skull retrieved by your army (see below) and it is more than 6" away from any other table quarter. This action is completed at the end of your turn provided the unit attempting it is still within the same table quarter. If this action is successfully completed, roll one D6, subtracting 1 from the result if the unit that completed the action has the Troops battlefield role: if the result is less than or equal to the number of models currently in that unit, that table quarter is said to have had a servo-skull retrieved by your army and you add 1 to your Retrieved Data tally.<br><br>At the end of the battle, score 4 victory points if your Retrieved Data tally is 2, score 8 victory points if your tally is 3, or score 12 victory points if your tally is 4.`
            break;
        case "DEPLOY TELEPORT HOMERS":
            card.innerHTML = `If you select this objective, then units from your army can perform the following action:<br><br><b>Deploy Teleport Homer (Action):</b> One INFANTRY or BIKER unit from your army can start to perform this action at the end of your Movement phase if it is wholly within 12" of your opponent's deployment zone. If the unit attempting this action has the Troops battlefield role, the action is completed at the end of your turn; otherwise the action is completed at the end of your next Command phase. In either case, the action is only completed if the unit attempting it is still wholly within 12" of your opponent's deployment zone.<br><br>Each time a unit from your army successfully completes this action, you score 2 victory points (you score 4 victory points instead if the unit completed the action while wholly within your opponent's deployment zone).`
            break;
        case "BEHIND ENEMY LINES":
            card.innerHTML = `Score 2 victory points at the end of your turn if one unit from your army (excluding AIRCRAFT units) is wholly within your opponent's deployment zone. Score 4 victory points at the end of your turn instead if two or more units from your army (excluding AIRCRAFT units) are wholly within your opponent's deployment zone.`
            break;
        case "ENGAGE ON ALL FRONTS":
            card.innerHTML = `Score 2 victory points at the end of your turn if you have one or more qualifying units (see below) from your army wholly within three different table quarters, and those units are all more than 6" from the centre of the battlefield. Score 3 victory points instead if you have one or more qualifying units from your army wholly within each table quarter, and those units are all more than 6" from the centre of the battlefield. A qualifying unit is one that contains 3 or more models, or one that contains 1 or more VEHICLE or MONSTER models.`
            break;
        case "STRANGLEHOLD":
            card.innerHTML = `Score 3 victory points at the end of your turn if you control 3 or more objective markers and you also control more objective marker than your opponent controls.`
            break;
        case "YIELD NO GROUND (Imperial Knights)":
            card.innerHTML = `If you select this objective, at the end of your turn, you score victory points as follows (for a maximum of 5 victory points):<ul><li>Score 2 victory points if you control half or more of the total number of objective markers on the battlefield, and one or more IMPERIAL KNIGHTS models from your army are within range of each of those objective markers.</li><li>Score 2 victory points if no enemy units (excluding AIRCRAFT units) are wholly within your deployment zone.</li><li>Score 1 victory point so long as no IMPERIAL KNIGHTS models from your army ended that turn closer to your battlefield edge than they started the battle round, and no IMPERIAL KNIGHTS units from your army Fell Back during that battle round.</li></ul>This secondary objective cannot be scored in the first battle round.`
            break;
        case "EMPTY":
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

    rnd1.innerHTML = `<h2>rnd1</h2><br><br><input class="numberInput type="number" maxlength="2" value="0">`
    rnd2.innerHTML = `<h2>rnd2</h2><br><br><input class="numberInput type="number" maxlength="2" value="0">`
    rnd3.innerHTML = `<h2>rnd3</h2><br><br><input class="numberInput type="number" maxlength="2" value="0">`
    rnd4.innerHTML = `<h2>rnd4</h2><br><br><input class="numberInput type="number" maxlength="2" value="0">`
    rnd5.innerHTML = `<h2>rnd5</h2><br><br><input class="numberInput type="number" maxlength="2" value="0">`
    card.appendChild(rnd1)
    card.appendChild(rnd2)
    card.appendChild(rnd3)
    card.appendChild(rnd4)
    card.appendChild(rnd5)
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

    scoreLeftDiv.innerHTML = `<h3>${leftScoreTotal}</h3>`
    scoreRightDiv.innerHTML = `<h3>${rightScoreTotal}</h3>`
}