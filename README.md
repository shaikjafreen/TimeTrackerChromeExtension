⏱️ Time Tracker Chrome Extension
Internship Task – API Integration

🏢 Company : CODTECH IT SOLUTIONS
👤 Name : Shaik Syed Jafreen
🆔 Intern ID : CT06DG2850
🌐 Domain : Full Stack Web Development
📆 Duration : 6 Weeks
👨‍🏫 Mentor : Neela Santhosh Kumar

🔥 Productivity Tracker Chrome Extension
This is a Chrome Extension that helps you track the time you spend on each website during your browsing sessions. It gives you a popup report showing your daily activity, helping you understand and improve your productivity.

📌 Features
⏳ Tracks active time spent on each website

📊 Displays daily productivity stats in a popup

🔒 All data is stored locally (no cloud sync)

🧠 Helps build mindful and efficient browsing habits

🛠️ Technologies Used
HTML – For popup interface

CSS – For styling

JavaScript – Logic for time tracking and reporting

Chrome Storage API – For storing time locally

Manifest V3 – Extension configuration

GitHub – Version control and source hosting

📂 Files Included
File / Folder	Purpose
manifest.json	Extension metadata and permissions
background.js	Tracks active tab usage in background
content.js	(Optional) Injected scripts for future use
popup.html	UI shown when the extension icon is clicked
popup.js	Displays time data in the popup
icons/	Icons in 16x, 48x, and 128x sizes

🚀 How to Install (For Testing)
Open Google Chrome

Go to: chrome://extensions

Enable Developer mode (top right corner)

Click Load unpacked

Select this folder:
TimeTrackerChromeExtension/TimeTrackerChromeExtension

The extension will appear in your toolbar

⚙️ How It Works
background.js continuously monitors the active tab

It records the hostname and time spent actively on each site

Time data is stored using Chrome’s storage.local API

When the extension icon is clicked, popup.js displays a detailed breakdown of time usage for the day

🌐 Use Cases
Daily browsing behavior tracking

Productivity improvement

Time management insights

Developer or research portfolio project

🚧 Future Improvements
 Export statistics to CSV or PDF

 Add weekly/monthly tracking summary

 Add blocking/limiting features for distracting sites

![Image](https://github.com/user-attachments/assets/292a5547-f06e-49c5-a590-be6e0ba92fd0)
