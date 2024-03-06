window.addEventListener("load", function () {
  const uqnxFuseData = [
    {
      id: "whatIsSiemensNX",
      question: "What is Siemens NX?",
      answer: "NX is an advanced high-end CAD/CAM/CAE. It is used for design, analysis and manufacturing. It is intended as a one stop shop (OSS) solution for design, manufacturing and team work in various engineering fields.",
      category: "Home",
      sectionID: "nxHome", 
    },
    {
      id: "howToAccessNX",
      question: "How To Access NX Software at UQ",
      answer: $('div#howToAccessNX').html(),
      category: "Home",
      sectionID: "nxHome",          
    },
  ];

  const options = {
    includeScore: true,
    keys: ["question", "answer", "category"],
    includeMatches: true,
    minMatchCharLength: 3,
    threshold: 0.4,
    limit: 10,
  };

  const fuse = new Fuse(uqnxFuseData, options);
  let timeout = null;

  document
    .getElementById("uqnxManualsSearch")
    .addEventListener("keyup", (e) => {
      const searchQuery = e.target.value;
      const results = fuse.search(searchQuery);
      /* Send event to Google Analytics
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        gtag("event", "Search", {
          event_category: "UQ NX Manuals Search",
          event_label: searchQuery.toLowerCase(),
        });
      }, 500);*/
      // Clear existing FAQs
      const resultsContainer = document.getElementById("uqnxManualsSearchResults");
      resultsContainer.innerHTML = "";

      // Group results by category
      const resultsByCategory = results.reduce((acc, { item }) => {
        (acc[item.category] = acc[item.category] || []).push(item);
        return acc;
      }, {});

      // Iterate over each category and append questions
      for (const category in resultsByCategory) {
        // Limit results to top 5 for each category
        let topResults = resultsByCategory[category].slice(0, 5);

        let contentElements = topResults
          .map((content) => {
            return `
          <h3 class="text-uq">${content.question}</h3>
          <p>${content.answer}</p>
          ${
            content.image
              ? `<img src="${content.image}" alt="${content.question}">`
              : ""
          }
          <a class="btn btn-primary d-block w-25 mx-auto" href="#" onclick="switchTabAndScroll('${
            content.sectionID
          }', '${
              content.id
            }')">Jump to result <i class="fa fa-fast-forward"></i></a>
        `;
          })
          .join("");

        // Add the category and its content to the results container
        resultsContainer.innerHTML += `
        <h1 class="text-uq text-center">Search Results</h1>
        ${contentElements}
        <hr />
      `;
      } 
    });
    
    window.switchTabAndScroll = function (tabId, contentId) {
      // Switch to the relevant tab
      document.getElementById(tabId + "Btn").click();

      // Scroll to the content
      setTimeout(function () {
        var element = document.getElementById(contentId);
        var rect = element.getBoundingClientRect();
        var absoluteElementTop = rect.top + window.pageYOffset;
        var adjustedScrollPosition = absoluteElementTop - 14.5 * 16; // 14.5rem assuming 16px as the base font-size
        window.scrollTo({ top: adjustedScrollPosition, behavior: "smooth" });
      }, 500);
    };
  const searchInput = document.getElementById("uqnxManualsSearch");
  const clearSearchBtn = document.getElementById("clearSearch");

  searchInput.addEventListener("input", (e) => {
    // Show the "X" button when the user types in the search input
    if (e.target.value) {
      clearSearchBtn.style.display = "block";
    } else {
      clearSearchBtn.style.display = "none";
    }
  });

  clearSearchBtn.addEventListener("click", () => {
    // Clear the search input
    searchInput.value = "";
    // Clear the results container
    const resultsContainer = document.getElementById("uqnxManualsSearchResults");
    resultsContainer.innerHTML = "";
    // Hide the "X" button
    clearSearchBtn.style.display = "none";
    searchInput.focus();
  });
});