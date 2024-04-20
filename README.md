# Lesson Card

## Description

Lesson Card is a React component designed to display a list of lessons along with their details such as name and hour. Users can toggle between clearing the list of lessons and bringing back the full list.

## Component Structure

- **LessonCard:** The main component responsible for displaying the list of lessons.

- **clearLessons:** A function used to clear the list of lessons. When invoked, it hides the list of lessons and sets the `lessonCount` state variable to 0.

- **bringBackLessons:** A function used to bring back the full list of lessons. When invoked, it shows the list of lessons and sets the `lessonCount` state variable to the original count.

- **showImages:** A state variable that controls whether to show the list of lessons. It is initially set to `true`, indicating that the list of lessons should be displayed.

- **lessonCount:** A state variable that tracks the number of lessons displayed. It is initially set to `6`, representing the default number of lessons to be displayed.


