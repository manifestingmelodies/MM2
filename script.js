// Chat message data
const chatMessages = [
  { user: "Rick P.", content: "Just shared my Million-Dollar Idea melody with Sarah - check your DMs!", time: "Just now", avatar: "#4F46E5", likes: 3 },
  { user: "Maria J.", content: "Thank you Rick! That melody helped me manifest $1,000 last night!", time: "1m ago", avatar: "#EC4899" },
  { user: "Jason T.", content: "Day 9 on the Blood Pressure Control Melody - already down 15 points!", time: "2m ago", avatar: "#10B981" },
  { user: "Debbie K.", content: "Is anyone else having amazing dreams since using the Deep Sleep Melody?", time: "3m ago", avatar: "#3B82F6" },
  { user: "Thomas W.", content: "Lost another 3 pounds this week! That's 17 total since starting!", time: "4m ago", avatar: "#F59E0B" },
  { user: "Jen L.", content: "@Maria - Amazing! Was that from the Unexpected Money Magnetizer?", time: "5m ago", avatar: "#8B5CF6" },
  { user: "Maria J.", content: "Yes @Jen! Played it twice yesterday and found an old rebate check today!", time: "6m ago", avatar: "#EC4899" },
  { user: "Rachel M.", content: "Day 17 and my business idea is taking shape! Never thought this clearly before.", time: "8m ago", avatar: "#06B6D4" },
  { user: "Kevin L.", content: "Anyone tried combining the Alpha and Theta melodies on the same day?", time: "9m ago", avatar: "#EF4444" },
  { user: "Sandra T.", content: "@Kevin - Yes! Alpha in morning, Theta at night. Amazing results!", time: "11m ago", avatar: "#10B981" },
  { user: "Mark S.", content: "Finally sleeping through the night after 20 years of insomnia!", time: "12m ago", avatar: "#9333EA" },
  { user: "Lisa W.", content: "New member here! Just got my melodies today. So excited to start!", time: "14m ago", avatar: "#14B8A6" },
  { user: "David R.", content: "Welcome @Lisa! Start with the 60-Second Melody first, that's my advice.", time: "15m ago", avatar: "#F97316" },
  { user: "Robert J.", content: "Pension error found! $4,300 coming back to me. This actually works!", time: "17m ago", avatar: "#8B5CF6" },
  { user: "Michelle B.", content: "My doctor was shocked at my last checkup. BP completely normalized!", time: "19m ago", avatar: "#06B6D4" }
];

// More messages that can be randomly added
const additionalMessages = [
  { user: "Greg L.", content: "Day 21 complete! The clarity I have now is honestly life-changing.", avatar: "#10B981" },
  { user: "Tom K.", content: "Anyone notice improved relationship with spouse? We're connecting again.", avatar: "#3B82F6" },
  { user: "Angela T.", content: "@Tom - Yes! It's like we're dating again after 15 years of marriage!", avatar: "#EC4899" },
  { user: "Olivia M.", content: "Just logged week 3 results. Found two new clients worth $2,800 monthly!", avatar: "#4F46E5" },
  { user: "Paul M.", content: "Make sure to play the melodies with headphones for best results.", avatar: "#F59E0B" },
  { user: "Sarah K.", content: "Just referred my sister. These melodies are too good not to share!", avatar: "#9333EA" },
  { user: "Ryan D.", content: "Morning everyone! Day 5 and already feeling the difference!", avatar: "#14B8A6" },
  { user: "William T.", content: "Blood sugar down 42 points since starting. Doctor is amazed!", avatar: "#F97316" },
  { user: "Laura M.", content: "I've tried everything for sleep. This is the ONLY thing that's worked!", avatar: "#8B5CF6" },
  { user: "Michael C.", content: "Business idea at 4:37am exactly like the testimonial said. Weird!", avatar: "#06B6D4" }
];

// Message modifications to make them look different each time
const messageModifiers = [
  "Amazing!",
  "Just happened!",
  "Can't believe it!",
  "So grateful!",
  "This is incredible!",
  "Just logged it!",
  "Still in shock!",
  "Thank you everyone!",
  "Day 5 and seeing results!",
  "Exactly as promised!"
];

// Function to create a chat message element
function createChatMessage(message) {
  const chatMessage = document.createElement('div');
  chatMessage.className = 'chat-message';
  
  // Create avatar
  const avatar = document.createElement('div');
  avatar.className = 'chat-avatar';
  avatar.style.backgroundColor = message.avatar;
  avatar.textContent = message.user.charAt(0);
  
  // Create message bubble
  const bubble = document.createElement('div');
  bubble.className = 'chat-bubble';
  
  // Create header
  const header = document.createElement('div');
  header.className = 'chat-header-info';
  
  const username = document.createElement('span');
  username.className = 'chat-username';
  username.textContent = message.user;
  
  const time = document.createElement('span');
  time.className = 'chat-time';
  time.textContent = message.time;
  
  header.appendChild(username);
  header.appendChild(time);
  
  // Create content
  const content = document.createElement('div');
  content.className = 'chat-content';
  content.textContent = message.content;
  
  // Add to bubble
  bubble.appendChild(header);
  bubble.appendChild(content);
  
  // Add likes if it's a new message
  if (message.time === 'Just now' || message.likes) {
    const likes = document.createElement('div');
    likes.className = 'chat-likes';
    
    const likesIcon = document.createElement('span');
    likesIcon.className = 'chat-likes-icon';
    likesIcon.textContent = '❤️';
    
    likes.appendChild(likesIcon);
    likes.appendChild(document.createTextNode(` ${message.likes || Math.floor(Math.random() * 4) + 1} likes`));
    
    bubble.appendChild(likes);
  }
  
  // Combine
  chatMessage.appendChild(avatar);
  chatMessage.appendChild(bubble);
  
  return chatMessage;
}

// Function to initialize the chat
function initializeChat() {
  const chatContainer = document.getElementById('chat-container');
  if (!chatContainer) return;
  
  // Add initial messages
  chatMessages.forEach(message => {
    chatContainer.appendChild(createChatMessage(message));
  });
  
  // Scroll to bottom
  chatContainer.scrollTop = chatContainer.scrollHeight;
  
  // Set up interval to add new messages
  setInterval(() => {
    addNewMessage();
  }, Math.random() * 5000 + 3000); // Every 3-8 seconds
}

// Function to add a new message
function addNewMessage() {
  const chatContainer = document.getElementById('chat-container');
  if (!chatContainer) return;
  
  // Either select from existing messages or additional ones
  let baseMessage;
  if (Math.random() > 0.5) {
    const randomIndex = Math.floor(Math.random() * chatMessages.length);
    baseMessage = { ...chatMessages[randomIndex] };
  } else {
    const randomIndex = Math.floor(Math.random() * additionalMessages.length);
    baseMessage = { ...additionalMessages[randomIndex] };
  }
  
  // Modify the message slightly
  const newMessage = { ...baseMessage };
  newMessage.time = 'Just now';
  
  // Occasionally add a modifier
  if (Math.random() > 0.7) {
    const modifierIndex = Math.floor(Math.random() * messageModifiers.length);
    newMessage.content = `${newMessage.content} ${messageModifiers[modifierIndex]}`;
  }
  
  // Add to container
  const messageElement = createChatMessage(newMessage);
  chatContainer.insertBefore(messageElement, chatContainer.firstChild);
  
  // Remove oldest message if there are too many
  if (chatContainer.children.length > 15) {
    chatContainer.removeChild(chatContainer.lastChild);
  }
  
  // Update timestamps on all messages
  Array.from(chatContainer.querySelectorAll('.chat-time')).forEach((timeElement, index) => {
    if (index === 0) {
      timeElement.textContent = 'Just now';
    } else {
      const prevText = timeElement.textContent;
      if (prevText === 'Just now') {
        timeElement.textContent = '1m ago';
      } else {
        const matches = prevText.match(/(\d+)m/);
        if (matches && matches[1]) {
          const newTime = parseInt(matches[1]) + 1;
          timeElement.textContent = `${newTime}m ago`;
        }
      }
    }
  });
}

// Function to update listener counts
function updateListenerCounts() {
  const listenerElements = document.querySelectorAll('.listeners-count');
  
  listenerElements.forEach(element => {
    const currentCount = parseInt(element.textContent);
    if (!isNaN(currentCount)) {
      // Random change between -2 and +2
      const change = Math.floor(Math.random() * 5) - 2;
      const newCount = Math.max(50, currentCount + change);
      element.textContent = newCount;
    }
  });
  
  // Also update the main listener count
  const activeListeners = document.getElementById('active-listeners');
  if (activeListeners) {
    const currentCount = parseInt(activeListeners.textContent);
    if (!isNaN(currentCount)) {
      const change = Math.floor(Math.random() * 7) - 3;
      const newCount = Math.max(1200, currentCount + change);
      activeListeners.textContent = newCount;
    }
  }
}

// Function to update time display
function updateTimeDisplay() {
  // Get current time display
  const timeDisplay = document.querySelector('.time-display');
  if (timeDisplay) {
    const timeElements = timeDisplay.querySelectorAll('span');
    if (timeElements.length >= 2) {
      // Update the current time
      const currentTime = timeElements[0];
      let seconds = parseInt(currentTime.textContent.split(':')[1]) || 0;
      seconds = (seconds + 1) % 60;
      let minutes = parseInt(currentTime.textContent.split(':')[0]) || 0;
      
      if (seconds === 0) {
        minutes = (minutes + 1) % 1; // Loop back to 0 when reaching 1 minute
      }
      
      currentTime.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
  }
}

// Function to handle melody item clicks
function handleMelodyClick() {
  const melodyItems = document.querySelectorAll('.melody-item');
  
  melodyItems.forEach(item => {
    item.addEventListener('click', function() {
      // Remove active class from all items
      melodyItems.forEach(melody => {
        melody.classList.remove('melody-active');
        const numberElement = melody.querySelector('.melody-number');
        if (numberElement) {
          numberElement.style.background = '';
        }
      });
      
      // Add active class to clicked item
      this.classList.add('melody-active');
      
      // Get the melody info
      const index = this.getAttribute('data-index');
      const melodies = [
        { title: "60-Second Melody", brainwave: "Alpha", description: "Change from worry mode to seeing-money mode" },
        { title: "The 3AM Money Worry Eraser", brainwave: "Delta", description: "Stops middle-of-night money worries" },
        { title: "Unexpected Money Magnetizer", brainwave: "Delta", description: "Find forgotten money within 3 days" },
        { title: "Childhood Money Wound Healer", brainwave: "Theta", description: "Washes away old money blocks" },
        { title: "Financial Shame Liberator", brainwave: "Alpha", description: "Wipes away years of money shame" },
        { title: "Million-Dollar Idea Generator", brainwave: "Theta", description: "Wakes up the money idea part of your brain" },
        { title: "Blood Pressure Control Melody", brainwave: "Alpha", description: "Helps your body fix blood pressure naturally" },
        { title: "Deep Sleep Melody", brainwave: "Delta", description: "Experience real rest without waking at 3AM" }
      ];
      
      // Update the player
      const titleElement = document.getElementById('current-melody-title');
      const infoElement = document.getElementById('current-melody-info');
      const playButton = document.querySelector('.play-button');
      const progressFill = document.querySelector('.progress-fill');
      const playerArtwork = document.querySelector('.player-artwork');
      
      if (titleElement && infoElement && playButton && progressFill && playerArtwork) {
        const melody = melodies[index];
        
        titleElement.textContent = melody.title;
        infoElement.textContent = `${melody.brainwave} Brainwave • ${melody.description}`;
        infoElement.className = `text-${melody.brainwave.toLowerCase()}`;
        
        playButton.className = `play-button ${melody.brainwave.toLowerCase()} disabled`;
        progressFill.className = `progress-fill ${melody.brainwave.toLowerCase()}`;
        playerArtwork.className = `player-artwork ${melody.brainwave.toLowerCase()}`;
        
        // Reset the progress
        progressFill.style.animation = 'none';
        setTimeout(() => {
          progressFill.style.animation = 'progress-animation 60s linear infinite';
        }, 10);
      }
    });
  });
}

// Add meta viewport if not present
function addViewportMeta() {
  if (!document.querySelector('meta[name="viewport"]')) {
    const meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
    document.head.appendChild(meta);
  }
}

// Prevent double-tap zoom on mobile
function preventDoubleTapZoom() {
  let lastTouchEnd = 0;
  document.addEventListener('touchend', function(event) {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
      event.preventDefault();
    }
    lastTouchEnd = now;
  }, false);
}

// Initialize everything when the page loads
document.addEventListener('DOMContentLoaded', function() {
  // Add viewport meta tag if not present
  addViewportMeta();
  
  // Prevent double-tap zoom
  preventDoubleTapZoom();
  
  // Initialize components
  initializeChat();
  handleMelodyClick();
  
  // Start automated updates
  setInterval(updateListenerCounts, 3000);
  setInterval(updateTimeDisplay, 1000);
  
  // Progress bar animation
  const progressFill = document.querySelector('.progress-fill');
  if (progressFill) {
    progressFill.style.animation = 'progress-animation 60s linear infinite';
  }
  
  // Disable play button functionality since it should appear to be "always playing"
  const playButton = document.querySelector('.play-button');
  if (playButton) {
    playButton.classList.add('disabled');
  }
});