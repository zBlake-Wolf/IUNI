function showScreen(screenName){
  const phones = document.querySelectorAll(".phone");

  phones.forEach(phone => {
    const screen = phone.querySelector(".screen");

    if(screen.classList.contains(screenName)){
      phone.scrollIntoView({
        behavior:"smooth",
        block:"center",
        inline:"center"
      });
    }
  });
}