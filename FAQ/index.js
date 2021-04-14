const accordionList = document.querySelector(".accordion-list");
const accordionItems = accordionList.children;

accordionList.addEventListener("click", (e) => {
  const [question, answer] = e.target.children;

  question.classList.toggle("active");
  answer.classList.toggle("hidden");

  const arrow = question.children[1];
  arrow.classList.toggle("reverse");

  [...accordionItems].forEach((item) => {
    if (item !== e.target) {
      const [itemQuestion, itemAnswer] = item.children;

      itemQuestion.classList.remove("active");

      if (![...itemAnswer.classList].includes("hidden")) {
        const itemArrow = itemQuestion.children[1];
        itemArrow.classList.remove("reverse");
        itemAnswer.classList.add("hidden");
      }
    }
  });
});
