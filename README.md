# 💕 Vishal & Deeksha - Our Love Story Website

A beautiful, interactive digital diary and couple website celebrating your journey to forever!

## 🌟 Features

### 1. **Home Section**
- Romantic hero section with animated hearts
- Live countdown timer to your wedding day
- Beautiful gradient backgrounds and floating elements

### 2. **Animated Gallery**
- 12 custom-generated animated couple illustrations
- Romantic, funny, and artistic scenes
- All your real photos beautifully displayed
- Click any image to view in full screen

### 3. **Our Love Timeline**
- Interactive timeline of your relationship milestones
- Add new special moments anytime
- Beautiful visual cards with dates and descriptions
- Pre-populated with key moments (customize these!)

### 4. **Digital Diary**
- Write personal diary entries
- Filter by author (Vishal or Deeksha)
- Mood indicators with emojis
- All entries saved locally
- Pre-filled with sample entries

### 5. **Message Wall**
- Leave sweet messages for each other
- Sticky note style design
- Messages appear like a bulletin board
- Perfect for daily love notes

### 6. **Memory Jar**
- Collect precious moments
- Beautiful jar visualization
- Click memories to read them
- Add new memories anytime

### 7. **Couple Quiz**
- Test how well you know each other
- Separate quizzes for each person
- Score tracking and fun messages
- Customize questions in the code

### 8. **Future Dreams**
- Plan your life together
- Sections for: Dream Home, Travel, Family, Life Goals
- All dreams saved automatically
- Edit and update anytime

## 🎨 Customization Guide

### Change Wedding Date
Edit `script.js` line 11:
```javascript
const weddingDate = new Date(2026, 5, 15).getTime(); // Change to your date
```

### Update Timeline Events
The timeline is stored in localStorage. To change default events, edit `script.js` around line 223:
```javascript
const defaultTimeline = [
    {
        date: '2024-01-15',
        title: 'Your Event',
        description: 'Your description'
    },
    // Add more events...
];
```

### Customize Quiz Questions
Edit `script.js` starting at line 548 to add your own questions:
```javascript
const quizQuestions = {
    vishal: [
        {
            question: "Your question?",
            options: ["Option 1", "Option 2", "Option 3", "Option 4"],
            correct: 0 // Index of correct answer (0-3)
        }
    ]
};
```

### Change Color Scheme
Edit `styles.css` at the top (CSS Variables):
```css
:root {
    --primary-color: #ff6b9d;
    --secondary-color: #c44569;
    --accent-color: #ffa07a;
    /* Change these to your preferred colors */
}
```

### Add Your Names
The names "Vishal" and "Deeksha" appear in:
- `index.html` - Title and hero section
- `styles.css` - No changes needed
- `script.js` - Quiz questions and default data

## 📱 Features

### Interactive Elements
- ✅ Smooth scrolling navigation
- ✅ Floating hearts animation
- ✅ Responsive design (works on mobile!)
- ✅ Modal popups for adding content
- ✅ Local storage (all data saved in browser)
- ✅ Beautiful hover effects
- ✅ Animated transitions

### Data Persistence
All your data is saved in your browser's localStorage:
- Diary entries
- Messages
- Memories
- Timeline events
- Future dreams

**Note:** Data is saved per browser. To share between devices, you'll need to export/import or use a backend (future enhancement).

## 🚀 How to Use

1. **Open the website**: Double-click `index.html` or open it in your browser
2. **Explore sections**: Use the navigation menu to jump to different sections
3. **Add content**: Click the "+" buttons to add diary entries, messages, memories, etc.
4. **Take the quiz**: Test how well you know each other!
5. **Plan your future**: Fill in your dreams together

## 💝 Special Features

### Animated Couple Photos
I've generated 12 unique animated illustrations showing:
- Starry night romance
- Music and laughter
- Beach sunset
- Cooking together
- Dancing in the rain
- Cosmic love
- Peaceful picnic
- Selfie fun
- Coffee date
- Adventure travel
- Reading together
- Festival celebration

### Real Photos
All 38 of your uploaded photos are beautifully displayed in the gallery with hover effects and full-screen viewing.

## 🎯 Future Enhancements (Optional)

Want to add more features? Here are some ideas:
- **Cloud sync**: Save data to a database for cross-device access
- **Photo upload**: Add ability to upload new photos directly
- **Video messages**: Record video messages for each other
- **Shared calendar**: Plan dates and events together
- **Music player**: Add your couple's playlist
- **Guest book**: Let wedding guests leave messages
- **Mobile app**: Convert to a mobile app with React Native

## 🛠️ Technical Details

- **HTML5**: Semantic markup, SEO optimized
- **CSS3**: Modern gradients, animations, flexbox, grid
- **Vanilla JavaScript**: No frameworks needed
- **Local Storage**: Browser-based data persistence
- **Responsive**: Works on all screen sizes
- **Fonts**: Google Fonts (Playfair Display, Poppins, Dancing Script)

## 📝 Tips

1. **Backup your data**: Regularly export your localStorage data
2. **Use the same browser**: To see all your saved content
3. **Customize together**: Make it truly yours by adding your own touches
4. **Update regularly**: Add new diary entries and memories often
5. **Share with family**: Send them the link before the wedding!

## ❤️ Made with Love

This website was created as a special gift for Vishal and Deeksha. Every feature was designed to help you celebrate your love story and build memories together.

Congratulations on your upcoming wedding! May your love story continue to grow more beautiful every day! 💕

---

**Created:** February 2026  
**For:** Vishal & Deeksha  
**Purpose:** Digital Diary & Love Story Website

## 🎉 Enjoy Your Special Website!

Remember: The best feature of this website is the love you'll fill it with. Make it your own, have fun, and create beautiful memories together! 💖
