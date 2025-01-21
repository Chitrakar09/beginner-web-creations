let panels = document.querySelectorAll(".panel");

let toggle = (evt) => {
  let panel = evt.target;
  if(panel.tagName==='P')
  {
    panel=panel.parentElement;
  }
  panel.classList.toggle("panel-open");
};

let toggleActive=(evt)=>{
    if (evt.propertyName.includes('flex')) {
        evt.target.classList.toggle('open-active');
      }
}

panels.forEach((panel) => {
  panel.addEventListener("mouseenter", toggle);
  panel.addEventListener("mouseleave", toggle);
  panel.addEventListener("transitionstart",toggleActive);
});
