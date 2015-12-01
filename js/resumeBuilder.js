/*
This is empty on purpose! Your code to build the resume will go here.
 */

//$("header").append(HTMLheaderName);

var bio = {
	"name" : "Brian Greene",
	"age": "33",
	"role":  "Product Manager",
	"mobile": "917.300.9650",
	"location": "New York, NY",
	"email": "b.aegreene@gmail.com",
	"welcomeMessage": "hello world!",
	"github": "bgr33ne",
	"skills": ["awesomeness", "getting shit done", "working hard",
	"coming up with skills for this assingment"],
	"bioPic": "images/BAEG-Lin.png"
}

var work = {
	"jobs": [
		{
			"title": "Co-Founder",
			"employer": "Center for Advanced Studies Abroad",
			"location" : "New York, NY",
			"dates": "2012-Current",
			"description": "Running the business."
		},
		{
			"title": "Associate Director",
			"employer": "Academic Language Institute",
			"location" : "Alicante, Spain",
			"dates": "2010-2012",
			"description": "operating the business."
		},
		{
			"title": "Sales / Biz Dev",
			"employer": "The Rug Company",
			"location" : "New York, NY",
			"dates": "2008-2010",
			"description": "making $$$"
		}
	]
}

function displayWork() { 

	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

function inName() {
	var finalName = bio.name;
	var names = finalName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    return finalName;
}

var projects = {
	"myProjects": [
		{
			"title": "Personal Website",
			"description": "a website I built for myself, check it out at www.brianaegreene.com",
			"dates": "Current",
			"images": ["http://fillmurray.com/150/250", "images/fry.jpg"]
		},
		{	
			"title": "Web Design",
			"description": "examples of web design work i have done",
			"dates": "current",
			"images": ["http://fillmurray.com/250/300"]
		},
		{
			"title": "Product Management A/B test",
			"description": "An A/B test I ran for my final project product",
			"dates": "2015",
			"images": ["http://fillmurray.com/200/300"]
		}
	]
}

projects.display = function() {
	for (project in projects.myProjects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.myProjects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.myProjects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.myProjects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.myProjects[project].images.length > 0) {
			for (image in projects.myProjects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.myProjects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

var education = {
	"schools": [
		{
			"name": "Bard College",
			"location": "Annandale-on-Hudson, NY",
			"degree": "BA",
			"major": ["Literature", "Creative Writing"],
			"dates": 2004
		},
		{
			"name" : "Universidad CEU Cardenal Herrera",
			"location" : "Valencia, Spain",
			"degree" : "MBA",
			"major" : "International Business",
			"dates": 2014
		},
		{
			"name" : "General Assembly",
			"location" : "New York, NY",
			"degree" : "Certificate",
			"major" : "Product Management",
			"dates": 2015
		}
	],
	"onlineCourses": [
		{
			"title": "Front-End Development",
			"school": "Udacity",
			"dates": 2015
		}	
	]
}

education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedName);

		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedDegree);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);	

		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedMajor);	
	}
	if (education.onlineCourses.length > 0) {
		$("#education").append(HTMLonlineClasses);
		for (course in education.onlineCourses) {
			$("#education").append(HTMLschoolStart);

			

			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
			$(".education-entry:last").append(formattedTitle);
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			$(".education-entry:last").append(formattedSchool);
			var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
			$(".education-entry:last").append(formattedDates);
		}
	}
}

var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").prepend(formattedbioPic);

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill)
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
}
//contact info header & footer
var formattedgitHub = HTMLgithub.replace("%data%", bio.github);
$("#topContacts").append(formattedgitHub);
var formattedMobile = HTMLmobile.replace("%data%", bio.mobile);
$("#topContacts").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%", bio.email);
$("#topContacts").append(formattedEmail);
var formattedLocation = HTMLlocation.replace("%data%", bio.location);
$("#topContacts").append(formattedLocation);

//footer contacts
$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);

//name & role
var formattedRole = HTMLheaderRole.replace("%data%", "Product Manager");
$("#header").prepend(formattedRole);
var formattedName = HTMLheaderName.replace("%data%", "Brian Greene");
$("#header").prepend(formattedName);

//pic
var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#main").append(internationalizeButton);

//display functions
displayWork();
projects.display();
education.display();



//map
$("#mapDiv").append(googleMap);
var formattedbioPic = HTMLbioPic.eplace("%data%", bio.bioPic);
$("#header").append(formattedbioPic);