document.getElementById("createUser").onclick = function () {
  const Name = document.getElementById("inputName");
  const ID = document.getElementById("inputID");
  const Rank = document.getElementById("inputRank");
  const PFP = document.getElementById("inputPFP");
  const Hours = "2";
  const Hired = "13/03/2023";
  createUser(Name.value, ID.value, "Major", PFP.value, Hours, Hired);
};

function addElement(name, id, role, pfp, hours, hired) {
  const newDiv = document.createElement("tr");
  const Name = document.createElement("td");
  const Title = document.createElement("td");
  const Role = document.createElement("td");
  const Hours = document.createElement("td");
  const Hired = document.createElement("td");

  const Edit = document.createElement("td");
  const Edit2 = document.createElement("a");

  const TitleLevel = document.createElement("div");

  const User = document.createElement("div");
  const UserPfp = document.createElement("span");

  Name.setAttribute("data-label", "Name");
  Title.setAttribute("data-label", "Title");
  Role.innerHTML = role;
  Hours.innerHTML = hours;
  Hired.innerHTML = hired;

  TitleLevel.innerHTML = id;
  Edit2.setAttribute("href", "#");
  Edit2.setAttribute("data-bs-toggle", "modal");
  Edit2.setAttribute("data-bs-target", "#modal-userManagement");
  Edit2.setAttribute("aria-label", "Edit");
  Edit2.innerText = "Edit";

  User.className = "d-flex py-1 align-items-center";

  UserPfp.className = "avatar me-2";
  UserPfp.style = "background-image: url(" + pfp + ");";

  const UserName = document.createElement("div");
  UserName.className = "font-weight-medium";
  UserName.innerHTML = name;

  newDiv.appendChild(Name);
  newDiv.appendChild(Title);
  newDiv.appendChild(Role);
  newDiv.appendChild(Hours);
  newDiv.appendChild(Hired);
  newDiv.appendChild(Edit);

  Name.appendChild(User);
  Title.appendChild(TitleLevel);
  User.appendChild(UserPfp);
  User.appendChild(UserName);
  Edit.appendChild(Edit2);

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

function createUser(Name, ID, Role, PFP, Hours, Hired) {
  addElement(Name, ID, Role, PFP, Hours, Hired);
}
