

📘 Teachers' Day Message Card – README
🎉 Overview

This project is an interactive Teachers' Day greeting card built using HTML, TailwindCSS, JavaScript, and Element SDK.
It features:

A beautiful animated greeting card

A flip animation (front ↔ back)

Customizable colors, text, fonts, and sizes

Decorative animated elements

Dynamic configuration through the Element SDK

This project can be used as:

A digital greeting card

A customizable template for teachers' day

A base for card-generator applications

📁 Project Structure
/project
  ├── index.html        # Main interactive card UI
  ├── /_sdk             # Element SDK scripts (from your platform)
  ├── /assets (optional)
  └── README.md

✨ Features
✔ Front Side of Card

Heartbeat animation

Name, title, and a personalized message

Custom colors (background, card, text, accent, buttons)

Floating decorative SVG icons (stars, apples, books)

✔ Back Side of Card

Additional message

Decorative emoji line

Close button to flip back

✔ Animations

Float animation

Fade-in

Sparkle animation

Heartbeat animation

✔ Customizable Through Element SDK

The SDK manages:

Colors

Font and font size

Editable text (teacher name, title, main message, etc.)

⚙️ How It Works
🔄 Card Flip

Two buttons toggle class .flipped on the container:

flipBtn.addEventListener('click', () => {
  cardContainer.classList.add('flipped');
});
flipBackBtn.addEventListener('click', () => {
  cardContainer.classList.remove('flipped');
});


CSS rotates the card using:

.card-container.flipped .card-inner {
  transform: rotateY(180deg);
}

🎨 Dynamic Configuration

applyConfig() updates:

Colors

Fonts

Font sizes

Text content
Based on defaultConfig or values from Element SDK.

🧩 Element SDK

This script lets the host platform update:

Colors (background, card, text, accent)

Button colors

Text values

Fonts

🛠 Customization
Edit Text

In defaultConfig:

card_title: 'Happy Teachers\' Day!',
teacher_name: 'Dear Teacher',
main_message: 'Thank you for your endless patience...',
closing_message: 'With gratitude and respect,',
student_name: 'Your Student'

Change Colors
background_color: '#fef3c7',
card_color: '#ffffff',
text_color: '#1f2937',
accent_color: '#f59e0b',
button_color: '#ef4444',

Change Font
font_family: 'Georgia',
font_size: 16,

📦 Requirements

No build tools required.
Just open index.html in a browser.

link: https://mendizabal4.github.io/Teacher-sdaycardmessage.io/
