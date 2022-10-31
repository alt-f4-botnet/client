@@ -0,0 +1,218 @@
// IMPORTS, VARIABLES & OTHERS

const prompt = require('prompt-sync')();
const fs = require('fs');
const exec = require('child_process').exec;
const puppeteer = require("puppeteer");
var XMLHttpRequest = require('xhr2');
require("readline").emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
require('dotenv').config()



// AUTH 


if (process.env.AUTHKEY == 0) {
    console.clear()
    console.log('\x1b[37m' + "[ ERROR@ALT-F4 ] \x1b[35mNo saved auth-key found! " + "\x1b[0m")
    var authkey = prompt("\x1b[37m" + "[ AUTH@ALT-F4 ] \x1b[35mYour authentication key: " + "\x1b[35m")
    var authkey_var = ("AUTHKEY=" + authkey)
    fs.writeFile("./.env", authkey_var, (err) => {
        if (err) {
        console.error(err);
        return;
          }
          console.log("\x1b[37m" + "[ AUTH@ALT-F4 ] \x1b[35mYour auth-key was saved! " + "\x1b[0m")
          console.log("\x1b[37m" + "[ AUTH@ALT-F4 ] \x1b[35mRestart ALT-F4! " + "\x1b[0m")
}
)} else if (process.env.AUTHKEY == "null") {
    console.clear()
    console.log('\x1b[37m' + "[ ERROR@ALT-F4 ] \x1b[35mNo saved auth-key found! " + "\x1b[0m")
    var authkey = prompt("\x1b[37m" + "[ AUTH@ALT-F4 ] \x1b[35mYour authentication key: " + "\x1b[35m")
    var authkey_var = ("AUTHKEY=" + authkey)
    fs.writeFile("./.env", authkey_var, (err) => {
        if (err) {
        console.error(err);
        return;
          }
          console.log("\x1b[37m" + "[ AUTH@ALT-F4 ] \x1b[35mYour auth-key was saved! " + "\x1b[0m")
          console.log("\x1b[37m" + "[ AUTH@ALT-F4 ] \x1b[35mRestart ALT-F4! " + "\x1b[0m")
        })   
} else{
    
    // LOGO


console.clear()                                                       
console.log("                                                                        ")                                        
console.log("\x1b[35m" + '      db     `7MMF     MMP""MM""YMM  `7MM"""YMM                                           ');
console.log('     ;MM:      MM     P     MM    `7   MM    `7                                          ');
console.log('    ,V^MM.     MM           MM         MM   d     \x1b[37m,AM\x1b[35m                                     ');
console.log('   ,M  `MM     MM           MM         MM""MM    \x1b[37mAVMM\x1b[35m                                     ');
console.log('   AbmmmqMA    MM      ,    MM  mmmmm  MM   Y  \x1b[37m,W  MM\x1b[35m                                     ');
console.log('  A      VML   MM     ,M    MM         MM    \x1b[37m,W    MM\x1b[35m                                     ');
console.log('.AMA.   .AMMA. JMMmmmmMMM .JMML.     .JMML.  \x1b[37mAmmmmmMMmm\x1b[35m                                  ');
console.log('                                                 \x1b[37mMM\x1b[35m                                     ');
console.log('                                                 \x1b[37mMM\x1b[35m                                     ');

    // AUTHOR

console.log("\x1b[37m" + '                    by Sparrow#3378                                 ' + "\x1b[0m");

var username = process.env.AUTHKEY.substring(22);

    // WELCOME MESSAGE
                                                        
console.log("                                                                                        ")
console.log("\x1b[37m" + "[ ROOT@ALT-F4 ] \x1b[35mWelcome back " + username + "!" + "\x1b[0m")
console.log("\x1b[37m" + "[ ROOT@ALT-F4 ] \x1b[35mType help to see all commands & info! " + "\x1b[0m")
console.log("\x1b[37m" + "[ ROOT@ALT-F4 ] \x1b[35mPress ctr + c to exit! " + "\x1b[0m")
console.log("\x1b[37m" + "[ ROOT@ALT-F4 ] \x1b[35mIf you entered an invalid authkey, your attacks will not work! " + "\x1b[0m")
console.log("                                                                                        ")

process.stdin.on("keypress", (char, evt) => {
    
          if (char === "\u0003") {
            console.log("    ")
            console.log("\x1b[37m" + "[ ROOT@ALT-F4 ] \x1b[35mLeaving ALT-F4! " + "\x1b[0m")
            process.exit();

          }
  });
  

var command = prompt("\x1b[37m" + "[ " + username + "@ALT-F4 ] " + "\x1b[35m")




if (command == "help") {
    console.clear()
    console.clear()                                                          
console.log("                                                                        ")                                        
console.log("\x1b[35m" + '      db     `7MMF     MMP""MM""YMM  `7MM"""YMM                                           ');
console.log('     ;MM:      MM     P     MM    `7   MM    `7                                          ');
console.log('    ,V^MM.     MM           MM         MM   d     \x1b[37m,AM\x1b[35m                                     ');
console.log('   ,M  `MM     MM           MM         MM""MM    \x1b[37mAVMM\x1b[35m                                     ');
console.log('   AbmmmqMA    MM      ,    MM  mmmmm  MM   Y  \x1b[37m,W  MM\x1b[35m                                     ');
console.log('  A      VML   MM     ,M    MM         MM    \x1b[37m,W    MM\x1b[35m                                     ');
console.log('.AMA.   .AMMA. JMMmmmmMMM .JMML.     .JMML.  \x1b[37mAmmmmmMMmm\x1b[35m                                  ');
console.log('                                                 \x1b[37mMM\x1b[35m                                     ');
console.log('                                                 \x1b[37mMM\x1b[35m                                     ');

    // AUTHOR

console.log("\x1b[37m" + '                    by Sparrow#3378                                 ' + "\x1b[0m");
console.log("   ")

// help command
    console.log("\x1b[37m" + " --------------------------------------------------" + "\x1b[0m")
    console.log("\x1b[35m" + " Methods: \x1b[37mraw (more methods soon)" + "\x1b[0m");
    console.log("\x1b[35m" + " Time of attack: \x1b[37m50 seconds" + "\x1b[0m");
    console.log("\x1b[35m" + " TOS: \x1b[37mUse tos commands to see our tos" + "\x1b[0m");
    console.log("   ")
    console.log("\x1b[35m" + " Contact: \x1b[37malt-f4@urmom.pics" + "\x1b[0m");
    console.log("\x1b[35m" + " Author: \x1b[37mSparrow#3378" + "\x1b[0m");
    console.log("\x1b[37m" + " --------------------------------------------------" + "\x1b[0m")
    
    console.log("\x1b[35m" + " <====== \x1b[37mPress enter to return to the main menu!" + "\x1b[0m")

    process.stdin.on("keypress", (char, evt) => {
        if (char === "\r") 
        console.clear()
        
    });



} else if (command == "tos") {
    console.clear()
    console.clear()                                                          
console.log("                                                                        ")                                        
console.log("\x1b[35m" + '      db     `7MMF     MMP""MM""YMM  `7MM"""YMM                                           ');
console.log('     ;MM:      MM     P     MM    `7   MM    `7                                          ');
console.log('    ,V^MM.     MM           MM         MM   d     \x1b[37m,AM\x1b[35m                                     ');
console.log('   ,M  `MM     MM           MM         MM""MM    \x1b[37mAVMM\x1b[35m                                     ');
console.log('   AbmmmqMA    MM      ,    MM  mmmmm  MM   Y  \x1b[37m,W  MM\x1b[35m                                     ');
console.log('  A      VML   MM     ,M    MM         MM    \x1b[37m,W    MM\x1b[35m                                     ');
console.log('.AMA.   .AMMA. JMMmmmmMMM .JMML.     .JMML.  \x1b[37mAmmmmmMMmm\x1b[35m                                  ');
console.log('                                                 \x1b[37mMM\x1b[35m                                     ');
console.log('                                                 \x1b[37mMM\x1b[35m                                     ');

    // AUTHOR

console.log("\x1b[37m" + '                    by Sparrow#3378                                 ' + "\x1b[0m");
console.log("   ")

// tos command
    console.log("\x1b[35m" + " --------------------------------------------------" + "\x1b[0m")
    console.log("\x1b[35m" + " \x1b[37m1. \x1b[35mI also have a life outside of discord, dont annoy me on discord ." + "\x1b[0m");
    console.log("\x1b[35m" + " \x1b[37m2. \x1b[35mDont ask me for free things ." + "\x1b[0m");
    console.log("\x1b[35m" + " \x1b[37m3. \x1b[35mDont be dumb ." + "\x1b[0m");
    console.log("\x1b[35m" + " \x1b[37m4. \x1b[35mDo not attack .gov or .edu ." + "\x1b[0m");
    console.log("\x1b[35m" + " \x1b[37m5. \x1b[35mMax 1 Dstat Attack per 1 hour ." + "\x1b[0m");
    console.log("\x1b[35m" + " \x1b[37m6. \x1b[35mOtherwise no rules, if  I dont like you ill ban you or ill take your access ." + "\x1b[0m");
    console.log("    ")
    console.log("\x1b[35m" + " \x1b[37mContact: \x1b[35malt-f4@urmom.pics" + "\x1b[0m");
    console.log("\x1b[35m" + " \x1b[37mAuthor: \x1b[35mSparrow#3378" + "\x1b[0m");
    console.log("\x1b[35m" + " --------------------------------------------------" + "\x1b[0m")
    console.log("\x1b[35m" + " <====== \x1b[37mPress enter to return to the main menu!" + "\x1b[0m")

} else if (command == "raw") {
        console.clear() 
        console.log("                                                                        ")                                        
        console.log("\x1b[35m" + '      db     `7MMF     MMP""MM""YMM  `7MM"""YMM                                           ');
        console.log('     ;MM:      MM     P     MM    `7   MM    `7                                          ');
        console.log('    ,V^MM.     MM           MM         MM   d     \x1b[37m,AM\x1b[35m                                     ');
        console.log('   ,M  `MM     MM           MM         MM""MM    \x1b[37mAVMM\x1b[35m                                     ');
        console.log('   AbmmmqMA    MM      ,    MM  mmmmm  MM   Y  \x1b[37m,W  MM\x1b[35m                                     ');
        console.log('  A      VML   MM     ,M    MM         MM    \x1b[37m,W    MM\x1b[35m                                     ');
        console.log('.AMA.   .AMMA. JMMmmmmMMM .JMML.     .JMML.  \x1b[37mAmmmmmMMmm\x1b[35m                                  ');
        console.log('                                                 \x1b[37mMM\x1b[35m                                     ');
        console.log('                                                 \x1b[37mMM\x1b[35m                                     ');

    // AUTHOR

console.log("\x1b[37m" + '                    by Sparrow#3378                                 ' + "\x1b[0m");
console.log("   ")

// raw attack command

        var raw_host = prompt("\x1b[37m" + "[ ROOT@ALT-F4 ] \x1b[35mURL: " + "\x1b[0m")
       

        // LEBO GET REQUEST JE PICA A NEJDE TAM DAT V URL //

        var url = raw_host.replace("://", "-alt-f4-")

        console.log("\x1b[37m" + " --------------------------------------------------" + "\x1b[0m")
        console.log("\x1b[35m" + " Started attack to: \x1b[37m"+ raw_host + "\x1b[0m");
        console.log("\x1b[35m" + " Time of attack: \x1b[37m50 seconds" + "\x1b[0m");
        console.log("   ")
        console.log("\x1b[35m" + " Contact: \x1b[37malt-f4@urmom.pics" + "\x1b[0m");
        console.log("\x1b[35m" + " Author: \x1b[37mSparrow#3378" + "\x1b[0m");
        console.log("\x1b[37m" + " --------------------------------------------------" + "\x1b[0m")

        var raw_host_var = ("http://alt-f4.urmom.pics/" + process.env.AUTHKEY + "/" + url)
        const xmlh = new XMLHttpRequest();
        xmlh.open("GET", raw_host_var);
        xmlh.send();
        console.log("\x1b[35m" + " <====== \x1b[37mPress enter to return to the main menu!" + "\x1b[0m")
        console.log("   ")
        console.log("   ")

} else if (command == null) {
    console.log("\x1b[37m" + "[ ROOT@ALT-F4 ] \x1b[35mPress ctr + c again to leave ALT-F4! " + "\x1b[0m")
} else if (command == 0) {
    console.log("\x1b[37m" + "[ ROOT@ALT-F4 ] \x1b[35mThere is no command called " + "nothing" + ". Use help command to see all commands! " + "\x1b[0m")
    process.exit()
} else {
   console.log("\x1b[37m" + "[ ROOT@ALT-F4 ] \x1b[35mThere is no command called " + command + ". Use help command to see all commands! " + "\x1b[0m")
   process.exit()    
}

} 

