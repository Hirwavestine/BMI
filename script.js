const users = [];
const computeBMI = ({ weight, height, country }) => {
  countries.forEach(c => {
    if (c === country) {
      let heightInMeters = height * 0.3048;
      this.BMI = weight / Math.pow(heightInMeters, 2);
      this.BMI = this.BMI * 0.82;
    } else {
      let heightInMeters = height * 0.3048;
      this.BMI = weight / Math.pow(heightInMeters, 2);
    }
  });

  return Math.round(this.BMI, 2);
};

const getSelectedUser = userId => {
  return users.find(({ id }) => id === userId);
};

const displaySelectedUser = ({ target }) => {
  const user = getSelectedUser(target.value);
  const properties = Object.keys(user);

  properties.forEach(prop => {
    const span = document.querySelector(`span[data-${prop}-value]`);
    if (span) {
      span.textContent = user[prop];
    }
  });
};

const letsCalculateBMI = () => {
  const value = document.querySelector(".select-text").value;
  const user = getSelectedUser(target.value);

  const bmi = computeBMI(user);

  document.querySelector(".bmi-text").innerText = bmi;
};

const powerupTheUI = () => {
  const button = document.querySelector("#oracle");

  const select = document.querySelector(".select-text");

  select.addEventListener("change", displaySelectedUser);

  button.addEventListener("click", letsCalculateBMI);
};

const displayUsers = users => {
  users.forEach(user => {
    const select = document.querySelector(".select-text");
    const option = document.createElement("option");

    option.text = user.name;
    option.value = user.id;
    select.appendChild(option);
  });
};

const fetchAndDisplayUsers = () => {
  users.push(
    {
      age: 40,
      weight: 75,
      height: 6,
      country: "Ghana",
      name: "Charles Odili",
      id: "dfhb454768DghtF"
    },
    {
      age: 23,
      weight: 68,
      height: 6,
      country: "Chad",
      name: "Bihire",
      id: "gibb12erish"
    }
  );

  displayUsers(users);
};

const startApp = () => {
  powerupTheUI();
  fetchAndDisplayUsers();
};

startApp();
