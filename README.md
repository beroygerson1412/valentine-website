# 💝 Valentine's Day Website

A cute and playful Valentine's Day website with an interactive "Will you be my Valentine?" question. The "No" button playfully runs away when you try to hover over it!

## 🚀 Live Demo
[Valentine Site](https://beroygerson1412.github.io/valentine-website/)

## ✨ Features

- **Playful "No" Button**: Tries to escape when you hover over it, moving to random positions on the screen
- **Sweet "Yes" Response**: Shows a beautiful full-screen overlay with a celebration message and falling heart confetti
- **Romantic Design**: Soft pink gradient background with floating heart animations
- **Smooth Animations**: Includes pulse effects, bounce animations, and smooth transitions
- **Fully Responsive**: Works great on desktop and mobile devices

## 🚀 Demo

Simply open `index.html` in your web browser to see the magic happen!

## 📁 File Structure

```
valentine-website/
├── index.html    # HTML structure
├── style.css     # All styling and animations
├── script.js     # Interactive functionality
└── README.md     # Project documentation
```

## 🛠️ Technologies Used

- **HTML5**: Semantic structure
- **CSS3**: Gradients, animations, and responsive design
- **Vanilla JavaScript**: No frameworks, just pure JS for interactivity

## 💻 How It Works

1. **Initial State**: Two buttons ("Yes" and "No") are displayed side by side
2. **Hovering over "No"**: The button instantly moves to a random position within the viewport
3. **Clicking "Yes"**: A full-screen modal appears with:
   - A cute animated GIF
   - A sweet thank-you message
   - Falling heart emoji confetti effect

## 🎨 Customization

Feel free to customize the website:

- **Colors**: Edit CSS variables in `style.css` (`:root` section)
- **Messages**: Change text in `index.html`
- **Animation Speed**: Adjust animation durations in `style.css`
- **Celebration Image**: Replace the GIF URL in `index.html` with your own

## 📝 Code Highlights

### No Button Movement Logic

```javascript
// Moves button to random position within viewport bounds
function moveNoButton() {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const maxX = viewportWidth - btnWidth - 20;
  const maxY = viewportHeight - btnHeight - 20;

  const randomX = Math.max(20, Math.floor(Math.random() * maxX));
  const randomY = Math.max(20, Math.floor(Math.random() * maxY));

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}
```

## 🌟 Live Usage

Perfect for:

- Valentine's Day proposals
- Cute relationship milestones
- Fun way to ask someone out
- Learning web development basics

## 📱 Browser Compatibility

PS: The website might not show its desired function on mobile browsers cause it's designed to work on mouse cursors.

Works on all modern browsers:

- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge

## 📄 License

Feel free to use this code for your own romantic gestures! 💕

## 🤝 Contributing

Found a bug or have a suggestion? Feel free to open an issue or submit a pull request!

## 💖 Made with Love

Created with pure HTML, CSS, and JavaScript. No dependencies, no build tools, just love! ❤️

---

**Happy Valentine's Day! 🌹**

