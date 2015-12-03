var bio = {
    "name": "Brian Greene",
    "role": "Product Manager",
    "contacts": [{
    	"mobile": "917.300.9650",
    	"email": "b.aegreene@gmail.com",
    	"github": "bgr33ne",
    	"twitter": "none",
    	"location": "New York, NY"
	}],
    "location": "New York, NY",
    "welcomeMessage": "hello world!",
    "skills": ["awesomeness", "getting shit done", "working hard",
        "making up skills for this assingment"
    ],
    "biopic": "images/BAEG-Lin.png"
};

bio.display = function() {
	//name & role
	var formattedName = HTMLheaderName.replace("%data%", "Brian Greene");
	$("#header").append(formattedName);
	var formattedRole = HTMLheaderRole.replace("%data%", "Product Manager");
	$("#header").append(formattedRole);
	//biopic
	var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").prepend(formattedbioPic);
	
	//topcontacts and footer
	for (var indexCount = 0; indexCount < bio.contacts.length; indexCount++) {
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts[indexCount].mobile);
		$("#topContacts").append(formattedMobile);
		$("#footerContacts").append(formattedMobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts[indexCount].email);
		$("#topContacts").append(formattedEmail);
		$("#footerContacts").append(formattedEmail);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts[indexCount].github);
		$("#topContacts").append(formattedGithub);
		$("#footerContacts").append(formattedGithub);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts[indexCount].twitter);
		$("#topContacts").append(formattedTwitter);
		$("#footerContacts").append(formattedTwitter);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts[indexCount].location);
		$("#topContacts").append(formattedLocation);
		$("#footerContacts").append(formattedLocation);
	}

	if (bio.skills.length > 0) {
	    $("#header").append(HTMLskillsStart);
	    for (var indexCount = 0; indexCount < bio.skills.length; indexCount++) {
	    	var formattedSkill = HTMLskills.replace("%data%", bio.skills[indexCount]);
		    $("#skills").append(formattedSkill);
	    }
	}
};

var work = {
    "jobs": [{
        "title": "Co-Founder",
        "employer": "Center for Advanced Studies Abroad",
        "location": "New York, NY",
        "dates": "2012-Current",
        "description": "Running the business."
    }, {
        "title": "Associate Director",
        "employer": "Academic Language Institute",
        "location": "Alicante, Spain",
        "dates": "2010-2012",
        "description": "operating the business."
    }, {
        "title": "Sales / Biz Dev",
        "employer": "The Rug Company",
        "location": "New York, NY",
        "dates": "2008-2010",
        "description": "making $$$"
    }]
};

work.display = function() {
	if (work.jobs.length > 0) {
		$("#workExperience").append(HTMLworkStart);
		for (var indexCount = 0; indexCount < work.jobs.length; indexCount++) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[indexCount].employer);
	        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[indexCount].title);
	        var formattedEmployerTitle = formattedEmployer + formattedTitle;
	        $(".work-entry:last").append(formattedEmployerTitle);
	        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[indexCount].dates);
	        $(".work-entry:last").append(formattedDates);
	        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[indexCount].location);
	        $(".work-entry:last").append(formattedLocation);
	        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[indexCount].description);
	        $(".work-entry:last").append(formattedDescription);
		}
	}
};

var projects = {
    "projects": [{
        "title": "Personal Website",
        "description": "a website I built for myself, check it out at www.brianaegreene.com",
        "dates": "Current",
        "images": ["http://fillmurray.com/150/250", "images/fry.jpg"]
    }, {
        "title": "Web Design",
        "description": "examples of web design work i have done",
        "dates": "current",
        "images": ["http://fillmurray.com/250/300"]
    }, {
        "title": "Product Management A/B test",
        "description": "An A/B test I ran for my final project product",
        "dates": "2015",
        "images": ["http://fillmurray.com/200/300"]
    }]
};

projects.display = function() {
	if (projects.projects.length > 0) {
		$("#projects").append(HTMLprojectStart);
		for (var indexCount = 0; indexCount < projects.projects.length; indexCount++) {
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[indexCount].title);
	        $(".project-entry:last").append(formattedTitle);

	        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[indexCount].dates);
	        $(".project-entry:last").append(formattedDates);

	        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[indexCount].description);
	        $(".project-entry:last").append(formattedDescription);

	        if (projects.projects[indexCount].images.length > 0) {
	            for (image in projects.projects[indexCount].images) {
	                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[indexCount].images[image]);
	                $(".project-entry:last").append(formattedImage);
				}
	
			}
 		}
	}
};

var education = {
    "schools": [{
        "name": "Bard College",
        "location": "Annandale-on-Hudson, NY",
        "degree": "BA",
        "major": ["Literature", "Creative Writing"],
        "dates": 2004,
        "url": "http://www.bard.edu"
    }, {
        "name": "Universidad CEU Cardenal Herrera",
        "location": "Valencia, Spain",
        "degree": "MBA",
        "major": "International Business",
        "dates": 2014
    }, {
        "name": "General Assembly",
        "location": "New York, NY",
        "degree": "Certificate",
        "major": "Product Management",
        "dates": 2015
    }],
    "onlineCourses": [{
        "title": "Front-End Development",
        "school": "Udacity",
        "dates": 2015,
        "url": "https://www.udacity.com"
    }]
};

education.display = function() {
	if (education.schools.length > 0) {
		$("#education").append(HTMLschoolStart);
	    for (var indexCount = 0; indexCount < education.schools.length; indexCount++) {
			var formattedName = HTMLschoolName.replace("%data%", education.schools[indexCount].name);
	        $(".education-entry:last").append(formattedName);
	        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[indexCount].degree);
	        $(".education-entry:last").append(formattedDegree);
	        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[indexCount].dates);
	        $(".education-entry:last").append(formattedDates);
	        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[indexCount].location);
	        $(".education-entry:last").append(formattedLocation);
	        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[indexCount].major);
	        $(".education-entry:last").append(formattedMajor);
	    }
	}
	if (education.onlineCourses.length > 0) {
    	$("#education").append(HTMLonlineClasses);
    	for (course in education.onlineCourses) {
    		$("#education").append(HTMLschoolStart);
            var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
            $(".education-entry:last").append(formattedTitle);
            var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
            $(".education-entry:last").append(formattedSchool);
            var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
            $(".education-entry:last").append(formattedonlineDates);
        	var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
       		$(".education-entry:last").append(formattedUrl); 
       	}
    }
};
//maybe I am having an issue using indexcount because it is already defined?
	/*if (education.onlineCourses.length > 0) {
      	$("#education").append(HTMLonlineClasses);
        	for (var indexCount = 0; indexCount < education.onlineCourses.length; indexCount++) {
			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[indexCount].title);
            $(".education-entry:last").append(formattedTitle);
            var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[indexCount].school);
            $(".education-entry:last").append(formattedSchool);
            var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[indexCount].dates);
            $(".education-entry:last").append(formattedonlineDates);
        	var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[indexCount].url);
       		$(".education-entry:last").append(formattedUrl);
       	}
    }*/

//display functions
bio.display();
work.display();
projects.display();
education.display();

//map
$("#mapDiv").append(googleMap);

/*extra assignemnt to change name
function inName() {
    var finalName = bio.name;
    var names = finalName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0, 1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    return finalName;
}
*/