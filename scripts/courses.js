const courseList = document.querySelector('#course-list');
const allCoursesButton = document.querySelector('#selectAllBtn');
const cseCoursesButton = document.querySelector('#selectCseBtn');
const wddCoursesButton = document.querySelector('#selectWddBtn');
const displayTotalCredits = document.querySelector('#totalCredits');

const courses = [
  {
    subject: 'CSE',
    number: 110,
    title: 'Introduction to Programming',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
    technology: [
      'Python'
    ],
    completed: false
  },

  {
    subject: 'WDD',
    number: 130,
    title: 'Web Fundamentals',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
    technology: [
      'HTML',
      'CSS'
    ],
    completed: false
  },

  {
    subject: 'CSE',
    number: 111,
    title: 'Programming with Functions',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
    technology: [
      'Python'
    ],
    completed: false
  },

  {
    subject: 'CSE',
    number: 210,
    title: 'Programming with Classes',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
    technology: [
      'C#'
    ],
    completed: false
  },

  {
    subject: 'WDD',
    number: 131,
    title: 'Dynamic Web Fundamentals',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
    technology: [
      'HTML',
      'CSS',
      'JavaScript'
    ],
    completed: false
  },

  {
    subject: 'WDD',
    number: 231,
    title: 'Frontend Web Development I',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
    technology: [
      'HTML',
      'CSS',
      'JavaScript'
    ],
    completed: false
  }
]

courses.forEach(function (course) {
  if (course.number !== 231) {
    course.completed = true;
  }
});

//courseList.innerHTML = '';
generateCourseList();
displayTotalCredits.textContent = calculateCredits(allCoursesButton);


/****************************** TOGGLE BUTTONS **********************************/
allCoursesButton.addEventListener('click', () => {
  if (cseCoursesButton.classList.contains('active-courses')) {
    cseCoursesButton.classList.remove('active-courses');
  } else if (wddCoursesButton.classList.contains('active-courses')) {
    wddCoursesButton.classList.remove('active-courses');
  }

  if (!allCoursesButton.classList.contains('active-courses')) {
    allCoursesButton.classList.toggle('active-courses');
  }
  generateCourseList();
  displayTotalCredits.textContent = calculateCredits(allCoursesButton);
});

cseCoursesButton.addEventListener('click', () => {
  if (allCoursesButton.classList.contains('active-courses')) {
    allCoursesButton.classList.remove('active-courses');
  } else if (wddCoursesButton.classList.contains('active-courses')) {
    wddCoursesButton.classList.remove('active-courses');
  }

  if (!cseCoursesButton.classList.contains('active-courses')) {
    cseCoursesButton.classList.toggle('active-courses');
  }
  generateCourseList();
  displayTotalCredits.textContent = calculateCredits(cseCoursesButton);
});

wddCoursesButton.addEventListener('click', () => {
  if (cseCoursesButton.classList.contains('active-courses')) {
    cseCoursesButton.classList.remove('active-courses');
  } else if (allCoursesButton.classList.contains('active-courses')) {
    allCoursesButton.classList.remove('active-courses');
  }

  if (!wddCoursesButton.classList.contains('active-courses')) {
    wddCoursesButton.classList.toggle('active-courses');
  }
  generateCourseList();
  displayTotalCredits.textContent = calculateCredits(wddCoursesButton);
});

/*********************************** ADD COURSES TO PAGE ************************************/

/*
1 - Have div
2 - Check which button has active courses
3 - Cycle through courses and return subject and number
4 - Create p element for each relevant course
5 - Append p to div
*/

function generateCourseList() {
  while (courseList.firstChild) {
    courseList.removeChild(courseList.firstChild);
  };
  let generatedCourse = document.createElement('p');
  if (allCoursesButton.classList.contains('active-courses')) {
    courses.forEach(function (course) {
      let courseName = course.subject;
      let courseNumber = course.number;
      let courseInfo = `${courseName} ${courseNumber}`;
      generatedCourse = document.createElement('p');
      generatedCourse.classList.add('course');
      generatedCourse.innerHTML = courseInfo;
      if (courseName === 'CSE') {
        generatedCourse.classList.add('cse-course');
      } else if (courseName === 'WDD') {
        generatedCourse.classList.add('wdd-course');
      };
      courseList.append(generatedCourse);
    })
  } else if (cseCoursesButton.classList.contains('active-courses')) {
    courses.forEach(function (course) {
      if (course.subject === 'CSE') {
        let courseName = course.subject;
        let courseNumber = course.number;
        let courseInfo = `${courseName} ${courseNumber}`;
        generatedCourse = document.createElement('p');
        generatedCourse.classList.add('cse-course', 'course');
        generatedCourse.innerHTML = courseInfo;
        courseList.append(generatedCourse);
      }
    })
  } else if (wddCoursesButton.classList.contains('active-courses')) {
    courses.forEach(function (course) {
      if (course.subject === 'WDD') {
        let courseName = course.subject;
        let courseNumber = course.number;
        let courseInfo = `${courseName} ${courseNumber}`;
        generatedCourse = document.createElement('p');
        generatedCourse.classList.add('wdd-course', 'course');
        generatedCourse.innerHTML = courseInfo;
        courseList.append(generatedCourse);
      }
    })
    calculateCredits(wddCoursesButton);
  }
};

/******************************* CALCULATE CREDITS *******************************/
/*
1 - set total credits to 0
2 - check which button has active-courses
3 - filter through courses for specific subject
4 - total credits += course.credits
5 - return totalCredits
6 - display totalCredits
*

/* ARRAY.REDUCE */
function calculateCredits(button) {
  const totalCredits = courses.reduce((total, courseModule) => {
    if (button.id === 'selectAllBtn') {
      return total + courseModule.credits;
    }
    if (button.id === 'selectCseBtn' && courseModule.subject === 'CSE') {
      return total + courseModule.credits;
    }
    if (button.id === 'selectWddBtn' && courseModule.subject === 'WDD') {
      return total + courseModule.credits;
    }
    return total;
  }, 0);
  return totalCredits;
}