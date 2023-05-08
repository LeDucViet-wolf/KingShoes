const activeTabEditProfile = () => {
  let tabs = document.querySelectorAll('#v-pills-tab .nav-link.my-nav-link');
  let tabToShow = document.querySelector('#v-pills-tab a[href="#v-pills-edit-profile"]');

  tabs.forEach(element => {
    element.classList.remove('active');
  });

  tabToShow.classList.add('active');
}

const activeTabPanelEditProfile = () => {
  let tabPanels = document.querySelectorAll("#profile-tab-content .tab-pane");
  let tabPanelToShow = document.querySelector("#profile-tab-content #v-pills-edit-profile");

  tabPanels.forEach(element => {
    element.classList.remove('show');
    element.classList.remove('active');
  });

  tabPanelToShow.classList.add('show');
  tabPanelToShow.classList.add('active');
}

const handleEdit = (e, setPass) => {
  e.preventDefault();
  setPass(false);
  activeTabEditProfile();
  activeTabPanelEditProfile();
}

const handleChangePass = (e, setPass) => {
  e.preventDefault();
  setPass(true);
  activeTabEditProfile();
  activeTabPanelEditProfile();
}

const handleShowChangePass = (e, setPass) => {
  if (e.target.checked) {
    setPass(true);
  } else {
    setPass(false);
  }
}

const convertToDate = (dateString) => {
  var myDate = new Date(dateString);
  var datearray = myDate.toLocaleDateString().split("/");
  var newdate = datearray[1] + '/' + datearray[0] + '/' + datearray[2];
  return newdate;
}

const convertToDateToSubmit = (dateString) => {
  var myDate = new Date(dateString);
  return myDate.toISOString().split('T')[0];
}

export { handleEdit, handleChangePass, convertToDate, handleShowChangePass, convertToDateToSubmit };