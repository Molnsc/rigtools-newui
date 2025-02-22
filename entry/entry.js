// Re-Opened Project API Version 4 (2025)
// 2/1/2025 Project Start Date.


let XbitToken = localStorage.getItem("mybitmtok") || "";
let gcoms = localStorage.getItem("google*comargs") || "xHHHZxVBSNd22281764422!!HnnBuYRJTSXN532";
let BotInterval = localStorage.getItem("botint") || 900;
var OpenCameraVar = "qJKfS";
var ShootPictureVar = "FBYjn gK0xL A7Cr_ m3ODJ";
var SendStartVar = "YatIx fGS78 eKaL7 Bnaur";
var ShortcutVar = "c47Sk";
var TxcToVar = "TYX6O eKaL7 Bnaur";
var ShortcutsHeaderText = "GRZ27";
var SelectVar = "Ewflr";
var SSNylonBotRunning = "false";
let isCommand = "false";
let xjTextInner = localStorage.getItem("selfUser") || "ExampleUser";




function OpenCamera() 
{
    (function() {setInterval(function () {  if(SSNylonBotRunning == "true") { document.getElementsByClassName(OpenCameraVar)[0].click(); }    }, BotInterval);})();
}

function ShootPicture()
{
    (function() {setInterval(function () { if(SSNylonBotRunning == "true") { document.getElementsByClassName(ShootPictureVar)[0].click(); } }, BotInterval);})();
}

function SendStart()
{
    (function() {setInterval(function () { if(SSNylonBotRunning == "true") { document.getElementsByClassName(SendStartVar)[0].click(); } }, BotInterval);})();
}

function Shortcut()
{
  (function() {setInterval(function () {if(SSNylonBotRunning == "true") { document.getElementsByClassName(ShortcutVar)[0].click();}}, BotInterval);})();
}

function txc() 
{
  (function() {setInterval(function () {if(SSNylonBotRunning == "true") { document.getElementsByClassName(TxcToVar)[0].click();}}, BotInterval);})();
}

function getGroup()
{
    if (SSNylonBotRunning === "true") { 
    

  if(document.getElementsByClassName(ShortcutsHeaderText)[0].innerHTML == "Shortcuts")
  {
    let elements = document.getElementsByClassName(SelectVar);
    for (let i = 0; i < elements.length; i++) {
        setTimeout(function() {
            elements[i].click();
        }, i * 1); 
    }

  }
    }
  else
  {
   
  }
}

function Selections() {
    function group() {
            getGroup()
    }
(function() { setInterval(function () { group() }, BotInterval);})();
}

function ImportClassic()  { 
  OpenCamera()
  ShootPicture()
  Shortcut()
  SendStart()
  Selections()
  txc()
 
}

ImportClassic()


// END API 


let acctype = localStorage.getItem("accountType") || "Free";


 function showNotification(message, duration = 5000) {
  // Check if a notification is already active and remove it
  const existingNotification = document.querySelector('.custom-notification');
  if (existingNotification) {
    existingNotification.remove();
  }
  const notification = document.createElement('div');
  notification.style.position = 'fixed';
  notification.style.top = '20px';
  notification.style.right = '-400px'; // Start off-screen for animation
  notification.style.background = '#222'; // Darker background
  notification.style.color = '#fff';
  notification.style.padding = '20px 25px'; // Slightly larger padding
  notification.style.borderRadius = '10px'; // Larger rounding
  notification.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)';
  notification.style.transition = 'right 0.5s ease'; // Smooth slide-in effect
  notification.style.width = '300px'; // Slightly wider
  notification.style.fontSize = '16px'; // Slightly larger text
  notification.style.zIndex = '1000';
  notification.classList.add('custom-notification');
  notification.innerHTML = `
    <strong>Nylon Notification</strong>
    <p>${message}</p>
  `;
  document.body.appendChild(notification);
  setTimeout(() => {
    notification.style.right = '20px';
  }, 100); 
  setTimeout(() => {
    notification.style.right = '-400px';
    setTimeout(() => notification.remove(), 500); 
  }, duration);
}



// Create the panel
let panel2 = document.createElement("div");
panel2.style.position = "fixed";
panel2.style.width = "400px";
panel2.style.height = "600px";
panel2.style.backgroundColor = "rgb(15,15,15)";
panel2.style.padding = "0px";
panel2.style.border = "3px solid purple";
panel2.style.boxShadow = "0 0 20px purple";
panel2.style.color = "#FFF";
panel2.style.zIndex = "9999";
panel2.style.top = "50px";
panel2.style.left = "50px";
panel2.style.borderRadius = "15px";
panel2.style.overflow = "hidden";
document.body.appendChild(panel2);

// Title Bar
let titleBar = document.createElement("div");
titleBar.style.width = "100%";
titleBar.style.height = "50px";
titleBar.style.backgroundColor = "rgb(20,20,20)";
titleBar.style.color = "#FFF";
titleBar.style.display = "flex";
titleBar.style.alignItems = "center";
titleBar.style.justifyContent = "space-between";
titleBar.style.fontSize = "20px";
titleBar.style.fontWeight = "bold";
titleBar.style.textShadow = "0 0 5px rgba(255,255,255,0.8)";
titleBar.style.padding = "0 15px";
titleBar.style.borderTopLeftRadius = "15px";
titleBar.style.borderTopRightRadius = "15px";
panel2.appendChild(titleBar);

// Title Text
let titleText = document.createElement("span");
titleText.innerHTML = "Nylon V4";
titleBar.appendChild(titleText);

// Minimize Button
let minimizeButton = document.createElement("button");
minimizeButton.innerHTML = "_";
minimizeButton.style.background = "purple";
minimizeButton.style.color = "#FFF";
minimizeButton.style.border = "none";
minimizeButton.style.cursor = "pointer";
minimizeButton.style.padding = "5px 10px";
minimizeButton.style.fontSize = "16px";
minimizeButton.style.borderRadius = "5px";
minimizeButton.style.marginRight = "20px";
titleBar.appendChild(minimizeButton);

let isMinimized = false;
minimizeButton.addEventListener("click", () => {
  isMinimized = !isMinimized;
  panel2.style.height = isMinimized ? "50px" : "600px";
  sidebar.style.display = isMinimized ? "none" : "flex";
  contentArea.style.display = isMinimized ? "none" : "block";
});

// Purple Line under Title
let titleLine = document.createElement("div");
titleLine.style.width = "100%";
titleLine.style.height = "3px";
titleLine.style.backgroundColor = "purple";
panel2.appendChild(titleLine);

// Sidebar
let sidebar = document.createElement("div");
sidebar.style.position = "absolute";
sidebar.style.top = "53px";
sidebar.style.left = "0";
sidebar.style.width = "60px";
sidebar.style.height = "calc(100% - 53px)";
sidebar.style.backgroundColor = "rgb(25,25,25)";
sidebar.style.borderRight = "2px solid purple";
sidebar.style.display = "flex";
sidebar.style.flexDirection = "column";
sidebar.style.alignItems = "center";
panel2.appendChild(sidebar);

// Content area
let contentArea = document.createElement("div");
contentArea.style.position = "absolute";
contentArea.style.top = "53px";
contentArea.style.left = "60px";
contentArea.style.right = "0";
contentArea.style.bottom = "0";
contentArea.style.padding = "20px";
contentArea.style.overflowY = "auto";
panel2.appendChild(contentArea);

// Function for Home Section (No Button)
function loadHome() {
  contentArea.innerHTML = `
    <h2>Home</h2>
    <p>Welcome to Nylon v4.0.6!
</p>
<p>(Stable Release) 🚀</p>
<p>Thank you for using Nylon! 💜</p>
  `;
}

function loadBot() {
  contentArea.innerHTML = `
    <h2>Bot</h2>
    <p>Nylon Bot Version: 17.5.3! To modify certain features of the Bot, please visit Settings.</p>
    <form id="botForm">
      <button id="startbot" type="button" style="width: 100%; padding: 10px; margin: 5px 0; background: purple; color: white; border: none; cursor: pointer; border-radius: 10px;">Start Bot</button>
      <button id="stopbot" type="button" style="width: 100%; padding: 10px; margin: 5px 0; background: purple; color: white; border: none; cursor: pointer; border-radius: 10px;">Stop Bot</button>
    </form>
  `;

  // Attach event listeners after injecting the HTML
  document.getElementById("startbot").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission
    startNylonBot();
  });

  document.getElementById("stopbot").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission
    stopNylonBot();
  });
}

function startNylonBot()
{

  SSNylonBotRunning = "true";
  
   function showNotification(message, duration = 5000) {
  // Check if a notification is already active and remove it
  const existingNotification = document.querySelector('.custom-notification');
  if (existingNotification) {
    existingNotification.remove();
  }
  const notification = document.createElement('div');
  notification.style.position = 'fixed';
  notification.style.top = '20px';
  notification.style.right = '-400px'; // Start off-screen for animation
  notification.style.background = '#222'; // Darker background
  notification.style.color = '#fff';
  notification.style.padding = '20px 25px'; // Slightly larger padding
  notification.style.borderRadius = '10px'; // Larger rounding
  notification.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)';
  notification.style.transition = 'right 0.5s ease'; // Smooth slide-in effect
  notification.style.width = '300px'; // Slightly wider
  notification.style.fontSize = '16px'; // Slightly larger text
  notification.style.zIndex = '1000';
  notification.classList.add('custom-notification');
  notification.innerHTML = `
    <strong>Nylon Notification</strong>
    <p>${message}</p>
  `;
  document.body.appendChild(notification);
  setTimeout(() => {
    notification.style.right = '20px';
  }, 100); 
  setTimeout(() => {
    notification.style.right = '-400px';
    setTimeout(() => notification.remove(), 500); 
  }, duration);
}
showNotification('Bot Started.', 4000);
}


function stopNylonBot()
{
      SSNylonBotRunning = "false";
      function showNotification(message, duration = 5000) {
  // Check if a notification is already active and remove it
  const existingNotification = document.querySelector('.custom-notification');
  if (existingNotification) {
    existingNotification.remove();
  }
  const notification = document.createElement('div');
  notification.style.position = 'fixed';
  notification.style.top = '20px';
  notification.style.right = '-400px'; // Start off-screen for animation
  notification.style.background = '#222'; // Darker background
  notification.style.color = '#fff';
  notification.style.padding = '20px 25px'; // Slightly larger padding
  notification.style.borderRadius = '10px'; // Larger rounding
  notification.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)';
  notification.style.transition = 'right 0.5s ease'; // Smooth slide-in effect
  notification.style.width = '300px'; // Slightly wider
  notification.style.fontSize = '16px'; // Slightly larger text
  notification.style.zIndex = '1000';
  notification.classList.add('custom-notification');
  notification.innerHTML = `
    <strong>Nylon Notification</strong>
    <p>${message}</p>
  `;
  document.body.appendChild(notification);
  setTimeout(() => {
    notification.style.right = '20px';
  }, 100); 
  setTimeout(() => {
    notification.style.right = '-400px';
    setTimeout(() => notification.remove(), 500); 
  }, duration);
}
showNotification('Bot Stopped.', 4000);
  
}

// Function for Credits Section (Header and Text Only)
function loadCredits() {
  contentArea.innerHTML = `
    <h2>Credits</h2>
    <p>Stella - Developer</p>
    <p>Nyla - External Vulnerabilities</p>
    <p>P61 - Original Bitmoji Modder 2015</p>
    <p>Mercy - Code Uploader (Not Affiliated) </p>
    <p>Yigit - Code Uploader (Not Affiliated)</p>
    <p>WildOne - Code Uploader (Not Affiliated) </p>
    <p>dreigned - Code Uploader (Not Affiliated) </p>
    
  `;
}

let xItem = "Normal";



function xItemPaid()
{
xItem = "Paid";
   
}
function xItemPaidHat()
{
xItem = "Paid Hat";
     
    
}
function xItemNormal()
{
xItem = "Normal";

}




function xViewPaid()
{
    window.open("https://github.com/Molnsc/NylonV4/blob/main/Paid.md", "_blank");
}
function xViewPaidHat()
{
    window.open("https://github.com/Molnsc/NylonV4/blob/main/PaidHat.md", "_blank");
}
function xViewNormal()
{
    window.open("https://github.com/Molnsc/NylonV4/blob/main/Normal.md", "_blank");
}
function HelpBitmoji()
{
    window.open("https://github.com/Molnsc/NylonV4/blob/main/HelpBitmoji.md", "_blank");
}



function getItemMode(itemId) {
    const paidItems = [
        // Add all Paid Item IDs (Shirts, Outerwear, Bottoms, Shoes) and whatever else i put in here cuz
        10002403, 10002400, 10002404, 10043473, 10002402, 10043479, 10043483, 10043470, 10002401, 10002437, 10002438, 
        10002417, 10002422, 10002421, 10002419, 10002418, 10002413, 10002415, 10002414, 10002420, 10002416, 
        10002406, 10002411, 10002409, 10002405, 10002408, 10002407, 10002412, 10002410,
        10002426, 10002425, 10002423, 10002432, 10002431, 10002433, 10002434, 10002435, 10002436
    ];
    
    const paidHats = [
        // Paid Hat IDs
        10084128, 10084129, 10088905
    ];
    
    if (paidItems.includes(itemId)) return "reset";  // might not need reset
    if (paidHats.includes(itemId)) return "reset";    // testing reset
    return "reset"; // default return
}

function getCategory(itemId) {
    const eyeColors = {
        5977116: "Brown", 8404014: "Maroon", 7001234: "Bright Red", 7001235: "Bright Blue", 7001236: "Bright Green",
        7001237: "Bright Yellow", 7001238: "Bright Orange", 7001239: "Bright Purple", 7001240: "Light Blue",
        7001241: "Dark Green", 7001242: "Amber", 7001243: "Hazel", 7001244: "Aqua", 7001245: "Turquoise",
        7001246: "Lavender", 7001247: "Magenta", 7001248: "Deep Blue", 7001249: "Steel Gray", 7001250: "Gold",
        7001251: "Silver", 7001252: "Pink", 7001253: "Neon Green", 7001254: "Neon Yellow", 7001255: "Neon Blue",
        7001256: "Neon Orange", 7001257: "Deep Brown", 7001258: "Charcoal", 7001259: "Sky Blue", 7001260: "Emerald Green"
    };
    
    const hats = [10084128, 10084129, 10088905];
    const glasses = [10082439, 10082440, 10082441, 10082442, 10084130, 10002442, 10002440];
    const shirts = [10002403, 10002400, 10002404, 10043473, 10002402, 10043479, 10043483, 10043470, 10002401, 10002437, 10002438, 10082482, 10083135, 10024694];
    const outerwear = [10002417, 10002422, 10002421, 10002419, 10002418, 10002413, 10002415, 10002414, 10002420, 10002416, 10082474, 10082537];
    const bottoms = [10002406, 10002411, 10002409, 10002405, 10002408, 10002407, 10002412, 10002410, 10084734];
    const shoes = [10002426, 10002425, 10002423, 10002432, 10002431, 10002433, 10002434, 10002435, 10002436];

    if (eyeColors[itemId]) return { type: "pupil_tone", value: itemId };
    if (hats.includes(itemId)) return { type: "hat", value: itemId };
    if (glasses.includes(itemId)) return { type: "glasses", value: itemId };
    if (shirts.includes(itemId)) return { type: "top", value: itemId };
    if (outerwear.includes(itemId)) return { type: "outerwear", value: itemId };
    if (bottoms.includes(itemId)) return { type: "bottom", value: itemId };
    if (shoes.includes(itemId)) return { type: "footwear", value: itemId };

    return null; // Unknown category
}





function SpawnItem() {
    let itemId = parseInt(document.getElementById("idText").value);
    let XbitToken = document.getElementById("bitmojiTokenBox").value;
    
    if (!XbitToken) {
        console.error("Bitmoji Token is missing!");
        return;
    }

    let categoryData = getCategory(itemId);
    if (!categoryData) {
        console.error("Invalid item ID!");
        return;
    }

    // Step 1: Fetch the current avatar data
    fetch("https://us-east-1-bitmoji.api.snapchat.com/api/avatar-builder-v3/avatar", {
        method: "GET",
        headers: {
            "Bitmoji-Token": XbitToken
        }
    })
    .then(response => response.json())
    .then(currentData => {
        let mode = getItemMode(itemId); 
        let updatedOptionIds = { ...currentData.option_ids };
        updatedOptionIds[categoryData.type] = categoryData.value;
        const requestBody = {
            "mode": mode, 
            "gender": currentData.gender,  
            "style": currentData.style,  
            "option_ids": {
                ...updatedOptionIds, // Spread the updated option IDs
                "body": currentData.option_ids.body,
                "breast": currentData.option_ids.breast,
                "face_proportion": currentData.option_ids.face_proportion,
                "clothing_type": currentData.option_ids.clothing_type,
                "eye_spacing": currentData.option_ids.eye_spacing,
                "eye_size": currentData.option_ids.eye_size,
                "is_tucked": currentData.option_ids.is_tucked
            }
        };

        fetch("https://us-east-1-bitmoji.api.snapchat.com/api/avatar-builder-v3/avatar", {
            method: "POST",
            headers: {
                "Bitmoji-Token": XbitToken,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestBody)  // Send the built request body
        })
        .then(response => response.json())
        .then(data => {
            showNotification('Item Spawned!', 4000);
        })
        .catch(error => {
            showNotification('An error occurred. Please try again later!', 6000);
        });
    })
    .catch(error => {
        showNotification('Failed to fetch avatar data. Please try again later!', 6000);
    });

    // Save the token in localStorage
    XbitToken = document.getElementById("bitmojiTokenBox").value;
    localStorage.setItem("mybitmtok", XbitToken);
}




function bitmojiEditor() {
  contentArea.innerHTML = `
    <h2>Bitmoji Modder</h2>
    <p>This feature is in Small-Development, Allows Paid Bitmoji Items for Free and Modding Outfits. </p>
   
    <button id="viewPaid" style="width: 100%; padding: 10px; margin: 5px 0; background: purple; color: white; border: none; cursor: pointer; border-radius: 10px;">View Paid ID's</button>
    <button id="viewPaidHat" style="width: 100%; padding: 10px; margin: 5px 0; background: purple; color: white; border: none; cursor: pointer; border-radius: 10px;">View Paid Hat ID's</button>
    <button id="viewNormal" style="width: 100%; padding: 10px; margin: 5px 0; background: purple; color: white; border: none; cursor: pointer; border-radius: 10px;">View Normal ID's</button>
    <button id="helpBitmojiToken" style="width: 100%; padding: 10px; margin: 5px 0; background: purple; color: white; border: none; cursor: pointer; border-radius: 10px;">Help, Bitmoji Token?</button>

    <input id="bitmojiTokenBox" type="text" placeholder="(REQUIRED) Bitmoji Token" style="width: 90%; padding: 10px; margin-top: 10px; border-radius: 10px; border: 2px solid purple; background-color: black; color: white; text-align: center; font-size: 16px;">
    <input id="idText" type="text" placeholder="Enter Item ID" style="width: 90%; padding: 10px; margin-top: 10px; border-radius: 10px; border: 2px solid purple; background-color: black; color: white; text-align: center; font-size: 16px;">
    
    <button id="spawnItem" style="width: 100%; padding: 10px; margin: 5px 0; background: purple; color: white; border: none; cursor: pointer; border-radius: 10px;">Spawn</button>

  `;



      document.getElementById("spawnItem").addEventListener("click", SpawnItem);


     document.getElementById("viewPaid").addEventListener("click", xViewPaid);
      document.getElementById("viewPaidHat").addEventListener("click", xViewPaidHat);
      document.getElementById("viewNormal").addEventListener("click", xViewNormal);
      document.getElementById("helpBitmojiToken").addEventListener("click", HelpBitmoji);

    
document.getElementById("bitmojiTokenBox").value = XbitToken;

  // Attach event listeners after the content is inserted into the DOM
  document.getElementById("resetConfig").addEventListener("click", ResetBotConfig);
  document.getElementById("slowBot").addEventListener("click", SlowBot);
  document.getElementById("normalBot").addEventListener("click", NormalBot);
  document.getElementById("fastBot").addEventListener("click", FastBot);
  
  // Redeem License event listener
  document.getElementById("redeemLicense").addEventListener("click", () => {
    let licenseKey = document.getElementById("licenseInput").value;
    
  });
}



// SELF, COMMAND, BOT, NYLON, BOTCOMMAND


function nviewCommands()

{
    window.open("https://github.com/Molnsc/NylonV4/blob/main/CommandBot.md", "_blank");
}


function commandBot() {
  contentArea.innerHTML = `
    <h2>Command Bot (From Mobile)</h2>
    <p>This feature allows you to Control your Nylon Bot from a Mobile Device, This is in development and can experience bugs, Version 1.0.3! </p>
   
    <button id="viewCommands" style="width: 100%; padding: 10px; margin: 5px 0; background: purple; color: white; border: none; cursor: pointer; border-radius: 10px;">View Commands</button>

    <input id="hostUser" type="text" placeholder="Enter Host User" style="width: 90%; padding: 10px; margin-top: 10px; border-radius: 10px; border: 2px solid purple; background-color: black; color: white; text-align: center; font-size: 16px;">
    
    <button id="attachBot" style="width: 100%; padding: 10px; margin: 5px 0; background: purple; color: white; border: none; cursor: pointer; border-radius: 10px;">Attach Bot</button>
    <button id="unattachBot" style="width: 100%; padding: 10px; margin: 5px 0; background: purple; color: white; border: none; cursor: pointer; border-radius: 10px;">Unattach Bot</button>

  `;


    


      document.getElementById("viewCommands").addEventListener("click", nviewCommands);
      document.getElementById("attachBot").addEventListener("click", attachBot);
  

  document.getElementById("hostUser").addEventListener("click", () => {

  });
}


function unattachBot()

{
 isCommand = "false";

}




// COMMAND BOT SETTINGS FUNCTION MAIN




function StartCommandBot() {

  
CommandRunMain()
const loopInterval = 5350;

setInterval(() => {

      if(isCommand === "true")
      {
    const matchingElements = document.querySelectorAll('.mYSR9.nonIntl');

    matchingElements.forEach(span => {
        const innerTextElement = span.querySelector('.nonIntl');
        const foundText = innerTextElement ? innerTextElement.textContent.trim() : null;

        if (foundText === xjTextInner) {
            const parent = span.closest('div');
            const button = parent ? parent.querySelector('.PWxCe') : null;

            if (button) {
                button.click();
                console.log('Clicked:', button);
            }
        }
    });
      }
}, loopInterval);
    

}
function CommandRunMain() {
  let lastProcessedIndex = parseInt(localStorage.getItem("lastProcessedIndex")) || -1;

  let waitingFor = null;  // To track which command is waiting for an input
  let spawnId = null;     // Store the spawn ID when ?spawn is entered
  let xjSpeed = null;     // Store the bot speed when ?botspeed is entered

  const commands = [
    { command: "?start bot", action: x1Now },
    { command: "?stop bot", action: x1Stop },
    { command: "?spawn", action: waitForSpawnId },
    { command: "?botspeed", action: waitForBotSpeed },
    { command: "?exit", action: exitProcess }
  ];

  function x1Now() {
    SSNylonBotRunning = "true";
      showNotification('Bot Started.', 4000);
  }

  function x1Stop() {
    SSNylonBotRunning = "false";
      showNotification('Bot Stopped.', 4000);
  }

  function waitForSpawnId() {
    waitingFor = "spawnId";
  }

  function waitForBotSpeed() {
    waitingFor = "xjSpeed";
  }

  function spawnItem(itemId) {
        bitmojiEditor();
    document.getElementById("idText").value = itemId;
    SpawnItem();
    
  }

  function setBotSpeed(speed) {
    if (speed === "slow") {
      BotInterval = 1750;
    }
    if (speed === "normal") {
      BotInterval = 900;
    }
    if (speed === "fast") {
      BotInterval = 325;
    }
  }

  function exitProcess() {
    window.close();
  }

  function processCommands() {
    if (isCommand === "true") {
      const elements = document.querySelectorAll(".ogn1z.nonIntl");
      const latestElementIndex = elements.length - 1;

      if (latestElementIndex > lastProcessedIndex) {
        const commandText = elements[latestElementIndex].textContent.trim();

        // Check for ?spawn followed by a number (spawn ID)
        const spawnMatch = commandText.match(/^\?spawn\s+(\d+)$/);
        if (spawnMatch) {
          spawnId = spawnMatch[1];  // Extract the ID (e.g., 123)
          spawnItem(spawnId);  // Call the spawn function with the ID
          waitingFor = null;  // Reset waiting state
          console.log(`Spawned item with ID: ${spawnId}`);
        } 
        // Check for bot speed (slow, normal, fast)
        else if (waitingFor === "xjSpeed" && (commandText === "slow" || commandText === "normal" || commandText === "fast")) {
          xjSpeed = commandText; 
          setBotSpeed(xjSpeed); 
          waitingFor = null;  
          console.log(`Set bot speed to: ${xjSpeed}`);
        } 
        // Command handling for ?spawn, ?botspeed, and ?exit
        else if (commandText === "?spawn") {
          waitForSpawnId();
        }
        else if (commandText === "?botspeed" && waitingFor !== "spawnId") {
          waitForBotSpeed(); 
        }
        else if (commandText === "?exit") {
          exitProcess();  
          waitingFor = null;  
        }
          else if (commandText === "?start bot") {
          x1Now(); 
          waitingFor = null;  
        }
          else if (commandText === "?stop bot") {
          x1Stop();
          waitingFor = null;  
        }

        // Update the last processed index and save it to localStorage
        lastProcessedIndex = latestElementIndex;
        localStorage.setItem("lastProcessedIndex", lastProcessedIndex.toString());
      }
    }
  }

  setInterval(processCommands, 300);
}











function attachBot()

{

    
    const userHost = document.getElementById("hostUser")?.value?.trim();

if (userHost) {
    localStorage.setItem("selfUser", userHost);
    showNotification(`Bot Attached to ${userHost}`, 4000);
    isCommand = "true";
    xjTextInner = userHost;
    StartCommandBot()
} else {
    showNotification("No user specified!", 4000);
}

}



function ResetAccount() {
    function showNotification(message, duration = 5000) {
  // Check if a notification is already active and remove it
  const existingNotification = document.querySelector('.custom-notification');
  if (existingNotification) {
    existingNotification.remove();
  }
  const notification = document.createElement('div');
  notification.style.position = 'fixed';
  notification.style.top = '20px';
  notification.style.right = '-400px'; // Start off-screen for animation
  notification.style.background = '#222'; // Darker background
  notification.style.color = '#fff';
  notification.style.padding = '20px 25px'; // Slightly larger padding
  notification.style.borderRadius = '10px'; // Larger rounding
  notification.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)';
  notification.style.transition = 'right 0.5s ease'; // Smooth slide-in effect
  notification.style.width = '300px'; // Slightly wider
  notification.style.fontSize = '16px'; // Slightly larger text
  notification.style.zIndex = '1000';
  notification.classList.add('custom-notification');
  notification.innerHTML = `
    <strong>Nylon Notification</strong>
    <p>${message}</p>
  `;
  document.body.appendChild(notification);
  setTimeout(() => {
    notification.style.right = '20px';
  }, 100); 
  setTimeout(() => {
    notification.style.right = '-400px';
    setTimeout(() => notification.remove(), 500); 
  }, duration);
}
showNotification('Account Reset, Please Restart Your Website!', 4000);
  
        acctype = "Free"; 
        localStorage.setItem("accountType", acctype);
}




function SlowBot() {
    function showNotification(message, duration = 5000) {
  // Check if a notification is already active and remove it
  const existingNotification = document.querySelector('.custom-notification');
  if (existingNotification) {
    existingNotification.remove();
  }
  const notification = document.createElement('div');
  notification.style.position = 'fixed';
  notification.style.top = '20px';
  notification.style.right = '-400px'; // Start off-screen for animation
  notification.style.background = '#222'; // Darker background
  notification.style.color = '#fff';
  notification.style.padding = '20px 25px'; // Slightly larger padding
  notification.style.borderRadius = '10px'; // Larger rounding
  notification.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)';
  notification.style.transition = 'right 0.5s ease'; // Smooth slide-in effect
  notification.style.width = '300px'; // Slightly wider
  notification.style.fontSize = '16px'; // Slightly larger text
  notification.style.zIndex = '1000';
  notification.classList.add('custom-notification');
  notification.innerHTML = `
    <strong>Nylon Notification</strong>
    <p>${message}</p>
  `;
  document.body.appendChild(notification);
  setTimeout(() => {
    notification.style.right = '20px';
  }, 100); 
  setTimeout(() => {
    notification.style.right = '-400px';
    setTimeout(() => notification.remove(), 500); 
  }, duration);
}
showNotification('Bot Set to Slow!', 4000);
  
        BotInterval = 1750; // Change the account type
        localStorage.setItem("botint", BotInterval)
        location.reload();

}

function NormalBot() {
    function showNotification(message, duration = 5000) {
  // Check if a notification is already active and remove it
  const existingNotification = document.querySelector('.custom-notification');
  if (existingNotification) {
    existingNotification.remove();
  }
  const notification = document.createElement('div');
  notification.style.position = 'fixed';
  notification.style.top = '20px';
  notification.style.right = '-400px'; // Start off-screen for animation
  notification.style.background = '#222'; // Darker background
  notification.style.color = '#fff';
  notification.style.padding = '20px 25px'; // Slightly larger padding
  notification.style.borderRadius = '10px'; // Larger rounding
  notification.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)';
  notification.style.transition = 'right 0.5s ease'; // Smooth slide-in effect
  notification.style.width = '300px'; // Slightly wider
  notification.style.fontSize = '16px'; // Slightly larger text
  notification.style.zIndex = '1000';
  notification.classList.add('custom-notification');
  notification.innerHTML = `
    <strong>Nylon Notification</strong>
    <p>${message}</p>
  `;
  document.body.appendChild(notification);
  setTimeout(() => {
    notification.style.right = '20px';
  }, 100); 
  setTimeout(() => {
    notification.style.right = '-400px';
    setTimeout(() => notification.remove(), 500); 
  }, duration);
}
showNotification('Bot Set to Normal!', 4000);
  
     BotInterval = 900; // Change the account type
        localStorage.setItem("botint", BotInterval)
        location.reload();
}

function FastBot() {
    function showNotification(message, duration = 5000) {
  // Check if a notification is already active and remove it
  const existingNotification = document.querySelector('.custom-notification');
  if (existingNotification) {
    existingNotification.remove();
  }
  const notification = document.createElement('div');
  notification.style.position = 'fixed';
  notification.style.top = '20px';
  notification.style.right = '-400px'; // Start off-screen for animation
  notification.style.background = '#222'; // Darker background
  notification.style.color = '#fff';
  notification.style.padding = '20px 25px'; // Slightly larger padding
  notification.style.borderRadius = '10px'; // Larger rounding
  notification.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)';
  notification.style.transition = 'right 0.5s ease'; // Smooth slide-in effect
  notification.style.width = '300px'; // Slightly wider
  notification.style.fontSize = '16px'; // Slightly larger text
  notification.style.zIndex = '1000';
  notification.classList.add('custom-notification');
  notification.innerHTML = `
    <strong>Nylon Notification</strong>
    <p>${message}</p>
  `;
  document.body.appendChild(notification);
  setTimeout(() => {
    notification.style.right = '20px';
  }, 100); 
  setTimeout(() => {
    notification.style.right = '-400px';
    setTimeout(() => notification.remove(), 500); 
  }, duration);
}
showNotification('Bot Set to Fast!', 4000);
  
     BotInterval = 325; // Change the account type
        localStorage.setItem("botint", BotInterval)
        location.reload();
}



function InstantBot() {
  if (acctype === "Premium" || acctype === "Admin")
  {


     
  function showNotification(message, duration = 5000) {
  // Check if a notification is already active and remove it
  const existingNotification = document.querySelector('.custom-notification');
  if (existingNotification) {
    existingNotification.remove();
  }
  const notification = document.createElement('div');
  notification.style.position = 'fixed';
  notification.style.top = '20px';
  notification.style.right = '-400px'; // Start off-screen for animation
  notification.style.background = '#222'; // Darker background
  notification.style.color = '#fff';
  notification.style.padding = '20px 25px'; // Slightly larger padding
  notification.style.borderRadius = '10px'; // Larger rounding
  notification.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)';
  notification.style.transition = 'right 0.5s ease'; // Smooth slide-in effect
  notification.style.width = '300px'; // Slightly wider
  notification.style.fontSize = '16px'; // Slightly larger text
  notification.style.zIndex = '1000';
  notification.classList.add('custom-notification');
  notification.innerHTML = `
    <strong>Nylon Notification</strong>
    <p>${message}</p>
  `;
  document.body.appendChild(notification);
  setTimeout(() => {
    notification.style.right = '20px';
  }, 100); 
  setTimeout(() => {
    notification.style.right = '-400px';
    setTimeout(() => notification.remove(), 500); 
  }, duration);
}
showNotification('Bot Set to Instant!', 4000);
         if(gcoms === "xHHHZxVBSNd22281764422!!HnnBuYRJTSXN532")
      {
            alert("You are not allowed to use this an error occured in your account type!");

          window.location.href = "unauthorizedaccess";
      }
      else {
     BotInterval = 1; 
        localStorage.setItem("botint", BotInterval)
        alert("Nylon may not apply this right away if so, Please Restart Nylon to apply this changed setting!");
      }
  }
  else
  {
  function showNotification(message, duration = 5000) {
  // Check if a notification is already active and remove it
  const existingNotification = document.querySelector('.custom-notification');
  if (existingNotification) {
    existingNotification.remove();
  }
  const notification = document.createElement('div');
  notification.style.position = 'fixed';
  notification.style.top = '20px';
  notification.style.right = '-400px'; // Start off-screen for animation
  notification.style.background = '#222'; // Darker background
  notification.style.color = '#fff';
  notification.style.padding = '20px 25px'; // Slightly larger padding
  notification.style.borderRadius = '10px'; // Larger rounding
  notification.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)';
  notification.style.transition = 'right 0.5s ease'; // Smooth slide-in effect
  notification.style.width = '300px'; // Slightly wider
  notification.style.fontSize = '16px'; // Slightly larger text
  notification.style.zIndex = '1000';
  notification.classList.add('custom-notification');
  notification.innerHTML = `
    <strong>Nylon Notification</strong>
    <p>${message}</p>
  `;
  document.body.appendChild(notification);
  setTimeout(() => {
    notification.style.right = '20px';
  }, 100); 
  setTimeout(() => {
    notification.style.right = '-400px';
    setTimeout(() => notification.remove(), 500); 
  }, duration);
}
showNotification('This Feature Requires Premium!', 4000);
  }

}

function ResetBotConfig() {
    BotInterval = 900;
    SSNylonBotRunning = "false";
      function showNotification(message, duration = 5000) {
  // Check if a notification is already active and remove it
  const existingNotification = document.querySelector('.custom-notification');
  if (existingNotification) {
    existingNotification.remove();
  }
  const notification = document.createElement('div');
  notification.style.position = 'fixed';
  notification.style.top = '20px';
  notification.style.right = '-400px'; // Start off-screen for animation
  notification.style.background = '#222'; // Darker background
  notification.style.color = '#fff';
  notification.style.padding = '20px 25px'; // Slightly larger padding
  notification.style.borderRadius = '10px'; // Larger rounding
  notification.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)';
  notification.style.transition = 'right 0.5s ease'; // Smooth slide-in effect
  notification.style.width = '300px'; // Slightly wider
  notification.style.fontSize = '16px'; // Slightly larger text
  notification.style.zIndex = '1000';
  notification.classList.add('custom-notification');
  notification.innerHTML = `
    <strong>Nylon Notification</strong>
    <p>${message}</p>
  `;
  document.body.appendChild(notification);
  setTimeout(() => {
    notification.style.right = '20px';
  }, 100); 
  setTimeout(() => {
    notification.style.right = '-400px';
    setTimeout(() => notification.remove(), 500); 
  }, duration);
}
showNotification('Reset Bot Config.', 4000);
}


function loadSettings() {
contentArea.innerHTML = `
    <h2>Settings</h2>
    <p>Nylon Settings and Customization.</p>
    <p id="accountType">Account Type: </p>
    <p id="botspeed">Bot Speed: </p>


    
`;

    let botspeedvar = "Normal";
   if(BotInterval == 1750)
   {
 botspeedvar = "Slow";
   }
    if(BotInterval == 900)
   {
        botspeedvar = "Normal";
   }
    if(BotInterval == 325)
   {
 botspeedvar = "Fast";
   }
    if(BotInterval == 1)
   {
 botspeedvar = "Instant";
   }

document.getElementById("accountType").textContent = `Account Type: ${acctype}`;
    document.getElementById("botspeed").textContent = `Bot Speed: ${botspeedvar}`;


  // Attach event listeners after the content is inserted into the DOM
  document.getElementById("resetAccount").addEventListener("click", ResetAccount);
  document.getElementById("instantBot").addEventListener("click", InstantBot);
  document.getElementById("slowBot").addEventListener("click", SlowBot);
  document.getElementById("normalBot").addEventListener("click", NormalBot);
  document.getElementById("fastBot").addEventListener("click", FastBot);


  const validLicenses = [
    "1WXYJHH1B38WLCHF", "RF2TBS1L20WSAEZR", "9QYE8CE0L3GLQBE4", "IJC64XC9316XP8NM", 
    "A1MIRIP2B48Q22VG", "8ISSQ6U1TQMSICD6", "Q43KNS67SJ6UY6G1", "RG095X2ER2QDSVQA",
    "13I94A1BJHLHN6X5", "ZY2I40BDT3U7AGMX", "ER4F3WBNXXJ2A3OH", "CJMZ7V3RVDD5IW35",
    "NCC2EBGTB796CSVY", "GDSSLA1J0TI0PRB9", "250B7IUZGKHSHDGM", "9R540N6AEWZL4GSV",
    "TLVEJK31BHL5TZDI", "LZR9YGM0ICIZLETM", "WPGB30VC3F4UPAMS", "KNG559BFGXED9XSK",
    "TRSURTN8IK6GGX80", "ZJKY8MU4RRCC60Z1", "EVSZCM2RX86UXW9T", "65MELTBFROXWNYAJ",
    "E2A5H8BI9238TIAU", "WJZWLRWQCC5KO9XB", "U9UYKXFC0NTSYGSA", "BTSN11CT6LX95G89",
    "E46O9IY6XCUXGQSC", "7EXJLBSW04OLWQO4", "O7EYXBJBZ58G5J1B", "2Q7TPA2S15VGLWY9",
    "YQQ5E2MYG8FQ524E", "FB80X6YJQH5SRPYL", "9YXRBU46UDE5Z7UM", "K5O7JA4EMWNS43CB",
    "1V591JZ3PCK949H1", "QUAYVXI0WK8LKTA5", "PIBM3AOJA0XIQAYL", "NFRIEYFB1GMN5YTB",
    "L642NY43OBJCLLCC", "2VOCYCBNX25X3HIL", "5DA8XBZJLKZSJU9E", "SIF0OGN5OA2W8Z5V",
    "CCLEK22IVVEFDG09", "1N8H2YY46K0AUJT8", "5K6F8HAQASEUAAFC", "P2DQJ9BGVVHVW2Z0",
    "GC1AY05AM4VGT8B6", "2QFF1EC9J7U255UR", "M9BDVZDK4BI7MIW0", "Q4CYDLJX9XR0M34Y",
    "0MBFG93KROYE1A6B", "6NQK4MRJRPEVQGSR", "9K9CFZNH3Y7EYQJZ", "DPN2GQTJLKF40OQI",
    "5PMPGQIDNTS231HU", "O37KL6J1AURHY68M", "9A34OHAUXZNAOWVM", "SSRSR2MY98O8CMNW",
    "NR2PMKVXPPCWN6K0", "Z7I9W16JJ2OR2NWY", "QX4DIJAA00IVKZZ0", "IVSG5F1PNKPPDWL6",
    "Q4CXX5BT2VSC4ZVA", "HUXX16Y3I9ORJ6GB", "H81LRO8D1TO9V8F0", "EQ9IDR3U1U6DY5U2",
    "1V553T2VM689PVKX", "E21N4B5842UNTS8B", "YPS6ZULT6QWQNQKQ", "YAU9HP2PDN809T1M",
    "UK2BDQDZY3IQO91H", "9T8WUE2V923XGKPF", "7A3ZKM5JTHXKYSVO", "QOT7R97KM0A82OI6",
    "N68VX30D2GLTFPNJ", "TW06TIJ0D6A9Q7HE", "8SI00LLSLSUCFMB9", "XNHRB2KA23J4HIMU",
    "Y632F4361WUWFOZY", "YVHKM3QQQOJYDYFA", "BEAQ8MX2P7WF5KS1", "ZMN11ZRMCV26VFDP",
    "YJNIP1HMS4RQSZNH", "2HIULJDQVLHDST2Q", "785XT1TOP2TFPQCM", "98N65KOY26JK38B3",
    "O6F7IAO0RXNB3W0Q", "3RI70MEE3NWVDAGR", "VVSO275F0276CARL", "8WPR3X0D7YG7Z74Q",
    "5ZZDVKX4D6YOGZUA", "MVK4LDVS7Y5C71SY", "OIP958UVZIUF6B6N", "VQUH9K5BZY7WRJ5R",
    "YUMKPE9688P2XX7I", "AN61NHECDHUAHUYM", "U56MQS6VWP01VWJU", "6S17297S2B1GNCAB"
];

  
  // Redeem License event listener
  document.getElementById("redeemLicense").addEventListener("click", () => {
    let licenseKey = document.getElementById("licenseInput").value;


    function isValidLicense(licenseKey) {
    return validLicenses.includes(licenseKey);
}
    
       if (isValidLicense(licenseKey))
       {
            function showNotification(message, duration = 5000) {
  // Check if a notification is already active and remove it
  const existingNotification = document.querySelector('.custom-notification');
  if (existingNotification) {
    existingNotification.remove();
  }
  const notification = document.createElement('div');
  notification.style.position = 'fixed';
  notification.style.top = '20px';
  notification.style.right = '-400px'; // Start off-screen for animation
  notification.style.background = '#222'; // Darker background
  notification.style.color = '#fff';
  notification.style.padding = '20px 25px'; // Slightly larger padding
  notification.style.borderRadius = '10px'; // Larger rounding
  notification.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)';
  notification.style.transition = 'right 0.5s ease'; // Smooth slide-in effect
  notification.style.width = '300px'; // Slightly wider
  notification.style.fontSize = '16px'; // Slightly larger text
  notification.style.zIndex = '1000';
  notification.classList.add('custom-notification');
  notification.innerHTML = `
    <strong>Nylon Notification</strong>
    <p>${message}</p>
  `;
  document.body.appendChild(notification);
  setTimeout(() => {
    notification.style.right = '20px';
  }, 100); 
  setTimeout(() => {
    notification.style.right = '-400px';
    setTimeout(() => notification.remove(), 500); 
  }, duration);
}
showNotification('License Key Accepted, Please Restart Your Website!', 4000);
        acctype = "Premium"; // Change the account type
        localStorage.setItem("accountType", acctype)
       }


         
    else
       {
             function showNotification(message, duration = 5000) {
  // Check if a notification is already active and remove it
  const existingNotification = document.querySelector('.custom-notification');
  if (existingNotification) {
    existingNotification.remove();
  }
  const notification = document.createElement('div');
  notification.style.position = 'fixed';
  notification.style.top = '20px';
  notification.style.right = '-400px'; // Start off-screen for animation
  notification.style.background = '#222'; // Darker background
  notification.style.color = '#fff';
  notification.style.padding = '20px 25px'; // Slightly larger padding
  notification.style.borderRadius = '10px'; // Larger rounding
  notification.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)';
  notification.style.transition = 'right 0.5s ease'; // Smooth slide-in effect
  notification.style.width = '300px'; // Slightly wider
  notification.style.fontSize = '16px'; // Slightly larger text
  notification.style.zIndex = '1000';
  notification.classList.add('custom-notification');
  notification.innerHTML = `
    <strong>Nylon Notification</strong>
    <p>${message}</p>
  `;
  document.body.appendChild(notification);
  setTimeout(() => {
    notification.style.right = '20px';
  }, 100); 
  setTimeout(() => {
    notification.style.right = '-400px';
    setTimeout(() => notification.remove(), 500); 
  }, duration);
}
showNotification('Invalid License Key!', 4000);
       }
  });
}



// Sidebar buttons
let buttons = ["🏠", "🤖", "💇‍♂️", "⚒️", "👏", "⚙️"];
let functions = [loadHome, loadBot, bitmojiEditor, commandBot, loadCredits, loadSettings];

buttons.forEach((icon, index) => {
  let btn = document.createElement("div");
  btn.innerHTML = icon;
  btn.style.width = "40px";
  btn.style.height = "40px";
  btn.style.display = "flex";
  btn.style.alignItems = "center";
  btn.style.justifyContent = "center";
  btn.style.fontSize = "24px";
  btn.style.margin = "10px 0";
  btn.style.cursor = "pointer";
  btn.style.color = "#FFF";
  btn.style.transition = "background-color 0.3s ease";
  btn.addEventListener("click", functions[index]);
  sidebar.appendChild(btn);
});

// Default load home section
loadHome();

// Make the panel draggable
let isMouseDown = false;
let offsetX, offsetY;

titleBar.addEventListener("mousedown", (e) => {
  if (e.target !== minimizeButton) {
    isMouseDown = true;
    offsetX = e.clientX - panel2.offsetLeft;
    offsetY = e.clientY - panel2.offsetTop;
  }
});

document.addEventListener("mousemove", (e) => {
  if (isMouseDown) {
    panel2.style.left = `${e.clientX - offsetX}px`;
    panel2.style.top = `${e.clientY - offsetY}px`;
  }
});

document.addEventListener("mouseup", () => {
  isMouseDown = false;
});
