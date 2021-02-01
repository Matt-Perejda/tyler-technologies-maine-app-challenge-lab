# tyler-maine-app-challenge-lab

The goal of this lab is to provide a simple, step-by-step introduction to code.org by building your own hello world application. There are two parts to the lab, creating the user interface and the code behind it.

## User Interface

Here is what the UI should look like when you're done:

1. add a text input UI element from the Design tab in your code.org development studio. You can add/edit your placeholder text and make sure to set the id to "in_name" (we'll use this later).

2. Add a submit button to the UI and set the id to "submit" (we'll use this later).

3. Add a clear button and set the id to "clear" (we'll use this later)

## Code Behind

The code behind section is written using Javascript and can be viewed as text or blocks within code.org studio. The blocks may be helpful when you first get started, though the complete code in this repository will be in plain text. You can refer to the complete code file or the link to the completed project. Below we'll step through and explain each of the functions used.

*onEvent* - this function listens on the UI element with given id for a specified event (in our case a click). We'll use this function in twice in two different places to detect when a user clicks on the submit and clear buttons. Each of those buttons will be "wire up" to it's own onEvent function that will do something when the user clicks on the button.

1. Submit - on submit, we'd like to collect the user entered name and return "Hello {{name}}!"

2. Clear - when clear is clicked, the message should be cleared and a new name can be entered into the text field to be submitted.

Each time we call submit, a new UI label element is created so we have to create our own function to delete this element each time (what would happen if we did not have a clear method?). And a second method to clear out the input text after each submit (what would happen without this method?). Both of these method are implemented in solution2 though see if you can figure this out on your own first.
