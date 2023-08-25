document.addEventListener('DOMContentLoaded', function() {
    var calendarDiv = document.getElementById('calendar');
    var startDate = new Date('2023-05-01');
    var endDate = new Date('2023-05-10');
    var calendar = {};

    function isAvailable(date) {
        var dateString = date.toISOString().split('T')[0];
        return calendar[dateString] !== true;
    }

    function bookRoom(date) {
        var dateString = date.toISOString().split('T')[0];
        if (isAvailable(date)) {
            calendar[dateString] = true;
            dateCell.classList.add('booked');
        } else {
            console.log('Room is already booked for ' + dateString);
        }
    }

    function cancelBooking(date) {
        var dateString = date.toISOString().split('T')[0];
        if (calendar[dateString] === true) {
            delete calendar[dateString];
            dateCell.classList.remove('booked');
        } else {
            console.log('No booking found for ' + dateString);
        }
    }

    function createCalendar() {
        var current = new Date(startDate);
        while (current <= endDate) {
            var row = document.createElement('div');
            row.classList.add('row');
            for (var i = 0; i < 7; i++) {
                var cell = document.createElement('div');
                cell.classList.add('cell');
                var dateString = current.toISOString().split('T')[0];
                if (isAvailable(current)) {
                    cell.classList.add('available');
                } else {
                    cell.classList.add('booked');
                }
                cell.textContent = current.getDate();
                cell.addEventListener('click', handleCellClick);
                row.appendChild(cell);
                current.setDate(current.getDate() + 1);
            }
            calendarDiv.appendChild(row);
        }
    }

    function handleCellClick(event) {
        var dateCell = event.target;
        var date = new Date(startDate);
        date.setDate(dateCell.textContent);
        if (dateCell.classList.contains('available')) {
            bookRoom(date);
        } else if (dateCell.classList.contains('booked')) {
            cancelBooking(date);
        }
    }

    createCalendar();
});