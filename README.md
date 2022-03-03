# The-Clock
A simple clock made with Html/Css and javascript

## How it works
I have 2 buttons which switches between clock and stopwatch mode. I used the javascript built-in function Date(). This means that wherever you are, the time will be based on your current location, and I think that's pretty cool. For the stopwatch, I just simply used the setInterval() increment the variable seconds every 1000ms. The variable hour and minutes will be based on the value of seconds. This was really hard for me and I did a lot of research to come up with the mathematical solution. I also added the start, stop, and reset buttons for stopwatch.

## Fixed Bugs
Whenever the start button is clicked, it will add a class "pointerEventsNone" to itself and the reset button which prevents them from being clicked while the counter is running. This is due to the bug that I encounter on whenever I click the start button multiple times, the counter speed is being increased, and whenever I click the reset button while counter is running, it resets to zero but still continues to run. This leaves the stop button to be the only clickable button while counter is running, and clicking it will remove the "pointerEventsNone" from start and reset button.

## Future plans
I am planning to add more modes such as adding alarms, reminders, and a calendar.

## What I've learned
The only thing I learned from this project is that getDay() and getDate() are not the same. I repeat, they are NOT THE SAME.

### Project demo link
 https://reidenx.github.io/The-Clock/
