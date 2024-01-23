---
id: plot
title: Plot 
sidebar_position: 5
---

# Plot Tab

## Overview
The Plot Tab is integral for visualizing and analyzing seismic data through various plot types and customization options.

## Accessing Different Plots
- Upon clicking the Plots tab, a drop-down menu (Fig. 9) appears, offering various plot options like Project Setup, Synthetic Modeling, and Real-time Data.
- Selecting any plot option opens a visualization page as illustrated in Fig. 9.

## Navigating and Customizing the 3D Plot
- **Mouse Controls**: Right-click to rotate, left-click to pan, and scroll to zoom in/out on the 3D plot.
- **3D Plot Controls**: Click 'Open Control' to customize the display items on the 3D plot (Fig. 10).

## Understanding the Control/Data Tree
- **Wells**: Manage the display of different types of wells and their labels, including color and size customization (Fig. 11).
- **Perfs**: Options to display perfs for all wells or individually by stage. Real-time updates reflect both planned and true perfs depths (Fig. 12A).
- **Receivers**: Separated by Design, allowing selection of specific array combinations and adjustment of receiver sizes (Fig. 12B).

## Source Tensors
- **Overview**: Source Tensors represent seismic events with characteristics of fractures or faulting and quantify displacement (ISO/DC/CLVD).
- **Moment Tensor Inversion (MTI)**: Requires accurate event depth and velocity model for precision, typically calculated in post-processing.
- **Datasets**: Includes Dip-Slip, Strike-Slip, and Intermediate fracture characteristics (Fig. 13A). Allows selection per well and stage.
- **Customization**: Change the display of Source Tensors, including symbol shape, attribute color, and color maps (Fig. 13B).

## Filtering and Time-Lapse
- **Data Filtering**: Apply filters by Misfit and Confidence, adjusting the cut-offs as needed (Fig. 13C).
- **Time-Lapse Feature**: Play events based on their occurrence time. Choose between playing the entire dataset or per current stage.

## Well Logs
- **Visualization**: Display logs by selecting the corresponding well name/number and curve type.
- **Customization**: Adjust the size of the well log display in the 3D Plot through the drop-down menu.

## Events Section
- **Data Tree and Controls**: This section (Fig. 15) contains the controls for managing seismic event data.
- **Data Organization**: Events are organized by dataset (e.g., Real-Time, Master, Representative), well, and stage, allowing specific selection and display (Fig. 15A).
- **Display Options**: Customize event display styles, sizes, and colors based on attributes like Misfit, Magnitude, and Fracture Area (Fig. 15B, 16).

## Filtering Events
- **Attribute-Based Filtering**: Apply filters based on specific attributes to refine event display (Fig. 15C).
- **Time-Lapse Options**: Control time-lapse playback to focus on specific stages or the entire dataset.

## SRV Calculation
- **Microseismic Event Volume (MEV)**: Calculate MEV using selected datasets, wells, and stages (Fig. 16A).
- **Dataset Selection**: Choose the appropriate dataset for MEV calculation and specify wells and stages as needed.

## Frac Design in SRV Calculation
- **Frac Design Selection**: Choose to calculate MEV for all stages or specific frac designs.
- **Formation Selection**: Specify a particular formation or select 'All' for broader calculations (Fig. 17A).

## Microseismic Event Volume (MEV) Calculation
- **MEV Computation**: Summation of tetrahedra volumes formed by microseismic events, using Delaunay triangulation for a convex hull without overlap.
- **Outlier Removal**: Alpha-shape method excludes large tetrahedra to avoid overestimation (Fig. 17A).
- **Parameter Adjustment**: Set parameters like Alpha, Distance Neighbors, and Minimum Neighbors for accurate SRV/MEV calculation.

## Visualization and Additional Features
- **Fractures Display**: Shows client-provided fractures using parameters like MD, dip, and azimuth (Fig. 17B).
- **Formation Tops**: Horizontal planes representing formations are displayed in the Formation Tops tab (Fig. 18A), with options for Plane or Line plotting modes.

## Formation Tops and Horizons
- **Horizons Display**: Accessible under Formation Tops for projects where clients provide Horizons (Fig. 18B).
- **Customization Options**: Show/hide Horizons, choose color bars, and set color map values (Min Val and Max Val).
- **Histogram Feature**: View Horizon Attribute distribution with associated colors (Fig. 19).

## Volumes Section
- **Available Volumes**: Find 3D Volumes like Microseismic Imaging, Seismic, Synthetic Modeling, Velocity Model Volumes (Fig. 20A).
- **Display Controls**: Show/hide Volumes, select colormap, and adjust the display range in three dimensions for cross-sectional views (Fig. 20B).
- **Histogram for Volumes**: Similar to Horizons, display the Volume Attribute distribution (Fig. 19).

## Grid Customization
- **Grid Line Styling**: Show/hide and colorize Grid Lines. Adjust Grid Box size and Grid Size for different zoom levels (Fig. 21).

## Views Controls
- **Additional Views**: Customize the number of views (1, 2, or 4) by adjusting the No of Rows and Columns, affecting the Scene List and individual scene controls (Fig. 22A).
- **Snapshot and Annotation Factor**: Control the quality of saved screenshots and the style of annotations like well labels and compasses (Fig. 22A).

## Scene-Specific Controls
- **Camera Type**: Switch between Orthographic and Perspective modes for different viewing angles (Fig. 23).
- **Rotation Controls**: Enable or disable rotation for static or dynamic views. Adjust rotation speed for precision in view adjustment (Fig. 22B).
- **View Selection**: Quick access to top and side views, with options to change view directions.

## Snapshot Feature
- **Individual Scene Snapshot**: Capture screenshots for specific scenes with customizable aspect ratios. Snapshots download automatically to your computer.

## Save View Feature
- **Individual Scene Saving**: Save the current view of each scene separately using the Save View control.
- **Naming and Accessing Saved Views**: Name each saved view for future reference and access them through the Saved View controls.

## Tools and Settings
- **Exaggeration Tool**: Adjust Northing, Easting, and Depth exaggeration for enhanced visualization.
- **Measurement Tool**: Measure distances between two points in the 3D plot, with detailed information about the points and distances displayed in a table.

## Scene Color Customization
- **Background Color**: Change the 3D Plot's background color to suit preferences or for printer-friendly versions (Fig. 25A, D).

## Pumplogs and Histogram Display
- **Pumplogs Integration**: Show treatment curves and event histograms in the 3D Plot (Fig. 25A, E).
- **Interactive Tools**: Zoom, pan, and reset views within the pumplog display. Select specific areas for zoom-in with mouse control (Fig. 26A-C).






