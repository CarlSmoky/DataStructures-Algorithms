# Write your MySQL query statement below
# SELECT Examinations.student_id, Students.student_name, Subjects.subject_name, COUNT(*) as attended_exams
# FROM Examinations
# RIGHT JOIN Students
# ON Examinations.student_id = Students.student_id
# RIGHT JOIN Subjects
# ON Subjects.subject_name = Examinations.subject_name
# GROUP BY Examinations.student_id, Subjects.subject_name
# ORDER BY Examinations.student_id;

SELECT 
    s.student_id,
    s.student_name, 
    sub.subject_name, 
    COUNT(e.subject_name) AS attended_exams
FROM 
    Students s 
CROSS JOIN 
    Subjects sub
LEFT JOIN 
    Examinations e
    ON s.student_id = e.student_id AND sub.subject_name = e.subject_name
GROUP BY 
    s.student_id, 
    s.student_name, 
    sub.subject_name
ORDER BY 
    s.student_id, 
    sub.subject_name;

# SELECT Subjects.subject_name