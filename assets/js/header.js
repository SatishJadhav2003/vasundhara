function submit_md_click() {
    if ("" == $("#text_md").val() || "Search" == $("#text_md").val()) return alert("Please enter search keyword"), !1;
    if ("Search" != $("#text_md").val()) {
        if ($("#text_md").val().match("^(?=.*[~`^&*<>:;.!])")) return alert("Please enter valid characters. The following characters are not accepted ` ~ ^ & * < > : ; . !"), !1;
        window.location = "/search/" + $("#text_md").val()
    }
}
document.write("<header>"), 
document.write('<nav id="menu"> <a href=" /" class="logo" ><img src="/images/logo-vasundhara.png" alt="Vasundhara Sanstha" title="Vasundhara Sanstha" /></a>'), 
document.write('<div class="hamburger" id="hamburger-btn"> <span class="line"></span> <span class="line"></span> <span class="line"></span> </div>'),
document.write('<div class="social_media"> <a href="https://www.facebook.com/vasundharasanstha/" target="_blank" class="facebook-i-social"></a> <a href="https://www.twitter.com/vasundharasanstha/" target="_blank" class="twitter-i-social"></a> <a href="https://www.linkedin.com/company/vasundharasanstha/" target="_blank" class="linkedin-i-social"></a> <a href="https://www.youtube.com/channel/UCJZegu67KvGLUpxKleMDTLA/" target="_blank" class="youtube-i-social"></a> <a href="https://www.instagram.com/tata_trusts/" target="_blank" class="instragram-i-social"></a> </div>'), 
 
// About us
document.write('<ul class="navigation-menu" id="accordion">'), 
document.write('<li id="About_page_active"   class="SubmenuMega SubmenuFullwidth"> <a  href=" /about-vasundhara.html" class="dropSubmenu">About us</a>'), 
document.write('<ul class="accordion" >'), 
document.write('<div class="submenu-full" >'), 
document.write('<div class="submenu-right-side">'), 

document.write('<div class="col-lg-4 col-md-12 col-sm-12">'), 
document.write("<li >"), 
document.write('<div class="link"><a  href="/about-vasundhara.html">Overview</a></div>'), 
document.write("</li>"), 
document.write("<li >"), 
document.write('<div class="link"><a  href="/misionvision.html">Vision, Mission and Core Values</a></div>'), 
document.write("</li>"), 
document.write("</div>"), 

document.write('<div class="col-lg-4 col-md-12 col-sm-12">'),  
document.write("<li >"), 
document.write('<div class="link"><a  href="/organizationalstructure.html">Organizational Structure</a></div>'), 
document.write("</li>"), 
document.write("<li>"), 
document.write('<div class="link"><a href="/about-vasundhara/annualreports.html">Annual Reports & Financial Declaration</a></div>'), 
document.write("</li>"), 
document.write("</div>"), 

document.write('<div class="col-lg-4 col-md-12 col-sm-12">'), 
document.write("<li >"), 
document.write('<div class="link"><a  href="/about-vasundhara/membersofficialdirectory.html">Members/Official Directory</a></div>'), 
document.write("</li>"), 
document.write("<li>"), 
document.write('<div class="link"><a href="/about-vasundhara/our-leadership-team.html">Leadership</a></div>'), 
document.write("</li>"), 
document.write("</div>"), 

 document.write("</ul>"), 
 document.write("</li>"), 

//  Our Work
 document.write('<li id="Ourwork_page_active" class="SubmenuMega SubmenuFullwidth "> <a href=" /our-work.html" class="dropSubmenu">Our work</a>'), 
 document.write('<ul class="accordion" >'), 
 document.write('<div class="submenu-full" >'), 
 document.write('<div class="submenu-right-side">'), 
 document.write('<div class="col-lg-12 col-md-12">'), 
 document.write("<h1>Portfolios</h1>"), 
 document.write("</div>"), 
 document.write('<div class="col-lg-4 col-md-12 col-sm-12">'), 
 document.write("<li>"), 
 document.write('<div class="link">Ayush<i class="fa fa-plus"></i></div>'), 
 document.write('<ul class="submenu">'),  
 document.write("<li>"), 
 document.write("<h2>Themes</h2>"), 
 document.write("</li>"),
 document.write('<li><a href=" /our-work/healthcare/non-communicable-Disease.html">Non-communicable disease</a></li>'), 
 document.write('<li><a href=" /our-work/healthcare/communicable-Disease.html">Communicable Diseases (COVID 19)</a></li>'), 
 document.write('<li><a href=" /our-work/healthcare/mental-health.html">Mental Health</a></li>'),
 document.write('<li><a href=" /our-work/healthcare/health-systems-strengthening.html">Health Systems Strengthening(Training)</a></li>'), 
 document.write("</ul>"), 
 document.write("</li>"), 
 document.write("<li>"), 
 document.write('<div class="link">Annapurna <i class="fa fa-plus"></i></div>'), 
 document.write('<ul class="submenu">'), 
 document.write("<li>"), 
 document.write("<h2>Themes</h2>"), 
 document.write("</li>"), 
 document.write('<li><a href=" /our-work/nutrition/strengthening-systems-for-nutrition.html">Animal feeds & Fodder</a></li>'), 
 document.write('<li><a href=" /our-work/nutrition/food-fortification.html">Nutritious Snakes Formulations</a></li>'), 
 document.write('<li><a href=" /our-work/nutrition/policy-and-advocacy.html">Policy and Advocacy</a></li>'), 
 document.write("</ul>"), 
 document.write("</li>"), 
 document.write("<li>"),
 document.write("<li>"), 
 document.write('<div class="link">Water, Sanitation and Hygiene<i class="fa fa-plus"></i></div>'), 
 document.write('<ul class="submenu">'), 
 document.write("<li>"), 
 document.write("<h2>Themes</h2>"), 
 document.write("</li>"), 
 document.write('<li><a href=" /our-work/water-sanitation-and-hygiene/water-resource-management.html">Water Conservation & Irrigation Management</a></li>'), 
 document.write("</ul>"), 
 document.write("</li>"), 
 document.write("</div>"), 
 document.write('<div class="col-lg-4 col-md-12 col-sm-12">'), 
 document.write("<li>"), 
 document.write('<ul class="submenu">'),
//  envi
 document.write("</ul>"), 
 document.write("</li>"), 
  
 document.write("<li>"), 
 document.write('<div class="link">Aatmnirbhar<i class="fa fa-plus"></i></div>'), 
 document.write('<ul class="submenu">'),
 document.write("<li>"), 
 document.write("<h2>Themes</h2>"), 
 document.write("</li>"),
 document.write('<li><a href=" /our-work/livelihood/crafts.html">Self Employment</a></li>'), 
 document.write('<li><a href=" /our-work/livelihood/agriculture-practices.html">Agriculture</a></li>'), 
 document.write("</ul>"), 
 document.write("</li>"),
 document.write("<li>"), 
 document.write('<div class="link">Skill Development<i class="fa fa-plus"></i></div>'), 
 document.write('<ul class="submenu">'), 
 document.write("<li>"), 
 document.write("<h2>Themes</h2>"), 
 document.write('<li><a href=" /our-work/skill-development/skill-development-in-the-formal-sector.html">Skill Development in the Formal Sector</a></li>'),
 document.write("</ul>"), 
 document.write("</li>"), 
 document.write("<li>"), 
 document.write('<div class="link">Disaster Relief and Rehabilitation<i class="fa fa-plus"></i></div>'), 
 document.write('<ul class="submenu">'), 
 document.write("<li>"), 
 document.write("<h2>Themes</h2>"), 
 document.write('<li><a href=" /our-work/disaster-relief-and-rehabilitation/one-against-covid.html">One Against Covid</a></li>'), 
 document.write('<li><a href=" /our-work/disaster-relief-and-rehabilitation/blooddonation.html">Blood Donation</a></li>'),  
 document.write("</ul>"), 
 document.write("</li>"), 
 document.write("<li>"), 
 document.write("</div>"), 
 document.write("</div>"), 
 document.write("</ul>"), 
 document.write("</li>"), 


 document.write('<li id="Insights_page_active" class="SubmenuMega SubmenuFullwidth"> <a href="/our-videos.html" class="dropSubmenu">Insights</a>'), 
 document.write('<ul class="accordion" >'), 
 document.write('<div class="submenu-full" >'), 
 document.write('<div class="submenu-right-side">'), 
 document.write('<div class="col-lg-12 col-md-12">'), 
 document.write("</div>"), 
 document.write('<div class="col-lg-4 col-md-12 col-sm-12">'), 
//  document.write("<li>"), 
//  document.write('<div class="link"><a href="/insights/our-magazine/tata-trusts-horizons">Case Studies</a></div>'), 
//  document.write("</li>"), 
//  document.write("<li>"), 
//  document.write('<div class="link"><a href="/insights/hope-scape-newsletter">Filed Visits</a></div>'), 
//  document.write("</li>"), 
 document.write("</div>"), 
 document.write('<div class="col-lg-4 col-md-12 col-sm-12">'),
 document.write("</div>"), 
 document.write('<div class="col-lg-4 col-md-12 col-sm-12">'), 
//  document.write("<li>"), 
//  document.write('<div class="link"><a href=" /insights/survey-reports.html">Surveys and Reports</a></div>'), 
//  document.write("</li>"), 
 document.write("<li>"), 
 document.write('<div class="link"><a href=" /insights/our-videos.html">Videos</a></div>'), 
 document.write("</li>"), 
 document.write("</div>"), 
 document.write("</ul>"), 
 document.write("</li>"), 
 document.write('<li id="Media_page_active" class="SubmenuMega SubmenuFullwidth"> <a href=" /media/media-reports.html" class="dropSubmenu">Media</a>'), 
 document.write('<ul class="accordion" >'), 
 document.write('<div class="submenu-full" >'), 
 document.write('<div class="submenu-right-side">'), 
 document.write('<div class="col-lg-4 col-md-12 col-sm-12">'), 
 document.write("<li>"), 
 document.write('<div class="link"><a href=" /media/media-reports.html"> News Letter </a></div>'), 
 document.write("</li>"), 
 document.write("</div>"), 
 document.write('<div class="col-lg-4 col-md-12 col-sm-12">'), 
 document.write("<li>"), 
 document.write('<div class="link"><a href=" /media/media-reports.html">News Cuttings </a></div>'), 
 document.write("</li>"), 
 document.write("</div>"), 
 document.write('<div class="col-lg-4 col-md-12 col-sm-12">'),
 document.write("</div>"), 
 document.write("</ul>"), 
 document.write("</li>"), 

//  document.write('<li id="Impactstories_page_active" class="SubmenuMega SubmenuFullwidth"> <a href=" /" >Impact stories</a> </li>'), 
 document.write('<li id="Contactus_page_active" class="SubmenuMega SubmenuFullwidth"> <a href=" /contactus.html">Contact us</a>') 
 document.write("</li>"), 
 document.write("</nav>"), 
 document.write("</header>"), 
 document.write("</div>"), 
 document.write("\x3c!-- Global site tag (gtag.js) - Google Analytics --\x3e"), 
 document.write('<script async src="https://www.googletagmanager.com/gtag/js?id=UA-63387197-1"><\/script>'), 
 document.write("<script>"), 
 document.write("window.dataLayer = window.dataLayer || [];"), 
 document.write("function gtag(){dataLayer.push(arguments);}"), 
 document.write("gtag('js', new Date());"), 
 document.write("gtag('config', 'UA-63387197-1');"), 
 document.write("<\/script>");