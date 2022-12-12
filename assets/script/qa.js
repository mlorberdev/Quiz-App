!(function () {
  
  const ans = document.querySelectorAll('[name="answer"]');
  document.getElementById("t").innerText = "Systems of Linear Equations"; // title
  document.getElementById("s").innerText = "Three Variables"; // subtitle
  document.getElementById("q").innerText = "A system of three linear equations in three variables is inconsistent if their planes"; // questions
  let c = "*do not intersect|intersect only at a point|intersect in a line|coincide"; // answer choices, put * before correct one
  let a;

  c = c.split("|").sort((a, b) => 0.5 - Math.random()); // randomize answers
  for (i in c) {
    if (c[i].charAt(0) === "*") {
      a = i;
      c[i] = c[i].substring(1);
    }
    document.getElementById(`al${i}`).innerText = c[i];
  }

  // EVALUATE ANSWER
  document.getElementById("submit").addEventListener("click", function () {

    for (i in ans) {
      ans[i].disabled = true;
      if (i === a && ans[a].checked === true) ans[a].labels[0].textContent += " ✅";
      if (i !== a && ans[i].checked === true) ans[i].labels[0].textContent += " ❌";
    }
    ans[a].labels[0].style.fontWeight = "600";
    document.getElementById("submit").classList.add("inactive");
    document.getElementById("okay").classList.remove("inactive");
  });

  // NEXT QUESTION
  document.getElementById("okay").addEventListener("click", function () {
    location.reload();
  });
  

})();