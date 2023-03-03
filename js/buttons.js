document.getElementById("createUser").onclick = function () {
  createUser();
};

function addElement() {
  let name = "David Craig";
  let level = "Supervisor";
  let role = "Trooper";

  const newDiv = document.createElement("tr");
  const Name = document.createElement("td");
  const Title = document.createElement("td");
  const Role = document.createElement("td");

  const TitleLevel = document.createElement("div");

  const User = document.createElement("div");
  const UserPfp = document.createElement("span");

  Name.setAttribute("data-label", "Name");
  Title.setAttribute("data-label", "Title");
  Role.innerHTML = role;
  TitleLevel.innerHTML = level;

  User.className = "d-flex py-1 align-items-center";

  UserPfp.className = "avatar me-2";
  UserPfp.style = "background-image: url(./static/avatars/010m.jpg);";

  const UserName = document.createElement("div");
  UserName.className = "font-weight-medium";
  UserName.innerHTML = name;

  newDiv.appendChild(Name);
  newDiv.appendChild(Title);
  newDiv.appendChild(Role);
  Name.appendChild(User);
  Title.appendChild(TitleLevel);
  User.appendChild(UserPfp);
  User.appendChild(UserName);

  const currentDiv = document.getElementById("userBody");
  const num1 = currentDiv.parentNode;
  const num2 = num1.parentNode;
  const num3 = num2.parentNode;
  const num4 = num3.parentNode;
  const num5 = num4.parentNode;
  const num6 = num5.parentNode;
  const num7 = num6.parentNode;
  const num8 = num7.parentNode;
  const num9 = num8.parentNode;
  const num10 = num9.parentNode;
  const num11 = num10.parentNode;
  const num12 = num11.parentNode;
  const num13 = num12.parentNode;
  currentDiv.parentElement.insertBefore(newDiv, currentDiv);
}

function createUser() {
  addElement();
  alert("You have created the user!");
}
