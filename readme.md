** README ** Beer & Bagel: The To-Do List Maker
—-------------------------------------

Introductions:
—-------------
B&B is a to-do list web app that allows the user to add, update,
and remove tasks to a list. It uses JavaScript to create this
functionality.
The concept and development of this project is based on an
invitation app project guide from the channel “Code with Bibek.
The JavaScript, HTML, and CSS was customized to enable
functionality of this app as a to-do list maker.

Instructions:
—------------
1. Open the ‘index.html’ file in the directory to begin the app.
2. Two default entries are provided as examples for how the app
will display tasks as they are added to the list.
3. Click on the ‘Remove’ button to remove these premade
exemples.
4. Enter a task (with a maximum of 40 characters, including
spaces) in the input box.
5. Click on ‘Submit’ or press ‘Enter’ on the keyboard to confirm
the input and add the task to the list.
6. Try to alter the task by clicking on the ‘Edit’ button. A new
input box will appear that will allow for editing the task.

Known Issues or Limitations:
—---------------------------

- The 40 character limit is due to the fact that the inputs
will create a <span> container that is all in one line,
pushing the action buttons out of the main app container.
- This limitation does not exist with the ‘Edit’ function
of the app, meaning that there is no character limit on
existing tasks that are changed using the ‘Edit’ action.
The event listener that is used for the buttons is based on
matching the text content within the button element. This
method works fine for simple content like plain text.
However, for more complex strings like innerHTML, it
occasionally fails to register leading to the clicks being
ignored.
- Because of this limitation, the buttons had to remain as
simple as possible, with a single word textContent
string.
