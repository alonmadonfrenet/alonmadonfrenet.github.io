(function(){
var EN={"À propos": "About", "Compétences": "Skills", "Parcours": "Background", "Projets": "Projects", "Aller au contenu": "Skip to content", "Disponible à Cotonou, à distance ou en hybride": "Available in Cotonou, remote or hybrid", "Je développe des sites et des applications web et mobiles, et je les sécurise dès la conception.": "I build websites and web and mobile applications, and I secure them by design.", "Télécharger mon CV (PDF)": "Download my CV (PDF)", "Me contacter": "Contact me", "Cybersécurité": "Cybersecurity", "Bénin": "Benin", "Master 2026": "Master's 2026", "Disponible": "Available", "Diplômé d'un Master en Sécurité de l'information à Moscou, je réunis deux métiers rarement réunis : développer des applications web et savoir comment on les attaque. Mes études en cryptographie, sécurité réseau et tests d'intrusion se sont déroulées en russe. Je m'intéresse aussi à l'intelligence artificielle appliquée à la sécurité.": "With a Master's degree in Information Security from Moscow, I combine two skills that rarely go together: building web applications and knowing how they get attacked. My studies in cryptography, network security and penetration testing were taught in Russian. I am also interested in artificial intelligence applied to security.", "Diplôme": "Degree", "Basé à": "Based in", "Langues": "Languages", "Master en Sécurité de l'information, MTUCI, juin 2026": "Master's in Information Security, MTUCI, June 2026", "Abomey-Calavi, Bénin": "Abomey-Calavi, Benin", "Français, anglais, russe, mina, fon, adja": "French, English, Russian, Mina, Fon, Adja", "Back-end et données": "Back-end and data", "CMS et outils": "CMS and tools", "Sécurité": "Security", "Design et contenu": "Design and content", "OWASP (XSS, injections SQL), tests d'intrusion, cryptographie, sécurité réseau": "OWASP (XSS, SQL injection), penetration testing, cryptography, network security", "Arduino, ESP32-CAM, NodeMCU, capteurs PIR, TCP/IP": "Arduino, ESP32-CAM, NodeMCU, PIR sensors, TCP/IP", "Photoshop, Illustrator, Canva, rédaction web SEO, community management": "Photoshop, Illustrator, Canva, SEO web writing, community management", "Juin 2026": "June 2026", "2022, 6 mois": "2022, 6 months", "Mai à juin 2021": "May to June 2021", "2020 à 2021": "2020 to 2021", "2020, 1 mois": "2020, 1 month", "Master en Sécurité de l'information": "Master's in Information Security", "Stagiaire développeur full-stack, STSS": "Full-stack developer intern, STSS", "Stagiaire en gestion de projet et IA, MIFY": "Project management and AI intern, MIFY", "Licence en Génie Informatique et Télécommunications": "Bachelor's in Computer Engineering and Telecommunications", "Stagiaire webmaster, BENILAB Services": "Webmaster intern, BENILAB Services", "MTUCI, Université technique de Moscou des Télécommunications et de l'Informatique. Cybersécurité offensive et défensive, cryptographie avancée, sécurité des réseaux.": "MTUCI, Moscow Technical University of Communications and Informatics. Offensive and defensive cybersecurity, advanced cryptography, network security.", "Développement front-end et back-end d'une application web dynamique, avec des pratiques de développement sécurisé.": "Front-end and back-end development of a dynamic web application, using secure development practices.", "Abomey-Calavi. Application Android et prototype IoT de détection d'intrusion pour habitation.": "Abomey-Calavi. Android application and IoT prototype for home intrusion detection.", "INSTI Lokossa, Bénin.": "INSTI Lokossa, Benin.", "Conception et mise en ligne d'un site professionnel sous WordPress.": "Design and launch of a professional website on WordPress.", "Laboratoires de sécurité offensive": "Offensive security labs", "Mémoire de Master, 2026": "Master's thesis, 2026", "Mémoire de Licence, 2021": "Bachelor's thesis, 2021", "Master": "Master's program", "Extension Chrome de contrôle parental qui utilise l'IA pour détecter automatiquement les contenus inappropriés en temps réel.": "Chrome parental-control extension that uses AI to automatically detect inappropriate content in real time.", "Application Android en Java qui pilote un système de détection d'intrusion : activation, arrêt de l'alarme et alertes. Le système combine reconnaissance faciale (ESP32-CAM), capteurs de présence (Arduino) et communication Wi-Fi (NodeMCU).": "Android application in Java that controls an intrusion detection system: arming, alarm shutdown and alerts. The system combines face recognition (ESP32-CAM), presence sensors (Arduino) and Wi-Fi communication (NodeMCU).", "Cinq laboratoires pratiques : pivoting réseau, élévation de privilèges, Mimikatz, Responder et Kerberos Golden Ticket, avec rapports techniques détaillés.": "Five hands-on labs: network pivoting, privilege escalation, Mimikatz, Responder and Kerberos Golden Ticket, with detailed technical reports.", "Travaillons ensemble": "Let's work together", "Un projet web, un stage, un poste ? Écrivez-moi par e-mail ou en message privé sur l'un de mes réseaux.": "A web project, an internship, a job? Write to me by email or send a private message on one of my networks.", "© 2026 Frenet Alonmadon. Abomey-Calavi, Bénin.": "© 2026 Frenet Alonmadon. Abomey-Calavi, Benin.", "Accueil": "Home", "Navigation principale": "Main navigation", "Langue": "Language", "Thème": "Theme", "Frenet Alonmadon à son bureau": "Frenet Alonmadon at his desk", "Portrait de Frenet Alonmadon en chemise blanche": "Portrait of Frenet Alonmadon in a white shirt", "Frenet Alonmadon en costume": "Frenet Alonmadon in a suit", "Envoyez-moi un message": "Send me a message", "Votre nom": "Your name", "Votre e-mail": "Your email", "Votre message": "Your message", "Envoyer le message": "Send message"};
var T={fr:{light:"Clair",dim:"Bleu foncé",night:"Nuit"},en:{light:"Light",dim:"Dark blue",night:"Night"}};
var COL={light:"#ffffff",dim:"#15202b",night:"#000000"};
var doc=document,root=doc.documentElement;
function get(k){try{return localStorage.getItem(k)}catch(e){return null}}
function put(k,v){try{localStorage.setItem(k,v)}catch(e){}}
var mail=doc.getElementById("mail");
if(mail){var a=mail.getAttribute("data-u")+"@"+mail.getAttribute("data-d");mail.href="mailto:"+a;mail.querySelector("small").textContent=a}
var norm=function(s){return s.replace(/\s+/g," ").trim()};
var nodes=[],w=doc.createTreeWalker(doc.body,NodeFilter.SHOW_TEXT,{acceptNode:function(n){
  var p=n.parentNode.nodeName;if(p==="SCRIPT"||p==="STYLE"||p==="NOSCRIPT")return NodeFilter.FILTER_REJECT;
  return EN[norm(n.nodeValue)]?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}});
while(w.nextNode()){var n=w.currentNode;nodes.push([n,n.nodeValue,EN[norm(n.nodeValue)]])}
var attrs=[];doc.querySelectorAll("[alt],[aria-label]").forEach(function(e){["alt","aria-label"].forEach(function(k){var v=e.getAttribute(k);if(v&&EN[v])attrs.push([e,k,v,EN[v]])})});
var meta=doc.querySelector("meta[name=description]");
var M={fr:{t:doc.title,d:meta.content},en:{t:"Frenet Alonmadon – Full-stack web developer and cybersecurity",d:"Full-stack web developer with a Master's degree in Information Security (MTUCI, Moscow). Secure web and mobile applications. Based in Abomey-Calavi, Benin."}};
var themeBtns=doc.querySelectorAll("[data-theme-set]"),langBtns=doc.querySelectorAll("[data-lang]");
function setLang(l){
  nodes.forEach(function(x){x[0].nodeValue=l==="en"?x[2]:x[1]});
  attrs.forEach(function(x){x[0].setAttribute(x[1],l==="en"?x[3]:x[2])});
  doc.title=M[l].t;meta.content=M[l].d;root.lang=l;
  langBtns.forEach(function(b){b.setAttribute("aria-pressed",String(b.getAttribute("data-lang")===l))});
  themeBtns.forEach(function(b){var k=T[l][b.getAttribute("data-theme-set")];b.title=k;b.setAttribute("aria-label",k)});
  put("lang",l)
}
function setTheme(t){
  root.setAttribute("data-theme",t);
  themeBtns.forEach(function(b){b.setAttribute("aria-pressed",String(b.getAttribute("data-theme-set")===t))});
  var tc=doc.querySelector("meta[name=theme-color]");if(tc)tc.content=COL[t];
  put("theme",t)
}
langBtns.forEach(function(b){b.addEventListener("click",function(){setLang(b.getAttribute("data-lang"))})});
themeBtns.forEach(function(b){b.addEventListener("click",function(){setTheme(b.getAttribute("data-theme-set"))})});
var sl=get("lang");if(sl!=="fr"&&sl!=="en")sl=(navigator.language||"fr").slice(0,2)==="en"?"en":"fr";
setLang(sl);setTheme(root.getAttribute("data-theme"));
var links=doc.querySelectorAll(".top nav a");
if("IntersectionObserver" in window){
  var io=new IntersectionObserver(function(es){es.forEach(function(e){
    if(e.isIntersecting){links.forEach(function(l){l.classList.toggle("on",l.getAttribute("href")==="#"+e.target.id)})}
  })},{rootMargin:"-45% 0px -50% 0px"});
  doc.querySelectorAll("main section[id]").forEach(function(s){io.observe(s)});
}
var FM={fr:{ok:"Merci ! Votre message a bien été envoyé.",err:"L'envoi a échoué. Écrivez-moi par e-mail ou sur l'un de mes réseaux.",wait:"Envoi en cours…",off:"Le formulaire n'est pas encore activé. Écrivez-moi par e-mail."},en:{ok:"Thank you! Your message has been sent.",err:"Sending failed. Please email me or write to me on one of my networks.",wait:"Sending…",off:"The form is not active yet. Please email me instead."}};
var fm=doc.getElementById("form");
if(fm){var fmsg=doc.getElementById("form-msg"),fbtn=fm.querySelector("button[type=submit]");
  var show=function(k){fmsg.textContent=FM[root.lang==="en"?"en":"fr"][k];fmsg.setAttribute("data-state",k)};
  fm.addEventListener("submit",function(e){e.preventDefault();
    if(!fm.reportValidity()||fm.elements._gotcha.value)return;
    var ep=fm.getAttribute("data-endpoint");
    if(!ep||ep.indexOf("VOTRE_ID")>-1){show("off");return}
    show("wait");fbtn.disabled=true;
    fetch(ep,{method:"POST",headers:{Accept:"application/json"},body:new FormData(fm)})
      .then(function(r){if(r.ok){fm.reset();show("ok")}else{show("err")}})
      .catch(function(){show("err")})
      .then(function(){fbtn.disabled=false});
  });}
})();
