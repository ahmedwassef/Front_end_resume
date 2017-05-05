
var bio = {
    "name": "Ahmed Wassef",
    "role": "Web Developer",
    "contacts": {
        "mobile": "+201002896309",
        "email": "ahmedassef2015@gmail.com",
        "linkedIn": "ahmedwassef1",
        "github": "ahmedwassef",
        "location": "Cairo",
    },
    "skills": ["HTML", "CSS", "JavaScript", "jQuery", "php","bootstrap", "Git", "laravel", "mysql", "c-panel", "c#"],
    "biopic": "images/me.jpg",
    "display": function() {

        $('#header').prepend(HTMLheaderRole.replace('%data%', bio.role));
        $('#header').prepend(HTMLheaderName.replace('%data%', bio.name));

        $.each(bio.contacts, function(key, value) {
            $('#topContacts').append(HTMLcontactGeneric.replace('%contact%', key).replace('%data%', value));
            $('#footerContacts').append(HTMLcontactGeneric.replace('%contact%', key).replace('%data%', value));
        });

        $('#header').append(HTMLbioPic.replace('%data%', bio.biopic));

        $('#header').append(HTMLskillsStart);
        $.each(bio.skills, function(value) {
            $('#skills').append(HTMLskills.replace('%data%', bio.skills[value]));
        });

    }
};

var education = {
    "schools": [{
        "name": "Mansoura  University FCI ",
        "location": "Mansoura",
        "degree": "software  Engineer",
        "dates": "2014-2018",
        "url": "http://csifac.mans.edu.eg",
    }],
    "onlineCourses": [{
        "title": "Front End Developer",
        "school": "Udacity",
        "dates": "feb 2017",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001",
    }, {
        "title": "laravel ",
        "school": "Youtube",
        "dates": "June 2016",
        "url": "https://www.youtube.com/playlist?list=PLpRNkmPv_dKFNANfkRA0d22d-tA9tEO1e",
    }],
    "display": function() {
        // Education
        $.each(education.schools, function(i) {
            $('#education').append(HTMLschoolStart);

            var sName = HTMLschoolName.replace('%data%', education.schools[i].name).replace('#', education.schools[i].url);
            var sDegree = HTMLschoolDegree.replace('%data%', education.schools[i].degree);
            var sDates = HTMLschoolDates.replace('%data%', education.schools[i].dates);
            var sLocation = HTMLschoolLocation.replace('%data%', education.schools[i].location);
            var sMajors = HTMLschoolMajor.replace('%data%', education.schools[i].majors);

            $('.education-entry:last').append(sName + sDegree + sDates + sLocation + sMajors);

        });

        // Online courses
        $('#education').append(HTMLonlineClasses); //Header

        $.each(education.onlineCourses, function(i) {
            $('#education').append(HTMLschoolStart);

            var courseTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[i].title);
            var courseSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[i].school);
            var courseDates = HTMLonlineDates.replace('%data%', education.onlineCourses[i].dates);
            var courseUrl = HTMLonlineURL.replace('#', education.onlineCourses[i].url).replace('%data%', education.onlineCourses[i].url);

            $('.education-entry:last').append(courseTitle + courseSchool + courseDates + courseUrl);
        });
    }
};

var work = {
    jobs: [{
        "employer": "Media Creativty",
        "title": "Web Developer",
        "location": "Cairo",
        "dates": "feb 2017 - Present",
        "description": "develop and maintenance website of the Media Creativty Corporation"
    }, {
        "employer": "Mercurialsoft",
        "title": "Full Stack Developer",
        "location": "Mansoura",
        "dates": "april  2016 - march 2017",
        "description": "bulid and develop websites"
    }],
    "display": function() {

        $.each(work.jobs, function(job) {
            $('#workExperience').append(HTMLworkStart);

            var myJobs = work.jobs[job];

            var myEmployer = HTMLworkEmployer.replace('%data%', myJobs.employer);
            var myTitle = HTMLworkTitle.replace('%data%', myJobs.title);
            var myDates = HTMLworkDates.replace('%data%', myJobs.dates);
            var myLocation = HTMLworkLocation.replace('%data%', myJobs.location);
            var myDesc = HTMLworkDescription.replace('%data%', myJobs.description);

            $('.work-entry:last').append(myEmployer + ' ' + myTitle + myDates + myLocation + myDesc);
        });

    }
};

var projects = {
    projects: [{
        "title": "Media Creativity",
        "dates": "march 2017",
        "description": "News website coded in HTML, CSS, JS (jQuery), PHP, laravel",
        "images": ["images/1pro.jpg", "images/pro1-2.png"],
    }, {
        "title": "Mesh 3aref",
        "dates": "April 2017",
        "description": "This website coded in HTML, CSS, JS (jQuery), PHP, laravel",
        "images": ["images/pro2-1.png", "images/pro2-2.png"],
    }],
    "display": function() {

        $.each(projects.projects, function(project) {
            $('#projects').append(HTMLprojectStart);

            var projectss = projects.projects[project];

            var projectTitle = HTMLprojectTitle.replace('%data%', projectss.title);
            var projectDates = HTMLprojectDates.replace('%data%', projectss.dates);
            var projectDescription = HTMLprojectDescription.replace('%data%', projectss.description);

            $('.project-entry:last').append(projectTitle + projectDates + projectDescription);

            $.each(projectss.images, function(i) {
                var theImage = HTMLprojectImage.replace('%data%', projectss.images[i]);
                $('.project-entry:last').append(theImage);
            });

        });

    }
};


function displayMap() {
    $('#mapDiv').append(googleMap);
}
bio.display();
work.display();
projects.display();
education.display();

displayMap();
