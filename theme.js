(function(){var t=null;try{t=localStorage.getItem("theme")}catch(e){}
if(t!=="light"&&t!=="dim"&&t!=="night"){t=window.matchMedia&&matchMedia("(prefers-color-scheme: light)").matches?"light":"dim"}
document.documentElement.setAttribute("data-theme",t)})();
document.documentElement.classList.add("js");
