document.getElementById("createUser").onclick = function () {
  const Name = document.getElementById("inputName");
  const ID = document.getElementById("inputID");
  const Rank = document.getElementById("inputRank");
  const PFP = document.getElementById("InputPFP");
  createUser(Name.value, ID.value, "test");
};

function addElement(name, id, role, pfp) {
  const newDiv = document.createElement("tr");
  const Name = document.createElement("td");
  const Title = document.createElement("td");
  const Role = document.createElement("td");

  const Actions = document.createElement("td");
  const Actionsone = document.createElement("div");
  const ActionDropdown = document.createElement("div");
  const ActionAction = document.createElement("button");

  const ActionOne = document.createElement("div");

  const TitleLevel = document.createElement("div");

  const User = document.createElement("div");
  const UserPfp = document.createElement("span");

  Name.setAttribute("data-label", "Name");
  Title.setAttribute("data-label", "Title");
  Role.innerHTML = role;
  TitleLevel.innerHTML = id;

  Actionsone.className = "btn-list flex-nowrap";
  ActionDropdown.className = "dropdown";
  ActionAction.className = "btn dropdown-toggle align-text-top";
  ActionAction.setAttribute("data-bs-toggle", "dropdown");
  ActionAction.innerHTML = "Actions";

  const ActionOneMsg = document.createElement("a");
  const ActionOnePromote = document.createElement("a");
  const ActionOneDemote = document.createElement("a");
  const ActionOneFire = document.createElement("a");
  ActionOne.className = "dropdown-menu dropdown-menu-end";
  ActionOneMsg.className = "dropdown-item";
  ActionOneMsg.setAttribute("href", "#");
  ActionOneMsg.innerHTML = "Send Message";

  ActionOnePromote.className = "dropdown-menu dropdown-menu-end";
  ActionOnePromote.className = "dropdown-item";
  ActionOnePromote.setAttribute("href", "#");
  ActionOnePromote.innerHTML = "Promote";

  ActionOneDemote.className = "dropdown-menu dropdown-menu-end";
  ActionOneDemote.className = "dropdown-item";
  ActionOneDemote.setAttribute("href", "#");
  ActionOneDemote.innerHTML = "Demote";

  ActionOneFire.className = "dropdown-menu dropdown-menu-end";
  ActionOneFire.className = "dropdown-item";
  ActionOneFire.setAttribute("href", "#");
  ActionOneFire.innerHTML = "Fire";

  User.className = "d-flex py-1 align-items-center";

  UserPfp.className = "avatar me-2";
  UserPfp.style = "background-image: url(" + pfp + ");";

  const UserName = document.createElement("div");
  UserName.className = "font-weight-medium";
  UserName.innerHTML = name;

  newDiv.appendChild(Name);
  newDiv.appendChild(Title);
  newDiv.appendChild(Role);
  newDiv.appendChild(Actions);
  Name.appendChild(User);
  Title.appendChild(TitleLevel);
  User.appendChild(UserPfp);
  User.appendChild(UserName);

  Actions.appendChild(Actionsone);
  Actionsone.appendChild(ActionDropdown);
  ActionDropdown.appendChild(ActionOne);
  ActionOne.appendChild(ActionOneMsg);
  ActionOne.appendChild(ActionOnePromote);
  ActionOne.appendChild(ActionOneDemote);
  ActionOne.appendChild(ActionOneFire);

  ActionDropdown.appendChild(ActionAction);

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

function createUser(Name, ID, Role) {
  addElement(Name, ID, Role);
}
