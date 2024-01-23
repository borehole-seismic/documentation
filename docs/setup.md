---
sidebar_position: 3
id: setup
title: Setup
---

# Setting Up the Picking Tool

Welcome to the initial setup guide for the Picking Tool. This step-by-step guide will help you configure the tool for first-time use.

## User Authentication
When you first open the Picking Tool, a "User Auth" dialog box will appear.

![User Authentication](/img/tool_authtoken.PNG)

### Steps for User Authentication:
1. **Accessing API/Auth Token**:
   - Log in to our **[portal](https://www.boreholeseismic.biz)** and navigate to `Account` – `Settings`.
   - Copy your unique API/Auth Token.

![User Authentication](/img/auth_api.png)

2. **Entering Authentication Details**:
   - Paste the copied API/Auth Token into the dialog box in the application.
   - Select your project name and enter project details.


## Configuring Input and Output Paths

After authentication, you'll need to set up the paths for your data folders.

         <!-- ![folder selection](/img/tool_selectfolders.png) -->
         ![folder selection](/img/tool_selectfolders.png)

### Input and Output Folder Setup:
1. **Input Folder**:
   - Copy the path of the `01_Triggered_Data` folder.
   - Paste it into the Input Folder text box in the application.

   Path Example: `Z:\01_ProcessingJobs\Continental\Birdshot\02_Real_time_EventData\01_Triggered_Data`

2. **Output Folder**:
   - Similarly, copy the path of the `02_TimePicked_Data` folder.
   - Paste it into the Output Folder text box.

   Path Example: `Z:\01_ProcessingJobs\Continental\Birdshot\02_Real_time_EventData\02_TimePicked_Data`


## Trace Filter Settings
After selecting your input and output folders, the Trace Filter Settings window will appear.

    ![Trace Filter Settings](/img/tool_tracefilters.PNG)

### Configuring Trace Filter Parameters
- **Bandpass Settings**: Generally, these settings are provided by the chief geophysicist. Adjust the bandpass settings as advised.
- **Polarization Filter**: Uncheck the Polarization Filter unless instructed otherwise.

### Project-Specific Settings
Each project may have unique settings:
- **Initial Settings**: You will receive these settings at the start of each project.
- **Accessing Settings**: Additional details can be found in the project’s Google Doc.


## Finalizing Setup
Once you've entered the required filters and paths, the application's main interface will open. You should see your name and project details displayed in the toolbar.

    ![Trace Filter Settings](/img/tool_toolbar.png)



## Ready to Analyze

With these steps completed, you are now ready to begin your seismic analysis using the Picking Tool.


