// first is teacher, rest is all students or if hasTeachingAssistant is true, second one is teaching assistant and the rest is students 

const students = ['Peter', "Roman", 'Matej', "Julia"]
const classroom = {
  hasTeachingAssistant: false,
  students,
}


const getStudents = (classroom) => {
  const [_, maybeAssistant, ...students] = classroom.students;
  if (classroom.hasTeachingAssistant) return students;
  else return [maybeAssistant, ...students]; 
}

console.log(getStudents(classroom))

/// 12 min