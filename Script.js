let habits = JSON.parse(localStorage.getItem("habits")) || [];

function displayHabits(){
  let list = document.getElementById("habitList");
  list.innerHTML = "";

  habits.forEach((habit,index)=>{
    let li = document.createElement("li");
    li.innerHTML = `
      ${habit}
      <button onclick="deleteHabit(${index})">❌</button>
    `;
    list.appendChild(li);
  });

  localStorage.setItem("habits", JSON.stringify(habits));
}

function addHabit(){
  let input = document.getElementById("habitInput");
  let habit = input.value;

  if(habit === "") return;

  habits.push(habit);
  input.value = "";

  displayHabits();
}

function deleteHabit(index){
  habits.splice(index,1);
  displayHabits();
}

displayHabits();