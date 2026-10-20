
const stories = [
  {
    title: "The Girl in the Library",
    author: "Mia Santos",
    genre: "Romance",
    synopsis: "Two students meet every afternoon in a quiet library and slowly become important to each other.",
    chapter: "Chapter 1: The Empty Seat",
    text: [
      "Every afternoon, Lia visited the old library after class. She liked the silence, the smell of books, and the small table beside the window.",
      "One rainy afternoon, she discovered a boy sitting in her favorite seat. He looked up from his book and smiled. 'You can sit here if you want,' he said.",
      "Lia sat beside him, unaware that a simple conversation about books would become the beginning of a friendship neither of them expected."
    ]
  },
  {
    title: "Kingdom of Starlight",
    author: "Arielle Cruz",
    genre: "Fantasy",
    synopsis: "A young girl discovers a magical kingdom hidden beyond the stars.",
    chapter: "Chapter 1: The Falling Star",
    text: [
      "Mira had always collected fallen stars, keeping them inside a glass jar beside her bed. One night, a star landed in her garden and began whispering her name.",
      "Following its light, she discovered a doorway between two ancient trees. Beyond it stood a kingdom where the rivers shone silver and the moon never disappeared.",
      "A royal messenger bowed before her. The kingdom had waited a hundred years for someone who could hear the stars."
    ]
  },
  {
    title: "The Last Message",
    author: "Noah Reyes",
    genre: "Mystery",
    synopsis: "A mysterious message leads a student to secrets hidden inside an old school.",
    chapter: "Chapter 1: Unknown Sender",
    text: [
      "At exactly midnight, Daniel received a message from an unknown number. It contained only three words: 'Check room twelve.'",
      "The next morning, he searched the school records and discovered that room twelve had been closed for years. Nobody wanted to explain why.",
      "Behind its dusty door, Daniel found a notebook with his own name written on the first page."
    ]
  },
  {
    title: "Whispers After Midnight",
    author: "Ella Mendoza",
    genre: "Horror",
    synopsis: "A family moves into a quiet house where strange sounds begin every night.",
    chapter: "Chapter 1: The Upstairs Room",
    text: [
      "The house was beautiful during the day, but every night, someone seemed to walk across the empty upstairs hallway.",
      "Nina asked her parents about the sound. They blamed the old wooden floor, although none of them ever went upstairs after sunset.",
      "On the seventh night, a folded note appeared beneath Nina's bedroom door. It read, 'Thank you for listening.'"
    ]
  },
  {
    title: "Beyond the Mountains",
    author: "Luca Flores",
    genre: "Adventure",
    synopsis: "Three friends search for a legendary valley marked on an old map.",
    chapter: "Chapter 1: The Forgotten Map",
    text: [
      "While cleaning his grandfather's attic, Ben found a map showing a valley that did not appear on any modern map.",
      "He invited his friends Mara and Jules to join the expedition. They packed food, water, and everything they needed for a safe journey.",
      "At sunrise, they reached the mountain trail. At its entrance, a wooden sign carried the same symbol printed on the map."
    ]
  },
  {
    title: "Letters to Yesterday",
    author: "Sofia Lim",
    genre: "Drama",
    synopsis: "A young woman finds old letters that reveal a forgotten family story.",
    chapter: "Chapter 1: The Wooden Box",
    text: [
      "After her grandmother moved to a smaller house, Ana helped sort through the belongings left in the attic.",
      "Inside a wooden box were dozens of letters tied with a blue ribbon. Each letter described a dream that her grandmother had once given up.",
      "Ana decided to read them all, hoping to understand the quiet woman who had raised her."
    ]
  },
  {
    title: "Oops, My Neighbor!",
    author: "Kai Rivera",
    genre: "Comedy",
    synopsis: "A series of embarrassing misunderstandings turns two neighbors into friends.",
    chapter: "Chapter 1: The Wrong Door",
    text: [
      "Paolo was certain he lived in apartment 305. Unfortunately, the door he confidently opened belonged to his new neighbor.",
      "He apologized while holding a bowl of noodles and wearing two different slippers. His neighbor laughed so hard that she forgot to be annoyed.",
      "By the end of the evening, they had exchanged names, food, and a promise to double-check apartment numbers."
    ]
  },
  {
    title: "Signal from Tomorrow",
    author: "Ethan Garcia",
    genre: "Science Fiction",
    synopsis: "A student receives a strange transmission that appears to come from the future.",
    chapter: "Chapter 1: The Impossible Signal",
    text: [
      "During a school science project, Alex discovered a signal repeating through an abandoned radio frequency.",
      "The voice sounded exactly like his own, except it claimed to be calling from twenty years in the future.",
      "Before the transmission ended, the voice warned him about a scientific experiment that had not yet been invented."
    ]
  },
  {
    title: "Shadow Protocol",
    author: "Jace Navarro",
    genre: "Action",
    synopsis: "A young technology student uncovers a secret that could change the city.",
    chapter: "Chapter 1: Unauthorized Access",
    text: [
      "Mika was testing a program for a school competition when an unfamiliar file appeared on the screen.",
      "Instead of deleting it, she reported the discovery to her teacher and learned that the file might be connected to a major security breach.",
      "With permission from the proper authorities, Mika began helping the investigation by documenting what she had found."
    ]
  },
  {
    title: "Coffee and Rain",
    author: "Bea Villanueva",
    genre: "Slice of Life",
    synopsis: "A cafe worker discovers that little conversations can change an ordinary day.",
    chapter: "Chapter 1: A Warm Cup",
    text: [
      "Every rainy morning, a regular customer ordered the same coffee and sat beside the window.",
      "One day, Bea noticed that he was carrying a sketchbook filled with drawings of the cafe and the people inside it.",
      "Their conversation about art became a daily ritual, reminding Bea that ordinary moments could hold extraordinary meaning."
    ]
  },
  {
    title: "The Summer We Met",
    author: "Chloe Martin",
    genre: "Romance",
    synopsis: "Two strangers meet during a summer festival and discover a shared dream.",
    chapter: "Chapter 1: Festival Lights",
    text: [
      "The town festival was full of music, colorful lanterns, and the smell of freshly cooked food.",
      "Ella accidentally picked up the wrong camera, leading her to meet a photographer named Sam who was documenting the event.",
      "They spent the evening taking pictures together and promised to meet again before summer ended."
    ]
  },
  {
    title: "The Moonstone Crown",
    author: "Nico Dela Cruz",
    genre: "Fantasy",
    synopsis: "An apprentice discovers that an ancient crown responds only to her touch.",
    chapter: "Chapter 1: The Hidden Crown",
    text: [
      "In the royal museum, apprentice Talia was cleaning a display when the moonstone crown began to glow.",
      "The museum's oldest guardian revealed that the crown had been waiting for a keeper who valued wisdom above power.",
      "Talia accepted the challenge, knowing that learning its secrets would require patience and courage."
    ]
  },
  {
    title: "The Missing Painting",
    author: "Iris Tan",
    genre: "Mystery",
    synopsis: "An art student investigates the disappearance of a valuable painting.",
    chapter: "Chapter 1: An Empty Frame",
    text: [
      "The gallery opened its doors to hundreds of visitors, but one frame was strangely empty.",
      "Student volunteer Iris noticed that the security log contained a missing hour and that the display had been moved slightly.",
      "She recorded her observations and shared them with the curator, beginning a careful search for the missing artwork."
    ]
  },
  {
    title: "The House on Hollow Hill",
    author: "Dani Flores",
    genre: "Horror",
    synopsis: "A group of friends hears a strange melody coming from an abandoned house.",
    chapter: "Chapter 1: The Distant Song",
    text: [
      "From the edge of town, the old house looked empty, with vines covering its windows and a garden lost to weeds.",
      "Every evening, a gentle melody drifted from its direction, even though the electricity had been disconnected for years.",
      "The friends decided to ask the town historian about the house before investigating its unusual history."
    ]
  },
  {
    title: "Journey to the Blue Sea",
    author: "Mika Torres",
    genre: "Adventure",
    synopsis: "A young sailor searches for an island known only through family stories.",
    chapter: "Chapter 1: The Compass",
    text: [
      "Lena inherited a brass compass from her grandfather, along with stories of an island surrounded by blue coral.",
      "She studied navigation, consulted experienced sailors, and planned a responsible voyage with a trusted crew.",
      "When the compass pointed toward an unfamiliar route, Lena realized that the journey would test everything she had learned."
    ]
  },
  {
    title: "A Thousand Goodbyes",
    author: "Faith Ramos",
    genre: "Drama",
    synopsis: "A graduating student learns to accept change while preparing for a new chapter in life.",
    chapter: "Chapter 1: The Last Bell",
    text: [
      "The last bell of the school year sounded exactly like every other bell, but today it felt different to Mara.",
      "Her friends talked about their future plans while she wondered how she would manage a life that no longer followed the same routine.",
      "Before leaving, they wrote messages on a shared notebook and promised to support each other wherever they went."
    ]
  },
  {
    title: "My Cat Is the Boss",
    author: "Pia Santos",
    genre: "Comedy",
    synopsis: "A college student tries to manage life while living with an unusually demanding cat.",
    chapter: "Chapter 1: The Alarm Clock",
    text: [
      "Pia's alarm was set for six, but her cat decided that five in the morning was a much better time to wake up.",
      "Breakfast was served late, the clean laundry became a bed, and every online class had an unexpected furry guest.",
      "Pia finally accepted that she was not the owner of the apartment. She was simply the employee of a very small boss."
    ]
  },
  {
    title: "Planet of Glass",
    author: "Adrian Yu",
    genre: "Science Fiction",
    synopsis: "An explorer lands on a crystal planet where memories appear in the landscape.",
    chapter: "Chapter 1: A Shining World",
    text: [
      "Captain Ren stepped onto the surface of a planet that glittered like a thousand mirrors.",
      "Every crystal reflected a memory, from forgotten childhood moments to events that had not happened yet.",
      "When Ren saw a familiar face in a distant crystal, the mission became more personal than anyone on the ship had expected."
    ]
  },
  {
    title: "Code Red: Zero Day",
    author: "Marco Reyes",
    genre: "Action",
    synopsis: "A cybersecurity intern helps a response team investigate a citywide computer outage.",
    chapter: "Chapter 1: System Offline",
    text: [
      "At the start of his internship, Theo watched several public information screens go blank at once.",
      "He immediately notified his supervisor and followed the team's incident response procedures rather than attempting unauthorized access.",
      "As the team investigated the outage, Theo organized the logs and noticed a pattern that helped narrow down the problem."
    ]
  },
  {
    title: "Sunday at Lola's",
    author: "Anne Castillo",
    genre: "Slice of Life",
    synopsis: "A family gathering reminds a busy student what home truly means.",
    chapter: "Chapter 1: The Familiar Kitchen",
    text: [
      "Every Sunday, the kitchen filled with the smell of warm rice, fried fish, and Lola's favorite soup.",
      "Carlo usually arrived with unfinished schoolwork, but this Sunday he left his notebook in his bag and joined the conversation.",
      "By lunchtime, he realized that home was not only a place. It was also the people who made room for him at the table."
    ]
  },
  {
    title: "Under the Same Umbrella",
    author: "Rhea Valdez",
    genre: "Romance",
    synopsis: "A forgotten umbrella brings two classmates closer together.",
    chapter: "Chapter 1: Unexpected Rain",
    text: [
      "The rain started just as class ended, and Yna realized she had left her umbrella at home.",
      "Her classmate offered to share his, even though it meant taking the longer route to the bus stop.",
      "They talked about music, school, and their plans until the rain stopped and neither wanted the walk to end."
    ]
  },
  {
    title: "The Forest Guardian",
    author: "Luna Mercado",
    genre: "Fantasy",
    synopsis: "A young healer discovers an ancient responsibility in an enchanted forest.",
    chapter: "Chapter 1: The Glowing Leaves",
    text: [
      "While gathering herbs, Elara noticed that the leaves of an ancient tree glowed whenever she approached.",
      "A tiny forest spirit explained that the woodland was losing its magic and needed someone willing to listen to its creatures.",
      "Elara began learning the old songs of the forest, determined to help restore the balance between nature and magic."
    ]
  },
  {
    title: "The Clockmaker's Secret",
    author: "Victor Lim",
    genre: "Mystery",
    synopsis: "A broken clock leads a curious apprentice to a decades-old secret.",
    chapter: "Chapter 1: Thirteen Chimes",
    text: [
      "The clock in the workshop had been broken for as long as anyone could remember.",
      "One afternoon, it chimed thirteen times and opened a hidden compartment containing a letter addressed to the clockmaker's apprentice.",
      "The letter described a forgotten invention and named a location somewhere beneath the town square."
    ]
  },
  {
    title: "Footsteps in the Fog",
    author: "Mara Villanueva",
    genre: "Horror",
    synopsis: "A traveler gets lost in a foggy village with a strange local tradition.",
    chapter: "Chapter 1: The Silent Village",
    text: [
      "The fog rolled over the road until even the nearest streetlight became a pale blur.",
      "When Jules reached the village, every window was closed and a sign requested that visitors remain indoors after dark.",
      "From the village bell tower came a single chime, followed by footsteps that seemed to stop whenever Jules stopped walking."
    ]
  },
  {
    title: "The Golden Compass",
    author: "Eli Navarro",
    genre: "Adventure",
    synopsis: "Siblings follow an old compass to uncover the history of their hometown.",
    chapter: "Chapter 1: North Is Missing",
    text: [
      "Nico and Aya found a compass among their grandfather's belongings, but its needle pointed in a direction that was not north.",
      "They compared its markings with old town maps and discovered a trail leading toward an abandoned railway station.",
      "Their search uncovered forgotten photographs that revealed how their hometown had changed over the years."
    ]
  },
  {
    title: "Pieces of Us",
    author: "Grace Mendoza",
    genre: "Drama",
    synopsis: "Two childhood friends reconnect and learn to understand the years they spent apart.",
    chapter: "Chapter 1: The Reunion",
    text: [
      "After five years away, Dani returned to the neighborhood where she had grown up.",
      "At the corner store, she met her childhood friend who still remembered the promise they made before she left.",
      "They began talking honestly about the misunderstandings between them, discovering that friendship could grow stronger through change."
    ]
  },
  {
    title: "The Professor's Parrot",
    author: "Sam Rivera",
    genre: "Comedy",
    synopsis: "A talking parrot turns a serious university lecture into a memorable event.",
    chapter: "Chapter 1: Class Is in Session",
    text: [
      "Professor Santos prepared his most serious lecture of the semester, complete with charts and detailed notes.",
      "Unfortunately, his parrot had learned several phrases from the professor's practice sessions and decided to repeat them during class.",
      "The students tried to stay quiet, but even the professor eventually laughed and turned the interruption into a lesson about public speaking."
    ]
  },
  {
    title: "The Memory Machine",
    author: "Zane Garcia",
    genre: "Science Fiction",
    synopsis: "A young inventor builds a device that lets people revisit important memories.",
    chapter: "Chapter 1: The First Test",
    text: [
      "Nico's invention was designed to turn recorded memories into interactive simulations.",
      "For the first test, he selected a harmless memory of his first day at school and watched the classroom appear around him.",
      "The machine worked, but Nico soon realized that remembering an event and experiencing it again were two very different things."
    ]
  },
  {
    title: "City of Sparks",
    author: "Jules Dela Cruz",
    genre: "Action",
    synopsis: "A young engineer races to restore power during a mysterious citywide blackout.",
    chapter: "Chapter 1: Lights Out",
    text: [
      "The city went dark during the evening rush, leaving trains stopped and traffic signals silent.",
      "Engineer-in-training Mara contacted the emergency response center and helped relay information about the affected areas.",
      "When a backup generator failed, she worked with experienced technicians to trace the fault and restore essential services."
    ]
  },
  {
    title: "Little Things, Big Days",
    author: "Nina Flores",
    genre: "Slice of Life",
    synopsis: "A student keeps a journal of small moments that gradually change her outlook.",
    chapter: "Chapter 1: One Small Thing",
    text: [
      "Nina began her journal after a difficult week, promising to write down one good thing every day.",
      "At first, she recorded simple moments: a classmate sharing notes, a delicious lunch, and the cool breeze after school.",
      "After a month, she reread the pages and discovered that her life contained more kindness and possibility than she had noticed."
    ]
  },
  {
    title: "The Last Enchanted Song",
    author: "Amara Cruz",
    genre: "Fantasy",
    synopsis: "A musician discovers a forgotten melody capable of restoring a magical world.",
    chapter: "Chapter 1: The Hidden Melody",
    text: [
      "Lira found an old music box in her family's attic, playing a melody that nobody in the house recognized.",
      "When she repeated the tune on her violin, flowers opened in the garden and tiny lights appeared among the trees.",
      "An elderly musician told her that the melody belonged to an ancient tradition and that its final verse had been lost."
    ]
  }
];

const container = document.getElementById("storyContainer");
const searchInput = document.getElementById("searchInput");
const genreFilter = document.getElementById("genreFilter");
const countLabel = document.getElementById("bookCount");
const emptyMessage = document.getElementById("emptyMessage");

// Escape text before inserting story data into HTML.
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function coverPath(index) {
  return `images/cover${index + 1}.jpg`;
}

function renderStories() {
  if (!container) return;

  const search = searchInput.value.trim().toLowerCase();
  const genre = genreFilter.value;

  const filtered = stories
    .map((story, index) => ({ ...story, id: index + 1 }))
    .filter(story => {
      const matchesSearch =
        story.title.toLowerCase().includes(search) ||
        story.author.toLowerCase().includes(search) ||
        story.genre.toLowerCase().includes(search);

      const matchesGenre =
        genre === "All" || story.genre === genre;

      return matchesSearch && matchesGenre;
    });

  countLabel.textContent = `${filtered.length} Stories`;
  emptyMessage.hidden = filtered.length !== 0;

  container.innerHTML = filtered.map(story => `
    <article class="story-card">
      <img
        class="cover"
        src="${coverPath(story.id - 1)}"
        alt="Cover of ${escapeHTML(story.title)}"
        loading="lazy"
        onerror="this.onerror=null;this.src='${coverPath(0)}'">

      <div class="card-content">
        <span class="genre-tag">${escapeHTML(story.genre)}</span>
        <h3>${escapeHTML(story.title)}</h3>
        <p class="author">By ${escapeHTML(story.author)}</p>

        <p class="synopsis" id="synopsis-${story.id}" hidden>
          ${escapeHTML(story.synopsis)}
        </p>

        <div class="card-actions">
          <a class="read-btn" href="story.html?id=${story.id}">
            Read Story →
          </a>

          <button
            class="toggle-btn"
            data-synopsis="${story.id}"
            aria-expanded="false">
            Synopsis
          </button>

          <button
            class="like-btn"
            data-like="${story.id}"
            aria-pressed="false">
            ♡ Like
          </button>
        </div>
      </div>
    </article>
  `).join("");
}

if (searchInput) searchInput.addEventListener("input", renderStories);
if (genreFilter) genreFilter.addEventListener("change", renderStories);

if (container) {
  container.addEventListener("click", event => {
    const synopsisButton = event.target.closest("[data-synopsis]");
    const likeButton = event.target.closest("[data-like]");

    if (synopsisButton) {
      const id = synopsisButton.dataset.synopsis;
      const synopsis = document.getElementById(`synopsis-${id}`);
      const opening = synopsis.hidden;

      synopsis.hidden = !opening;
      synopsisButton.textContent = opening ? "Hide Synopsis" : "Synopsis";
      synopsisButton.setAttribute("aria-expanded", String(opening));
    }

    if (likeButton) {
      const id = likeButton.dataset.like;
      const isLiked = likeButton.getAttribute("aria-pressed") === "true";
      const nextLiked = !isLiked;

      likeButton.setAttribute("aria-pressed", String(nextLiked));
      likeButton.textContent = nextLiked ? "♥ Liked" : "♡ Like";
      likeButton.style.color = nextLiked ? "var(--accent)" : "";
    }
  });
}

// Reader page: story.html?id=1 through story.html?id=30
function renderReader() {
  const reader = document.getElementById("reader");
  if (!reader) return;

  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id"));

  if (!Number.isInteger(id) || id < 1 || id > stories.length) {
    reader.innerHTML = `
      <h1>Story Not Found</h1>
      <p>Please choose a story from our library.</p>
      <a class="primary-btn" href="index.html#stories">Browse Stories</a>
    `;
    document.title = "Story Not Found | BINI Stories";
    return;
  }

  const story = stories[id - 1];

  document.title = `${story.title} | BINI Stories`;

  reader.innerHTML = `
    <img
      class="reader-cover"
      src="${coverPath(id - 1)}"
      alt="Cover of ${escapeHTML(story.title)}"
      onerror="this.onerror=null;this.src='${coverPath(0)}'">

    <span class="genre-tag">${escapeHTML(story.genre)}</span>
    <h1>${escapeHTML(story.title)}</h1>

    <p class="reader-meta">
      Written by ${escapeHTML(story.author)}
    </p>

    <h2>Synopsis</h2>
    <p>${escapeHTML(story.synopsis)}</p>

    <div class="reader-actions">
      <button id="readerLike" class="like-btn" aria-pressed="false">
        ♡ Like this story
      </button>
      <button id="readerSynopsis" class="toggle-btn">
        Hide Synopsis
      </button>
    </div>

    <div id="readerSynopsisText">
      <p class="muted">Enjoy this original short story.</p>
    </div>

    <section class="story-text">
      <h2>${escapeHTML(story.chapter)}</h2>
      ${story.text.map(paragraph =>
        `<p>${escapeHTML(paragraph)}</p>`
      ).join("")}
    </section>

    <div class="reader-actions">
      <a class="primary-btn" href="index.html#stories">
        ← Back to All Stories
      </a>
      ${id < stories.length
        ? `<a class="read-btn" href="story.html?id=${id + 1}">
             Next Story →
           </a>`
        : ""}
    </div>
  `;

  const like = document.getElementById("readerLike");

  like.addEventListener("click", () => {
    const liked = like.getAttribute("aria-pressed") === "true";
    like.setAttribute("aria-pressed", String(!liked));
    like.textContent = liked ? "♡ Like this story" : "♥ Liked";
  });

  const synopsisButton = document.getElementById("readerSynopsis");
  const synopsisText = document.getElementById("readerSynopsisText");

  synopsisText.innerHTML = `<p>${escapeHTML(story.synopsis)}</p>`;

  synopsisButton.addEventListener("click", () => {
    const opening = synopsisText.hidden;
    synopsisText.hidden = !opening;
    synopsisButton.textContent = opening ? "Hide Synopsis" : "Show Synopsis";
  });
}

// Theme toggle on both pages
const themeBtn = document.getElementById("themeBtn");

function updateThemeButton() {
  if (!themeBtn) return;
  const dark = document.body.classList.contains("dark");
  themeBtn.textContent = dark ? "☀️ Light Mode" : "🌙 Dark Mode";
}

try {
  if (localStorage.getItem("bini-theme") === "dark") {
    document.body.classList.add("dark");
  }
} catch (error) {
  // The site still works if browser storage is unavailable.
}

updateThemeButton();

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    try {
      localStorage.setItem(
        "bini-theme",
        document.body.classList.contains("dark") ? "dark" : "light"
      );
    } catch (error) {
      // Theme still changes for the current page.
    }

    updateThemeButton();
  });
}

// Footer year and back-to-top button
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const topBtn = document.getElementById("topBtn");
if (topBtn) {
  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Start the appropriate page
renderStories();
renderReader();
