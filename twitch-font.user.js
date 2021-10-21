// ==UserScript==
// @name         Twitch Font Additions
// @description  Adds an additional font to Twitch.
// @author       Mrlilal
// @version      1.0.3

// @updateURL    https://github.com/Mrlilal/twitch-font/raw/main/twitch-font.user.js
// @downloadURL  https://github.com/Mrlilal/twitch-font/raw/main/twitch-font.user.js

// @include      https://*.twitch.tv/*

// @run-at       document-start
// ==/UserScript==

// Start of the injenction function
const attemptApplication = (setting, settingName) => {
    // If there hasn't been an injection by this script, continue
    if (!document.getElementById('TwitchFontAdditions')) {
        // If a part of the character sheet isn't found, try again
        if (!document.querySelector('head')) {
            setTimeout(attemptApplication, applicationInterval, setting, settingName);

            console.log(`%cTwitchFontAdditions: Elements not found. Waiting ${applicationInterval} milliseconds to attempt injecting again.`, 'color: yellow;');

            return;
        }

        // Start checking for the settings
        if (setting == 'enabled') {
            const add_style = document.createElement('style'); // Create the style tag
            add_style.id = 'TwitchFontAdditions'; // Add the id to the style tag
            add_style.type = 'text/css'; // Add the type to the style tag
            add_style.innerHTML = addCss; // Add the css to the style tag
            document.head.appendChild(add_style); // Add the style tag to the head

            console.log(`%cTwitchFontAdditions: The styling for ${settingName} was successfully added.`, 'color: #32CD32;');
        } else if (setting == 'disabled') {
            // Log in the console that the setting is disabled.
            console.log(`%cTwitchFontAdditions: Setting for ${settingName} is 'disabled.' Continuing to the next setting.`, 'color: #32CD32;');
        } else {
            // Log that some settings are not set up properly.
            console.log('%c---------------------------------------------', 'color: red;');
            console.log(`%cTwitchFontAdditions: Setting for ${settingName} is not set properly. Please ensure that all settings are configured properly.`, 'color: red;');
            console.log('%c---------------------------------------------', 'color: red;');
        }
    } else {
        console.log('%cTwitchFontAdditions: The style fixes are already applied. Skipping attempted application.', 'color: #32CD32;');
    }
    console.log('%cTwitchFontAdditions: All styles have finished injecting.', 'color: #32CD32;');
};

function TwitchFontAdditions() {
    let setting = useTwitchFontAdditions;
    let settingName = 'Use TwitchFontAdditions';

    attemptApplication(setting, settingName);
}



// Start all functions.
function startTwitchFontAdditions() {
    TwitchFontAdditions();
}

// === Settings ===
const applicationInterval = 1000; // The amount of time you wait inbetween each attempt of adding the styles. Recommended to be at least 100.

const useTwitchFontAdditions = 'enabled';

// font-family should reflect the name of the font. Example: "Arial"
// src should contain the URL to the font. Example: url("https://fonts.example.com/font.woff")
const addCss = `@font-face {
    font-family: "";
    src: url("");
    }`;
// === /Settings ===

startTwitchFontAdditions();
