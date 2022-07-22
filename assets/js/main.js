// Initialize the news api parameters
const source = "the-hindu";
const apiKey = " -- Enter your News API key -- ";

// Grab the news container
let newsAccordion = document.getElementById("newsAccordion");

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`,
  true
);

// What to do when response is ready
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    let newsHTML = "";
    articles.forEach(function (element, index) {
      let news = `<div class="accordion-item my-2">
                        <h2 class="accordion-header" id="panelsStayOpen-heading${index}">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapse${index}" aria-expanded="true"
                                aria-controls="panelsStayOpen-collapse${index}">
                                <b>Breaking News ${index + 1}:</b>${
        element["title"]
      }
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapse${index}" class="accordion-collapse collapse show"
                            aria-labelledby="panelsStayOpen-heading${index}">
                            <div class="accordion-body"> ${
                              element["content"]
                            }. <a href="${
        element["url"]
      }" target="_blank" >Read more</a> </div>
                        </div>
                    </div>`;
      newsHTML += news;
    });
    newsAccordion.innerHTML = newsHTML;
  } else {
    console.log("Some error occurred");
  }
};

xhr.send();
