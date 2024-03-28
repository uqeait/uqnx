window.addEventListener("load", function () {
  const uqnxFuseData = [
    {
      id: "whatIsSiemensNX",
      question: "What is Siemens NX?",
      answer: $("div#whatIsSiemensNX").html(),
      category: "Home",
      sectionID: "nxHome",
    },
    {
      id: "howToAccessNX",
      question: "How Do I Access NX Software at UQ?",
      answer: $("div#howToAccessNX").html(),
      category: "Home",
      sectionID: "nxHome",
    },
    {
      id: "nxCreateNewPart",
      question: "How Do I Create A New Part?",
      answer: $("div#nxCreateNewPart").html(),
      category: "Home",
      sectionID: "nxHome",
    },
    {
      id: "nxOpenExistingPart",
      question: "How Do I Open an Existing Part?",
      answer: $("div#nxOpenExistingPart").html(),
      category: "Home",
      sectionID: "nxHome",
    },
    {
      id: "nxSavePart",
      question: "How Do I Save a Part?",
      answer: $("div#nxSavePart").html(),
      category: "Home",
      sectionID: "nxHome",
    },
    {
      id: "nxCloseExit",
      question: "What happens on Closing and Exiting?",
      answer: $("div#nxCloseExit").html(),
      category: "Home",
      sectionID: "nxHome",
    },
    {
      id: "nxMouseBtn1",
      question: "What is Mouse Button 1?",
      answer: $("div#nxMouseBtn1").html(),
      category: "Home",
      sectionID: "nxHome",
    },
    {
      id: "nxMouseBtn2",
      question: "What is Mouse Button 2?",
      answer: $("div#nxMouseBtn2").html(),
      category: "Home",
      sectionID: "nxHome",
    },
    {
      id: "nxMouseBtn3",
      question: "What is Mouse Button 3?",
      answer: $("div#nxMouseBtn3").html(),
      category: "Home",
      sectionID: "nxHome",
    },
    {
      id: "nxMouseBtnCombos",
      question: "What are the common Mouse Button Combos?",
      answer: $("div#nxMouseBtnCombos").html(),
      category: "Home",
      sectionID: "nxHome",
    },
    {
      id: "nxUserInterface",
      question: "What are the different parts of the User Interface?",
      answer: $("div#nxUserInterface").html(),
      category: "Home",
      sectionID: "nxHome",
    },
    {
      id: "nxInterfaceLayout",
      question: "How is the Interface Laid Out?",
      answer: $("div#nxInterfaceLayout").html(),
      category: "Home",
      sectionID: "nxHome",
    },
    {
      id: "nxResourceBar",
      question: "What Does the Resource Bar Contain?",
      answer: $("div#nxResourceBar").html(),
      category: "Home",
      sectionID: "nxHome",
    },
    {
      id: "nxViewCommands",
      question: "What Are The View Commands?",
      answer: $("div#nxViewCommands").html(),
      category: "Home",
      sectionID: "nxHome",
    },
    {
      id: "nxViewTriad",
      question: "What Is The Triad View?",
      answer: $("div#nxViewTriad").html(),
      category: "Home",
      sectionID: "nxHome",
    },
    {
      id: "nxGeometrySelection",
      question: "How Do I See The Geometry Selection?",
      answer: $("div#nxGeometrySelection").html(),
      category: "Home",
      sectionID: "nxHome",
    },
    {
      id: "nxGeometrySelectionMB1",
      question: "How Do I Use MB1 To See The Geometry Selection?",
      answer: $("div#nxGeometrySelectionMB1").html(),
      category: "Home",
      sectionID: "nxHome",
    },
    {
      id: "nxGeometrySelectionPopupMenus",
      question: "How Do I Access The Popup Menus?",
      answer: $("div#nxGeometrySelectionPopupMenus").html(),
      category: "Home",
      sectionID: "nxHome",
    },
    {
      id: "nxQuickPick",
      question: "How Do I Find And Use The Quick Pick Menus?",
      answer: $("div#nxQuickPick").html(),
      category: "Home",
      sectionID: "nxHome",
    },
    {
      id: "nxAbsoluteCoordinateSystem",
      question: "How Does The Absolute Coordinate System Work?",
      answer: $("div#nxAbsoluteCoordinateSystem").html(),
      category: "Home",
      sectionID: "nxHome",
    },
    {
      id: "nxWorkCoordinateSystem",
      question: "How Does The Work Coordinate System Work?",
      answer: $("div#nxWorkCoordinateSystem").html(),
      category: "Home",
      sectionID: "nxHome",
    },
    {
      id: "nxUserPreferences",
      question: "How Do I Change User Preferences?",
      answer: $("div#nxUserPreferences").html(),
      category: "Home",
      sectionID: "nxHome",
    },
    {
      id: "nxLayers",
      question: "How Do I Access Layers?",
      answer: $("div#nxLayers").html(),
      category: "Home",
      sectionID: "nxHome",
    },
    {
      id: "nxMultipleOpenParts",
      question: "How Do I Work With Multiple Open Parts Simultaneously?",
      answer: $("div#nxMultipleOpenParts").html(),
      category: "Home",
      sectionID: "nxHome",
    },
    {
      id: "nxMoveWorkCoordinateSystem",
      question: "How Do I Move The Work Coordinate System?",
      answer: $("div#nxMoveWorkCoordinateSystems").html(),
      category: "Home",
      sectionID: "nxHome",
    },
    {
      id: "nxSketchOverview",
      question: "How Does The Sketch Functionality Work?",
      answer: $("div#nxSketchOverview").html(),
      category: "Sketching",
      sectionID: "nxSketching",
    },
    {
      id: "nxSketchMountingBracket",
      question: "Can I See An Example Of The Sketch Mounting Bracket?",
      answer: $("div#nxSketchMountingBracket").html(),
      category: "Sketching",
      sectionID: "nxSketching",
    },
    {
      id: "nxSketchSelect1by1",
      question: "How Do I Select Objects One By One?",
      answer: $("div#nxSketchSelect1by1").html(),
      category: "Sketching",
      sectionID: "nxSketching",
    },
    {
      id: "nxDeselectingObjects",
      question: "How Do I Deselect Objects?",
      answer: $("div#nxDeselectingObjects").html(),
      category: "Sketching",
      sectionID: "nxSketching",
    },
    {
      id: "nxCreateNewPartFile",
      question: "How Do I Create A New Part File?",
      answer: $("div#nxCreateNewPartFile").html(),
      category: "Sketching",
      sectionID: "nxSketching",
    },
    {
      id: "nxSetRole",
      question: "How Do I Set A Role?",
      answer: $("div#nxSetRole").html(),
      category: "Sketching",
      sectionID: "nxSketching",
    },
    {
      id: "nxCreateSketch",
      question: "How Do I Create A Sketch?",
      answer: $("div#nxCreateSketch").html(),
      category: "Sketching",
      sectionID: "nxSketching",
    },
    {
      id: "nxTipSketchPlane",
      question: "Tip - Sketch Plane",
      answer: $("div#nxTipSketchPlane").html(),
      category: "Sketching",
      sectionID: "nxSketching",
    },
    {
      id: "nxTipSketchRibbonToolbar",
      question: "Tip - Sketch Ribbon Toolbar",
      answer: $("div#nxTipSketchRibbonToolbar").html(),
      category: "Sketching",
      sectionID: "nxSketching",
    },
    {
      id: "nxAddDimensionsToolbar",
      question: "How Do I Add A Dimensions Toolbar?",
      answer: $("div#nxAddDimensionsToolbar").html(),
      category: "Sketching",
      sectionID: "nxSketching",
    },
  ];

  const options = {
    includeScore: true,
    keys: ["question", "answer", "category"],
    includeMatches: true,
    minMatchCharLength: 3,
    threshold: 0.6,
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

      let accordionIndex = 0;
      let contentElements = "";

      for (const category in resultsByCategory) {
        // Limit results to top 5 for each category
        let topResults = resultsByCategory[category].slice(0, 5);

        let contentElements = topResults
          .map((content) => {
            let accordionId = `accordion${accordionIndex++}`;

            return `
          <div class="accordion-item">
            <h2 class="accordion-header p-0 m-0">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${accordionId}Content">
                ${content.question}
              </button>
            </h2>
            <div id="${accordionId}Content" class="accordion-collapse collapse" data-bs-parent="#accordion">
              <div class="accordion-body">
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
              </div>
          </div>
        </div>
      `;
          })
          .join("");

        // Add the category and its content to the results container
        resultsContainer.innerHTML += `
    <h1 class="text-uq text-center">Search Results</h1>
   <div class="accordion" id="accordion">
    ${contentElements}
  </div>
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