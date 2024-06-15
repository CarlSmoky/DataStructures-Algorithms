/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
const minMovesToSeat = (seats, students) => {
    const sortSeats = seats.sort((a, b) => a - b);
    const sortStudents = students.sort((a, b) => a - b);

    let total = 0;
    for (let i = 0; i < seats.length; i++) {
        if (seats[i] !== students[i]) {
            total += Math.abs(seats[i] - students[i])
        }
    }
    return total;
};