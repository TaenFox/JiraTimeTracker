# JiraTimeTracker
This is an extension for Google Chrome that is purposed for looking at tasks and logging time into it. Created with Chat GPT

# How to install
1. Download and unpack this repo to your Windows device
2. Create file `config.js` that contains this code:
```
var jiraUrl = 'https://your-jira-instance.com';
```
3. Load extension to the Chrome:
- Open Google Chrome and move to chrome://extensions
- Turn on developer mode - toggle in up right angle of page
- Push “Load unpacked” button and choose the folder contains that repository

Than extension will appear in the list of extensions and you can click it for using

# How to use
While you click the icon of extension appears pop-up contains a list of your tasks. There are:
- Key
- Name (Summary)
- Original estimate
- Time that has been spending
- Buttons for add spent time: 15min, 30min, 1h, 2h
