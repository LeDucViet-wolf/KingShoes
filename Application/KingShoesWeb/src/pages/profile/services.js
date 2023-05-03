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

  const handleEdit = (e) => {
    e.preventDefault();

    activeTabEditProfile();
    activeTabPanelEditProfile();
  }

  const handleChangePass = () => {
    
  }

  const convertToDate = (dateString) => {
    var mydate = new Date(dateString);
    return mydate.toLocaleDateString();
  }

  export {handleEdit, handleChangePass, convertToDate};