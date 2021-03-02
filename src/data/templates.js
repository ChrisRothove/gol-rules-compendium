/*  TEMPLATE
{
  keywords: [],
  header: "",
  content: "",
}
*/

//TODO: figure out code blocks
const templates = [
  {
    keywords: ["templates", "battle profile"],
    header: <h2>Battle Profile Template</h2>,
    content: (
      <>
        <p>
          The Battle Profile template can be copied below and pasted onto the
          forum to fill out. It's simple enough to use, but do not modify the
          Javascript at the bottom of the template, or the auto adjustment of
          the boxes will not function properly.",
        </p>
        <p className="codeBlock">
          <pre>
            <code>
              {`[dohtml]
    <div id="membergroup">
    <div id="uglysweaterz">
    <div class="back">
     <div class="name">FIRSTNAME LASTNAME</div>
     <div class="body">
       <div class="image"><img src="https://via.placeholder.com/220x350"></div>
       <div class="right">
         <div class="info-name1">CLASS</div>
         <div class="info-ans">---</div>
         <div class="info-name2">ROLE</div>
         <div class="info-ans">---</div>
         <div class="info-name1">LEVEL</div>
         <div class="info-ans">---</div>
         <div class="info-name2">FACTION</div>
         <div class="info-ans">---</div>
         <div class="info-name1">ALIGNMENT</div>
         <div class="info-ans">---</div>
         <div class="info-name2">TITLE</div>
         <div class="info-ans">---</div>
          <div class="info-name1">DUNGEONS COMPLETED</div>
         <div class="info-ans">---</div>
       </div>
    <div class="main-name">VIEW</div>
    <input type="button" value="Stats" id="statBox" onclick="statHide()" style="color:yellow;">
    <input type="button" value="Passives" id="passiveBox" onclick="passiveHide()" style="color:yellow;">
    <input type="button" value="Ability" id="abBox" onclick="abilityHide()" style="color:yellow;">
    <input type="button" value="Forms" id="formBox" onclick="formHide()" style="color:yellow;">
    <input type="button" value="D-Link" id="linkBox" onclick="linkHide()" style="color:yellow;">
    <div id="stats">
       <div class="main-name">STATISTICS</div>
       <div class="main-ans"><div class="main-text" id="statText">
    <h1>independent</h1>
    
    <b>Strength (STR):</b> here<br>
    <b>Magic (MAG):</b> here<br>
    <b>Defense (DEF):</b> here<br>
    <b>Agility (AGL):</b> here<br>
    </br>
    <h1>dependent</h1>
    
    <b>Hit Points (HP):</b> here <br>
    <b>Magic Points (MP):</b> here <br>
    <b>Evasion (EV):</b> here <br>
    <b>Focus:</b> here <br>
    </br>
    
    <h1>slots</h1>
    
    <b>Passive Slots:</b> here <br>
    <b>Equipment Slots:</b> here <br>
    <br>
    
    <h1>weapons</h1>
    
    <b>Weapon Name:</b> here</br>
    <b>Weapon Type:</b> here</br>
    <b>Weapon Desc:</b> here</br>
    | MAG: # | PWR: # | Range: # | Rank: # |</br>
    <br>
    
    <h1>inventory</h1>
    
    <b>Item Name:</b> here</br>
    x0 | Brief Description | </br>
    (Repeat as needed)</br>
       </div></div></div>
    
    <div id="passives">
       <div class="main-name-2">PASSIVES</div>
       <div class="main-ans"><div class="main-text" id="passiveText">
    <b>Ability Name:</b> here</br>
    <b>Description of Ability:</b> here </br>
    | Tier: # | MP Cost: # | Range: # | Damage Stat: STR/MAG </p>
    </div></div></div>
    
    <div id="abilities">
       <div class="main-name-2">ABILITIES</div>
       <div class="main-ans"><div class="main-text" id="abilityText">
    <b>Ability Name:</b> here</br>
    <b>Description of Ability:</b> here</br>
    | Tier: # | MP Cost: # | Range: # | Damage Stat: STR/MAG </p>
    
    <b>Ability Name:</b> here</br>
    <b>Description of Ability:</b> here</br>
    | Tier: #  | MP Cost: # | Range: # | Damage Stat: STR/MAG </p>
    
    <b>Ability Name:</b> here</br>
    <b>Description of Ability:</b> here</br>
    | Tier: #  | MP Cost: # | Range: # | Damage Stat: STR/MAG </p>
    
    <b>Ability Name:</b> here</br>
    <b>Description of Ability:</b> here</br>
    | Tier: #  | MP Cost: # | Range: # | Damage Stat: STR/MAG </p>
    (Repeat as needed)
       </div></div></div>
    
    <div id="forms">
       <div class="main-name">SPECIAL FORMS</div>
       <div class="main-ans"><div class="main-text" id="formText">
    <h1>Form One</h1>
    <p><b>Drive Boost:</b> [Drive Boost Name]
    <hr>
    <p>[Drive Boost Description]
    <br>
    <p><b>Tier 0 Effects:</b>
    <hr>
    <p><b>Effect Name:</b> [Effect Description]
    <br>
    <p><b>Form-Specific Abilities</b>
    <hr>
    <p><b>Ability Name:</b> Ability Description
    <br>| Tier | Cost | Stat |
       </div></div></div>
    
    <div id="links">
       <div class="main-name-2">D-LINKS</div>
       <div class="main-ans"><div class="main-text" id="linkText">
    <h1>D-Link One</h1>
    <p><b>Ability 1:</b> Ability Description
    <br>| Tier | Cost | Stat |
    <p><b>Ability 2:</b> Ability Description
    <br>| Tier | Cost | Stat |
    <p><b>Ability 3:</b> Ability Description
    <br>| Tier | Cost | Stat |
       </div></div></div>
     </div>
    </div>
    </div>
    </div>
    
    
    <script>
    //DO NOT EDIT BELOW THIS POINT
    function statHide() {
      //get id of button
      const statBox = document.getElementById("statBox");
      //get the id of the box to hide
      const stats = document.getElementById("stats");
      //if stats are hidden, display them.
      if (stats.style.display === "none") {
        stats.style.display = "block";
        //change color to yellow
        statBox.style.color = "yellow";
        //if stats are displayed, hide them.
      } else {
        stats.style.display = "none";
        //change color to white
        statBox.style.color = "#fff";
      }
    }
    
    function abilityHide() {
      //get id of button
      const abBox = document.getElementById("abBox");
      //get the id of the box to hide
      const abilities = document.getElementById("abilities");
      //if stats are hidden, display them.
      if (abilities.style.display === "none") {
        abilities.style.display = "block";
        //change color to yellow
        abBox.style.color = "yellow";
        //if stats are displayed, hide them.
      } else {
        abilities.style.display = "none";
        //change color to white
        abBox.style.color = "#fff";
      }
    }
    
    function formHide() {
      //get id of button
      const formBox = document.getElementById("formBox");
      //get the id of the box to hide
      const forms = document.getElementById("forms");
      //if stats are hidden, display them.
      if (forms.style.display === "none") {
        forms.style.display = "block";
        //change color to yellow
        formBox.style.color = "yellow";
        //if stats are displayed, hide them.
      } else {
        forms.style.display = "none";
        //change color to white
        formBox.style.color = "#fff";
      }
    }
    
    function linkHide() {
      //get id of button
      const linkBox = document.getElementById("linkBox");
      //get the id of the box to hide
      const links = document.getElementById("links");
      //if stats are hidden, display them.
      if (links.style.display === "none") {
        links.style.display = "block";
        //change color to yellow
        linkBox.style.color = "yellow";
        //if stats are displayed, hide them.
      } else {
        links.style.display = "none";
        //change color to white
        linkBox.style.color = "#fff";
      }
    }
    
    function passiveHide() {
      //get id of button
      const passiveBox = document.getElementById("passiveBox");
      //get the id of the box to hide
      const passives = document.getElementById("passives");
      //if stats are hidden, display them.
      if (passives.style.display === "none") {
        passives.style.display = "block";
        //change color to yellow
        passiveBox.style.color = "yellow";
        //if stats are displayed, hide them.
      } else {
        passives.style.display = "none";
        //change color to white
        passiveBox.style.color = "#fff";
      }
    }
    
    //Get innerhtml of passives
    let passiveText = document.getElementById("passiveText").innerHTML;
    //if characters in section is fewer than default entry, hide section
    if (passiveText.length < 150) {
      document.getElementById("passives").style.display = "none";
      //change color to white
      passiveBox.style.color = "#fff";
    }
    
    //get innerhtml of forms
    let formText = document.getElementById("formText").innerHTML;
    //if characters in section is fewer than default entry, hide section
    if (formText.length < 350) {
      document.getElementById("forms").style.display = "none";
      //change color to white
      formBox.style.color = "#fff";
    }
    
    //get innerhtml of links
    let linkText = document.getElementById("linkText").innerHTML;
    //if characters in section is fewer than default entry, hide section
    if (linkText.length < 300) {
      document.getElementById("links").style.display = "none";
      //change color to white
      linkBox.style.color = "#fff";
    }
    </script>
          [/dohtml]`}
            </code>
          </pre>
        </p>
      </>
    ),
  },
  {
    keywords: ["templates", "battle profile", "companions", "summons"],
    header: <h2>Ally BP Template</h2>,
    content: (
      <>
        <p>
          This is the code for both applying for and posting summons in the
          Battle Profile. This template is not dynamic, pretty straight forward
          to use.
        </p>
        <p className="codeBlock">
          <pre>
            <code>
              {`[dohtml]
      <div id="membergroup">
      <div id="uglypetsweaterz">
      <div class="back">
      <div class="name">Ally</div>
      <div class="body">
         <div class="image"><img src=""></div>
         <div class="right">
           <div class="info-name1">TYPE</div>
           <div class="info-ans">Summon or Companion</div>
           <div class="info-name2">SPECIES</div>
           <div class="info-ans">Here</div>
           <div class="info-name1">Rank</div>
           <div class="info-ans"># or type</div>
         </div>
         <div class="main-name">STATISTICS</div>
         <div class="main-ans"><div class="main-text">
      <h1>independent</h1>
      
      <b>Strength (STR):</b> here <br>
      <b>Magic (MAG):</b> here<br>
      <b>Defense (DEF):</b> here<br>
      <b>Agility (AGL):</b> here<br>
      </br>
      <h1>dependent</h1>
      
      <b>Evasion (EV):</b> here <br>
      <b>HP:</b> (Companion Only)<br>
      <b>Team Gauge (TG):</b> (Companion Only)<br>
      <b>Summon Gauge (SG):</b> (summon Only) <br>
      </br>
         </div></div>
      
         <div class="main-name-2">ABILITIES</div>
         <div class="main-ans"><div class="main-text">
      <b>Ability Name:</b> here </br>
      <b>Description of Ability:</b> Ability description </br>
      <b>| Tier: # Range | Cost: # | Damage Stat: --- </b> </p>
      
      <b>Ability Name:</b> here </br>
      <b>Description of Ability:</b> Ability description </br>
      <b>| Tier: # Range | Cost: # | Damage Stat: --- </b> </p>
      
      <b>Ability Name:</b> here </br>
      <b>Description of Ability:</b> Ability description </br>
      <b>| Tier: # Range | Cost: # | Damage Stat: --- </b> </p>
      
      <h1>Team Attack</h1>
      (Companion Only)
      <b>Ability Name:</b> here </br>
      <b>Description of Ability:</b> Ability description </br>
      <b>| Tier: # Range | Cost: # | Damage Stat: --- </b> </p>
      
         </div></div>
       </div>
      </div>
      </div>
      </div>
      [/dohtml]`}
            </code>
          </pre>
        </p>
      </>
    ),
  },
];

export default templates;
