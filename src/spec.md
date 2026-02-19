# YouTube Retro Tribute Web App

## Overview
A web application that recreates the nostalgic YouTube interface from 2005-2008 while automatically embedding the TubeUnblock website for full functionality.

## Visual Design
- **Header**: Red header bar with retro YouTube logo placement and non-functional search bar mockup
- **Layout**: Classic three-column layout with gray sidebar
- **Colors**: White background, red header (#CC181E), gray sidebar (#F0F0F0)
- **Typography**: Period-appropriate fonts matching early YouTube styling
- **Responsive**: Mobile-friendly while preserving nostalgic desktop aesthetic

## Core Features

### Header Section
- Retro YouTube logo positioned in classic location
- Non-functional search bar styled to match 2005-2008 design
- Navigation elements mimicking original layout

### Main Content Area
- Automatically loads https://tubeunblock.net in full iframe on app startup
- Iframe takes up all available space in the main content area beneath the header and beside the sidebar
- Seamless integration within the retro layout allowing users to browse and access content
- Maintains all TubeUnblock functionality within retro-styled frame
- Responsive iframe that adapts to different screen sizes
- Proper sandbox and allow attributes including `allowfullscreen` for full site functionality

### Sidebar
- Gray sidebar matching original design
- Static decorative elements consistent with period styling

### Footer
- "About this project" section explaining tribute nature
- Clear disclaimer stating no affiliation with YouTube or TubeUnblock
- Simple, unobtrusive design

## Technical Requirements
- Responsive design that works on desktop and mobile
- Automatic iframe loading of TubeUnblock on application startup with proper attributes
- CSS styling to recreate 2005-2008 YouTube aesthetic
- Iframe sizing to fill all available main content area while maintaining layout integrity
- Proper iframe sandbox and allow attributes for TubeUnblock functionality
- No backend data storage required
- Static frontend application
- English language content

## User Experience
- Users immediately see TubeUnblock content within retro frame upon app load
- Nostalgic visual experience while maintaining modern site functionality
- Clear understanding this is a tribute project through footer disclaimer
- Seamless interaction with embedded TubeUnblock without additional user action required
- Full site functionality including fullscreen capabilities
