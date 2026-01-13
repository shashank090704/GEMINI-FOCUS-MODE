# UI Reading Space Enhancer

A lightweight Chrome extension that improves the reading experience by maximizing usable screen space. The extension intelligently hides distracting UI elements (header and input/search areas) and automatically restores them on hover, allowing users to focus on content without permanently removing controls.

## Features

- **Smart UI Hiding**: Automatically hides header and input/search UI elements
- **Hover Restoration**: Brings back hidden elements when you need them
- **Maximized Reading Space**: Optimizes vertical screen real estate for content
- **Lightweight & Fast**: Minimal resource footprint
- **Non-Intrusive**: No permanent UI changes
- **Privacy-Focused**: Zero data collection

## Demo Video

> 🎥 **[Watch Live Demo](https://drive.google.com/file/d/1Wb61m0nsb53DQoPmB3gbWMMUzNTXCMEU/view)**
> 
> *Click the link above to see the extension in action*

<div align="center">
  <a href="https://drive.google.com/file/d/1Wb61m0nsb53DQoPmB3gbWMMUzNTXCMEU/view">
    <img src="https://img.shields.io/badge/▶️_Watch_Demo-4285F4?style=for-the-badge&logo=googledrive&logoColor=white" alt="Watch Demo">
  </a>
</div>

## How It Works

The extension operates through a simple but effective mechanism:

1. Injects minimal CSS and JavaScript into target pages
2. Dynamically identifies and hides selected UI components
3. Uses hover detection to restore UI elements when needed
4. Runs entirely locally in the browser for privacy and speed

## Installation

### Developer Mode Installation

1. Clone or download this repository
   ```bash
   git clone https://github.com/yourusername/ui-reading-space-enhancer.git
   ```

2. Open Chrome and navigate to `chrome://extensions`

3. Enable **Developer Mode** (toggle in top-right corner)

4. Click **Load unpacked**

5. Select the project folder

6. The extension is now active and ready to use!

## Use Case

This extension was built as a proof of concept to demonstrate how small, thoughtful UI changes can significantly improve readability in content-heavy interfaces. It's particularly useful for:

- Reading long articles or documentation
- Focused study sessions
- Distraction-free browsing
- Maximizing screen space on smaller displays

## Technical Details

- **Language**: JavaScript
- **Platform**: Chrome Extension (Manifest V3 compatible)
- **Dependencies**: None
- **Permissions**: Minimal (content script injection only)

## Disclaimer

This is an experimental prototype created for educational and demonstration purposes. It is not affiliated with any product or company and is built for testing and UI feedback.

## Author

**Shashank Agrawal**  
📧 agrawalshashank51@gmail.com  
🔗 [GitHub Profile](https://github.com/shashank090704)

⭐ If you find this project useful, please consider starring the repository!
