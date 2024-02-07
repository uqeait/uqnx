window.addEventListener("load", function () {
  const uqnxFuseData = [
    {
      id: "whatIsSiemensNX",
      question: "What is Siemens NX?",
      answer:
        "NX is an advanced high-end CAD/CAM/CAE. It is used for design, analysis and manufacturing. It is intended as a one stop shop (OSS) solution for design, manufacturing and team work in various engineering fields.",
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
          <a href="#" onclick="switchTabAndScroll('${content.sectionID}', '${content.id}')">Go to content</a>
        `;
          })
          .join("");

        // Add the category and its content to the results container
        resultsContainer.innerHTML += `
        <h1 class="text-uq text-center">Search Results</h1>
        <h2 class="text-uq">${category}</h2>
        ${contentElements}
        <hr />
      `;
      } 
    });
    
    window.switchTabAndScroll = function (tabId, contentId) {
    // Switch to the relevant tab
    document.getElementById(tabId + "Btn").click();

    // Scroll to the content
    document.getElementById(contentId).scrollIntoView();
  };
});