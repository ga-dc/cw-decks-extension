function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);
		$a = $("<a href='mailto:jesse@jshawl.com'>Email deck to students</a>")
		var $copyEmail = $("[onclick^='window.prompt']")
		$a.attr("class", $copyEmail.attr("class"))
		$copyEmail.after($a)
		var emails = []
		$(".status").each(function(i,e){
		  if($(e).text().match(/ENROLLED/)){
		    emails.push($(e).parent().find("[href^=mailto]").html())
		  }
		})
		var subject = document.title.replace(/Instance [0-9]+/,'').replace(/\ of\ /,'').replace(/\ \|(.*)/,'')
		var date = $(".breadcrumbs .current").text().replace(/\ \-\ DC/,'')
                var link = getParameterByName("cwdeckurl")
		var body = `Good morning!
	
		Thanks for coming out to GA for the Adobe InDesign bootcamp It was great to
		see you on campus and we hope you enjoyed it. If you haven't already,
		please make sure to fill out the survey.
		
		You'll find the slide deck here - ${link}, so you can have it for reference. Let
		us know if you have any issues opening them.
		
		If you want to take a deeper dive into Visual Design - https://generalassemb.ly/education/visual-design/washington-dc
		or Digital Marketing - https://generalassemb.ly/education/digital-marketing/washington-dc, check
		out our part-time courses. Alternatively, keep an eye out on this page https://generalassemb.ly/education?format=classes-workshops for
		other classes, workshops, and events.
		
		Hope to see you on campus again soon, and thanks for stopping by!
		
		-Claire
		`
		if(link){
		  window.open("mailto:jesse@ga.co?BCC=" + emails.join(",") + "&subject=" + subject + " " + date + "&body=" + encodeURIComponent(body))
		}
	}
	}, 10);
});